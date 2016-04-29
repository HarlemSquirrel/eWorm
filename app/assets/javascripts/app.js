angular
  .module('app', ['ui.router', 'ngSanitize', 'templates', 'Devise', 'ngMessages'])
  .config(function ($stateProvider, $urlRouterProvider, AuthProvider) {
    $stateProvider
      .state('home', {
        url: '/',
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
          books: function (BooksService) {
            return BooksService.getBooks();
          }
        }
      })
      .state('book', {
				url: '/books/:id',
				templateUrl: 'app/views/book.html',
        controller: 'BookController as book_ctrl',
        resolve: {
          book: function ($stateParams, BooksService) {
            return BooksService.getBook($stateParams.id);
          }
        }
			})
      .state('author', {
				url: '/authors/:id',
				templateUrl: 'app/views/author.html',
        controller: 'AuthorController as author_ctrl',
        resolve: {
          author: function ($stateParams, AuthorsService) {
            return AuthorsService.getAuthor($stateParams.id);
          }
        }
			})
      .state('genre', {
				url: '/genres/:id',
				templateUrl: 'app/views/genre.html',
        controller: 'GenreController as genre_ctrl',
        resolve: {
          genre: function ($stateParams, GenresService) {
            return GenresService.getGenre($stateParams.id);
          }
        }
			})
      .state('book.review-new', {
				url: '/reviews/new',
				templateUrl: 'app/views/review_form.html',
        controller: 'ReviewsController as reviews_ctrl',
        resolve: {
          book: function ($stateParams, BooksService) {
            return BooksService.getBook($stateParams.id);
          }
        }
			})
      .state('book.review-edit', {
				url: '/reviews/edit',
				templateUrl: 'app/views/review_form.html',
        controller: 'ReviewsController as reviews_ctrl',
        resolve: {
          book: function ($stateParams, BooksService) {
            return BooksService.getBook($stateParams.id);
          }
        }
			})

    $urlRouterProvider.otherwise('/')
  })
  .run(function ($rootScope, Auth, UserService) {
    $rootScope.$on('$stateChangeStart', function($state, evt, to, params) {
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
  });
