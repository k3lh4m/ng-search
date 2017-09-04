angular.module('heroApp').component('searchComponent', {
  templateUrl: 'searchComponent.html',
  bindings: {
    searchData: '<searchData'
  },
  controller: ['$scope', function($scope) {
    var $ctrl = this;

    $ctrl.isEmpty = false;
    
    $ctrl.$onInit = function () {
      console.log($ctrl.searchData);
    }

    $ctrl.searchUsers = function() {
      var filteredResults

      $ctrl.isEmpty = ($scope.search.length === 0) ? false : true;

      filteredResults = _.filter($ctrl.searchData, (data) => {
        return _.includes(_.toLower(data.name), $scope.search)
      })

      $ctrl.newData = filteredResults

      return filteredResults;
    }
  }]
});