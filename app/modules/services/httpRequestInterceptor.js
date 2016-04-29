angular.module('services').factory('httpRequestInterceptor', function ($rootScope, $q, $timeout) {
    return {
        request: function (requestConfig) {
            //default show toaster for all xhr, if some error doesn't need to show then set this var to false when handle failure
            $rootScope.showToaster = true;
            if ($rootScope.tokenAuth) {
                requestConfig.headers['token-auth'] = $rootScope.tokenAuth;
            }
            //$rootScope.isShowOverlay = true;
            return requestConfig;
        },
        response: function (response) {
            // Do nothing on success response

            return response;
        },
        responseError: function (response) {

            return $q.reject(response);
        }
    };
});