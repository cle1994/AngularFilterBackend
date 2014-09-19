ideaSwatch.controller('SwatchController', function($scope, $stateParams, SwatchService) {
  $scope.swatch;

  SwatchService.get_swatch($stateParams.swatch_id)
    .success(function(data) {
      $scope.swatch = data;
      console.log(data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });
});