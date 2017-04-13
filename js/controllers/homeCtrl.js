'use strict'


stomApp.controller('homeCtrl', function ($scope) {
    $scope.classForMenuActive = 'active';
    $scope.setTab = function (tabClass) {
        var element = angular.element(document.getElementById(tabClass));
        $scope.removeClasses(tabClass);
        element.addClass($scope.classForMenuActive);
    };
 
    $scope.removeClasses = function (el) {
        
        var element = angular.element(document.getElementById(el));
        var parrentEl = element.parent()
        var items = parrentEl.children();
        for (var i = 0; i < items.length; i++) {
            var e = items[i];
            e.classList.remove($scope.classForMenuActive);
        }

    }
});