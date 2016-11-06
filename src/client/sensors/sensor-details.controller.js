angular.module('app')
	.controller('sensorDetailsController', sensorDetailsController);

sensorDetailsController.$inject = ['navigationService', 'sensorService'];

function sensorDetailsController(nav, sensorService) {
	var vm = this;

	activate();

	function activate() {
		var navObj = nav.getCurrent().data.sensor;
		vm.sensor = sensorService.getSensor({name: navObj.name});
	}
}
