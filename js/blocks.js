if ($(window).width() <= 870) {
  camera.fov = 50;
  camera.updateProjectionMatrix();
};

$('div#WebGL-output').on({
  'mouseover': function(){
    $(this).find('canvas').css('cursor', 'grab')
  },
  'mousedown': function(){
    $(this).find('canvas').css('cursor', 'grabbing')
  },
  'mouseup': function(){
    $(this).find('canvas').css('cursor', 'grab')
  }
})

window.addEventListener('resize', onResize, false);

function onResize() {
  if ($(window).width() <= 576) {
    camera.fov = 50;
    camera.updateProjectionMatrix();
  }else{
    camera.fov = 45;
    camera.updateProjectionMatrix();
  };
  $(window).width() >= 870 ? $('#menu').prop('checked', false) && check() : '';
};

function check() {
  if ($('#menu').prop('checked') === true){
    $('#collapse').prop('checked') === true ? $('#collapse').prop('checked', false) && collapse() : '';
    $('#top-menu').animate({
      'height': '96vh'
    }, 500, 'linear', function(){
      $('ul.menu-main').css("display", "block");
      $('#top-menu').css('overflow', 'auto');
      $('#cut').prop('checked') !== true ? $('#playPause').prop('checked', true) && playPause() : '';
    })
  }else{
    $('#cut').prop('checked') !== true ? $('#playPause').prop('checked', false) && playPause() : '';
    Math.round(($('#top-menu').height() / $(window).height())*100) !== 9 ? $('#top-menu').css('overflow-y', 'hidden') && $('#top-menu').animate({
      'height': '9vh'
    }, 500, 'linear', function(){
      $(window).width() <= 870 ? $('ul.menu-main').css("display", "none") : $('ul.menu-main').css("display", "block");
      $('#top-menu').css('overflow', '');
    }) : $(window).width() >= 870 ? $('#menu-main').css("display", "block") : $('#menu-main').css("display", "none");
  };
};
function collapse() {
  if ($('#collapse').prop('checked') === true){
    $('#menu').prop('checked') === true ? $('#menu').prop('checked', false) && check() : '';
    $('#infp').css("display", "block");
    $('#label').css("transform", "rotateX(180deg)");
    $('#inf').animate({
      'top': '9%'
    }, 500, 'linear', function(){
      $('#cut').prop('checked') !== true ? $('#playPause').prop('checked', true) && playPause() : '';
    })
  }else{
    $('#collapseOne').collapse('hide');
    $('#label').css("transform", "rotateX(0deg)");
    $('#cut').prop('checked') !== true ? $('#playPause').prop('checked', false) && playPause() : '';
    $('#inf').animate({
      'top': '96%'
    }, 500, 'linear', function(){
      $('#infp').css("display", "none");
    })
  };
};

function playPause() {
  if ($('#playPause').prop('checked') === true) {
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
    clRot = 0.003;
    spRot = 0.001;
  };
};