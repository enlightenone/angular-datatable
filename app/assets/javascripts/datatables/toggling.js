$(document).ready(function(){
    $("#advanced_search_block").hide();
    $("#column_filter_block").hide();
    $("#advanced_search_buttom").click(function(){
        $("#advanced_search_block").slideToggle( "slow" );
    });
    $("#column_filter_buttom").click(function(){
        $("#column_filter_block").slideToggle( "slow" );
    });
});