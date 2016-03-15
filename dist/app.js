(function() {
  require('angular');

  require('angular-route');

  require('bootstrap');

  require('./app-templates');

  angular.module('app', ['ngRoute', 'app.templates']);

  angular.module('app').config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    return $routeProvider.when('/', {
      templateUrl: '/main/main.html',
      controller: 'MainController'
    });
  }]);

}).call(this);

(function() {
  angular.module('app').controller('MainController', ["$scope", function($scope) {
    return $scope.title = 'I made it';
  }]);

}).call(this);
