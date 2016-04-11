var app = angular.module("myApp", [])

app.controller("myCtrl", ['$scope','$window', function($scope, $window) {




 $scope.table_titles = ["ID", "Date", "APN", "Address", "City", 
                         "Max Rate", "Interest Rate", "Loan Amount", "Loan Term", "Appraisal Value"]

 // Columns filteration titles 
$scope.col_general_info_titles = {
          "start": 0,
          "options": ["ID", "Date", "APN"]
    }; 

$scope.col_address_titles = {
          "start": 3,
          "options": [ "Address", "City"]
    }; 

$scope.col_loan_info_titles = {
          "start": 5,
          "options": ["Max Rate", "Interest Rate", "Loan Amount", "Loan Term"]
}


$scope.col_others_info_titles = {
          "start": 9,
          "options": ["Appraisal Value"]
}

 // End of Columns filteration titles 

 $scope.table_data = [
   {
      "id": 1,
      "date": "2016-3-31",
      "apn": 812473246,
      "address": "1909 Charlemount Ave",
      "city": "Hacienda Height",
      "max_rate":  15.99,
      "interest_rate": 7.99,
      "loan_amount": 2323000,
      "loan_term":  1,
      "appraisal_value": 125.00
    },
   {
      "id": 2,
      "date": "2016-2-31",
      "apn": 5173246,
      "address": "1909 Charlemount Ave",
      "city": "Rowland Height",
      "max_rate":  21.99,
      "interest_rate": 1.29,
      "loan_amount": 210000,
      "loan_term":  3,
      "appraisal_value": 355.00
    },
   {
      "id": 3,
      "date": "2014-1-31",
      "apn": 4173246,
      "address": "1901 Charlemount Ave",
      "city": "Hacienda Height",
      "max_rate":  13.99,
      "interest_rate": 3.99,
      "loan_amount": 120000,
      "loan_term":  6,
      "appraisal_value": 115.00
    },
   {
      "id": 4,
      "date": "2016-6-31",
      "apn": 2173246,
      "address": "1909 Charlemount Ave",
      "city": "Hacienda Height 1",
      "max_rate":  2.99,
      "interest_rate": 4.99,
      "loan_amount": 3423000,
      "loan_term":  10,
      "appraisal_value": 455.00
    },
   {
      "id": 5,
      "date": "2010-3-31",
      "apn": 7173246,
      "address": "1129 Seaman Ave",
      "city": "Hacienda Height 2",
      "max_rate":  8.99,
      "interest_rate": 8.99,
      "loan_amount": 12120000,
      "loan_term":  4,
      "appraisal_value": 465.00
    },

   {
      "id": 6,
      "date": "2016-3-31",
      "apn": 812473246,
      "address": "1909 Charlemount Ave",
      "city": "Hacienda Height",
      "max_rate":  15.99,
      "interest_rate": 7.99,
      "loan_amount": 2323000,
      "loan_term":  1,
      "appraisal_value": 125.00
    },
   {
      "id": 7,
      "date": "2016-2-31",
      "apn": 5173246,
      "address": "1909 Charlemount Ave",
      "city": "Rowland Height",
      "max_rate":  21.99,
      "interest_rate": 1.29,
      "loan_amount": 210000,
      "loan_term":  3,
      "appraisal_value": 355.00
    },
   {
      "id": 8,
      "date": "2014-1-31",
      "apn": 4173246,
      "address": "1901 Charlemount Ave",
      "city": "Hacienda Height",
      "max_rate":  13.99,
      "interest_rate": 3.99,
      "loan_amount": 120000,
      "loan_term":  6,
      "appraisal_value": 115.00
    },
   {
      "id": 9,
      "date": "2016-6-31",
      "apn": 2173246,
      "address": "1909 Charlemount Ave",
      "city": "Hacienda Height 1",
      "max_rate":  2.99,
      "interest_rate": 4.99,
      "loan_amount": 3423000,
      "loan_term":  10,
      "appraisal_value": 455.00
    },
   {
      "id": 10,
      "date": "2010-3-31",
      "apn": 7173246,
      "address": "1129 Seaman Ave",
      "city": "Hacienda Height 2",
      "max_rate":  8.99,
      "interest_rate": 8.99,
      "loan_amount": 12120000,
      "loan_term":  4,
      "appraisal_value": 465.00
    }

  ];


// Filteration Block

 $scope.min_loan_term_title = "Minimum Loan Term";
 $scope.max_loan_term_title = "Maximum Loan Term";
 $scope.loan_amount_title = "Loan Amount"



// End of Filteration Block


 $scope.reset = function(){
   var flag_length = $scope.display_flags.length;
   $scope.minLoan = 0 ;
   $scope.maxLoan = 5000000000000000;
   $scope.maxRate = 0 ;
   $scope.sortReverse = false ;
   $scope.query = "";
   $scope.itemPerPage = 5;

   for(i=0; i< flag_length; i++){
      $scope.display_flags[i].flag = true;
   }

   $('.my_selected option').prop('selected', function(){
     return this.defaultSelected;
   });
} // End of reset function


 }]); // End of controller

