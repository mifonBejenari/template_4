$(document).scroll(function () {
    var y = $(document).scrollTop(),
        header = $("#menu");

    if (y >= 115) {
        header.addClass('fixed');
    } else {
        header.removeClass('fixed');
    }
});


$(document).ready(function() {
 
  $(window).resize(function(){
    var windowWidth = $(window).width();
    if(windowWidth > 992) {
       $(".colum1 p").removeClass("wow slideInLeft");
    }
  });
});