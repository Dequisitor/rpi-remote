angular.module('app')
	.controller('homeController', homeController);

homeController.$inject = ['navigationService'];

function homeController(nav) {
	var vm = this;
	vm.changeUrl = changeUrl;

	activate();

	function activate() {
		console.log('home controller ready');
	}

	function changeUrl(url, data) {
		nav.pushPage(url, data);
	}
}
