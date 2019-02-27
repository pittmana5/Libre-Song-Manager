var app = angular.module('libreSongManager', []);

app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test = 'Welcome to Libre Song Manager!';
  $scope.posts = [
    'post 1',
    'post 2',
    'post 3',
    'post 4',
    'post 5'
  ];
}]);
