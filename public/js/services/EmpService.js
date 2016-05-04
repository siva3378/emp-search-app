angular.module('appServices', [])
    .factory('EmpService', ['$http', function($http) {
        var service = {
            getAllList: getAllList,
            getOne: getOne,
            search: search
        }

        function search(name) {
            return $http
                .get("/api/employees", {params:{search:name}})

                .then(function(res) {
                    return res.data;
                });
        }

        function getAllList() {
            return $http
                .get("/api/employees")
                .then(function(res) {
                    return res.data;
                });
        }

        function getOne(id) {
            return $http
                .get("/api/employees/" + id)
                .then(function(res) {
                    return res.data;
                });
        }
        return service;
    }]);
