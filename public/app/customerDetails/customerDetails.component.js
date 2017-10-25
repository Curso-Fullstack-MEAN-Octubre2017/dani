'use strict';

angular.module('customerDetailsModule', []);

angular.module('customerDetailsModule')
    .component('customerDetailsModule', {
        templateUrl:'/app/customerDetails/customerDetails.html',
        controller: function($scope, $http) {
            console.log("Incializando customerDetails")
        }
    })
    .controller('CustomerDetailsController', function($http, $scope, $routeParams) {
    	console.log("inicializando el CustomerDetailsController...");
    	
    	if($routeParams.id === "new") { // Comprobamos si el id es igual a 'new'.
    		// Y aquí limpiamos los campos para añadir uno nuevo.
    		$scope.customer = {};
    		$scope.customerPets = [];
    	} else {
    		//Aquí recuperamos los datos para modificarlo.
	    	$http.get("/api/customers/" + $routeParams.id).then(function(response) {
	    		console.log("Response /api/customers/" + $routeParams.id, response);
	    		$scope.customer = response.data;
	    	});
	    	$http.get("/api/customers/" + $routeParams.id + "/pets").then(function(response) {
	    		console.log("Response /api/customers/" + $routeParams.id + "/pets", response);
	    		$scope.customerPets = response.data;
	    	});
    	}

    	// Añadimos un nuevo cliente.
    	$scope.insert = function() {
    		console.log("Insert customer:", $scope.customer);
    		$http.post("/api/customers", $scope.customer).then(function(response){
    			$scope.customer = response.data;
    		});
    	}

    	$scope.update = function() {
    		console.log("Update customer:", $scope.customer);
    		$http.put("/api/customers/" + $scope.customer._id, $scope.customer).then(function(response){
    			$scope.customer = response.data;
    		});
    	}
    	
    	$scope.isNew = function() {
    		return $scope.customer === undefined || $scope.customer._id === undefined;
    	}
    });

    