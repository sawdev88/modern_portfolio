$(function() {

  // Loop img side section on portfolio page
  var loopDivImgs = function() {
    $('.display-responsive').fadeIn().delay(10000).fadeOut();
    $('.display-toolbelt').delay(10500).fadeIn('slow').delay(10000).fadeOut('slow', loopDivImgs);
  };

  loopDivImgs();

  // Show about div. Hide about button on hero section
  var toggleAboutSection = function () {
    var $aboutButton = $('.about-button'),
        $removeButton = $('.remove'),
        $aboutP = $('.hero p'),
        $indexBody = $('#index'),
        $hero = $('.hero'),
        $about = $('.about');

    $aboutButton.on('click', function() {
      $(this).hide();
      $aboutP.css('margin-bottom', '0');
      $indexBody.css('overflow', 'scroll');

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
    $removeButton.on('click', function() {
      $aboutButton.fadeIn();
      $aboutP.css('margin-bottom', '10px');

      //Hide the hero modal
      $about.animate({
        top: 1000
      }, 'slow').fadeOut();

      // Set About panel back into place after hiding hero modal
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
      } else {
        $hero.animate({
            top: 100
        });
      }
    });
  }();

  // Top bar toggle show
  var toggleNav = function () {
    var $hideNav = $('.hide-nav'),
        $showNav = $('.show-nav'),
        $topBar = $('.top-bar');

    $showNav.on('click', function() {
      $(this).fadeOut('fast');
      $hideNav.fadeIn();
      $topBar.animate({
        left: 0
      });
    });

    // Top bar toggle hide
    $hideNav.on('click', function() {
      $(this).fadeOut();
      $showNav.fadeIn();
      $topBar.animate({
        left: 3000
      });
    });
  }();

    // PAGE NAV ARROWS <-- * -->
  var navArrows = function () {
    var rightDisplay = $('.port-display, .contact-display'),
        leftDisplay = $('.about-display, .port-display-left');

    // Right -->
    $('.contact-page span, .port-page span').mouseover(function() {
      $(this).fadeIn().css('color', '#fff');
      $(rightDisplay).fadeIn();
    })
    .mouseout(function() {
      $(this).css('color', 'rgba(255, 255, 255, 0.75)');
      $(rightDisplay).fadeOut();
    });

    // LEFT <--
    $('.about-page span, .port-page-left span').mouseover(function() {
      $(this).fadeIn().css('color', 'rgba(255, 255, 255, 0.75)');
      $(leftDisplay).fadeIn();
    })
    .mouseout(function() {
      $(this).css('color', 'rgba(255, 255, 255, 0.65)');
      $(leftDisplay).fadeOut();
    });
  }();

  //Set animation destination for flash arrow
  var distance = function() {
    var distanceDown;

    if ($(window).width() > 1400) {
      return distanceDown = 700;
    } else {
      return distanceDown = 550;
    }
  };

    // Flash arrow on portfolio page
  var flashDownArroww = function () {
    $('.down-arrow').fadeIn('slow').animate({
      top: distance()
    }).fadeOut('slow');
  }();

  // Have github icons fadeIn on hover of .work
  var fadeInGitHub = function () {
    $('.work').hover(function() {
      $('.work i').fadeIn();
    });
  }();

});
