'use strict';

angular.module('view1').controller('View1Ctrl', ['$scope', 'view1Service', function ($scope, view1Service) {

    $scope.getData = function () {
        view1Service.getSomeJson()
            .then(function (data) {
                $scope.data = data.data;
            },
            function (error) {

            });
    }
}]);