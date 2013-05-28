'use strict';

angular.module('mustachifyApp', [])
    .config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Request-With'];
    }]);
