$(document).ready(function() {
    var table = $('#example').DataTable({
        colReorder: true,
        stateSave: true,
        "scrollX": true
    });

    //Resetting function

    $("#reset_default_term").on('click', function(){
  
        table.state.clear();
        table.colReorder.reset();
      
      $("input.toggle-visit").each(function(){
        var col_num = $(this).attr('data-column-num');
        var col = table.column(col_num);
        $(this).prop("checked", true);
        col.visible(true);
      });


    });


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
        console.log("Column Visibility");
        console.log(column.visible());

        column.visible(!column.visible());
    });
});


// Custom filtration functions
$.fn.dataTable.ext.search.push(    
    function( settings, data, dataIndex ) {
        
        var min = parseInt( $('#min-loan-amount').val(), 10 );
        var max = parseInt( $('#max-loan-amount').val(), 10 );
        var age = parseFloat(data[0].substring(5, 7)) || 0;
 
        if ( ( isNaN( min ) && isNaN( max ) ) ||
             ( isNaN( min ) && age <= max ) ||
             ( min <= age   && isNaN( max ) ) ||
             ( min <= age   && age <= max ) )
        {
            return true;
        }
        return false;
    }
);
