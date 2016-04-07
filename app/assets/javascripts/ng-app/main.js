var app = angular.module("myApp", [])

app.controller("myCtrl", function($scope) {


//    $scope.test2 = {"employees":[
//     {"firstName":"John", "lastName":"Doe"},
//     {"firstName":"Anna", "lastName":"Smith"},
//     {"firstName":"Peter", "lastName":"Jones"}
// ]}
 $scope.table_data = [{
    "id": 88,
    "date": "2016-3-31",
    "apn": 8173246,
    "address": "1909 Charlemount Ave",
    "city": "Hacienda Height",
    "max_rate":  "21.99%",
    "interest_rate": "7.99%",
    "loan_amount": 310000,
    "loan_term":  "1 year",
    "appraisal_value": 455.00
  }];

}); // End of controller