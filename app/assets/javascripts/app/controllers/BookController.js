function BookController(book, $rootScope) {
	var ctrl = this;
	ctrl.data = book.data.book;
	ctrl.reviewByCurrentUser =  false;
	ctrl.data.reviews.forEach(function (review) {
		if ($rootScope.currentUser && review.user.id === $rootScope.currentUser.id) {
			ctrl.reviewByCurrentUser =  review;
		}
	});
}

// mitigate minification issues
BookController.$inject = ['book', '$rootScope'];

angular
	.module('app')
	.controller('BookController', BookController);
