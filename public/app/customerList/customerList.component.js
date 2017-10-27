'use strict';

angular.module('customerListModule', []);

angular.module('customerListModule')
    .component('customerListModule', {
        templateUrl:'/app/customerList/customerList.html',
        controller: function($scope, $http) {
            console.log("Incializando customerList")
        }
    })
    .controller('CustomerListController', function($http, $scope, customersService) {
    	console.log("inicializando el CustomerListController... (con un servicio)");
    	
    	$scope.customerList = [];    	
    	$scope.customerList = customersService.query();
    	
//    	$http.get("/api/customers").then(function(response) {
//    		console.log("Response /api/customers", response);
//    		$scope.customerList = response.data;
//    	});
   
    });

    