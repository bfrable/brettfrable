'use strict';

app.controller('mainCtrl', function($scope, $timeout){

    $scope.animateIn = false;

    $timeout(function(){
        $scope.animateIn = true;
    }, 2000);

    $scope.showNav = function () {
        $scope.navOpen = !$scope.navOpen;
    };

});
