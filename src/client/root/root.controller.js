angular.module('app')
	.controller('rootController', rootController);

rootController.$inject = ['navigationService'];

function rootController(nav) {
	var vm = this;
	vm.getDirection = getDirection;

	activate();

	function activate() {
		nav.pushPage('home', {title: 'Rpi Remote'});
	}

	function getDirection() {
		return nav.getDirection();
	}
}
