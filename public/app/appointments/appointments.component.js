'use strict';

angular.module('appointmentsModule', []);

angular.module('appointmentsModule')
    .component('appointmentsModule', {
        templateUrl:'/app/appointments/appointments.html',
        controller: function($scope, $http, $routeParams) {
            console.log("Incializando appointments");            
            moment.locale("es");
            
            var day = moment().startOf('day');
            if ($routeParams.date) {
                day = moment($routeParams.date,"YYYYMMDD");
            }
       
            $scope.day = moment(day).format("YYYYMMDD");
            $scope.dia = moment(day).format('dddd DD MMMM YYYY');
                                   
            $scope.$on("appointment:showAppointmentClick", function(event, data){
            	console.log("He recibido los siguientes datos: ", data);
            	
            	$scope.$broadcast("appointment:showAppointment", data);
            	
            });
             
        }
    });