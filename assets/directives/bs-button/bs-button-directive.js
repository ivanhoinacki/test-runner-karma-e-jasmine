(function() {
    'use strict';

    angular.module('app')
        .directive('bsButton', bsButton);

    function bsButton() {
        var directive = {
            transclude: true,
            replace: true,
            template: '<button class="btn" ><i class="fa {{ icone }}" ng-if="icone"></i> {{ descricao }}</button>',
            restrict: 'EA',
            scope: {
                color: '@',
                icone: '@',
                descricao: '@',
                type: '@'
            }
        };

        return directive;
    }

})();
