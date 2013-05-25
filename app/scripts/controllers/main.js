'use strict';

angular.module('mustachifyApp')
    .controller('headerCtrl', function ($scope) {
        $scope.pickImage = function () {
            var a = new Activity({ name: "pick", data: { type: "image/png", multiple: false }});
            a.onsuccess = function() { 
                var image = a.result; 
                var url = "http://mustachify.herokuapp.com";
                $http.post(url, image).done(function () {
                    $scope.$apply();
                });
            });
            a.onerror = function() { alert("Failure when trying to pick an image!"); });
            
        }
    })
    .controller('imageCtrl', function ($scope) {
        $scope.mustachedImage = "http://mustachify.me/?src=http%3A%2F%2Fmustachify.herokuapp.com%2F";
    })
    .controller('shareCtrl', function ($scope) {
        $scope.setBackground = function () {
            console.log('set background');
        }
    });
