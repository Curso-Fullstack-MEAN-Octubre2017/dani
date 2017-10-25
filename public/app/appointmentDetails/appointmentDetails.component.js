'use strict';

angular.module('appointmentDetailsModule', []);

angular.module('appointmentDetailsModule')
    .component('appointmentDetailsModule', {
        templateUrl:'/app/appointmentDetails/appointmentDetails.html',
        controller: function($scope, $http, $routeParams) {
        	$("select").material_select();
            console.log("Incializando appointmentDetails");
            
            $scope.appointment = {};
            
            if($routeParams.id){
            	 $http.get("api/appointments/" + $routeParams.id).then(function(response){
              	   console.log("Response /api/appointments/" + $routeParams.id, response);
              	   $scope.appointment = response; 
                 });
            }else{
				 $scope.appointment.dateStart =  moment($routeParams.date, 'YYYYMMDD-hh:mm').toDate();
				 $scope.appointment.dateEnd = moment($scope.appointment.dateStart).add(30, 'm').toDate();            	 
            }
     
            
        }
    });