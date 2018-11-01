'use strict';

angular.module('LpcWebTest2018')
    .filter('lpcTranslate',['LpcTranslateService','$rootScope',function(LpcTranslateService,$rootScope){
        //TODO

        $rootScope.locale ="fr";

        
         
        var filter = function(key,locale){
            //TODO
            return $rootScope.pros[locale][key];
        }
        //TODO

 

        return filter;
    }]);
