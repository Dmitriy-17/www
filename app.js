'use strict'

var stomApp = angular.module("stomApp", ['ngRoute']);

stomApp.config(function ($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'homeCtrl'
        })

        // route for the about page
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'homeCtrl'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'homeCtrl'
        });
});