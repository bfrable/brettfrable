'use strict';

app.controller('workCtrl', function($scope, $http) {

    $http.get('./scripts/projects.json').then(function(response) {
        $scope.projects = response.data;
    });

});
