// Navbar transition on scroll

$(function(){
  $(window).scroll(function(e){
    if ($(this).scrollTop() > 0) {
      $(".navbar").css({
        "background": "rgba(0, 0, 0, 0.7)",
        "box-shadow": "0 0 2px black"
      });
    }
    else {
      $(".navbar").css({
        "background": "transparent",
         "box-shadow": "0 0 0px transparent"
      });
    }
  });
})
;
