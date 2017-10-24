'use strict';

angular.module('appointmentsCalendarModule', []);

angular.module('appointmentsCalendarModule')
    .component('appointmentsCalendarModule', {
        templateUrl:'/app/appointmentsCalendar/appointmentsCalendar.html',
        controller: function($scope, $http, $routeParams, $location) {
        	
        	console.log("Inicializando el controlador del calendario...");        	
        	moment.locale('es');
        	
        	// var currentMonth = moment().month(); // Meses indexados desde cero,
    		// asi que Enero es el mes 0.
        	// $scope.fecha = currentMonth;
        	var currentMonth = moment().startOf('month'); // Establece el mes actual del sistema.
        	
        	// Comprobamos si nos llega un mes por la ruta (botones para movernos por los meses).
        	if($routeParams.month){
        		currentMonth = moment($routeParams.month, "YYYYMMDD");
        	}
        	
        	$scope.currentMonth = currentMonth.toDate();
        	// Muta el mes actual añadiendole tiempo (añadimos y removemos 1 mes).
        	$scope.nextMonth = moment(currentMonth).add(1, 'M').toDate();
        	$scope.prevMonth = moment(currentMonth).add(-1, 'M').toDate();
        	
        	$scope.cells = []; // Creamos un array que almacenará las celdas de cada mes.				
        	
        	// Guardamos en una variable el dia en el que empieza el mes.
        	var firstWeekDay = currentMonth.weekday();
        	// Pintamos las celdas previas al día en el que empieza el mes.
        	for(var i = 0; i < firstWeekDay; i++){
        		$scope.cells.push({date: "•"});
        	}
        	
        	var formatCurrentMonth = moment($scope.currentMonth).format("YYYYMMDD");
        	var formatNextMonth = moment($scope.nextMonth).format("YYYYMMDD");
        	// $scope.fecha = formatCurrentMonth;
        	$http.get("api/appointmentsByDate/"+formatCurrentMonth+"/"+formatNextMonth).then(function(response){
        		
        		$scope.appointmentsByDate = response.data;
        		
        		// Pintamos las celdas que corresponden al mes y añadimos los datos a cada celda.
        		for(var M = moment($scope.currentMonth); M.isBefore($scope.nextMonth); M.add(1, "days")){
        			var currentDate = M.format("YYYY-MM-DD");
        			$scope.cells.push({
        				date: currentDate,
        				appointments: $scope.appointmentsByDate[currentDate],
        				appointmentsCount: $scope.appointmentsByDate[currentDate] ? Object.keys($scope.appointmentsByDate[currentDate]).length : 0
        			});  			
        		}
        		
        	});
        	
        	$scope.appointmentsDate = function(date){
        		$location.path("/appointments-day/" + moment(date).format("YYYYMMDD"))
        	}
       }
    });