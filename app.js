angular.module('mini', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: './htmls/home.html'
            })
            .state('brix', {
                url: '/brix',
                templateUrl: './htmls/brix.html',
                controller: 'brixCtrl'
            })
            .state('maze', {
                url: '/maze',
                templateUrl: './htmls/maze.html',
                controller: 'mazeCtrl'
            })
            .state('simon', {
                url: '/simon',
                templateUrl: './htmls/simon.html',
                controller: 'simonCtrl'
            })
            .state('ticTackToe', {
                url: '/ticTackToe',
                templateUrl: './htmls/ticTackToe.html',
                controller: 'ticTackToeCtrl'
            })
        $urlRouterProvider.otherwise('/')
    })
