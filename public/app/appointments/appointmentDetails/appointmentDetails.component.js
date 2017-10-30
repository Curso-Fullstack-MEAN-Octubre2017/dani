'use strict';

angular.module('appointmentDetailsModule', []);

angular.module('appointmentDetailsModule')
    .component('appointmentDetailsModule', {
        templateUrl:'/app/appointments/appointmentDetails/appointmentDetails.html',
        controller: function($scope, $http) {
        	//$("select").material_select(); // Activa el select de Materializecss.
            console.log("Incializando appointmentDetails");
                        
            $scope.$on("appointment:showAppointment", function(event, data){
	        	if(data.id){
	        		$http.get("api/appointments/" + data.id).then(function(response){
	                 	console.log("Response /api/appointments/" + data.id, response);
	                 	$scope.appointment = response.data; 
	        		});
	            }else{
	               	$scope.appointment = {};
	   				$scope.appointment.dateStart =  moment(data.date, 'YYYYMMDD-HH:mm').toDate();
	   				$scope.appointment.dateEnd = moment($scope.appointment.dateStart).add(30, 'm').toDate();            	 
	            }
	        	
	        	$http.get("api/pets").then(function(response){
	       		  $scope.pets = response.data; 
	       	   });	        	
            });    
                     
            
           $scope.insert = function(){
      		   console.log("Insert appointment:", $scope.appointment);
        	   $http.post("api/appointments", $scope.appointment).then(function(response){
        		  $scope.appointment = response.data; 
        	   });
           }
           
           $scope.update = function(){
        	   $http.put("api/appointments/" + $scope.appointment._id, $scope.appointment).then(function(response){
        		   console.log("Update appointment:", $scope.appointment);
        		  $scope.appointment = response.data; 
        	   });
           }
           
           $scope.delete = function(){
        	   console.log("Delete appointment:", $scope.appointment);
        	   $http.delete("api/appointments/" + $scope.appointment._id).then(function(response){
        		  history.back(); 
        	   });
           }
           
           $scope.isNew = function() {
        	   return $scope.appointment === undefined || $scope.appointment._id === undefined;
	       }
            
        }
    });