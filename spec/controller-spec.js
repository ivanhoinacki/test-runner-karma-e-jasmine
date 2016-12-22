describe('TesteController', function() {
	beforeEach(module('app'));

	var $controller, vm;

	beforeEach(inject(function(_$controller_) {
		$controller = _$controller_;
		vm = $controller('TesteController');
	}));

	describe('vm.toggleType', function() {
		it('deveria trocar o type', function() {
			expect(vm.toggleType()).toEqual('password');
		});
	});

	describe('vm.calc', function() {
		it('deveria somar os valores recebidos como parametro', function() {
			expect(vm.calc(1, 2)).toEqual(3);
		});

		it('ao receber uma letra, deveria retornar NaN', function() {
			expect(vm.calc(1, 'a')).toEqual(NaN);
		});
	});
});