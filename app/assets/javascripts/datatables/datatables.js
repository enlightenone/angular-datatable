$(document).ready(function() {
    var table = $('#example').DataTable({
        colReorder: true,
        stateSave: true,
        "scrollX": true
    });


    $('#min-loan-term, #max-loan-term, #min-date, #max-date').keyup( function() {
        console.log(table.state.save());
        table.draw();       
    } );


      $('#min-date, #max-date').change( function() {
        table.draw();
        table.state.save();
    } );


    $('#loan-amount').change( function() {
        table.draw();
        table.state.save();
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

    $( "#min-date, #max-date" ).datepicker({dateFormat: 'yy-mm-dd'});


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
var api = $.fn.dataTable.ext.search.push(    
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

        var loan_amount_range = parseFloat(data[7]) || 0 ;
 
        if ( isNaN( loan_amount ) || ( loan_amount  <= loan_amount_range  )  )
        {
            return true;
        }
        return false;
    }
);


$.fn.dataTable.ext.search.push(
                function( settings, data, dataIndex ) {
                    var array=[];
                    // var today = new Date();
                    // var dd = today.getDate();
                    // var mm = today.getMonth();
                    // var yyyy = today.getFullYear();
                     
                    // if (dd<10)
                    // dd = '0'+dd;
                     
                    // if (mm<10)
                    // mm = '0'+mm;
                     
                    //             today = yyyy+'-'+mm+'-'+dd;
                     
                    if ($('#min-date').val() == '' && $('#max-date').val() == '') {
                    return true;
                    }
                     if ($('#min-date').val() != '' || $('#max-date').val() != '') {
                    var iMin_temp = $('#min-date').val();
                     if (iMin_temp == '') {
                       iMin_temp = '2000-01-23';
 
                     }
                     
                     var iMax_temp = $('#max-date').val();
                     if (iMax_temp == '') {
                      iMax_temp = '2030-05-01';
                       // array.push(iMax_temp.substr(0,10));
                       
 
                     }
                     
                    var arr_min = iMin_temp.split("-");
                    var arr_max = iMax_temp.split("-");
                    var arr_date = data[1].split("-");
            
                    arr_min[1] = parseInt(arr_min[1]) - 1 ;
                    arr_max[1] = parseInt(arr_max[1]) - 1 ;
                    arr_date[1] = parseInt(arr_date[1]) - 1 ;

                    console.log(arr_min);
                    console.log(arr_max);
                    console.log(arr_date);

                    var iMin = new Date(arr_min[0], arr_min[1], arr_min[2]);
                    var iMax = new Date(arr_max[0], arr_max[1], arr_max[2]);
                    var iDate = new Date(arr_date[0], arr_date[1], arr_date[2]);

                    console.log(iMin);
                    console.log(iMax);
                    console.log(iDate);
                     
                    if ( iMin == "" && iMax == "" )
                    {
                        return true;
                    }
                    else if ( iMin == "" && iDate < iMax )
                    {
                        return true;
                    }
                    else if ( iMin <= iDate && "" == iMax )
                    {
                        return true;
                    }
                    else if ( iMin <= iDate && iDate <= iMax )
                    {
                        return true;
                    }
                                         
                    return false;
                    }
                }
            );
