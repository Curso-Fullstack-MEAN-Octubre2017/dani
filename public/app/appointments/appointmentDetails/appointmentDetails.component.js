'use strict';

angular.module('appointmentDetailsModule', []);

angular.module('appointmentDetailsModule')
    .component('appointmentDetailsModule', {
        templateUrl:'/app/appointments/appointmentDetails/appointmentDetails.html',
        controller: function($scope, $http) {
        	//$("select").material_select(); // Activa el select de Materializecss.
            console.log("Incializando appointmentDetails");
                        
            $http.get("api/pets").then(function(response){
            	$scope.pets = response.data; 
            });	        	
            
            $scope.$on("appointment:showAppointment", function(event, data){
	        	if(data.id){
	        		$http.get("api/appointments/" + data.id).then(function(response){
	                 	console.log("Response /api/appointments/" + data.id, response);
	                 	$scope.appointment = response.data; 
	        		});
	            }else{
	               	$scope.appointment = {};
	   				$scope.appointment.dateStart =  moment(data.datetime, 'YYYYMMDD-HH:mm').toDate();
	   				$scope.appointment.dateEnd = moment($scope.appointment.dateStart).add(30, 'm').toDate();            	 
	            }	        	
            });    
              
           $scope.insert = function(){
        	   console.log("Vamos a insertar datos.");
        	   $http.post("api/appointments", $scope.appointment).then(function(response){
        		  $scope.appointment = response.data; 
        	   });        	   
        	   $scope.$emit("appointment:insertAppointmentClick", $scope.appointment);
           }
            
           $scope.update = function(){
        	   console.log("Update appointment:", $scope.appointment);
        	   $http.put("api/appointments/" + $scope.appointment._id, $scope.appointment).then(function(response){        		   
        		  $scope.appointment = response.data; 
        	   });
        	   $scope.$emit("appointment:updateAppointmentClick", $scope.appointment);
           }
           
           $scope.delete = function(){
        	   console.log("Delete appointment:", $scope.appointment);
        	   var appointment = $scope.appointment;
        	   $http.delete("api/appointments/" + $scope.appointment._id).then(function(response){
        		   $scope.appointment = response.data;
        		   $scope.$emit("appointment:deleteAppointmentClick", appointment);
        	   });
           }
                      
        }
    });