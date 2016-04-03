function ReviewsController($scope, book, ReviewsService) {
  var ctrl = this;
	ctrl.book = book.data.book;

  ctrl.create = function () {
    var data = { book_id: ctrl.book.id, rating: ctrl.rating, content: ctrl.content  }
    ReviewsService.postReview(data);
  }
}

angular
	.module('app')
	.controller('ReviewsController', ReviewsController);
