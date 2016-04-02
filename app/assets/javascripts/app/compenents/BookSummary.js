var BookSummary = {
	templateUrl: 'app/views/book_summary.html',
	bindings: {
		id: '='
	},
	controller: function (BooksService) {
		var ctrl = this;

		if (!!ctrl.id.title) { // check for existing book data
			ctrl.data = ctrl.id;
		} else { // get book data if not present
			BooksService
				.getBook(this.id)
				.then(function (res) {
					ctrl.data = res.data.book;

				});
		}
		
		ctrl.reviewsCount = ctrl.data.reviews.length;
	},
	controllerAs: 'bookSummary'
};

angular
	.module('app')
	.component('bookSummary', BookSummary);
