ideaSwatch.controller('NewController', function($scope, $location, SwatchService) {
  $scope.colors = [{value: '#cccccc'}];
  $scope.links = [{url: 'http://google.com'}]

  $scope.add = function(type) {
    if (type === 'color') {
      $scope.colors.push({value: '#cccccc'});
    } else if (type === 'link') {
      $scope.links.push({url: 'http://google.com'})
    }
  }

  $scope.post = function() {
    var newIdeaSwatch = {
      name: $scope.name,
      blurb: $scope.blurb,
      color: $scope.colors,
      links: $scope.links
    };
    SwatchService.create(newIdeaSwatch)
      .success(function(data) {
        $location.path('/swatch/' + data.swatchID);
      })
      .error(function(data) {
        console.log('Error: ' + data);
      })
  }
});