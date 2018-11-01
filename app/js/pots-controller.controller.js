'use strict';

angular.module('LpcWebTest2018')
    .controller('PotsController',['$scope','PotsService',function($scope,PotsService){
        //TODO

         
        PotsService.get().then(function(response){
     		$scope.pots = response;
		});

        $scope.changeLocale = function(lang) {
        	$scope.locale = angular.copy(lang);
<<<<<<< HEAD
=======

>>>>>>> 300d51300d46731bfc39be5296a93bcad7b3cbdb
        	localStorage.setItem("locale", lang);
        	

        };

        

 


    }]);
