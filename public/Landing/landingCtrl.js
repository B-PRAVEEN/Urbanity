angular.module('urbanity')
.controller('landingCtrl', function($scope, landingService) {

  $scope.test = "test...123";

    $scope.showModal = false;
    $scope.toggleModal = function(){
        $scope.showModal = !$scope.showModal;
    };
  

});

