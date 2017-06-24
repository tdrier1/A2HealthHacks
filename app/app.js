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


    $scope.removePrescription = function(prescription) {
        var removePrescription = $scope.prescription.indexOf(prescription);
        $scope.prescriptions.splice(removePrescription, 1);
    };

    $scope.addPrescription = function() {
        $scope.prescriptions.push({
            name: $scope.newprescription.name,
            price: $scope.newprescription.price,
            tevalue: $scope.newprescription.tevalue
        });

        $scope.newprescription.name = "";
        $scope.newprescription.price = "";
        $scope.newprescription.tevalue = "";
    };

    $http.get('data/drugsearch.json').then(function(response) {
        $scope.prescriptions = response.data;
    });
}]);