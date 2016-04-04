function BookController(book, $rootScope) {
	var ctrl = this;
	ctrl.data = book.data.book;
	ctrl.reviewByCurrentUser =  false;
	ctrl.data.reviews.forEach(function (review) {
		if (review.user && review.user.id == $rootScope.currentUser.id) {
			//debugger;
			ctrl.reviewByCurrentUser =  review;
		}
	});


}

angular
	.module('app')
	.controller('BookController', BookController);
