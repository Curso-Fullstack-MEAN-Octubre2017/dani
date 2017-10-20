'use strict';

angular.module('appointmentsCalendarModule', []);

angular.module('appointmentsCalendarModule')
    .component('appointmentsCalendarModule', {
        templateUrl:'/app/appointmentsCalendar/appointmentsCalendar.html',
        controller: function($scope, $http) {
            console.log("Incializando appointmentsCalendar")
        }
    })
    .controller('appointmentsCalendarController', function($scope, $http, $routeParams){
    	console.log("Inicializando el controlador del calendario...");
    	
    	for(moment(); moment().isBefore();)
    	
    });