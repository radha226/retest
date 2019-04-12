(function ($) {
 
});
function isOnScreen(){
  $.fn.isOnScreen = function(){
    var height = this.outerHeight();
    var width = this.outerWidth();
    if(!width || !height){
      return false;
    }

    var win = $(window);
    var viewport = {
      top : win.scrollTop(),
      left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + width;
    bounds.bottom = bounds.top + height;

    var deltas = {
      top : viewport.bottom - bounds.top,
      left: viewport.right - bounds.left,
      bottom: bounds.bottom - viewport.top,
      right: bounds.right - viewport.left
    };

    if(typeof test == 'function') {
      return test.call(this, deltas);
    }

    return deltas.top > 0
      && deltas.left > 0
      && deltas.right > 0
      && deltas.bottom > 0;
  };
}
$(document).ready(function(){
  isOnScreen();
  //navigaion
  $('.mobile-menu a').click(function(e){
    event.preventDefault();
    $(this).parents('header').addClass('active');
    $(this).parents('header').find('nav').slideToggle();
  })
  $('.banner').slick({
    infinite: true,
    autoplay: true,
    fade: true,
    cssEase: 'linear',
    dots: false,
    arrows: false,
  });
  // Animation
    window.setTimeout(function () {
      $('.banner').slick('slickPause');
      $('.slide-thumb').addClass('animated fadeIn');
    }, 0);
    window.setTimeout(function () {
      $('.round').addClass('animated slideInLeft');
    }, 200);
    window.setTimeout(function () {
      $('.slide-content .robot').addClass('animated slideInLeft');
    }, 800);
    window.setTimeout(function () {
      $('.slide-content h3').addClass('animated slideInLeft');
    }, 1000);
    window.setTimeout(function () {
      $('.slide-content h2').addClass('animated slideInLeft');
    }, 1500);
    window.setTimeout(function () {
      $('.slide-content a').addClass('animated slideInLeft');
    }, 2000);
    // Start slider once all elements are loaded
    window.setTimeout(function () {
      $('.banner').slick('slickPlay');
    }, 2500);

    // Before slide transition, remove all animation elements on previous slide
    $('.banner').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      $('.round, .slide-content h2,.slide-content .robot, .slide-content h3,.slide-content a ').removeClass('animated slideInLeft');
    });

    // After slide transition, animate boxes and plus sign
    $('.banner').on('afterChange', function (event, slick, currentSlide) {
      window.setTimeout(function () {
        $('.banner').slick('slickPause');
        $('.slide-thumb').addClass('animated fadeIn');
      }, 0);
      window.setTimeout(function () {
        $('.round').addClass('animated slideInLeft');
      }, 200);
      window.setTimeout(function () {
        $('.slide-content .robot').addClass('animated slideInLeft');
      }, 800);
      window.setTimeout(function () {
        $('.slide-content h3').addClass('animated slideInLeft');
      }, 1000);
      window.setTimeout(function () {
        $('.slide-content h2').addClass('animated slideInLeft');
      }, 1500);
      window.setTimeout(function () {
        $('.slide-content a').addClass('animated slideInLeft');
      }, 2000);
      // Start slider once all elements are loaded
      window.setTimeout(function () {
        $('.banner').slick('slickPlay');
      }, 2500);
    });

    // Page animation
    $('nav ul li').each(function () {
      var cur = $(this);
      if (cur.isOnScreen(0.15, 0.15)) {
        if (!cur.hasClass('animated')) {
          cur.addClass('animated fadeInUp');
        }
      }
      $(window).scroll(function () {
      if (cur.isOnScreen(0.15, 0.15)) {
        if (!cur.hasClass('animated')) {
          cur.addClass('animated fadeInUp');
        }
      }
    });
  });
})
