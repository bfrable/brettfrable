'use strict';

var app = angular.module('portfolio', ['ui.router']);

app.controller('mainCtrl', function($scope, $timeout){

    $scope.animateIn = false;

    $timeout(function(){
        $scope.animateIn = true;
    }, 1000);

    $scope.showNav = function () {
        $scope.navOpen = !$scope.navOpen;
    };

});

app.controller('workCtrl', function($scope, $http) {

    $http.get("./scripts/projects.json").then(function(response) {
        $scope.projects = response.data;
    });

});

app.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/about")

    $stateProvider
        .state('about', {
            url: "/about",
            templateUrl: "./views/about.html"
        })
        .state('work', {
            url: "/work",
            templateUrl: "./views/work.html"
        })
        .state('contact', {
            url: "/contact",
            templateUrl: "./views/contact.html"
        })
});

app.directive('mainNav', function(){
    return {
        templateUrl: './partials/nav.html',
        replace: true
    }
});

app.directive('loader', function(){
    return {
        templateUrl: './partials/loader.html',
        replace: true
    }
});
