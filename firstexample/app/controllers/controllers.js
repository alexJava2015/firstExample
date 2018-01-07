angular.module('todoApp').controller('FriendsController', ['$scope', function($scope) {
$scope.friends = [
 {name:'John', age:25, gender:'boy'}, 
 {name:'Jessie', age:30, gender:'girl'},
 {name:'Johanna', age:28, gender:'girl'},
 {name:'Joy', age:15, gender:'girl'},
 {name:'Mary', age:28, gender:'girl'},
 {name:'Peter', age:95, gender:'boy'}, 
 {name:'Sebastian', age:50, gender:'boy'},
 {name:'Erika', age:27, gender:'girl'},
 {name:'Patrick', age:40, gender:'boy'},
 {name:'Samantha', age:60, gender:'girl'}];
 $scope.addTodo = function() {
      $scope.friends.push({text:$scope.todoText, done:false});
      $scope.todoText = '';
    }; 
$scope.remove = function(index){
$scope.friends.splice(index,1);
};

}]);
angular.module('todoApp').controller('MainController', ['$scope', function($scope) {
}]);
angular.module('todoApp').controller('TodoController', ['$scope', function($scope) {
    $scope.todos = [
      {text:'learn angular', done:true},
      {text:'build an angular app', done:false}];
 
    $scope.addTodo = function() {
      $scope.todos.push({text:$scope.todoText, done:false});
      $scope.todoText = '';
    }; 
    $scope.remaining = function() {
      var count = 0;
      angular.forEach($scope.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    }; 
    $scope.archive = function() {
      var oldTodos = $scope.todos;
      $scope.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) $scope.todos.push(todo);
      });
    };
  }]);