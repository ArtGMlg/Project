var height = $(window).height();
var width = $(window).width();

window.addEventListener('resize', onResize, false);

function onResize() {
  height = $(window).height();
  width = $(window).width();
  width > 992 ? $('#constellationModal').modal('hide') : '';
}

$("#collapse").prop("disabled", false);

function collapse() {
  if (document.getElementById('collapse').checked){
    $('#content').css("left", "65%");
    $('#label').css("transform", "rotate(180deg)");
    for (var i = 0; i < $('.constellation').length; i++) {
      if ($('.constellation').eq(i).css('display') === 'block') {
        return
      }
    };
    $('#list').delay(500).fadeIn(500);
  }else{
    $('#content').css("left", "calc(100vw - 30px)");
    $('#list').delay(500).fadeOut(500);
    $('#label').css("transform", "rotate(360deg)");
  };
};

function Inf(constellationName) {
  for (var i = 0; i < spacesphere.children.length; i++) {
    if (spacesphere.children[i].uuid === constellationName) {
      animCamera(spacesphere.children[i].position);
    }
  };
  if (document.getElementById('collapse').checked) {
    $('#content').css("left", "65%");
    $('#label').css("transform", "rotate(180deg)");
  };
  $('#list').delay(500).fadeOut(500);
  $('#'+constellationName).delay(500).fadeIn(500);
  var constellationCard = $('#content').find('#' + constellationName);
  var modal = $('#constellationModal');
  modal.find('.modal-title').text(constellationCard.find('h2').text());
  modal.find('.modal-body').html(constellationCard.find('ul').html() + constellationCard.find('p').html() + constellationCard.find('a.btn')[0].outerHTML)
  width < 992 ? modal.modal('show') : '';
};

function back() {
  $('.constellation').fadeOut(500);
  $('#list').delay(500).fadeIn(500);
  $("#collapse").prop("disabled", false);
};

function consHide() {
  $('.constellation').css('display', 'none');
  $('#list').css('display', "block");
  $('#list').css('opacity', "1");
};

function animCamera(pos) {
  // backup original rotation
  var startRotation = new THREE.Euler().copy( camera.rotation );

  // final rotation (with lookAt)
  camera.lookAt( pos );
  var endRotation = new THREE.Euler().copy( camera.rotation );

  // revert to original rotation
  camera.rotation.copy( startRotation );

  // Tween
  var lookDirection = new THREE.Vector3();
  new TWEEN.Tween(camera.rotation).to({x: endRotation.x, y: endRotation.y, z: endRotation.z}, 500).easing(TWEEN.Easing.Circular.InOut).onComplete(function(){
      controls.enabled = true;
      camera.getWorldDirection( lookDirection );
      controls.target.copy( camera.position ).add( lookDirection.multiplyScalar( 1 ) );
  }).start()
}