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
	$scope.data="CRUD Operation";
	$scope.go = function ( path ) {
  $location.path( path );
};
$http.get('data/data.json').success(function(data){
	$scope.value=data;
});
console.log(angular.toJson($scope.student));

$scope.studentName = function () {

							 var onSuccess = function (data, status, headers, config) {
									 alert('Student saved successfully.');
							 };

							 var onError = function (data, status, headers, config) {
									 alert('Error occured.');
							 }

							 $http.post('/data/student', { student:$scope.student })
									 .success(onSuccess)
									 .error(onError);

					 };
}]);
