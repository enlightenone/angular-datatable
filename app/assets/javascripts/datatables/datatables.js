$(document).ready(function() {
    var table = $('#example').DataTable({
        colReorder: true,
        stateSave: true,
        "scrollX": true
    });


    $('#min-loan-term, #max-loan-term').keyup( function() {
        table.draw();
    } );


    $('#loan-amount').change( function() {
        table.draw();
    } );
    //Resetting function

    // $("#reset_default_term").on('click', function(){
  
    //     table.state.clear();
    //     table.colReorder.reset();
      
    //   $("input.toggle-visit").each(function(){
    //     var col_num = $(this).attr('data-column-num');
    //     var col = table.column(col_num);
    //     $(this).prop("checked", true);
    //     col.visible(true);
    //   });


    // });


     // Date range filtration


    $("input.toggle-visit").each(function(){
      var $input = $(this);
      var col_number = $input.attr('data-column-num');
      var col = table.column(col_number);
      var visibility = col.visible();


      if (!visibility){
         $input.prop("checked", false);
        }
    });


    $("input.toggle-visit").change(function(){
       var column_number = $(this).attr('data-column-num');

       var column = table.column(column_number);
        column.visible(!column.visible());
    });


});


// Custom filtration function Plug In
$.fn.dataTable.ext.search.push(    
    function( settings, data, dataIndex ) {
        
        var min = parseInt( $('#min-loan-term').val(), 10 );
        var max = parseInt( $('#max-loan-term').val(), 10 );
        var loan = parseFloat(data[8]) || 0;
 
        if ( ( isNaN( min ) && isNaN( max ) ) ||
             ( isNaN( min ) && loan <= max ) ||
             ( min <= loan   && isNaN( max ) ) ||
             ( min <= loan   && loan <= max ) )
        {
            return true;
        }
        return false;
    }
);


$.fn.dataTable.ext.search.push(    
    function( settings, data, dataIndex ) {
        
        var loan_amount = parseInt( $('#loan-amount').val(), 10 );
      console.log("Loan Amount");
      console.log(loan_amount);
        var loan_amount_range = parseFloat(data[7]) || 0 ;
 
        if ( isNaN( loan_amount ) || ( loan_amount  <= loan_amount_range  )  )
        {
            return true;
        }
        return false;
    }
);
