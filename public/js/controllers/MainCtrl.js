ideaSwatch.controller('MainController', function($scope, SwatchService) {
  $scope.swatches = [];

  $scope.getArray = function(array) {
    return array;
  }

  SwatchService.get()
    .success(function(data) {
      $scope.swatches = data;
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });
});