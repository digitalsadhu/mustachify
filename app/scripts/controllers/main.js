'use strict';

angular.module('mustachifyApp')
    .controller('headerCtrl', function ($scope, $http) {
        $scope.pickImage = function () {
            
            


            // var url = "http://mustachify.herokuapp.com";
            // var image = {"image": "test"}; 
            
            // var xmlHttp = new XMLHttpRequest();  
            
            // xmlHttp.open('POST', url, true);

            // //xmlHttp.setRequestHeader('content-type', '');

            // xmlHttp.onreadystatechange = function () {
            //     console.log('something');
            // };
            // xmlHttp.send(image); 

            // console.log('pick image');

            var a = new MozActivity({ 
                name: "pick",
                data: {
                    type: "image/jpeg", multiple: false 
                }
            });

            a.onsuccess = function() { 
                
                // var url = "http://mustachify.herokuapp.com";
                var url = "http://localhost:3000";
                // var image = {"image": a.result.blob}; 
                // console.log(a.result);
                // var xmlHttp = new XMLHttpRequest();  
                // xmlHttp.setRequestHeader('content-type', 'multipart/form-data');
                // xmlHttp.open('POST', url, true);

                // xmlHttp.onreadystatechange = function () {
                //     console.log('something');
                // };
                // xmlHttp.send(image); 
                
                // var blob = new Blob([a.result.blob], {"type": "image/jpeg"});

                var formData = new FormData();
                formData.append('image', a.result.blob);


                var xhr = new XMLHttpRequest();

                // xhr.upload.addEventListener("progress", function(e) {
                //     if (e.lengthComputable) {
                //       var percentage = Math.round((e.loaded * 100) / e.total);
                //       self.ctrl.update(percentage);
                //     }
                //   }, false);

                // xhr.upload.addEventListener("load", function(e){
                //       self.ctrl.update(100);
                //       var canvas = self.ctrl.ctx.canvas;
                //       canvas.parentNode.removeChild(canvas);
                //   }, false);

                xhr.open("POST", url, true);
                // xhr.overrideMimeType('text/plain; charset=x-user-defined-binary');
                xhr.send(formData);
                
                



                // $http.post(url, formData).success(function () {
                //     $scope.$apply();
                // }).error(function (data, status) {
                //     console.log("fail!");
                // });
            };

            a.onerror = function() { 
                alert("Failure when trying to pick an image!"); 
            };
            
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
