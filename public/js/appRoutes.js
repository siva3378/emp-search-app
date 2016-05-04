angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// emp list page
		.when('/', {
			templateUrl: 'views/employee-list.html',
			controller: 'EmpListController'
		})
		// emp details page
		.when('/employees/:id', {
			templateUrl: 'views/employee-detail.html',
			controller: 'EmpDetailController'	
		});

	$locationProvider.html5Mode(true);

}]);