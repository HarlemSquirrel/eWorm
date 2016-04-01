angular
  .module('app', ['ui.router', 'ngSanitize', 'templates'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/views/home.html',
        controller: 'WelcomeController as welcome_ctrl'
      })
      .state('books', {
        url: '/books',
        templateUrl: 'app/views/books.html',
        controller: 'BooksController as books_ctrl',
        resolve: {
          books: function (BooksService) {
            return BooksService.getBooks();
          }
        }
      });
    $urlRouterProvider.otherwise('/')
  })
