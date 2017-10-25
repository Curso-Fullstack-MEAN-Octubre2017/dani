'use strict';

angular.module('petStore')
    .config(function(
        $locationProvider,
        $routeProvider
    ){
        $locationProvider.html5Mode({ enabled: true });
        $routeProvider            
            .when("/",{
                template: "<customer-list-module></customer-list-module>"
            })
            .when("/customers/:id",{
                template: "<customer-details-module></customer-details-module>"
            })
            .when("/pets/:id",{
            	template: "<pet-details-module></pet-details-module>"
            })
            .when("/customers/:customerId/pets/new",{
            	template: "<pet-details-module></pet-details-module>"
            })
            .when("/appointments/", {
            	template: "<appointment-months-module></appointment-months-module>"
            })            
            .when("/appointments/:id",{
            	template: "<appointment-details-module></appointment-details-module>"
            })
            .when("/appointments-calendar",{
            	template: "<appointments-calendar-module></appointments-calendar-module>"
            })
            .when("/appointments-calendar/:month",{
            	template: "<appointments-calendar-module></appointments-calendar-module>"
            })
            .when("/appointments-day/:date",{
            	template: "<appointments-day-module></appointments-day-module>"
            })
            .otherwise({
                template: "Other"
            });
    });