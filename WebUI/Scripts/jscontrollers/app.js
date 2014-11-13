var angularExample = angularExample || {};
angularExample.app = angular.module("angularExample", ["ngRoute", "upidamodule", 'ngCookies', 'ngDialog','ui.bootstrap']);


//angularExample.app.directive('datetimeConverter', function (utils) {
//    return {
//        restrict: 'A',
//        scope: true,
//        link: function ($scope, element, attrs) {
//            var date = new Date($scope[attrs.date]);
//            var minutes = date.getMinutes(); if (minutes < 10) minutes = "0" + minutes;
//            var hours = date.getHours(); if (hours < 10) hours = "0" + hours;
//            var month = date.getMonth(); if (month < 10) month = "0" + month;
//            var day = date.getDate(); if (day < 10) day = "0" + day;
//            return date.getFullYear() + "-" + month + "-" + day + " " + hours + ":" + day;
//        }
//    };

//});
    angularExample.app.config(['ngDialogProvider', function (ngDialogProvider) {
        ngDialogProvider.setDefaults({
            className: 'ngdialog-theme-default',
            plain: false,
            showClose: true,
            closeByDocument: true,
            closeByEscape: true,
            appendTo: false
        });
    }]);
    angularExample.app.filter('sumByKey', function() {
        return function(data, key) {
            if (typeof(data) === 'undefined' || typeof(key) === 'undefined') {
                return 0;
            }

            var sum = 0;
            for (var i = data.length - 1; i >= 0; i--) {
                sum += parseInt(data[i][key]);
            }

            return sum;
        };
    });



//upida.settings.baseUrl = "http://shop.betway.ug/";
 //$upida.settings.baseUrl = "http://localhost:49193/";
$upida.settings.baseUrl = "http://localhost:49193/";
