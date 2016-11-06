angular.module('app')
	.factory('navigationService', navigationService);

navigationService.$inject = ['$route', '$location'];

function navigationService($route, $location) {
	var pageStack = [];
	var direction = 'none';

	return {
		pushPage: pushPage,
		popPage: popPage,
		isBackAvailable: isBackAvailable,
		getCurrent: getCurrent,
		getDirection: getDirection
	};

	function pushPage(url, data) {
		direction = 'forward';
		pageStack.push({
			url: url,
			data: data
		});

		$location.path(url);
	}

	function popPage() {
		direction = 'back';
		pageStack.pop();
		$location.path(getCurrent().url);
	}

	function isBackAvailable() {
		return pageStack.length > 1;
	}

	function getCurrent() {
		return pageStack[pageStack.length-1];
	}

	function getDirection() {
		return direction;
	}
}

