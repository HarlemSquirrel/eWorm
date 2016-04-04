function GenresService($http) {
	var API_URL = '/genres';

	this.getGenres = function () {
		return $http.get(API_URL + '.json');
	};

	this.getGenre = function (id) {
		return $http.get(API_URL + '/' + id + '.json');
	};
}

angular
	.module('app')
	.service('GenresService', GenresService);
