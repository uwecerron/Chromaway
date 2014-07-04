$( document ).ready(function() {
         $('.box').hide();
        $('#sendPage').show();
    $('.link').click(function(e) {
        $('.box').hide();
        $('#' + $(this).attr('title')).show();
        e.preventDefault();
    });
   
});