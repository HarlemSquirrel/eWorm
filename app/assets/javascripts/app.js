angular
  .module('app', ['ui.router', 'ngSanitize', 'templates', 'Devise', 'ngMessages'])
  .config(['$stateProvider', '$urlRouterProvider', 'AuthProvider', function ($stateProvider, $urlRouterProvider, AuthProvider) {
    $stateProvider
      .state('home', {
        url: '',
        templateUrl: 'app/views/home.html',
        controller: 'WelcomeController as welcome_ctrl'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/views/login.html',
        controller: 'UserController as user_ctrl'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/views/signup.html',
        controller: 'UserController as user_ctrl'
      })
      .state('logout', {
        url: '/logout',
        templateUrl: '',
        controller: 'UserController as user_ctrl'
      })
      .state('books', {
        url: '/books',
        templateUrl: 'app/views/books.html',
        controller: 'BooksController as books_ctrl',
        resolve: {
          books: [ 'BooksService', function (BooksService) {
            return BooksService.getBooks();
          }]
        }
      })
      .state('new_book', {
        url: 'books/new',
        templateUrl: 'app/views/new_book.html',
        controller: 'NewBookController as ctrl',
        resolve: {
          authors: ['AuthorsService', function (AuthorsService) {
            return AuthorsService.getAuthors();
          }],
          genres: ['GenresService', function (GenresService) {
            return GenresService.getGenres();
          }]
        }
      })
      .state('book', {
				url: '/books/:id',
				templateUrl: 'app/views/book.html',
        controller: 'BookController as book_ctrl',
        resolve: {
          book: ['$stateParams', 'BooksService', function ($stateParams, BooksService) {
            return BooksService.getBook($stateParams.id);
          }]
        }
			})
      .state('book.review-new', {
				url: '/reviews/new',
				templateUrl: 'app/views/review_form.html',
        controller: 'ReviewsController as reviews_ctrl',
        resolve: {
          book: ['$stateParams', 'BooksService', function ($stateParams, BooksService) {
            return BooksService.getBook($stateParams.id);
          }]
        }
			})
      .state('book.review-edit', {
				url: '/reviews/edit',
				templateUrl: 'app/views/review_form.html',
        controller: 'ReviewsController as reviews_ctrl',
        resolve: {
          book: ['$stateParams', 'BooksService', function ($stateParams, BooksService) {
            return BooksService.getBook($stateParams.id);
          }]
        }
			})
      .state('author', {
				url: '/authors/:id',
				templateUrl: 'app/views/author.html',
        controller: 'AuthorController as author_ctrl',
        resolve: {
          author: ['$stateParams', 'AuthorsService', function ($stateParams, AuthorsService) {
            return AuthorsService.getAuthor($stateParams.id);
          }]
        }
			})
      .state('genre', {
				url: '/genres/:id',
				templateUrl: 'app/views/genre.html',
        controller: 'GenreController as genre_ctrl',
        resolve: {
          genre: ['$stateParams', 'GenresService', function ($stateParams, GenresService) {
            return GenresService.getGenre($stateParams.id);
          }]
        }
			})


    $urlRouterProvider.otherwise('')
  }])
  .run(['$rootScope', 'Auth', 'UserService', function ($rootScope, Auth, UserService) {
    $rootScope.$on('$stateChangeStart', function() {
      Auth.currentUser().then(function(response) {
        $rootScope.currentUser = response.user;

        }, function(error) {
          console.log(error);
        });
      $rootScope.logOut = function () {
        UserService.logout();
      }

      $rootScope.isLoggedIn = UserService.isLoggedIn;
    })
  }]);
