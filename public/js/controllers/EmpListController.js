angular.module('appCtrls').controller('EmpListController', function($scope, EmpService) {

    $scope.list = [];
    $scope.searchByName = searchByName;


    //init();
    ////////////

    function init(){
    	EmpService.getAllList().then(function(data){
    		$scope.list = data;
    	});
    }

    function searchByName(name){
    	EmpService.search(name).then(function(data){
    		$scope.list = data;
    	});
    }

});
