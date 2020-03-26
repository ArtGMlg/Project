var height = $(window).height();
var width = $(window).width();

$('#content').css('height', height);
$('#content').css('width', width*0.3);
$('.labelS').css({
  'height': height,
  'padding-top': height*0.40 + "px"
});

window.addEventListener('resize', onResize, false);

function onResize() {
  height = $(window).height();
  width = $(window).width();
  $('#content').css('height', height);
  $('#content').css('width', width*0.3);
  $('.labelS').css({
    'height': height,
    'padding-top': height*0.40 + "px"
  });
};

function collapse() {
  if (document.getElementById('collapse').checked){
    $('#content').css("left", "70%");
    $('#label').css("transform", "rotate(180deg)");
    setTimeout(display, 500);
  }else{
    $('#content').css("left", "98%");
    setTimeout(hide, 500);
    $('#label').css("transform", "rotate(360deg)");
  };
};

function display() {
  $('#list').css("display", "block");
}

function hide() {
  $('#list').css("display", "none");
}