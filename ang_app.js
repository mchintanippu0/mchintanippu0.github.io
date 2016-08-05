var app = angular.module('app', []);
app.controller('mainController', function ($scope, $http) {
    $scope.n1 = 0;
    $scope.n2 = 0;
	$scope.result=0;

    $scope.post = function(){
		$scope.result = parseFloat($scope.n1) + parseFloat($scope.n2);;
     };
});