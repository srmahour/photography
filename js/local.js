$(document).ready(function(){

    //banner slider
    $('.banner-slider').slick({
        infinite: true,
        speed: 10000,
        autoplay:true,
        autoplaySpeed:0,
        cssEase: 'linear',
        variableWidth: true,
        arrows:false
    });


    //animation
    new WOW().init();

    //toggle
    $('#toggle').click(function(){
        $('.mega-menu-area').stop().toggleClass('show');
    })
    

});


$(window).on('scroll', function(){
    if($(window).scrollTop() >= $('.custom-header').height()){
        $('.custom-header').addClass('fixed');
    } else {
        $('.custom-header').removeClass('fixed');
    }
});