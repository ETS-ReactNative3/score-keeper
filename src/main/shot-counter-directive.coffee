angular.module('app').directive 'shotCounter', ->
  transclude: true
  replace: true
  templateUrl: '/main/shot-counter.html'
  scope:
    side: '@'
    period: '='
  link: (scope, element, attrs) ->
    shotCounts = {}

    scope.$watch 'period', ->
      if Object.has shotCounts, scope.period
        scope.shotCount = shotCounts[scope.period]
      else
        shotCounts[scope.period] = 0
        scope.shotCount = 0

    scope.shotCount = 0

    scope.addShot = ->
      scope.shotCount = scope.shotCount + 1
      shotCounts[scope.period] = scope.shotCount

    scope.total = ->
      total = 0
      Object.values shotCounts , (count) ->
        total = total + count
      total
