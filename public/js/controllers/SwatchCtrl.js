ideaSwatch.controller('SwatchController', function($scope, $stateParams, SwatchService) {
  $scope.swatch;

  $scope.getArray = function(array) {
    return array;
  }

  SwatchService.get_swatch($stateParams.swatch_id)
    .success(function(data) {
      $scope.swatch = data;
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });
});