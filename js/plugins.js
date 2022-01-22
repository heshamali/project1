$(function () {
    'use strict';
    // Use The Nice Scroll :
    $('html').niceScroll();
    
    // The Carousel :
    $('.carousel').carousel({
        interval: 5000
    });
    

    // Show The Color Option :
    $('.check_icon').click(function() {
        $('.color_option').fadeToggle(600);
    });
    
    
    // Change The Color Box :
    var colorBox = $('.color_option ul li');
    colorBox.eq(0).css('backgroundColor', '#198BAF').end()
    .eq(1).css('backgroundColor', '#19af78').end()
    .eq(2).css('backgroundColor', '#8319af').end()
    .eq(3).css('backgroundColor', '#c32356').end()
    .eq(4).css('backgroundColor', '#32464e');
    
    colorBox.click(function(){
        $('link[href*="theme"]').attr('href', $(this).attr('data-value'));
    });
    
    
    // The Loading :
    $(window).on('load', function(){
        $('.loading, .loading .sk-folding-cube').fadeOut(1500);
    });
    
    
    // The Scroll Top :
    var scrollbtn = $('#scroll_top');
    $(window).scroll(function(){
        if ($(this).scrollTop() >= 600) {
            scrollbtn.fadeIn(500);
        } else {
            scrollbtn.fadeOut(500);
        }
    });
     $(scrollbtn).click(function(){
        $('html,body').animate({scrollTop: 0}, 750);
    });
    
    
    
    
    
    
    
    
    
});
