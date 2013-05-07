/*!
 * jquery.replacesvg.js
 *
 * @modified  2013/05/08
 * @requires  jQuery 1.7.x or later
 * @version   1.0.4
 * @author    FiNGAHOLiC
 * @link      https://github.com/FiNGAHOLiC/jquery.replacesvg
 * @license   The MIT License
 *
 */

;(function($, window, document, undefined){

	$.fn.replacesvg = function(options){
		var o = $.extend({
			defaultSVG: false,
			dataname: 'altimgsrc',
			ns: 'http://www.w3.org/2000/svg'
		}, options),
		f = (function(){
			var bln = (
				!!document.createElementNS &&
				!!document.createElementNS(o.ns, 'svg').createSVGRect
			);
			return function(){ return bln; };
		}()),
		support = f();
		if(
			!support && o.defaultSVG ||
			support && !o.defaultSVG
		){
			return this.each(function(){
				var dataname = $(this).data(o.dataname);
				if(dataname) $(this).attr('src', dataname);
			});
		};

	};

})(jQuery, window, this.document);
