var Item = {
	templateUrl: 'views/item.html',
	bindings: {
		id: '='
	},
	controller: function (BooksService) {
		var ctrl = this;

		console.log('hey');

		BooksService
			.getBook(this.id)
			.then(function (res) {
				ctrl.data = res.data;
			})
	},
	controllerAs: 'item'
};

angular
	.module('app')
	.component('item', Item);
