angular.module('myApp', [])
    .controller('myCtrl', function ($scope, $rootScope) {
        $scope.i = 0;
        // Declaration of all the inputs- Meal details
        $scope.mealPrice;
        $scope.taxRate;
        $scope.tipPercent;

        // Customer Charges
        $scope.subTotal = 0;
        $scope.tipValue = 0; // Tip for one meal
        $scope.totalValue = 0; // Total value of meal price, tax and tip

        // My earnings info
        $rootScope.tipTotalValue = 0; // Total tip for all the meals
        $scope.mealCount = 0; // No of meals
        $scope.avgTipValue = 0;

        $scope.completeTransaction = function () {
            $scope.subTotal = ($scope.mealPrice + ($scope.taxRate * 0.01 * $scope.mealPrice));
            $scope.tipValue = ($scope.tipPercent * 0.01 * $scope.mealPrice);
            $scope.totalValue = $scope.subTotal + $scope.tipValue;

            if ($scope.i === 0) {
                $rootScope.tipTotalValue = $scope.tipValue;
            } else {
                $rootScope.tipTotalValue += $scope.tipValue;
            }
            $scope.i++;
            $scope.mealCount = $scope.i;
            $scope.avgTipValue = $rootScope.tipTotalValue / $scope.mealCount;
        };

        $scope.cancelTransaction = function () {
            document.getElementById("enterDetails").reset();
            $scope.form.$submitted = false;
            $scope.mealPrice = 0;
            $scope.taxRate = 0;
            $scope.tipPercent = 0;
        };

        $scope.resetTransaction = function () {
            document.getElementById("enterDetails").reset();
            $scope.mealPrice = 0;
            $scope.taxRate = 0;
            $scope.tipPercent = 0;
            $scope.subTotal = 0;
            $scope.tipValue = 0;
            $scope.totalValue = 0;
            $rootScope.tipTotalValue = 0;
            $scope.mealCount = 0;
            $scope.avgTipValue = 0;
            $scope.i = 0;
            $scope.form.$submitted = false;
        }
    });
