'use strict';

// var imageServerUrl = "http://mustachify.herokuapp.com";
// var mustachServiceUrl = "http://mustachify.me/?src=http%3A%2F%2Fmustachify.herokuapp.com%2F&t=123";

angular.module('mustachifyApp')
    .controller('headerCtrl', function ($scope, $rootScope, serverEventStream, configuration) {


        $scope.pickImage = function () {

            var getImageActivity = new MozActivity({
                name: "pick",
                data: {
                    type: "image/jpeg", multiple: false
                }
            });
            getImageActivity.onsuccess = function() {
                // We have an image
                // Send it to the hosting site
                var formData = new FormData();
                formData.append('image', getImageActivity.result.blob);

                var xhr = new XMLHttpRequest();

                xhr.open("POST", configuration.imageServerUrl, true);
                xhr.addEventListener("loadend", function() {
                    $rootScope.$broadcast("image_updated");
                })
                xhr.send(formData);
            };

            getImageActivity.onerror = function() {
                alert("Failure when trying to pick an image!");
            };

        }
    })
    .controller('imageCtrl', function ($scope, configuration) {
        $scope.mustachedImage = configuration.mustachServiceUrl;
        console.log($scope.mustachedImage);
        $scope.$on("image_updated", function() {
            // refresh the image being displayed
            console.log("updating image");
            var oldUrl = $scope.mustachedImage;

            var currentTimestamp = Date.now();

            var newUrl = oldUrl.replace(/&t=[0-9]*$/, "&t="+ currentTimestamp);
            $scope.mustachedImage = newUrl;

            // Not sure why this is required but it does not seem to work without it
            $scope.$apply();
        });
    })
    .controller('shareCtrl', function ($scope) {
        $scope.setBackground = function () {
            console.log('set background');
        }
    });
