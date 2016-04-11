$(document).ready(function() {
    var table = $('#example').DataTable({
        colReorder: true,
        stateSave: true,
        "scrollX": true,
        "dom": 'Zlfrtip',
        // initComplete: function(settings) { 
        //     $('#example').colResizable({liveDrag:true});
        // },
        "stateSaveParams": function(settings,data){
            var loan_amount = $("#loan-amount").val();
              data["min-loan-term"] = $("#min-loan-term").val();
              data["max-loan-term"] = $("#max-loan-term").val();
              data["loan-amount"] = loan_amount != "Loan Amount" ? loan_amount : "Loan Amount";
              data["min-date"] = $("#min-date").val(); 
              data["max-date"] = $("#max-date").val();
            return data
        },
        "stateLoadParams": function(settings, data){
            $("#min-loan-term").val(data["min-loan-term"]);
            $("#max-loan-term").val(data["max-loan-term"]);
            $("#min-date").val(data["min-date"]);
            $("#max-date").val(data["max-date"]); 
            $("#loan-amount").val(data["loan-amount"]);
        }
    });



    $('#min-loan-term, #max-loan-term, #min-date, #max-date').keyup( function() {
        table.draw();       
    });


    $('#min-date, #max-date').change( function() {
        table.draw();
        table.state.save();
    });


    $('#loan-amount').change( function() {
        table.draw();
        table.state.save();
    });


    //Resetting function
    $("#reset_default_term").on('click', function(){
        table.colReorder.reset();
        table.search( "" );
        table.column( '0:visible' ).order( 'asc' );
        table.page.len( 10 );
        table.columns.adjust().draw();
        $("#min-loan-term").val("");
        $("#max-loan-term").val("");
        $("#min-date").val("");
        $("#max-date").val(""); 
        $("#loan-amount").val("Loan Amount");
        $("select[name=example_length]").val("10");

        $("input.toggle-visit").each(function(){
            var $input = $(this);
            var col_number = $input.attr('data-column-num');
            table.column(col_number).visible(true);
            $input.prop("checked", true);
        });
        table.draw();
    }); // End of default resetting function

     // Date range filtration
    $( "#min-date, #max-date" ).datepicker({dateFormat: 'yy-mm-dd'});


    // Columns Hide/Show functions
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

}); // End of $(document).ready(function() function

