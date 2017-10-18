'use strict';

angular.module('petDetailsModule', []);

angular.module('petDetailsModule')
    .component('petDetailsModule', {
        templateUrl:'/app/petDetails/petDetails.html',
        controller: function($scope, $http) {
            console.log("Incializando petDetails")
        }
    }).controller('PetDetailsController', function($scope, $http, $routeParams){
    	console.log("Inicializando PetDetailsController");
    	
    	if(typeof $routeParams.id !== 'undefined') {
	    	$http.get("/api/pets/" + $routeParams.id).then(function(response) {
	    		console.log("petID:" + $routeParams.id);
	    		$scope.pet = response.data;
	    	});	    	
    	} else{
    		console.log("ownerID:" + $routeParams.ownerId);
    		$scope.pet = {};
    		$scope.pet.ownerId = $routeParams.customerId;
    	}
    	
    	$scope.insert = function() {
    		console.log("Insert pet:", $scope.pet);
    		$http.post("/api/pets", $scope.pet).then(function(response){
    			$scope.pet = response.data;
    		});
    	}

    	$scope.update = function() {
    		console.log("Update pet:", $scope.pet);
    		$http.put("/api/pets/" + $scope.pet._id, $scope.pet).then(function(response){
    			$scope.pet = response.data;
    		});
    	}
    	
    	$scope.remove = function(){
    		console.log("Delete pet:", $scope.pet);
    		$http.delete("/api/pets/" + $scope.pet._id).then(function(response){
    			history.back();
    		});
    	}
    	
    	$scope.isNew = function() {
    		return $scope.pet === undefined || $scope.pet._id === undefined;
    	}
    	
    });