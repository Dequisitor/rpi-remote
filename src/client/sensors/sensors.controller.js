angular.module('app')
	.controller('sensorsController', sensorsController);

sensorsController.$inject = ['navigationService', 'sensorService'];

function sensorsController(nav, sensorService) {
	var vm = this;
	vm.loadDetails = loadDetails;

	activate();

	function activate() {
		vm.sensors = sensorService.getSensors();
	}

	function loadDetails(sensor) {
		nav.pushPage('sensorDetails', {title: sensor.type, sensor: sensor});
	}
}
