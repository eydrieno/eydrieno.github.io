
//TRUST SLIDER
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = $(".mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "grid";
    setTimeout(showSlides, 2000);
  }

// FIXED NAVBAR
// $(document).ready(function(){
if($(window).width() > 370) {
    $('ul').removeClass('mobile-menu');
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            $("nav").animate({padding: "5px"}, 800);
            $(".logo img").animate({width: "10vw"}, 800);
            $("nav").css("background" , "black");
            $("ul").css("color" , "white");
        }
        else {
            $("nav").css("background" , "none");
            $("ul").css("color" , "#27275d");
            // $("nav").animate({padding: "30px"}, 800);
            // $(".logo img").animate({width: "15vw"}, 800);
        }
    })
}
//   })

// SCROLL TO SECTIONS
var offset = 50;
if($(window).width() < 370) {offset = 0;}

$('a[href^="#"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));
      
    if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top-offset
        }, 800);
    }
});

//BURGER BUTTON
menuOpened = false;
$(".burger-button").click(function(){
    if(menuOpened === false) {
    $(".burger-button").addClass('burger-active');
    $('ul').addClass('menu-active');
    menuOpened = true;
    } else {
        $(".burger-button").removeClass('burger-active');
        $('ul').removeClass('menu-active');

        menuOpened = false;
    }
})