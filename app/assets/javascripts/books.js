function updateBooksView(books) {
  $.each(books, function (index, book) {
    $('#books').append(
      '<div class="book" id="' + book.id + '">' +
      '<a href="/books/' + book.id + '">' + book.title + '</a>' +
      ' (' + book.rating_avg + ')' +
      ' by ' + '<a href="/authors/' + book.author.id + '">' + book.author.name +
      '</div>'
    );
  });
}

function loadBooks() {
  $.get("/books.json", function (data) {
    updateBooksView(data.books);
  })
}

function loadReviews(book) {
  $(".reviews").empty();
  if (book.reviews.length === 0) {
    $(".reviews").html("No reviews...yet!");
  } else {
    $.each(book.reviews, function(index, review) {
      $(".reviews").append('<div class="review">' +
        '<a href="/users/' + review.user.id + '">' + review.user.username + '</a>' +
        ' says, "' + review.content + '"' +
        ' (' + review.rating + '/5)</div>'
      );
    });
  }
}

function updateBookView(newId) {
  $.get("/books/" + newId + ".json", function(data) {
    var book = data.book;
    $(".bookTitle").text(book.title);
    $(".bookAuthor a").attr("href", "/authors/" + book.author.id).text(book.author.name);
    $(".bookGenre a").attr("href", "/genres/" + book.genre.id).text(book.genre.name);
    // re-set the id to current on the link
    $(".js-next").attr("data-id", book.id);

    // show reviews
    loadReviews(book)
  });
}

function newBookForm() {
  $('.toggleForm').on('click', function () {
    $('.newBookForm').toggle();
  });

  $('form').submit(function(event) {
    //prevent form from submitting the default way
    event.preventDefault();

    var values = $(this).serialize();

    var posting = $.post('/books', values);

    posting.done(function(data) {
      //var book = [data.book];
      updateBooksView([data.book]);
    });
  });
}

function showBook() {
  updateBookView(parseInt($(".js-next").attr("data-id")));

  var booksCount;

  $.get("/books.json", function(data) { booksCount = data.books.length; });

  $(".js-next").on("click", function() {
    var curId = parseInt($(".js-next").attr("data-id"));
    if (curId < booksCount) {
      var newId = curId + 1;
      updateBookView(newId);
    }
  });

  $(".js-pre").on("click", function() {
    var curId = parseInt($(".js-next").attr("data-id"));
    if (curId > 1) {
      var newId = curId - 1;
      updateBookView(newId);
    }
  });
}
