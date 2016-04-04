function AuthorController(author, $rootScope) {
	var ctrl = this;
	ctrl.data = author.data.author;
  //debugger;
	//ctrl.reviewByCurrentUser =  false;
	//ctrl.data.reviews.forEach(function (review) {
		//debugger;
	//	if ($rootScope.currentUser && review.user.id === $rootScope.currentUser.id) {
			//debugger;
	//		ctrl.reviewByCurrentUser =  review;
	//	}
	//});


}

angular
	.module('app')
	.controller('AuthorController', AuthorController);
