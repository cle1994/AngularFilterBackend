ideaSwatch.factory('SwatchService', ['$http', function($http) {
  return {
    get: function() {
      return $http.get('/api/swatches');
    },

    create: function(swatchData) {
      return $http.post('/api/swatches', swatchData);
    },

    get_swatch: function(id) {
      return $http.get('/api/swatches/' + id)
    }
  }
}]);