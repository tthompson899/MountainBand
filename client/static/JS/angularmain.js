var myApp = angular.module('myApp', ['ngRoute']);

		myApp.config(function($routeProvider){
			$routeProvider
			.when('/', {
				templateUrl: 'partials/mainview.html'
			})
			.when('/login', {
				templateUrl: 'partials/login.html'
			})
			.otherwise({
				redirectTo: '/'
			})
		})