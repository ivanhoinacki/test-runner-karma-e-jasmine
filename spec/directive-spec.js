describe('bsButton', function() {
	var $compile, $rootScope;

	beforeEach(module('app'));

	beforeEach(inject(function(_$compile_, _$rootScope_) {
		$compile = _$compile_;
		$rootScope = _$rootScope_;
	}))

	it('deveria retornar o html do botao', function() {
		var element = $compile('<bs-button></bs-button>')($rootScope);
		$rootScope.$digest();

		expect(element[0].outerHTML).toContain('<button class="btn ng-binding ng-scope ng-isolate-scope"><!-- ngIf: icone --> </button>');
	});
});