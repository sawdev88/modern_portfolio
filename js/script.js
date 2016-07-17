$about_button = $('.about_button');
$remove_button = $('.remove');
$hero = $('.hero');
$about = $('.about');
$about_p = $('.hero p');

// Show about div. Hide about button on hero section
$about_button.on('click', function() {
  $(this).hide();
  $hero.animate({top: 100});
  $about.show().animate({top: 140}, 'slow');
  $about_p.css('margin-bottom', '0');

    if ($(window).width() <= 520) {
      $hero.hide();
      $about.show().animate({top: 10}, 'slow');
    }

});

// hide about div. Show about button on hero section
$remove_button.on('click', function() {
  $hero.animate({top: 180});
  $about.animate({top: 1000}, 'slow').fadeOut();
  $about_button.fadeIn();
  $about_p.css('margin-bottom', '10px');

    if ($(window).width() <= 520) {
      $hero.fadeIn();
      $hero.animate({top: 100});
    }

});

// pag nav arrows
$('.contact_page span, .port_page span').mouseover(function() {
  $('.port_display, .contact_display').fadeIn();
})
.mouseout(function() {
  $('.port_display, .contact_display').fadeOut();
});

$('.about_page span, .port_page_left span').mouseover(function() {
  $('.about_display, .port_display_left').fadeIn();
})
.mouseout(function() {
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

$(window).resize(function(){
  if ($(window).width() <= 520) {

  }
});
