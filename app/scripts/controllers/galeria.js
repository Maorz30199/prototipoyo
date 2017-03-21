'use strict';

/**
 * @ngdoc function
 * @name prototipoyoApp.controller:GaleriaCtrl
 * @description
 * # GaleriaCtrl
 * Controller of the prototipoyoApp
 */
angular.module('prototipoyoApp')
  .controller('GaleriaCtrl', function ($scope) {

    var pictures = $scope.pictures = [];
    var baseURL = 'http://lorempixel.com/300/180/';
    var titles = ["Comida Sana","Salud y trabajo","Vida en la ciudad",
    "Mantente Activo","Cuida tu aspecto","Vida Nocturna"];
    var Keywords =["food","business","city","sports",
    "fashion","nigthlife"];
    var lText = "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojasLetraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."

    $scope.addPics = function(i){
      pictures.push({
        url: baseURL+Keywords[i],
        title: titles[i],
        summary: lText
      })
    }
    for (var i = 0; i < 5; i++) {
      $scope.addPics(i);
    }
  });
