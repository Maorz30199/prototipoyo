'use strict';
angular.module('prototipoyoApp')
  .controller('MiembrosCtrl', function ($scope, $http, ModalService) {
    $http.get('http://localhost:9000/miembros.json')
    .then(function(response){
      $scope.miembros = response.data;
      console.log($scope.miembros);
      },function(err){
      console.log(err);
      });
    $scope.gridOptions ={
      data: 'miembros',
      enableFiltering: true,
      enableCellEditOnFocus: true,
      columnDefs: [
        {field: 'no', displayName: 'ID'},
        {field: 'nombre',displayName: 'Nombre', enableCellEdit: true},
        {field: 'fidelidad', displayName: 'Puntos de Fidelidad'},
        {field: 'fechaUnion', displayName: 'Fecha suscripción', type: 'date'},
        {field: 'tipoMiembro', displayName: 'Tipo de Cuenta'}
      ]
    };
    $scope.showAModal = function(){
      $scope.clickedMiembro={};
      ModalService.showModal({
        templateUrl: 'views/add-miembros.html',
        controller: "MiembrosCtrl"
      }).then(function(modal) {
            modal.element.modal();
            modal.close.then(function() {
            });
        });
    }
    $scope.updateMiembro = function(){
      $scope.miembros.push({
        no: $scope.miembros.length + 1,
        nombre: $scope.clickedMiembro.nombre,
        tipoMiembro: $scope.clickedMiembro.tipoMiembro,
        fidelidad: $scope.clickedMiembro.fidelidad,
        fechaUnion: $scope.clickedMiembro.fechaUnion,
        });
        console.log($scope.miembros);
      $scope.clickedMiembro ={};
    }
  })
  .controller('AddNuevoMiembroCtrl', function ($scope) {

  });
