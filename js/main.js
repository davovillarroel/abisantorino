$(document).ready(function() {

  $('.carousel').carousel({
      interval: 3000
    })

  $(".ancla").click(function(e){
      e.preventDefault();
      var enlace = $(this).attr("href");
          $("html, body").animate({
      scrollTop: $(enlace).offset().top
      }, 1000);
  })

});