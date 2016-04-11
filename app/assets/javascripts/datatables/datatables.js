$(document).ready(function() {
    var table = $('#example').DataTable({
        colReorder: true,
        stateSave: true,
        "scrollX": true,
        "stateSaveParams": function(settings,data){

          var min_loan = $("#min-date").val();
          var max_loan = $("#max-date").val();

          // console.log(min_loan);
          // console.log(max_loan);
          data["min_date"] = min_loan;
          data["max_date"] = max_loan;

          // console.log(data);
          return data
        },
        "stateLoadParams": function(settings, data){
          $("#min-date").val(data["min_date"]);
          $("#max-date").val(data["max_date"]); 
        }


    });


    $('#min-loan-term, #max-loan-term, #min-date, #max-date').keyup( function() {
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

