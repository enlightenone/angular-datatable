var app = angular.module("myApp", [])

app.controller("myCtrl", ['$scope','$window', function($scope, $window) {
    
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
    },

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


// Filtered Property listing counts reference to be used for pagination.

$scope.$watch(function (){
  $scope.filteredProperties = $scope.$eval("table_data | filter: query | orderBy:sortType:sortReverse | loanRange:minLoan:maxLoan | maxRateFilter: maxRate");

  $scope.filteredItemsCount = $scope.filteredProperties.length;

//   // Display Pagination bar if there are items on property listing.
  $scope.paginationDisplayFlag =  $scope.filteredItemsCount ? true : false;

 

  if ($scope.filteredItemsCount <= 20 ){
      $scope.rangeSize = 1;
  } else if ($scope.filteredItemsCount >= 21 && $scope.filteredItemsCount <= 40 ){
      $scope.rangeSize = 2;
  } else if ($scope.filteredItemsCount >= 41 && $scope.filteredItemsCount <= 60) {
      $scope.rangeSize = 3;
  } else if ($scope.filteredItemsCount >= 61 && $scope.filteredItemsCount <= 80) {
      $scope.rangeSize = 4;
  } else if ($scope.filteredItemsCount >= 81) {
      $scope.rangeSize = 5;
  }
 }); //End of $scope.$watch(function ()


$scope.$watch('filteredItemsCount', function(newValue, oldValue){
  $scope.currentPage = 0;

});
  /*********** Pagination Functions ******************/

  // This is to determin number of listings per page based on number of columns on grid listing display.
  // If there are 3 columns, following function will even out numbers of items per row on display by
  // changing to 21 items per page.

//  /**** Resize watching block *****/
// var w = angular.element($window);
// $scope.$watch(
//   function () {
//     return $window.innerWidth;
//   },
//   function (value) {
//     $scope.windowWidth = value;
//       // When the widht of browser is within the range where columns of the display are 3, it 
//       // will display 21 listings to even out row.
//     if($scope.windowWidth > 991 && $scope.windowWidth < 1199 ){
//       // $scope.itemsPerPage = 21 ;  
//       $scope.itemsPerPage = 5 ; 
//     }else {
//       $scope.itemsPerPage = 5 ;  
//       // $scope.itemsPerPage = 21 ; 
//     }
//   },
//   true
// );// end of $watch block 

// w.bind('resize', function(){
//   $scope.$apply();
// });

 /**** Resize watching block *****/

    // Default values
  $scope.currentPage = 0;

   // Obtain range to display pages numbers on pagination page
  $scope.range = function() {
    var ret = [];
    var start;

    start = $scope.currentPage;
    if ( start > $scope.pageCount()-$scope.rangeSize ) {
      start = $scope.pageCount()-$scope.rangeSize+1;
    }

    for (var i=start; i<start+$scope.rangeSize; i++) {
      ret.push(i);
    }

    console.log(ret);
    return ret;
   }; //End of range function

   $scope.prevPage = function(){
    if($scope.currentPage > 0){
      $scope.currentPage--;
    }
   };

   $scope.prevPageDisabled = function(){
    return $scope.currentPage == 0 ? "disabled" : "" ;
   };

   $scope.pageCount = function (){
    return Math.ceil($scope.filteredItemsCount/$scope.itemsPerPage)-1;
   };

   $scope.nextPage = function () {
    // call query with $http.get('... &page='+$scope.currentPage);
    if($scope.currentPage < $scope.pageCount()){
      $scope.currentPage++;
    }
   };

   $scope.nextPageDisabled = function() {
    return $scope.currentPage === $scope.pageCount() ? "disabled" : "";
   };

   $scope.setPage = function(n){
    $scope.currentPage = n ; 
   };

  // ******** End of Pagination Functions **************

}]); // End of controller


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

// Pagination offset filter to slice array to be display

app.filter('offset', function () {
  return function(input, start){
    start = parseInt(start, 10);
    return input.slice(start);
  };// end of return function
}); // end of offset filter

// ********************* End Filters Section *****************