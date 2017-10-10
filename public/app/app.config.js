'use strict';

angular.module('petStore')
    .config(function(
        $locationProvider,
        $routeProvider
    ){
        $locationProvider.html5Mode({ enabled: true });
        $routeProvider
            .when("/",{
                template: "Prueba Grumpy <a ng-href='/customers'>Clientes</a>"
            })
            .when("/customers",{
                template: "<customers-module></customers-module>"
            })
            .otherwise({
                template: "Other"
            });
    });