var
  $about_button = $('.about_button'),
  $remove_button = $('.remove'),
  $hero = $('.hero'),
  $about = $('.about'),
  $about_p = $('.hero p'),
  $index_body = $('#index');

function loopDivs() {
  $('.display_responsive').fadeIn().delay(10000).fadeOut();
  $('.display_toolbelt').delay(10500).fadeIn('slow').delay(10000).fadeOut('slow', loopDivs);
}

$(function() {

  loopDivs();

  // Show about div. Hide about button on hero section
  $about_button.on('click', function() {
    $(this).hide();
    $about_p.css('margin-bottom', '0');
    $index_body.css('overflow', 'scroll');

    if ($(window).width() <= 520) {
      $hero.hide();
      $about.show().animate({
        top: 10
      }, 'slow');
    } else if ($(window).width() >= 1400) {
      $hero.animate({
        top: 100
      });
      $about.show().animate({
        top: 140
      }, 'slow');
    } else {
      $hero.animate({
        top: 10
      });
      $about.show().animate({
        top: 40
      }, 'slow');
    }
  });

  // Hide about div. Show hero button 
  $remove_button.on('click', function() {
    $about_button.fadeIn();
    $about_p.css('margin-bottom', '10px');

    if ($(window).width() <= 520) {
      $hero.fadeIn();
      $hero.animate({
        top: 60
      });
      $about.hide();
    } else if ($(window).width() >= 1400) {
      $hero.animate({
        top: 180
      });
      $about.hide();
    } else {
      $hero.animate({
        top: 100
      });
      $about.animate({
        top: 1000
      }, 'slow').fadeOut();
    }
  });

  // Top bar toggle show
  $('.show_nav').on('click', function() {
    $(this).fadeOut('fast');
    $('.hide_nav').fadeIn();
    $('.top_bar').animate({
      left: 0
    });
  })

  // Top bar toggle hide
  $('.hide_nav').on('click', function() {
    $(this).fadeOut();
    $('.show_nav').fadeIn();
    $('.top_bar').animate({
      left: 3000
    });
  })

  // PAGE NAV ARROWS
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

  var distance;
  if ($(window).width() > 1400) {
    distance = 700;
  } else {
    distance = 550;
  }
  $('.down_arrow').fadeIn('slow').animate({
    top: distance
  }).fadeOut('slow');

  $('.work').hover(function() {
    $('.work i').fadeIn();
  })

})
