'use strict';

var angular;

var app = angular.module('portfolio', ['ui.router', 'ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider, $anchorScrollProvider){

    $anchorScrollProvider.disableAutoScrolling();

    $urlRouterProvider.otherwise('/about');

    $stateProvider
        .state('about', {
            url: '/about',
            templateUrl: './views/about.html'
        })
        .state('work', {
            url: '/work',
            templateUrl: './views/work.html'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: './views/contact.html'
        });
});
