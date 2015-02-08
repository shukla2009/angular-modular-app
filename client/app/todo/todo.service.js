angular.module('todo').service('TodoService', function ($http) {

    var server = 'http://localhost:9000';
    return {
        load: function () {
            return $http.get(server + '/todo');
        },
        add: function (todo) {
            return $http.post(server + '/todo', todo);
        },
        remove: function (id) {
            return $http.delete(server + '/todo/' + id);
        }
        ,
        clearCompleted: function () {
            return $http.post(server + '/todo/clear');
        }
        ,
        update: function (todo, id) {
            return $http.put(server + '/todo/' + id, todo);
        }

    }
})
;
