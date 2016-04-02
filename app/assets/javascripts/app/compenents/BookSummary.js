var BookSummary = {
	templateUrl: 'app/views/book_summary.html',
	bindings: {
		id: '='
	},
	controller: function (BooksService) {
		var ctrl = this;

		console.log('hey');

		BooksService
			.getBook(this.id)
			.then(function (res) {
				ctrl.data = res.data.book;
        //debugger;
			})
	},
	controllerAs: 'bookSummary'
};

angular
	.module('app')
	.component('bookSummary', BookSummary);
