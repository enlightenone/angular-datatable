$(document).ready(function() {
    var table = $('#example').DataTable({
        colReorder: true,
        stateSave: true,
        "scrollX": true
    });


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