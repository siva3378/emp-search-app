angular.module('appCtrls').controller('EmpDetailController', function($scope, $routeParams, EmpService) {

	init();

	////////////
	function init(){
		$scope.contactKeys = [
			{key:"office", name:"Call Office"},
			{key:"mobile", name:"Call Mobile"},
			{key:"sms", name:"SMS"},
			{key:"email", name:"Email"},
		]
		EmpService.getOne($routeParams.id).then(function(data){
    		$scope.emp = data;
    	});
	}

});