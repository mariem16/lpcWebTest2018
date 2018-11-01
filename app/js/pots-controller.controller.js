'use strict';

angular.module('LpcWebTest2018')
    .controller('PotsController',['$scope','PotsService',function($scope,PotsService){
        //TODO

         
        PotsService.get().then(function(response){
     		$scope.pots = response;
		});

        $scope.changeLocale = function(lang) {
        	$scope.locale = angular.copy(lang);

        	localStorage.setItem("locale", lang);
        	

        };

        

 


    }]);
