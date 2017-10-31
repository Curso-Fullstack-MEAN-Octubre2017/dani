'use strict';

angular.module('appointmentsDayModule', []);

angular.module('appointmentsDayModule')
    .component('appointmentsDayModule', {
        templateUrl:'/app/appointments/appointmentsDay/appointmentsDay.html',
        bindings: {
        	day: '='
        },
        controller: function($scope, $http) {
            console.log("Incializando appointmentsDay");
                        
            this.$onInit = function(){
            	console.log("appointmentsDay->$onInit");
            	console.log("day: ", this.day);
            	var day = moment(this.day);
            	$scope.day = moment(day).format("YYYYMMDD");
            	loadAppointment(day.toDate());
            }
            
            $scope.$on("appointments:loadAppointment", function(event, data){
            	console.log("on appointments:loadAppointment", data);
            	loadAppointment(data.day);
            });
            
            $scope.$on("appointment:newAppointment", function(event, data){
            	console.log("on appointment:clearAppointment" data);
            	
            });
            
            function loadAppointment(day){

            	var fromDate = moment(day).format("YYYYMMDD");
                var toDate = moment(day).add(1, "days").format("YYYYMMDD");
                
                $scope.timetable = [];
            	
            	$http.get("/api/appointmentsByDate/" + fromDate + "/" + toDate).then(function(res){
            		$scope.app = res.data[fromDate] || {};
	
	                var open = moment(day).hour(9);
	                var close = moment(day).hour(21);
	                
	                for(var hour = moment(open); hour.isBefore(close); hour.add(0.5, 'h')) {
	                    var hourKey = hour.format('HH:mm');
	                    $scope.timetable.push({
	                        hour: hourKey,
	                        appointment: $scope.app[hourKey]
	                    });
	                }         

            	});
            }
            
            // Función que nos permite editar la cita seleccionada.
            $scope.editAppointment = function(id){
            	console.log("Vamos a editar: " + id);
            	
            	$scope.$emit("appointment:showAppointmentClick",{id: id});           	
            }
            
            // Función que nos permite crear una cita nueva.
            $scope.addAppointment = function(datetime){
            	console.log("Vamos a añadir:" + datetime);
            	
            	$scope.$emit("appointment:newAppointmentClick", {datetime: datetime});
            }
            
        }
    });