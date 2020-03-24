var height = $(window).height();
var width = $(window).width();

$('#quality').css('margin-left', width-200 + "px");

if (width <= 870) {
  camera.position.set(0,0,-9);
  $('#menu-main').css("display","none");
  $('#top-menu').css("height", height*0.09 + "px");
  $('#menu-main').css("font-size", "14px");
};

window.addEventListener('resize', onResize, false);

function onResize() {
  height = $(window).height();
  width = $(window).width();
  if (width <= 870) {
    camera.position.set(0,0,-9);
    $('#menu-main').css("display","none");
    $('#top-menu').css("height", height*0.09 + "px");
    $('#quality').css('margin-left', width-200 + "px");
  }else{
    camera.position.set(0,0,-7);
    $('#menu-main').css("display", "inline-block");
    $('#menu').prop('checked', false);
    $('#quality').css('margin-left', width-200 + "px");
    check();
  };
};

function check() {
  if (document.getElementById('menu').checked){
    $('#menu-main').css("display", "block");
    $('#top-menu').css("height", height*0.96 + "px");
    $('#collapse').prop('checked', false);
    collapse();
    $('#playPause').prop('checked', true);
    setTimeout(playPause, 500);
  }else{
    //document.getElementById('menu-main').style.display = "none";
    $('#top-menu').css("height", height*0.09 + "px");
    if($(window).width() <= 870){setTimeout(display, 500);};
    $('#playPause').prop('checked', false);
    playPause();
  };
};
function collapse() {
  if (document.getElementById('collapse').checked){
    $('#inf').css("top", "9%");
    $('#label').css("transform", "rotateX(180deg)");
    $('#infp').css("display", "block");
    $('#menu').prop('checked', false);
    check();
    $('#playPause').prop('checked', true);
    setTimeout(playPause, 500);
  }else{
    $('#inf').css("top", "96%");
    setTimeout(infp, 500);
    $('#label').css("transform", "rotateX(360deg)");
    $('#playPause').prop('checked', false);
    playPause();
  };
};

function display(){
  $('#menu-main').css("display", "none");
};

function infp(){
  $('#infp').css("display", "none");
};

function playPause() {
  if (document.getElementById('playPause').checked) {
    $('#pause').css("opacity", "0");
    $('#pause').css("display", "none");
    $('#play').css("display", "block");
    $('#play').css("opacity", "1");
    plRot = 0;
    clRot = 0;
    spRot = 0;
  }else{
    $('#play').css("opacity", "0");
    $('#play').css("display", "none");
    $('#pause').css("display", "block");
    $('#pause').css("opacity", "1");
    plRot = 0.002;
    clRot = 0.0011;
    spRot = 0.001;
    controls.rotateSpeed = 1.0;
    if (document.getElementById('cut').checked) {
      $('#cut').prop('checked', false);
      uncut();
    };
  };
};