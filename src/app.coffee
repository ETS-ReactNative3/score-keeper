angular.module 'app', [
  'ngRoute'
  'ui.bootstrap'
  'app.templates'
  'ui.mask'
  'ng-fastclick'
]

angular.module('app').config ($routeProvider, $locationProvider) ->
  $locationProvider.html5Mode true

  $routeProvider.when '/',
    templateUrl: '/main/main.html'
    controller: 'MainController'
