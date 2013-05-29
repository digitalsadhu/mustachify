'use strict';

var app = angular.module('mustachifyApp', []);
// I dont think this is being used
app.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Request-With'];
}]);


app.factory('serverEventStream', function ($rootScope, configuration) {
  console.log("connecting to event stream");
  var eventSource = new EventSource(configuration.imageServerUrl + '/eventSource');

  eventSource.onmessage = function (event) {
    console.log(event);
    $rootScope.$broadcast("image_updated");
  };
});

app.constant('configuration', {
  imageServerUrl:"http://mustachify.herokuapp.com",
  mustachServiceUrl: "http://mustachify.me/?src=http%3A%2F%2Fmustachify.herokuapp.com%2F&t=123"
});
