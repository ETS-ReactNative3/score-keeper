angular.module("app.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("/main/main.html","<div class=\"helper\"><div class=\"row\"><div class=\"col-xs-3\"><h1>Event Time</h1></div><div class=\"col-xs-3\"><input type=\"tel\" ng-model=\"time\" ui-mask=\"T9:T9\" placeholder=\"00:00\" ui-mask-placeholder=\"\" ui-options=\"options\" class=\"time-entry form-control\"/></div><div class=\"col-xs-6\"><div class=\"well\"><h1>Elapsed Time: {{elapsedTime}}</h1></div></div></div><div class=\"row\"><div class=\"col-xs-12\"><h1>Shot Counter</h1><div class=\"row\"><div class=\"col-xs-5\"><h4 class=\"pull-right\">Period:</h4></div><div class=\"col-xs-7\"><div class=\"btn-group\"><label ng-model=\"period\" uib-btn-radio=\"\'1st\'\" class=\"btn btn-default btn-lg\">1st</label><label ng-model=\"period\" uib-btn-radio=\"\'2nd\'\" class=\"btn btn-default btn-lg btn-lg\">2nd</label><label ng-model=\"period\" uib-btn-radio=\"\'3rd\'\" class=\"btn btn-default btn-lg\">3rd</label><label ng-model=\"period\" uib-btn-radio=\"\'OT\'\" class=\"btn btn-default btn-lg\">OT</label></div></div></div></div></div><div class=\"row\"><div class=\"col-xs-6\"><shot-counter side=\"Home\" period=\"period\" class=\"home\"></shot-counter></div><div class=\"col-xs-6\"><shot-counter side=\"Away\" period=\"period\" class=\"away\">       </shot-counter></div></div></div>");
$templateCache.put("/main/shot-counter.html","<div class=\"shot-counter\"><div class=\"row\"><div class=\"col-xs-12\"><h3>{{side}} ({{total()}})</h3></div></div><div class=\"row\">   <div class=\"col-xs-12\"><div ng-click=\"addShot()\" class=\"well\"><h3>{{period}}</h3><h3>{{shotCount}}</h3></div></div></div><div class=\"row\">   <div class=\"col-xs-12\"><div class=\"instructions\">Tap to add shot </div></div></div></div>");}]);