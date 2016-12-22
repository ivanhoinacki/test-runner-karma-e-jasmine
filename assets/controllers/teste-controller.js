(function() {
	'use strict';

	angular.module('app').controller('TesteController', TesteController);

	function TesteController() {
		var vm = this;

		vm.toggleType = function toggleType() {
			vm.type = vm.type === 'password' ? 'text' : 'password';
			return vm.type;
		};

		vm.calc = function calc() {
			var total = 0, index;

			for (index in arguments) {
				total += Number(arguments[index]);
			}

			return total;
		};
	}
})();