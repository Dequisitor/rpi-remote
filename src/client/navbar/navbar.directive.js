angular.module('app')
	.directive('navbar', navbarDirective);

navbarController.$inject = ['navigationService'];

function navbarDirective() {
	return {
		restrict: 'AE',
		templateUrl: '/navbar/navbar.html',
		controller: navbarController,
		controllerAs: 'navbar'
	};
}

function navbarController(nav) {
	var vm = this;
	vm.back = back;
	vm.isBackAvailable = isBackAvailable;
	vm.getTitle = getTitle;

	activate();

	function activate() {
	}

	function getTitle() {
		var navObj = nav.getCurrent();
		if (!!navObj.data && !!navObj.data.title) {
			return navObj.data.title;
		}

		return '';
	}

	function back() {
		nav.popPage();
	}

	function isBackAvailable() {
		return nav.isBackAvailable();
	}
}
