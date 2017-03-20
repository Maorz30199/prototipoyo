'use strict';

angular.module('prototipoyoApp')
  .controller('MainCtrl', function ($scope) {
  $scope.myInterval = 5000;
  var baseURL = 'http://lorempixel.com/960/450/';
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var contenido = $scope.contenido= {}
  var currIndex = 0;

  $scope.addSlide = function() {
    slides.push({
      title: 'Aprende a mantenerte en forma',
      image:baseURL+'sports/',
      text: '¡Practica algún deporte todos los días!',
      id: currIndex++
    },
    {
      title: 'Buena alimentación',
      image:baseURL+'food/',
      text: '¡Es importante de frutas y verduras!',
      id: currIndex++
    },
    {
      title: 'En contacto con la naturaleza',
      image:baseURL+'nature/',
      text: '¡Mantente en armonia con la naturaleza!',
      id: currIndex++
    });
  };


  for (var i = 0; i < 1; i++) {
    $scope.addSlide();
  }

  baseURL = 'http://lorempixel.com/200/200/';
  $scope.contenidos =[
    {
      img: baseURL+'people/',
      title: 'Acerca de nosotros',
      summary: 'Comprometidos con la vida sana'
    },
    {
      img: baseURL+'business/',
      title: 'Nuestros servicios',
      summary: 'Asesoria para mantenerte sano'
    },
    {
      img: baseURL+'transport/',
      title: 'Contáctanos',
      summary: 'B/sevilla, Medellin'
    }
  ]
});
