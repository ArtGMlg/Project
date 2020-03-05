var height = $(window).height();

if ($(window).width() <= 870) {
  $('#menu-main').css("display","none");
  document.getElementById('top-menu').style.height = height*0.09 + "px";
  camera.position.set(0,0,-9);
}

window.addEventListener('resize', onResize, false);

function onResize() {
  height = $(window).height();
  if ($(window).width() <= 870) {
    document.getElementById('menu-main').style.display = "none";
    document.getElementById('top-menu').style.height = height*0.09 + "px";
    camera.position.set(0,0,-9);
  }else{
    document.getElementById('menu-main').style.display = "inline-block";
    camera.position.set(0,0,-7);
  }
};

function check() {
  if (document.getElementById('menu').checked){
    document.getElementById('menu-main').style.display = "block";
    document.getElementById('top-menu').style.height = height*0.96 + "px";
    $('#collapse').prop('checked', false);
    collapse();
  }else{
    //document.getElementById('menu-main').style.display = "none";
    document.getElementById('top-menu').style.height = height*0.09 + "px";
    if($(window).width() <= 870) setTimeout(display, 500);
  };
};
function collapse() {
  if (document.getElementById('collapse').checked){
    document.getElementById('inf').style.top = "9%";
    document.getElementById('label').style.transform = "rotateX(180deg)";
    document.getElementById('infp').style.display = "block";
    $('#menu').prop('checked', false);
    check();
  }else{
    document.getElementById('inf').style.top = "96%";
    setTimeout(infp, 500);
    document.getElementById('label').style.transform = "rotateX(360deg)";
  };
};

function display(){
    document.getElementById('menu-main').style.display = "none";
}

function infp(){
    document.getElementById('infp').style.display = "none";
};