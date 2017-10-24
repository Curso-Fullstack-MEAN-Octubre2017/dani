'use strict';

angular.module('appointmentsDayModule', []);

angular.module('appointmentsDayModule')
    .component('appointmentsDayModule', {
        templateUrl:'/app/appointmentsDay/appointmentsDay.html',
        controller: function($scope, $http, $routeParams) {
            console.log("Incializando appointmentsDay");
            moment.locale("es");
            
            var day = moment().startOf('day');
            if ($routeParams.date) {
                day = moment($routeParams.date,"YYYYMMDD");
            }
       
            $scope.day = moment(day).format("YYYYMMDD");
            $scope.dia = moment(day).format('dddd DD MMMM YYYY');
            
            $scope.timetable = [];            

            var fromDate = day.format("YYYYMMDD");
            var toDate = moment(day).add(1, "days").format("YYYYMMDD");
            
            $http.get("/api/appointmentsByDate/" + fromDate + "/" + toDate).then(function(res){
                $scope.app = res.data[fromDate] || {};

                var open = moment(day).hour(9);
                var close = moment(day).hour(21);
                
                for(var hour = moment(open); hour.isBefore(close); hour.add(0.5, 'h')) {
                    var hourKey = hour.format('HH:mm');
                    $scope.timetable.push({
                        hour: hourKey,
                        apps: $scope.app[hourKey]
                    });
                }         

              });    
        }
    });