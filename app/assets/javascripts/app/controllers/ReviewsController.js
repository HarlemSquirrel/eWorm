function ReviewsController($rootScope, $scope, $state, book, ReviewsService) {
  var ctrl = this;
	ctrl.book = book.data.book;
  ctrl.type = 'new';
  ctrl.book.reviews.forEach(function (review) {
		if (review.user.id == $rootScope.currentUser.id) {
			ctrl.type =  'edit';
      ctrl.id = review.id;
      ctrl.rating = review.rating;
      ctrl.content = review.content;
		}
	});

  ctrl.create = function () {
    var data = { book_id: ctrl.book.id, rating: ctrl.rating, content: ctrl.content  }
    ReviewsService.postReview(data);
    $state.go("book", {id: ctrl.book.id}, {reload: true});
  }

  ctrl.update = function () {

    var data = { book_id: ctrl.book.id, rating: ctrl.rating, content: ctrl.content  }
    ReviewsService.patchReview(ctrl.id, data);
    $state.go("book", {id: ctrl.book.id}, {reload: true});
  }
}

angular
	.module('app')
	.controller('ReviewsController', ReviewsController);
