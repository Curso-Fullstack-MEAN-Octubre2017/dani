'use strict';

angular.module('appointmentMonthsModule', []);

angular.module('appointmentMonthsModule')
    .component('appointmentMonthsModule', {
        templateUrl:'/app/appointmentMonths/appointmentMonths.html',
        controller: function($scope, $http) {
            console.log("Incializando appointmentMonths")
        }
    })
    .controller('appointmentsListController', function($scope, $http, $routeParams){
    	console.log("Inicializando el controlador de citas...");
    	
    	$http.get("/api/appointments").then(function(response){
    		console.log("Response /api/appointments", response);
    		$scope.appointmentList = response.data;
    	});
    	
    });
    

    