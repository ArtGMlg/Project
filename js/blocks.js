var height = $(window).height();

if ($(window).width() <= 870) {
  camera.position.set(0,0,-9);
  $('#menu-main').css("display","none");
  $('#range-div').css("display", "none");
  $('#top-menu').css("height", height*0.09 + "px");
  $('#menu-main').css("font-size", "14px");
}

window.addEventListener('resize', onResize, false);

function onResize() {
  height = $(window).height();
  if ($(window).width() <= 870) {
    camera.position.set(0,0,-9);
    $('#menu-main').css("display","none");
    $('#range-div').css("display", "none");
    $('#top-menu').css("height", height*0.09 + "px");
  }else{
    camera.position.set(0,0,-7);
    $('#menu-main').css("display", "inline-block");
    $('#range-div').css("display", "");
    $('#menu').prop('checked', false);
    check();
  };
};

function check() {
  if (document.getElementById('menu').checked){
    $('#menu-main').css("display", "block");
    $('#top-menu').css("height", height*0.96 + "px");
    $('#collapse').prop('checked', false);
    collapse();
  }else{
    //document.getElementById('menu-main').style.display = "none";
    $('#top-menu').css("height", height*0.09 + "px")
    if($(window).width() <= 870) setTimeout(display, 500);
  };
};
function collapse() {
  if (document.getElementById('collapse').checked){
    $('#inf').css("top", "9%");
    $('#label').css("transform", "rotateX(180deg)");
    $('#infp').css("display", "block");
    $('#menu').prop('checked', false);
    check();
  }else{
    $('#inf').css("top", "96%");
    setTimeout(infp, 500);
    $('#label').css("transform", "rotateX(360deg)");
  };
};

function display(){
    $('#menu-main').css("display", "none");
}

function infp(){
    $('#infp').css("display", "none");
};