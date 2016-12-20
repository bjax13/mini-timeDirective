angular.module('timeApp')
    .directive('showTime', function() {
        return {
          restrict: 'AE',
          template: '<div> {{name}} The current time is {{time | date: "shortTime"}} </div>',
          scope:{
            name: '='
          },
          link: function(scope, element, attrs){
            var currentTime = new Date();
            scope.time = currentTime.toString();
          }
        }
    });
