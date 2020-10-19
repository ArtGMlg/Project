//Проверяем поддерживает ли устройство WebGl
if (!Detector.webgl) Detector.addGetWebGLMessage();

//Создаем необходимые объекты и подключаем загрузчик текстур
var scene = new THREE.Scene(); 
var camera = new THREE.PerspectiveCamera(35 , window.innerWidth / window.innerHeight , 0.1, 1000); 
var renderer = new THREE.WebGLRenderer();
var loader = new THREE.TextureLoader();
loader.crossOrigin = '';
var controls;
window.scene = scene;
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

//Устанавливаем размер отрисованной области
renderer.setSize(window.innerWidth, window.innerHeight);

var links = ["https://i.ibb.co/nR0RC9f/ursaMin.png", "https://i.ibb.co/099R3vr/1.png", "https://i.ibb.co/xmCqZpF/Cepheus.png", "https://i.ibb.co/7RhZKNL/Ursa-Major.png", "https://i.ibb.co/ZXx2kR5/cassiopea.png","https://i.ibb.co/MhJLP5D/camelopadalis.png", "https://i.ibb.co/87qj0w0/hercules.png", "https://i.ibb.co/Hr2dFN6/corona-borealis.png", "https://i.ibb.co/g68k5rD/lyra.png", "https://i.ibb.co/fH5LgW7/Cygnus.png", "https://i.ibb.co/zS0t2HF/lacerta.png", "https://i.ibb.co/Z2xSbJk/Gemini.png", "https://i.ibb.co/dPr20cn/leo-minor.png", "https://i.ibb.co/mJRx2zP/pegasus-andromeda.png", "https://i.ibb.co/wgmBqXq/triangulum.png", "https://i.ibb.co/Ryq3V3H/booties.png", "https://i.ibb.co/PzQ5QFX/canes-vinatici.png", "https://i.ibb.co/jbfDpDf/lynx.png", "https://i.ibb.co/kgfH5mM/perseus.png", "https://i.ibb.co/xYWRTzV/auriga.png"];

//Проверяем ход загрузки текстур
THREE.DefaultLoadingManager.onProgress = function ( url, itemsLoaded, itemsTotal ) {
  console.log( 'Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
  $('.progress-bar').prop('aria-valuenow', itemsLoaded);  
  $('.progress-bar').text(Math.floor((itemsLoaded/itemsTotal)*100) + "%");
};

THREE.DefaultLoadingManager.onLoad = function ( ) {
  $('#loadingScreen').fadeOut(800).delay(800).remove();
  clearInterval(interval);
  console.log('Loading Complete!');
};

//Фон космоса - большая сфера
var spacetex = loader.load("https://i.ibb.co/NTMWckf/8k-stars-milky-way-optimized.jpg");
var spacesphereGeo = new THREE.SphereGeometry(20,20,20);
var spacesphereMat = new THREE.MeshBasicMaterial();
spacesphereMat.map = spacetex;

var spacesphere = new THREE.Mesh(spacesphereGeo,spacesphereMat);

//Фон необходимо отобразить с двух сторон сферы так как камера находится внутри нее
spacesphere.material.side = THREE.DoubleSide;

//spacesphere.material.map.wrapS = THREE.RepeatWrapping; 
//spacesphere.material.map.wrapT = THREE.RepeatWrapping;
//spacesphere.material.map.repeat.set( 4, 3);

spacesphere.position.x = 0; 
spacesphere.position.y = 0; 
spacesphere.position.z = 0; 

scene.add(spacesphere);

//Позиционируем камеру
camera.position.set(0,0,1);
camera.lookAt(0,0,0);

//Создаем источник света
var light = new THREE.AmbientLight(0xffffff, 1);
scene.add(light);

//Создаем все созвездия
var ursaMin = new THREE.PlaneGeometry(5.1,1.68,1,1);
var ursaplaneMaterial = new THREE.MeshBasicMaterial({map: loader.load(links[0]) , side: THREE.DoubleSide, transparent: true});
var ursam = new THREE.Mesh(ursaMin,ursaplaneMaterial);
ursam.position.set(0, 16.5, -10);
ursam.rotation.set(1.1, 0, -0.3);
ursam.uuid = 'ursam';
spacesphere.add(ursam);

var dracoPlane = new THREE.PlaneGeometry(8.9,5.3,1,1);
var dracoplaneMaterial = new THREE.MeshBasicMaterial({map: loader.load(links[1]) , side: THREE.DoubleSide, transparent: true});
var draco = new THREE.Mesh(dracoPlane,dracoplaneMaterial);
draco.position.set(1, 12, -10);
draco.rotation.set(1.1, 0, 0.76);
draco.uuid = 'draco';
spacesphere.add(draco);

var cepheusPlane = new THREE.PlaneGeometry(3.9,4.3,1,1);
var cepheusPlaneMaterial = new THREE.MeshBasicMaterial({map: loader.load(links[2]) , side: THREE.DoubleSide, transparent: true});
var cepheus = new THREE.Mesh(cepheusPlane,cepheusPlaneMaterial);
cepheus.position.set(-6, 11, -10);
cepheus.rotation.set(1, 0, -1);
cepheus.uuid = 'cepheus';
spacesphere.add(cepheus);

var ursaMajPlane = new THREE.PlaneGeometry(9.116,6.52,1,1);
var ursaMajPlaneMaterial = new THREE.MeshBasicMaterial({map: loader.load(links[3]) , side: THREE.DoubleSide, transparent: true});
var ursaMaj = new THREE.Mesh(ursaMajPlane,ursaMajPlaneMaterial);
ursaMaj.position.set(5.1, 14, -3.4);
ursaMaj.rotation.set(1.5, -0.5, 2.4);
ursaMaj.uuid = 'ursaMaj';
spacesphere.add(ursaMaj);

var casiopeaPlane = new THREE.PlaneGeometry(3.74,2.45,1,1);
var casiopeaPlaneMaterial = new THREE.MeshBasicMaterial({map: loader.load(links[4]) , side: THREE.DoubleSide, transparent: true});
var casiopea = new THREE.Mesh(casiopeaPlane,casiopeaPlaneMaterial);
casiopea.position.set(-10, 13.2, -7);
casiopea.rotation.set(0.84, 0.44, 4.96);
casiopea.uuid = 'casiopea';
spacesphere.add(casiopea);

var camelopardusPlane = new THREE.PlaneGeometry(3.514,5.16,1,1);
var camelopardusPlaneMaterial = new THREE.MeshBasicMaterial({map: loader.load(links[5]) , side: THREE.DoubleSide, transparent: true});
var camelopardus = new THREE.Mesh(camelopardusPlane,camelopardusPlaneMaterial);
camelopardus.position.set(-7, 17, -3.5);
camelopardus.rotation.set(1.2, 0.5, 1.5);
camelopardus.uuid = 'camelopardus';
spacesphere.add(camelopardus);

var herculesPlane = new THREE.PlaneGeometry(6.36,6.252,1,1);
var herculesPlaneMaterial = new THREE.MeshBasicMaterial({map: loader.load(links[6]) , side: THREE.DoubleSide, transparent: true});
var hercules = new THREE.Mesh(herculesPlane,herculesPlaneMaterial);
hercules.position.set(4, 3.5, -15.5);
hercules.rotation.z = 0.5;
hercules.uuid = 'hercules';
spacesphere.add(hercules);

var coronaPlane = new THREE.PlaneGeometry(2.3,1.8,1,1);
var coronaPlaneMaterial = new THREE.MeshBasicMaterial({map: loader.load(links[7]) , side: THREE.DoubleSide, transparent: true});
var coronaBorealis = new THREE.Mesh(coronaPlane,coronaPlaneMaterial);
coronaBorealis.position.set(8, 4.62, -14);
coronaBorealis.rotation.z = 0.5;
coronaBorealis.uuid = 'coronaBorealis';
spacesphere.add(coronaBorealis);

var lyraPlane = new THREE.PlaneGeometry(1.6,1.5,1,1);
var lyraPlaneMaterial = new THREE.MeshBasicMaterial({map: loader.load(links[8]) , side: THREE.DoubleSide, transparent: true});
var lyra = new THREE.Mesh(lyraPlane,lyraPlaneMaterial);
lyra.position.set(-2, 3, -16.1);
lyra.rotation.z = 0.35;
lyra.uuid = 'lyra';
spacesphere.add(lyra);

var cygnusPlane = new THREE.PlaneGeometry(6.89,5.04,1,1);
var cygnusPlaneMaterial = new THREE.MeshBasicMaterial({map: loader.load(links[9]) , side: THREE.DoubleSide, transparent: true});
var cygnus = new THREE.Mesh(cygnusPlane,cygnusPlaneMaterial);
cygnus.position.set(-6.5, 2.6, -12);
cygnus.rotation.z += 0.2;
cygnus.uuid = 'cygnus';
spacesphere.add(cygnus);

var lacertaPlane = new THREE.PlaneGeometry(1.36,3.2,1,1);
var lacertaPlaneMaterial = new THREE.MeshBasicMaterial({map: loader.load(links[10]) , side: THREE.DoubleSide, transparent: true});
var lacerta = new THREE.Mesh(lacertaPlane,lacertaPlaneMaterial);
lacerta.position.set(-9.3, 6.6, -9.2);
lacerta.rotation.set(0.5, 0.5, -0.2);
lacerta.uuid = 'lacerta';
spacesphere.add(lacerta);

var geminiPlane = new THREE.PlaneGeometry(6.86,6.3,1,1);
var geminiPlaneMaterial = new THREE.MeshBasicMaterial({map: loader.load(links[11]) , side: THREE.DoubleSide, transparent: true});
var gemini = new THREE.Mesh(geminiPlane,geminiPlaneMaterial);
gemini.position.set(1.66, 15.52, 8.6);
gemini.rotation.set(2.1, 0.02, 2.68);
gemini.uuid = 'gemini';
spacesphere.add(gemini);

var leoMinPlane = new THREE.PlaneGeometry(3.68,0.93,1,1);
var leoMinPlaneMaterial = new THREE.MeshBasicMaterial({map: loader.load(links[12]) , side: THREE.DoubleSide, transparent: true});
var leoMin = new THREE.Mesh(leoMinPlane,leoMinPlaneMaterial);
leoMin.position.set(10,15,-0.4);
leoMin.rotation.set(1.3, -0.56, 1.46);
leoMin.uuid = 'leoMin';
spacesphere.add(leoMin);

var pegasusAndromedaPlane = new THREE.PlaneGeometry(14.4,8.2,1,1);
var pegasusAndromedaPlaneMaterial = new THREE.MeshBasicMaterial({map: loader.load(links[13]) , side: THREE.DoubleSide, transparent: true});
var pegasusAndromeda = new THREE.Mesh(pegasusAndromedaPlane,pegasusAndromedaPlaneMaterial);
pegasusAndromeda.position.set(-14.3, 6.4, -7.5);
pegasusAndromeda.rotation.set(0.6, 1, 4.5);
pegasusAndromeda.uuid = 'pegasusAndromeda';
spacesphere.add(pegasusAndromeda);

var triangulumPlane = new THREE.PlaneGeometry(3.5*0.7,2.3*0.7,1,1);
var triangulumPlaneMaterial = new THREE.MeshBasicMaterial({map: loader.load(links[14]) , side: THREE.DoubleSide, transparent: true});
var triangulum = new THREE.Mesh(triangulumPlane,triangulumPlaneMaterial);
triangulum.position.set(-14.3, 9.3, -0.1);
triangulum.rotation.set(0.3, 1.4, -1.4);
triangulum.uuid = 'triangulum';
spacesphere.add(triangulum);

var bootiesPlane = new THREE.PlaneGeometry(3.2*1.3,3.7*1.3,1,1);
var bootiesPlaneMaterial = new THREE.MeshBasicMaterial({map: loader.load(links[15]) , side: THREE.DoubleSide, transparent: true});
var booties = new THREE.Mesh(bootiesPlane,bootiesPlaneMaterial);
booties.position.set(9.5, 6.3, -10);
booties.rotation.set(0, -0.6, 0.6);
booties.uuid = 'booties';
spacesphere.add(booties);

var canesVinaticiPlane = new THREE.PlaneGeometry(2.32*0.7,1.99*0.7,1,1);
var canesVinaticiPlaneMaterial = new THREE.MeshBasicMaterial({map: loader.load(links[16]) , side: THREE.DoubleSide, transparent: true});
var canesVinatici = new THREE.Mesh(canesVinaticiPlane,canesVinaticiPlaneMaterial);
canesVinatici.position.set(6, 14, 12.3);
canesVinatici.rotation.set(-0.8, 0, -1.3);
canesVinatici.uuid = 'canesVinatici';
spacesphere.add(canesVinatici);

var lynxPlane = new THREE.PlaneGeometry(18.5*0.5,17.16*0.5,1,1);
var lynxPlaneMaterial = new THREE.MeshBasicMaterial({map: loader.load(links[17]) , side: THREE.DoubleSide, transparent: true});
var lynx = new THREE.Mesh(lynxPlane,lynxPlaneMaterial);
lynx.position.set(1.5, 11.5, 1.9);
lynx.rotation.set(1.5, -0.3, 2.5);
lynx.uuid = 'lynx';
spacesphere.add(lynx);

var perseusPlane = new THREE.PlaneGeometry(2.25*1.2,5.38*1.2,1,1);
var perseusPlaneMaterial = new THREE.MeshBasicMaterial({map: loader.load(links[18]) , side: THREE.DoubleSide, transparent: true});
var perseus = new THREE.Mesh(perseusPlane,perseusPlaneMaterial);
perseus.position.set(-8.6, 13.3, 1.7);
perseus.rotation.set(1.3, 0.5, -3.3);
perseus.uuid = 'perseus';
spacesphere.add(perseus);

var aurigaPlane = new THREE.PlaneGeometry(1.76*1.8,3.56*1.8,1,1);
var aurigaPlaneMaterial = new THREE.MeshBasicMaterial({map: loader.load(links[19]) , side: THREE.DoubleSide, transparent: true});
var auriga = new THREE.Mesh(aurigaPlane,aurigaPlaneMaterial);
auriga.position.set(-3.4, 8.8, 4.7);
auriga.rotation.set(2.1, 0.02, 3.5);
auriga.uuid = 'auriga';
spacesphere.add(auriga);

//Прикрепляем к контейнеру то, что хотим отрисовать
$("#WebGL-output").append(renderer.domElement);

//Создаем инспектор событий, чтобы узнать, когда окно браузера уменьшится или увеличится
window.addEventListener('resize', onResize, false);

function onResize() {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = (window.innerWidth / window.innerHeight);
  camera.updateProjectionMatrix();
};

function is_touch_enabled() { 
  return ( 'ontouchstart' in window ) ||  
         ( navigator.maxTouchPoints > 0 ) || 
         ( navigator.msMaxTouchPoints > 0 ); 
} ;

$(function(){
  (function(window, document, undefined){
    'use strict';
    var start;
    var end;
    var delta;
    var el = document.getElementById("WebGL-output");

    if (is_touch_enabled() === false) {
      el.addEventListener("mousedown", function(){
        $(el).css('cursor', 'all-scroll');
        start = new Date();
      });

      el.addEventListener("mouseup", function(event) {
        $(el).css('cursor', 'unset');
        end = new Date();
        delta = (end - start) / 1000.0;
        if (delta <= 0.4) {
          mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
          mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

          raycaster.setFromCamera( mouse, camera );

          // calculate objects intersecting the picking ray
          var intersects = raycaster.intersectObjects( spacesphere.children );

          for ( var i = 0; i < intersects.length; i++ ) {
            $('.constellation').fadeOut(500);
            $("#collapse").prop('checked', true);
            Inf(intersects[ i ].object.uuid);
          }
        }
      });
    } else {
      el.addEventListener("touchstart", function(){
        start = new Date();
      });

      el.addEventListener("touchend", function(event) {
        console.log(event.changedTouches[0].clientX + '\n' + event.changedTouches[0].clientY);
        end = new Date();
        delta = (end - start) / 1000.0;
        if (delta <= 0.4) {
          mouse.x = ( event.changedTouches[0].clientX / window.innerWidth ) * 2 - 1;
          mouse.y = - ( event.changedTouches[0].clientY / window.innerHeight ) * 2 + 1;

          raycaster.setFromCamera( mouse, camera );

          // calculate objects intersecting the picking ray
          var intersects = raycaster.intersectObjects( spacesphere.children );

          for ( var i = 0; i < intersects.length; i++ ) {
            $('.constellation').fadeOut(500);
            $("#collapse").prop('checked', true);
            Inf(intersects[ i ].object.uuid);
          }
        }
      });
    }

})(window, document)})

//Добавляем способ контролирования положения камеры
controls = new THREE.OrbitControls( camera, renderer.domElement );

controls.enableDamping = false;

controls.rotateSpeed = 0.25;

controls.screenSpacePanning = false;

controls.minDistance = -6;
controls.maxDistance = 4;

controls.maxPolarAngle = Math.PI;


//Вызываем цикл прорисовки
render();

//Цикл прорисовки
function render() { 
  requestAnimationFrame(render);
  TWEEN.update();
  renderer.render(scene, camera); 
};