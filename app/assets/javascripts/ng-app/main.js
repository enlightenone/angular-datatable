var app = angular.module("myApp", [])

app.controller("myCtrl", function($scope) {
    
  // Sorting function
 $scope.selectSortFunction = function(term) {
   $scope.sortType = term;
   $scope.sortReverse = !$scope.sortReverse;
 } // End of $scope.selectSoftFunction function

 $scope.display_flags = [
    { "flag": true, "term": "ID", "key": "id" },
    { "flag": true, "term": "Date", "key": "date" },
    { "flag": true, "term": "APN",  "key": "apn" },
    { "flag": true, "term": "Address", "key": "address" },
    { "flag": true, "term": "City", "key": "city" },
    { "flag": true, "term": "Max Rate", "key": "max_rate" },
    { "flag": true, "term": "Interest Rate", "key": "interest_rate" },
    { "flag": true, "term": "Loan Amount", "key": "loan_amount" },
    { "flag": true, "term": "Loan Term", "key": "loan_term" },
    { "flag": true, "term": "Appraisal Value", "key": "appraisal_value" }
 ];

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
    }

  ];


// Filteration Block
 $scope.maxRateTerm = "Max Rate";
 $scope.minLoanTerm = "Minimum Loan";
 $scope.maxLoanTerm = "Maximum Loan";
 $scope.minLoan = 0 ;
 $scope.maxLoan = 5000000000000000;
 $scope.maxRate = 0 ;



   $scope.maxRateChanged = function(){
    if($scope.maxRateOption == $scope.maxRateTerm ){
      $scope.maxRate = 0;
    } else {
      $scope.maxRate = $scope.maxRateOption ;     
    }

   }; // End of $scope.maxRateChanged function

$scope.MinLoanChanged =  function(){
  if(  $scope.minLoanOption == $scope.minLoanTerm ){

    $scope.minLoan = 0 ;
  }else {
     $scope.minLoan = $scope.minLoanOption ;
  }
}; //End of $scope.MinLoanChanged

 $scope.MaxLoanChanged = function(){
  if(  $scope.maxLoanOption == $scope.maxLoanTerm ){

    $scope.maxLoan = 5000000000000000 ;
  }else {
     $scope.maxLoan = $scope.maxLoanOption ;
  }
 }; // End of  $scope.MaxLoanChanged function

// End of Filteration Block


 $scope.reset = function(){
   var flag_length = $scope.display_flags.length;
   $scope.minLoan = 0 ;
   $scope.maxLoan = 5000000000000000;
   $scope.maxRate = 0 ;
   $scope.sortReverse = false ;
   $scope.query = "";

   for(i=0; i< flag_length; i++){
      $scope.display_flags[i].flag = true;
   }

   $('.my_selected option').prop('selected', function(){
     return this.defaultSelected;
   });

 } // End of reset function

}); // End of controller




// ********************* Filters Section *****************

app.filter('loanRange', function(){
  return function (items, min, max) {
    var filtered = [];
    // var listLoan;
    min = parseInt(min);
    max = parseInt(max);

    for(var i = 0 ; i < items.length ; i++ ){
          itemLoan = items[i].loan_amount;
        if(itemLoan >= min && itemLoan <= max ) {
          filtered.push(items[i]);
        }
    } // end of for loop
    return filtered ;
  };// end of first return function
});// end of priceRange custom filter 


app.filter('maxRateFilter', function(){
  return function (items, num) {
    var filtered = [];
    num = parseFloat(num);
    for(var i = 0 ; i < items.length ; i++ ){
        if(items[i].max_rate >= num ) {
          filtered.push(items[i]);
        }
    } // end of for loop
    return filtered ;

  };// end of first return function

});// end of NumBeds custom filter 

// ********************* End Filters Section *****************