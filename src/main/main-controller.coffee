angular.module('app').controller 'MainController', ($scope, $log) ->
  $scope.elapsedTime = ''
  $scope.periodLength = moment('01500', 'hmmss')
  $scope.time = ''
  $scope.period = '1st'

  $scope.options =
    maskDefinitions:
      'T': /[0-5]/

  $scope.$watch 'time', ->
    if $scope.time and !$scope.time.isBlank()
      timeString = '0' + $scope.time
      $log.debug 'timeString:', timeString
      time = moment(timeString, 'hmmss')
      $scope.elapsedTime = moment($scope.periodLength.diff(time)).format("mm:ss")


  $scope.addShot = (shotCounter) ->
    shotCounter = shotCounter + 1
