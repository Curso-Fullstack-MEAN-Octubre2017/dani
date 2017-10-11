'use strict';

angular.module('customersModule', []);

angular.module('customersModule').component('customersModule', {
    templateUrl:'/app/customers-module/customers-modules.html',
    controller: function($scope, $http) {
        $http.get('/api/customers-model').success(function(data){
        	$scope.costumers = data;
        }).error(function(data){
        	console.log('Error: ' + data);
        });
    }
});

    