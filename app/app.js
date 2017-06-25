var myPrescriptionApp = angular.module('myPrescriptionApp', ['ngRoute']);

myPrescriptionApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
            templateUrl: 'views/home.html'
        })
        .when('/compare', {
            templateUrl: 'views/compare.html',
            controller: 'prescriptionController'
        }).otherwise({
            redirectTo: '/home'
        });
}]);

myPrescriptionApp.controller('prescriptionController', ['$scope', '$http', function($scope, $http) {

    $scope.init = function() {
        $scope.prescriptions = "";
    }
    $scope.loadData = function() {
        $http.get('data/druglist.json').then(function(response) {
            $scope.prescriptions = response.data;
        });
    }
}]);