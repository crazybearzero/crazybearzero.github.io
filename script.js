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
});

function appearTitle (elt, test) {
  $(elt).addClass(test);
}

function disapearTitle (elt, test) {
  $(elt).removeClass(test);
}