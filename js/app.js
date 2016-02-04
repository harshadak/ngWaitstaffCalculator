angular.module('myApp', [])
    .controller('myCtrl', function ($scope, $rootScope)) {
        // Declaration of all the inputs- Meal details
        $scope.mealPrice;
        $scope.taxRate;
        $scope.tipPercent;

        // Customer Charges
        $scope.subTotal = 0;
        $scope.tipValue; // Tip for one meal
        $scope.totalValue; // Total value of meal price, tax and tip

        // My earnings info
        $rootScope.tipTotalValue = 0; // Total tip for all the meals
        $scope.mealCount; // No of meals
        $scope.avgTipValue;

        $scope.completeTransaction = function () {
            $scope.subTotal = ($scope.mealPrice + ($scope.taxRate * 0.01 * $scope.mealPrice));
            $scope.tipValue = ($scope.tipPercent * 0.01 * $scope.mealPrice);
            $scope.totalValue = $scope.subTotal + $scope.tipValue;
        }
    }
