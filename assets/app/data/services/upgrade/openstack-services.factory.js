(function() {

    angular
        .module('crowbarData.upgrade')
        .factory('openStackFactory', openStackFactory);

    openStackFactory.$inject = ['$q', '$http'];
    /* @ngInject */
    function openStackFactory($q, $http) {
        var factory = {
            getOpenStackServices: getOpenStackServices
        };

        return factory;

        function getOpenStackServices() {

            var requestOptions = {
                method: 'GET',
                url: '/api/upgrade7/openstack-services'
            };

            return $http(requestOptions);
        }
    }
})();