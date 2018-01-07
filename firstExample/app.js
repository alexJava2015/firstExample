angular.module('todoApp',['ngRoute']);

angular.module('todoApp').config(['$routeProvider','$locationProvider',
	function($routeProvider, $locationProvider){

	$routeProvider.when('/', {
		templateUrl:'app/views/main.html',
		controller: 'MainController'
	}).when('/todo', {
		templateUrl:'app/views/todo.html',
		controller: 'TodoController'
	})
	.when('/friends',{
		templateUrl:'app/views/friends.html',
		controller: 'FriendsController'
	});
}]);