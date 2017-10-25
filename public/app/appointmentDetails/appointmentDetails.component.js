'use strict';

angular.module('appointmentDetailsModule', []);

angular.module('appointmentDetailsModule')
    .component('appointmentDetailsModule', {
        templateUrl:'/app/appointmentDetails/appointmentDetails.html',
        controller: function($scope, $http, $routeParams) {
            console.log("Incializando appointmentDetails");
            
           $http.get("api/appointments/" + $routeParams.id).then(function(response){
        	   console.log("Response /api/appointments/" + $routeParams.id, response);
        	   $scope.appointment = response.data; 
           });           
            
        }
    });