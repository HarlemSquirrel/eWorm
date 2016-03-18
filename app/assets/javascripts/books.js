function loadBooks() {
  $.get("/books.json", function(data) {

    //debugger;

    $.each(data.books, function (index, book) {
      $('#books').append(
        '<div class="book" id="' + book.id.toString() + '">' +
        '<a href="/books/' + book.id + '">' + book.title + '</a>' +
        ' (' + book.rating_avg.toString() + '/5)' +
        ' by ' + '<a href="/authors/' + book.author.id.toString() + '">' + book.author.name +
        '</div>'
      );
      //debugger;
    });
  });
}

function updateView(nextId) {
  $.get("/books/" + nextId + ".json", function(data) {
    var book = data.book;
    $(".bookTitle").text(book.title);
    $(".bookAuthor a").attr("href", "/authors/" + book.author.id).text(book.author.name);
    $(".bookGenre a").attr("href", "/genres/" + book.genre.id).text(book.genre.name);
    // re-set the id to current on the link
    $(".js-next").attr("data-id", book.id);

    // show reviews
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
  });
}

$(document).ready(function () {
  //debugger;
  if (!!$('#books')) {
    loadBooks();
  } else if ($('#book')) {
    updateView(parseInt($(".js-next").attr("data-id")));

    var booksCount;

    $.get("/books.json", function(data) { booksCount = data.books.length; });

    $(".js-next").on("click", function() {
      var curId = parseInt($(".js-next").attr("data-id"));
      if (curId < booksCount) {
        var newId = curId + 1;
        updateView(newId);
      }
    });

    $(".js-pre").on("click", function() {
      var curId = parseInt($(".js-next").attr("data-id"));
      if (curId > 1) {
        var newId = curId - 1;
        updateView(newId);
      }
    });
  }

});
