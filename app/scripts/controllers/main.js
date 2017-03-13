'use strict';

/**
 * @ngdoc function
 * @name prototipoyoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the prototipoyoApp
 */
angular.module('prototipoyoApp')
  .controller('MainCtrl', function () {
    var baseURL = 'http://lorempixel.com/960/450/';
    $scope.setInterval = 5000;
  });
