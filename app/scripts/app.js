'use strict';

var app = angular.module('mustachifyApp', []);

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
