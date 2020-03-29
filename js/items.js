var height = $(window).height();
var width = $(window).width();

$("#collapse").prop("disabled", false);

$('#content').css('height', height);
$('#content').css('width', width*0.35);
$('.labelS').css({
  'height': height,
  'padding-top': height*0.40 + "px"
});

window.addEventListener('resize', onResize, false);

function onResize() {
  height = $(window).height();
  width = $(window).width();
  $('#content').css('height', height);
  $('#content').css('width', width*0.35);
  $('.labelS').css({
    'height': height,
    'padding-top': height*0.40 + "px"
  });
};

function collapse() {
  if (document.getElementById('collapse').checked){
    $('#content').css("left", "65%");
    $('#label').css("transform", "rotate(180deg)");
    setTimeout(display, 500);
  }else{
    $('#content').css("left", "98%");
    setTimeout(hide, 500);
    $('#label').css("transform", "rotate(360deg)");
  };
};

function display() {
  $('#list').css('display', "block");
  $('#list').css('opacity', "1");
}

function hide() {
  $('#list').css("display", "none");
}

function Inf(constellationName) {
  switch(constellationName){
    case 'ursaMin':
      $('#list').css('opacity', "0");
      setTimeout(hide, 500);
      $('#ursaMin').css('display', "block");
      $('#ursaMin').css('opacity', "1");
      camera.lookAt(ursam.position);
      $("#collapse").prop("disabled", true);
      break;
    case 'draco':
      $('#list').css('opacity', "0");
      setTimeout(hide, 500);
      $('#draco').css('display', "block");
      $('#draco').css('opacity', "1");
      camera.lookAt(draco.position);
      $("#collapse").prop("disabled", true);
      break;
    case 'casiopea':
      $('#list').css('opacity', "0");
      setTimeout(hide, 500);
      $('#casiopea').css('display', "block");
      $('#casiopea').css('opacity', "1");
      camera.lookAt(casiopea.position);
      $("#collapse").prop("disabled", true);
      break;
    case 'camelopardus':
      $('#list').css('opacity', "0");
      setTimeout(hide, 500);
      $('#camelopardus').css('display', "block");
      $('#camelopardus').css('opacity', "1");
      camera.lookAt(camelopardus.position);
      $("#collapse").prop("disabled", true);
      break;
    case 'cepheus':
      $('#list').css('opacity', "0");
      setTimeout(hide, 500);
      $('#cepheus').css('display', "block");
      $('#cepheus').css('opacity', "1");
      camera.lookAt(cepheus.position);
      $("#collapse").prop("disabled", true);
      break;
    case 'ursaMaj':
      $('#list').css('opacity', "0");
      setTimeout(hide, 500);
      $('#ursaMaj').css('display', "block");
      $('#ursaMaj').css('opacity', "1");
      camera.lookAt(ursaMaj.position);
      $("#collapse").prop("disabled", true);
      break;
    case 'leoMin':
      $('#list').css('opacity', "0");
      setTimeout(hide, 500);
      $('#leoMin').css('display', "block");
      $('#leoMin').css('opacity', "1");
      camera.lookAt(leoMin.position);
      $("#collapse").prop("disabled", true);
      break;
    case 'canesVinatici':
      $('#list').css('opacity', "0");
      setTimeout(hide, 500);
      $('#canesVinatici').css('display', "block");
      $('#canesVinatici').css('opacity', "1");
      camera.lookAt(canesVinatici.position);
      $("#collapse").prop("disabled", true);
      break;
    case 'booties':
      $('#list').css('opacity', "0");
      setTimeout(hide, 500);
      $('#booties').css('display', "block");
      $('#booties').css('opacity', "1");
      camera.lookAt(booties.position);
      $("#collapse").prop("disabled", true);
      break;
    case 'coronaBorealis':
      $('#list').css('opacity', "0");
      setTimeout(hide, 500);
      $('#coronaBorealis').css('display', "block");
      $('#coronaBorealis').css('opacity', "1");
      camera.lookAt(coronaBorealis.position);
      $("#collapse").prop("disabled", true);
      break;
    case 'hercules':
      $('#list').css('opacity', "0");
      setTimeout(hide, 500);
      $('#hercules').css('display', "block");
      $('#hercules').css('opacity', "1");
      camera.lookAt(hercules.position);
      $("#collapse").prop("disabled", true);
      break;
    case 'lyra':
      $('#list').css('opacity', "0");
      setTimeout(hide, 500);
      $('#lyra').css('display', "block");
      $('#lyra').css('opacity', "1");
      camera.lookAt(lyra.position);
      $("#collapse").prop("disabled", true);
      break;
    case 'cygnus':
      $('#list').css('opacity', "0");
      setTimeout(hide, 500);
      $('#cygnus').css('display', "block");
      $('#cygnus').css('opacity', "1");
      camera.lookAt(cygnus.position);
      $("#collapse").prop("disabled", true);
      break;
    case 'lacerta':
      $('#list').css('opacity', "0");
      setTimeout(hide, 500);
      $('#lacerta').css('display', "block");
      $('#lacerta').css('opacity', "1");
      camera.lookAt(lacerta.position);
      $("#collapse").prop("disabled", true);
      break;
    case 'pegasusAndromeda':
      $('#list').css('opacity', "0");
      setTimeout(hide, 500);
      $('#pegasusAndromeda').css('display', "block");
      $('#pegasusAndromeda').css('opacity', "1");
      camera.lookAt(pegasusAndromeda.position);
      $("#collapse").prop("disabled", true);
      break;
    case 'perseus':
      $('#list').css('opacity', "0");
      setTimeout(hide, 500);
      $('#perseus').css('display', "block");
      $('#perseus').css('opacity', "1");
      camera.lookAt(perseus.position);
      $("#collapse").prop("disabled", true);
      break;
    case 'triangulum':
      $('#list').css('opacity', "0");
      setTimeout(hide, 500);
      $('#triangulum').css('display', "block");
      $('#triangulum').css('opacity', "1");
      camera.lookAt(triangulum.position);
      $("#collapse").prop("disabled", true);
      break;
    case 'auriga':
      $('#list').css('opacity', "0");
      setTimeout(hide, 500);
      $('#auriga').css('display', "block");
      $('#auriga').css('opacity', "1");
      camera.lookAt(auriga.position);
      $("#collapse").prop("disabled", true);
      break;
    case 'gemini':
      $('#list').css('opacity', "0");
      setTimeout(hide, 500);
      $('#gemini').css('display', "block");
      $('#gemini').css('opacity', "1");
      camera.lookAt(gemini.position);
      $("#collapse").prop("disabled", true);
      break;
    case 'lynx':
      $('#list').css('opacity', "0");
      setTimeout(hide, 500);
      $('#lynx').css('display', "block");
      $('#lynx').css('opacity', "1");
      camera.lookAt(lynx.position);
      $("#collapse").prop("disabled", true);
      break;
  }
};

function back() {
  $('.constellation').css('opacity', '0');
  setTimeout(consHide, 500);
  $("#collapse").prop("disabled", false);
  controls.update();
};

function consHide() {
  $('.constellation').css('display', 'none');
  $('#list').css('display', "block");
  $('#list').css('opacity', "1");
};