(function ($) {
 
});
function isOnScreen(){
  console.log($.fn);
  $.fn.isOnScreen = function(){
    var height = this.outerHeight();
    var width = this.outerWidth();
    if(!width || !height){
      return false;
    }

    var win = $(window);
    console.log(win);
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
  console.log('check');
  isOnScreen();
  $('.firm').each(function () {
    var cur = $(this)
    if (cur.isOnScreen(0.15, 0.15)) {
      if (!cur.hasClass('animated')) {
        cur.addClass('animated fadeInUp')
      }
    }
    $(window).scroll(function () {
      if (cur.isOnScreen(0.15, 0.15)) {
        if (!cur.hasClass('animated')) {
          cur.addClass('animated fadeInUp')
        }
      }
    })
  })
})
