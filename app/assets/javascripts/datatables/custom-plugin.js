
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


                    var iMin = new Date(arr_min[0], arr_min[1], arr_min[2]);
                    var iMax = new Date(arr_max[0], arr_max[1], arr_max[2]);
                    var iDate = new Date(arr_date[0], arr_date[1], arr_date[2]);

   
                     
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
