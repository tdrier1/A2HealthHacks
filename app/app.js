var myPrescriptionApp = angular.module('myPrescriptionApp', ['ngRoute', 'ngAnimate']);

myPrescriptionApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
            templateUrl: '/views/compare.html',
            controller: 'prescriptionController'
        })
        .when('/compare', {
            templateUrl: '/views/compare.html',
            controller: 'prescriptionController'
        })
        .when('/contact', {
            templateUrl: '/views/contact.html',
            controller: 'contactController'
        })
        .when('/submitForm', {
            templateUrl: '/views/submitForm.html',
            controller: 'contactController'
        })
        .when('/about', {
            templateUrl: '/views/about.html',
        }).otherwise({
            redirectTo: '/views/compare.html'
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

myPrescriptionApp.controller('contactController', ['$scope', '$location', function($scope, $location) {

    $scope.sendMessage = function() {
        $location.path('/submitForm');
    };
}])