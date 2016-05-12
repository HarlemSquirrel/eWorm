function ReviewsService($http) {
	var API_URL = '/reviews';

	this.postReview = function (data) {
		return $http.post(API_URL, data);
	};

	this.patchReview = function (id, data) {
		return $http.patch(API_URL + '/' + id + '.json', data);
	};

	this.getReview = function (id) {
		return $http.get(API_URL + '/' + id + '.json');
	}
}

// mitigate minification issues
ReviewsService.$inject = ['$http'];

angular
	.module('app')
	.service('ReviewsService', ReviewsService);
