$(window).on("load", start);

function start (){

    $('#slideshow').slick({
        //setting-name: setting-value
        prevArrow: null, 
        nextArrow: null, 
        autoplay: true, 
        fade: true, 
      });

  ScrollReveal().reveal('.reveal1');
  ScrollReveal().reveal('.reveal2', { delay: 500 });
  ScrollReveal().reveal('.reveal3', { delay: 1000 });

}    