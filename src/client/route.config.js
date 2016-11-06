angular.module('app')
	.config(routeConfig);

routeConfig.$inject = ['$routeProvider', '$locationProvider'];

function routeConfig($routeProvider, $locationProvider) {
	$routeProvider
	.when('/home', {
		templateUrl: 'home/home.html',
		controller: 'homeController',
		controllerAs: 'vm'
	})
	.when('/lights', {
		templateUrl: 'lights/lights.html',
		controller: 'lightsController',
		controllerAs: 'vm'
	})
	.when('/alerts', {
		templateUrl: 'alerts/alerts.html',
		controller: 'alertsController',
		controllerAs: 'vm'
	})
	.when('/music', {
		templateUrl: 'music/music.html',
		controller: 'musicController',
		controllerAs: 'vm'
	})
	.when('/sensors', {
		templateUrl: 'sensors/sensors.html',
		controller: 'sensorsController',
		controllerAs: 'vm'
	})
	.when('/sensorDetails', {
		templateUrl: 'sensors/sensor-details.html',
		controller: 'sensorDetailsController',
		controllerAs: 'vm'
	})
	.when('/weather', {
		templateUrl: 'weather/weather.html',
		controller: 'weatherController',
		controllerAs: 'vm'
	});

	//$locationProvider.html5Mode(true);
}
