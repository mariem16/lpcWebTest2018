angular.module('LpcWebTest2018')
    .service('LpcTranslateService',['$http','$rootScope',function($http,$rootScope){
        

        var propertiesUrl;
            //TODO


            setPropertiesUrlImpl = function(url){
                //TODO
                propertiesUrl = url;
            
            },
            loadPropertiesImpl = function(){
                //TODO
                 $http.get(propertiesUrl).then(function(response) {
                    $rootScope.pros = response.data;
                });
                 

            }

        return {
            setPropertiesUrl : setPropertiesUrlImpl,
            loadProperties : loadPropertiesImpl
        }
    }]);
