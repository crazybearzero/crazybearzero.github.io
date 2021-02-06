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

  animName();

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

  moveBackground();

  $('.sixth__global .grid').masonry({
    columnWidth: '.grid-sizer',
    itemSelector: '.grid-item',
    percentPosition: true,
    gutter: 32,
    horizontalOrder: true,
    fitWidth: true
  });

});

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

function appearTitle (elt, test) {
  $(elt).addClass(test);
}

function disapearTitle (elt, test) {
  $(elt).removeClass(test);
}

function openlayer(showLayer) {
  $(showLayer).addClass('-showLayer');
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
  translate2 = 'translate(' + x/1.4 + 'px, ' + y/1.4 + 'px) scale(1.1)';
  translate3 = 'translate(' + x/2.3 + 'px, ' + y/2.3 + 'px) scale(1.1)';

  jQuery('.forth__bg, .sekiro__bg, .sekiro img, .sixth__bg').css({
  '-webit-transform': translate,
  '-moz-transform': translate,
  'transform': translate
  });

  jQuery('.sekiro .-paraone').css({
    '-webit-transform': translate2,
    '-moz-transform': translate2,
    'transform': translate2
  });

  jQuery('.sekiro -paratwo').css({
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