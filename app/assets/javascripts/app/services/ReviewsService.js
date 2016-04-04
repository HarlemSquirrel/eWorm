var API_URL = '';

function ReviewsService($http) {
	this.postReview = function (data) {
		return $http.post(API_URL + '/reviews', data);
	};

	this.patchReview = function (id, data) {
		return $http.patch(API_URL + '/reviews/' + id + '.json', data);
	};

	this.getReview = function (id) {
		return $http.get(API_URL + '/reviews/' + id + '.json');
	}
}

angular
	.module('app')
	.service('ReviewsService', ReviewsService);
