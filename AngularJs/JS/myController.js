var myController=angular.module('myApp',['ngMaterial','ngRoute']);

myController.config(['$routeProvider',function($routeProvider, $location){
	$routeProvider
	.when('/home',{
		templateUrl:'views/Home.html'
	})
	.when('/list',{
		templateUrl:'views/List.html',
		controller:'myController'
	})
	.otherwise({
		redirectTo:'/home'
	})
}]);

myController.controller("myController",["$scope","$location","$http",function($scope,$location,$http){
	$scope.data="Block1";
	$scope.go = function ( path ) {
  $location.path( path );
};
$http.get('data/data.json').success(function(data){
	$scope.value=data;
});
console.log(angular.toJson($scope.value));
}]);
