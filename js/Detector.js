/**
 * @author alteredq / http://alteredqualia.com/
 * @author mr.doob / http://mrdoob.com/
 */

var Detector = {

	canvas: !! window.CanvasRenderingContext2D,
	webgl: ( function () {

		try {

			var canvas = document.createElement( 'canvas' ); return !! ( window.WebGLRenderingContext && ( canvas.getContext( 'webgl' ) || canvas.getContext( 'experimental-webgl' ) ) );

		} catch ( e ) {

			return false;

		}

	} )(),
	workers: !! window.Worker,
	fileapi: window.File && window.FileReader && window.FileList && window.Blob,

	getWebGLErrorMessage: function () {

		var element = document.createElement( 'div' );
		element.id = 'webgl-error-message';
		element.style.height = $(window).height() + "px";
		element.style.padding = $(window).height()*0.286 + "px" + " 0px" + " 0px" + " 0px";

		if ( ! this.webgl ) {

			element.innerHTML = window.WebGLRenderingContext ? [
				'<p>Кажется, Ваша видеокарта не поддерживает <a target="blank" href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">WebGL</a>.</p><br>',
				'<p>Вы можете узнать об этом <a href="http://get.webgl.org/" target="blank">здесь</a>.</p>'
			].join( '\n' ) : [
				'<p>Похоже Ваш браузер не поддерживает <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" target="blank">WebGL</a>.</p><br>',
				'<p>Узнайте как получить его <a href="http://get.webgl.org/" target="blank">здесь</a>.</p>'
			].join( '\n' );

		}

		return element;

	},

	addGetWebGLMessage: function ( parameters ) {

		$('#WebGL-output').remove();

		var parent, id, element;

		parameters = parameters || {};

		parent = parameters.parent !== undefined ? parameters.parent : document.body;
		id = parameters.id !== undefined ? parameters.id : 'oldie';

		element = Detector.getWebGLErrorMessage();
		element.id = id;

		parent.appendChild( element );

	}

};

// browserify support
if ( typeof module === 'object' ) {

	module.exports = Detector;

}
