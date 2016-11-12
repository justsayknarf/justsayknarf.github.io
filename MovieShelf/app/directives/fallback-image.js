(function(){
   angular.module('movieFinder', []).directive('fallback-img', function(){
      return {
         restrict: 'A',
         link: function($scope, element, attributes) {            
            var elem = element;
            var attrs = attributes;
            var width, height;
            
            element.on('error', function() {
               if(elem.attr('src') === attrs.srFallback) {
                  throw new Error('The supplied fallback image doesn\'t exist');
               }
               if(!attrs.srFallback) {
                  width = elem[0].offsetWidth;
                  height = elem[0].offsetHeight;
                  attrs.srFallback = 'http://placehold.it/' + width + 'x' + height;
               }
               elem.attr('src', attrs.srFallback);
            });
         }
      };
   });   
})();