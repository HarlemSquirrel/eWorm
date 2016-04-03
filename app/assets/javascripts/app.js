angular
  .module('app', ['ui.router', 'ngSanitize', 'templates', 'Devise'])
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
        controller: 'BookController as book',
        resolve: {
          book: function ($stateParams, BooksService) {
            return BooksService.getBook($stateParams.id);
          }
        }
			})

    $urlRouterProvider.otherwise('/')
  })
  .run(function ($rootScope, Auth, UserService) {
    $rootScope.$on('$stateChangeSuccess', function($state, evt, to, params) {
      $rootScope.isLoggedIn = Auth.isAuthenticated();
      if ($rootScope.isLoggedIn) {
        Auth.currentUser().then(function(response) {
          $rootScope.currentUser = response.user;
          //debugger;
          }, function(error) {
            console.log(error);
              // unauthenticated error
          });
        $rootScope.logOut = function () {
          UserService.logout();
        }

      }

    })
  });
