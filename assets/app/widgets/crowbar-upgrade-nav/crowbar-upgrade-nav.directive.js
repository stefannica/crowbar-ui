(function() {
    'use strict';

    angular
        .module('crowbarWidgets')
        .directive('crowbarUpgradeNav', [crowbarUpgradeNav]);

    var navController = function ($scope, $window) {
        $scope.goToDashboard = function() {
            $window.location.href = '/';
        };
    };

    navController.$inject = ['$scope', '$window'];

    function crowbarUpgradeNav() {
        return {
            restrict: 'E',
            templateUrl: 'app/widgets/crowbar-upgrade-nav/crowbar-upgrade-nav.directive.html',
            scope: {
                steps: '=',
                onCancel: '&',
            },
            controller: navController,
        };
    }
})();
