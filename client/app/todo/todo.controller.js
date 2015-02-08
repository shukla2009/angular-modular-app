angular.module("todo").controller("TodoCtrl", function ($scope, TodoService) {

        function load() {
            TodoService.load().then(function (result) {
                $scope.todos = result.data;
            });
        }

        load();

        $scope.newTodo = {};

        $scope.add = function () {
            TodoService.add($scope.newTodo).then(function () {
                $scope.newTodo = {};
                load();
            });

        }

        $scope.delete = function (index) {
            TodoService.remove(index).then(function () {
                load();
            });
        }

        $scope.update = function (index) {
            TodoService.update(index, $scope.todos[index]).then(function () {
                load();
            });

        }

        $scope.clearCompleted = function () {
            TodoService.clearCompleted().then(function () {
                load();
            });
        }

    }
);