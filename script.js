$(document).ready( function() {

  var windowWidth = jQuery(window).width();
  $('a[href^="#"]').click(function(e){
    var the_id = $(this).attr("href");
    if(windowWidth < 768){
      var srlh = 30;
    } else{
      var srlh = 0;
    }
    $('html, body').animate({
      scrollTop:$(the_id).offset().top + srlh
    }, 'slow');
    e.preventDefault();
    return false;
  });

  $('.js-replay').on('click', function() {
    $('.replay').removeClass('-animEnded');
    $('.title span').removeClass('-appear -colored -sized');
    animName();
  });

  $(window).scroll(function (event) {
    var viewportHeight = $(window).height();
    var scroll = $(window).scrollTop() + 300;
    if(scroll > viewportHeight) {
      $('.twitch__chat').addClass('-showTwitch');
    } else {
      $('.twitch__chat').removeClass('-showTwitch');
    }

    $(".js-onview, .credits").each(function() {
      if (isScrolledIntoView($(this))) {
        $(this).addClass("-reveal");
      }
    });
    
  });

  $('.js-motivone').on('click', function() {
    openlayer('.layer__motivone');
  });

  $('.js-motivtwo').on('click', function() {
    if($(this).hasClass('-jebaited')) {
      $('.jebaited').show();
    }
    openlayer('.layer__motivtwo');
  });

  $('.js-close').on('click', function() {
    $('.layer__motiv').removeClass('-showLayer');
    $('.jebaited').hide();
    $('body').removeClass('-overflow');
  });

  $(document).mouseup(function(e) {
    var container = $(".layer__motiv .left");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $(".layer__motiv").removeClass('-showLayer');
    }
  });

  $(window).on('mousemove click', function(e) {
    var lMouseX = Math.max(-300, Math.min(300, $(window).width() / 2 - e.clientX));
    var lMouseY = Math.max(-200, Math.min(200, $(window).height() / 2 - e.clientY));
    lFollowX = (20 * lMouseX) / 150; // 100 : 12 = lMouxeX : lFollow
    lFollowY = (10 * lMouseY) / 150;
  });

  jQuery.rnd = function(m,n) {
    m = parseInt(m);
    n = parseInt(n);
    return Math.floor( Math.random() * (n - m + 1) ) + m;
  }

  openDoors();
  confettiCredits();
});

function openDoors() {
  $('.intro__bear').on('click', function() {
    $('.intro__left, .intro__right').addClass('-doorsOpened');
    
    setTimeout(function(){
      animName();
    }, 200);

    setTimeout(function(){
      $('body').removeClass('-overflowStart');
      $('.intro__arrowdown').addClass('-arrowShow');
      initparticles();
      moveBackground();
      masonry();
    }, 10000)
  });
}

function animName() {
  setTimeout(function(){ appearTitle('#title1', '-appear') }, 2500);
  setTimeout(function(){ appearTitle('#title2', '-appear') }, 2900);
  setTimeout(function(){ appearTitle('#title3', '-appear') }, 3300);
  setTimeout(function(){ appearTitle('#title4', '-appear') }, 4100);
  setTimeout(function(){ appearTitle('#title5', '-appear') }, 4200);
  setTimeout(function(){ appearTitle('#title6', '-appear -sized') }, 7800);
  setTimeout(function(){ appearTitle('#title7', '-appear') }, 4400);
  setTimeout(function(){ appearTitle('#title8', '-appear') }, 4500);
  setTimeout(function(){ appearTitle('#title9', '-appear') }, 4800);
  setTimeout(function(){ appearTitle('#title10', '-appear') }, 4800);
  setTimeout(function(){ appearTitle('#title11', '-appear') }, 4900);
  setTimeout(function(){ appearTitle('#title12', '-appear') }, 5200);
  setTimeout(function(){ appearTitle('#title13', '-appear') }, 5700);

  setTimeout(function(){ appearTitle('#title6', '-appear') }, 1800);
  setTimeout(function(){ disapearTitle('#title6', '-appear') }, 2600);
  setTimeout(function(){ disapearTitle('#title6', '-sized') }, 9200);
  setTimeout(function(){ appearTitle('#title10', '-appear') }, 2600);
  setTimeout(function(){ disapearTitle('#title10', '-appear') }, 3300);
  setTimeout(function(){ appearTitle('#title13', '-appear') }, 2800);
  setTimeout(function(){ disapearTitle('#title13', '-appear') }, 3500);

  setTimeout(function(){ appearTitle('#title1', '-colored') }, 10000);
  setTimeout(function(){ disapearTitle('#title1', '-colored') }, 10500);
  setTimeout(function(){ appearTitle('#title1', '-colored') }, 10700);
  setTimeout(function(){ disapearTitle('#title1', '-colored') }, 10800);
  setTimeout(function(){ appearTitle('#title1', '-colored') }, 10900);
  setTimeout(function(){ appearTitle('#title6', '-colored') }, 10000);
  setTimeout(function(){ appearTitle('#title10', '-colored') }, 10000);
  setTimeout(function(){ disapearTitle('#title10', '-colored') }, 10400);
  setTimeout(function(){ appearTitle('#title10', '-colored') }, 10500);

  setTimeout(function(){ appearTitle('.subtitle span', '-reveal') }, 10700);

  setTimeout(function(){ appearTitle('.replay', '-animEnded') }, 11000);
}

function appearTitle (elt, eltclass) {
  $(elt).addClass(eltclass);
}

function disapearTitle (elt, eltclass) {
  $(elt).removeClass(eltclass);
}

function openlayer(showLayer) {
  $(showLayer).addClass('-showLayer');
  $('body').addClass('-overflow');
}

var lFollowX = 0,
lFollowY = 0,
x = 0,
y = 0,
friction = 1 / 10;

function moveBackground(){
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;

  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';
  translate2 = 'translate(' + x/1.2 + 'px, ' + y/1.2 + 'px) scale(1.1)';
  translate3 = 'translate(' + x/4.3 + 'px, ' + y/2.3 + 'px) scale(1.1)';

  jQuery('.forth__bg, .impossible__bg ').css({
  '-webit-transform': translate,
  '-moz-transform': translate,
  'transform': translate
  });

  jQuery('.impossible__lulw .-paratwo, .sixth__bg').css({
    '-webit-transform': translate2,
    '-moz-transform': translate2,
    'transform': translate2
  });

  jQuery('.second__icon svg, span .impossible__lulw .-paraone, .forth__number span').css({
    '-webit-transform': translate3,
    '-moz-transform': translate3,
    'transform': translate3
  });

  window.requestAnimationFrame(moveBackground);
}

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function initparticles() {
  confetti();
}

function confetti() {
  $.each($(".particletext.confetti"), function(){
     var confetticount = ($(this).width()/50)*10;
     for(var i = 0; i <= confetticount; i++) {
        $(this).append('<span class="particle c' + $.rnd(1,4) + '" style="top:' + $.rnd(10,50) + '%; left:' + $.rnd(0,100) + '%;width:' + $.rnd(6,8) + 'px; height:' + $.rnd(3,4) + 'px;animation-delay: ' + ($.rnd(0,80)/10) + 's;"></span>');
     }
  });
}

function confettiCredits() {
  var COLORS, Confetti, NUM_CONFETTI, PI_2, canvas, confetti, context, drawCircle, i, range, resizeWindow, xpos;
  NUM_CONFETTI = 350;
  COLORS = [[85, 71, 106], [174, 61, 99], [219, 56, 83], [244, 92, 68], [248, 182, 70]];
  PI_2 = 2 * Math.PI;
  canvas = document.getElementById("world");
  context = canvas.getContext("2d");

  window.w = 0;
  window.h = 0;

  resizeWindow = function() {
    window.w = canvas.width = window.innerWidth;
    return window.h = canvas.height = window.innerHeight;
  };

  window.addEventListener('resize', resizeWindow, false);

  window.onload = function() {
    return setTimeout(resizeWindow, 0);
  };

  range = function(a, b) {
    return (b - a) * Math.random() + a;
  };

  drawCircle = function(x, y, r, style) {
    context.beginPath();
    context.arc(x, y, r, 0, PI_2, false);
    context.fillStyle = style;
    return context.fill();
  };

  xpos = 0.5;

  document.onmousemove = function(e) {
    return xpos = e.pageX / w;
  };

  window.requestAnimationFrame = (function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
      return window.setTimeout(callback, 1000 / 60);
    };
  })();

  Confetti = (function() {
    function Confetti() {
      this.style = COLORS[~~range(0, 5)];
      this.rgb = "rgba(" + this.style[0] + "," + this.style[1] + "," + this.style[2];
      this.r = ~~range(2, 6);
      this.r2 = 2 * this.r;
      this.replace();
    }

    Confetti.prototype.replace = function() {
      this.opacity = 0;
      this.dop = 0.03 * range(1, 4);
      this.x = range(-this.r2, w - this.r2);
      this.y = range(-20, h - this.r2);
      this.xmax = w - this.r;
      this.ymax = h - this.r;
      this.vx = range(0, 2) + 8 * xpos - 5;
      return this.vy = 0.7 * this.r + range(-1, 1);
    };

    Confetti.prototype.draw = function() {
      var _ref;
      this.x += this.vx;
      this.y += this.vy;
      this.opacity += this.dop;
      if (this.opacity > 1) {
        this.opacity = 1;
        this.dop *= -1;
      }
      if (this.opacity < 0 || this.y > this.ymax) {
        this.replace();
      }
      if (!((0 < (_ref = this.x) && _ref < this.xmax))) {
        this.x = (this.x + this.xmax) % this.xmax;
      }
      return drawCircle(~~this.x, ~~this.y, this.r, this.rgb + "," + this.opacity + ")");
    };

    return Confetti;

  })();

  confetti = (function() {
    var _i, _results;
    _results = [];
    for (i = _i = 1; 1 <= NUM_CONFETTI ? _i <= NUM_CONFETTI : _i >= NUM_CONFETTI; i = 1 <= NUM_CONFETTI ? ++_i : --_i) {
      _results.push(new Confetti);
    }
    return _results;
  })();

  window.step = function() {
    var c, _i, _len, _results;
    requestAnimationFrame(step);
    context.clearRect(0, 0, w, h);
    _results = [];
    for (_i = 0, _len = confetti.length; _i < _len; _i++) {
      c = confetti[_i];
      _results.push(c.draw());
    }
    return _results;
  };

  step();
}

function masonry () {
  var $grid = $('.sixth__global .grid');
  $grid.imagesLoaded().done(function(){
    $grid.masonry({
      columnWidth: '.grid-sizer',
      itemSelector: '.grid-item',
      percentPosition: true,
      gutter: 30,
    });
  });
}