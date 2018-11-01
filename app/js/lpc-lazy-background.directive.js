'use strict';

angular.module('LpcWebTest2018')
    .directive('lpcLazyBackground', [function () {


  var lpcLazyBackgroundLink = function (scope, elem, attr) {
    //TODO 
                    var src = scope.lpcLazyBackground;
                    var img = new Image();


                      elem.addClass('loading');


                     img.onload = function() {

                        elem.removeClass('loading');

                        elem.css({
                            'background-image': 'url(' + this.src + ')'
                        });
                    };

                    img.src = src;
      }
    
  return {
    restrict: 'A', scope: {lpcLazyBackground: '='}, link: lpcLazyBackgroundLink
  }

}]);
