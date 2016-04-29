
(function () {
    'use strict';

    angular
        .module('services')
        .factory('view1Service', view1Service);

    view1Service.$inject = ['$log', '$http', '$q'];

    function view1Service($log, $http, $q) {

        return {
            getSomeJson: getSomeJson
        };

        /////////////////

        function getSomeJson(opts) {
            return $http({
                url: 'http://jsonplaceholder.typicode.com/posts/1',
                method: 'get',
                data: opts
            })
        }
    }
})();
