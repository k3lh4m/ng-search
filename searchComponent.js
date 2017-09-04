angular.module('heroApp').component('searchComponent', {
  templateUrl: 'searchComponent.html',
  bindings: {
    searchData: '<searchData'
  },
  controller: ['$scope', function($scope) {
    var $ctrl = this;
    
    $ctrl.$onInit = function () {
      console.log($ctrl.searchData);
    }

    $ctrl.searchUsers = function() {
      var filteredResults

      filteredResults = _.filter($ctrl.searchData, (data) => {
        return _.includes(data.name, $scope.search)
      })

      $ctrl.newData = filteredResults


      console.log($ctrl.newData);
      return filteredResults;
    }
  }]
});