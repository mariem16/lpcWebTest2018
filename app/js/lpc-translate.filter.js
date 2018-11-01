'use strict';

angular.module('LpcWebTest2018')
    .filter('lpcTranslate',['LpcTranslateService','$rootScope',function(LpcTranslateService,$rootScope){
        //TODO


        if(localStorage.getItem('locale') != null){
           $rootScope.locale = localStorage.getItem('locale');
        }else 
            $rootScope.locale ="fr";


        LpcTranslateService.loadProperties().then(function(result) { 
                $rootScope.pros = result; 
        }); 

        
        var filter = function(key,locale){
            //TODO
            if($rootScope.pros)
                return $rootScope.pros[locale][key];
            else 
                return ""
        }
        //TODO
 
        filter.$stateful = true;
<<<<<<< HEAD

        
=======
>>>>>>> 300d51300d46731bfc39be5296a93bcad7b3cbdb
        return filter;
    }]);
