angular.module('app')
	.factory('sensorService', sensorService);

sensorService.$inject = [];

function sensorService() {
	return {
		getSensors: getSensors,
		getSensor: getSensor
	};

	function getSensors() {
		return [{
			_id: 0,
			type: 'Temperature',
			name: 'DS18B20',
			unit: '°C',
			lastValue: '19.6',
			lastEntry: '13:42 11/12/16'
		},{
			_id: 1,
			type: 'Humidity',
			name: 'DHT11',
			unit: '%',
			lastValue: '62',
			lastEntry: '13:32 11/12/16'
		},{
			_id: 2,
			type: 'Air quality',
			name: 'MQ135',
			unit: '',
			lastValue: '345',
			lastEntry: '13:22 11/12/16'
		}];
	}

	function getSensor(filter) {
		if (filter.type) {
			return getSensors().filter(function(sensor) {
				return sensor.type == filter.type;
			});
		}
		if (filter.name) {
			return getSensors().filter(function(sensor) {
				return sensor.name == filter.name;
			});
		}

		return undefined;
	}
}
