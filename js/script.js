$about_button = $('.about_button');
$remove_button = $('.remove');
$hero = $('.hero');
$about = $('.about');
$about_p = $('.hero p');
$index_body = $('#index');

// Show about div. Hide about button on hero section
$about_button.on('click', function() {
  $(this).hide();
  $about_p.css('margin-bottom', '0');
  $index_body.css('overflow', 'scroll');

    if ($(window).width() <= 520) {
      $hero.hide();
      $about.show().animate({top: 10}, 'slow');
    } else if ($(window).width() >= 1400) {
      $hero.animate({top: 100});
      $about.show().animate({top: 140}, 'slow');
    } else {
      $hero.animate({top: 10});
      $about.show().animate({top: 40}, 'slow');
    }
});

// hide about div. Show about button on hero section
$remove_button.on('click', function() {
  $about_button.fadeIn();
  $about_p.css('margin-bottom', '10px');

    if ($(window).width() <= 520) {
      $hero.fadeIn();
      $hero.animate({top: 60});
      $about.hide();
    } else if ($(window).width() >= 1400) {
      $hero.animate({top: 180});
      $about.hide();
    } else {
      $hero.animate({top: 100});
      $about.animate({top: 1000}, 'slow').fadeOut();
    }
});

// pag nav arrows
// RIGHT
$('.contact_page span, .port_page span').mouseover(function() {
  $(this).fadeIn().css('color', '#fff');
  $('.port_display, .contact_display').fadeIn();
})
.mouseout(function() {
  $(this).css('color', 'rgba(255, 255, 255, 0.75)');
  $('.port_display, .contact_display').fadeOut();
});

// LEFT
$('.about_page span, .port_page_left span').mouseover(function() {
  $(this).fadeIn().css('color', 'rgba(255, 255, 255, 0.75)');
  $('.about_display, .port_display_left').fadeIn();
})
.mouseout(function() {
  $(this).css('color', 'rgba(255, 255, 255, 0.65)');
  $('.about_display, .port_display_left').fadeOut();
});

// top bar toggle open
$('.show_nav').on('click', function() {
  $(this).fadeOut('fast');
  $('.hide_nav').fadeIn();
  $('.top_bar').animate({left: 0});
})

// top bar toggle hide
$('.hide_nav').on('click', function() {
  $(this).fadeOut();
  $('.show_nav').fadeIn();
  $('.top_bar').animate({left: 3000});
})



function loopDivs() {

  $('.display_responsive').fadeIn().delay(5000).fadeOut();

  $('.display_toolbelt').delay(5800).fadeIn().delay(5000).fadeOut();

  $('.display_environment').delay(12000).fadeIn().delay(5000).fadeOut(loopDivs);

}

loopDivs();
