/*
 * jQuery Lazy Load Plugin v1.0
 * http://andafter.org/labs/lazyload
 * https://github.com/gserrano/jQuery-Lazy-Load
 *
 * Copyright 2011, Guilherme Serrano - http://guilhermeserrano.com.br
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Required: jQuery
 */

(function($){
$.fn.lazyLoad = function() {
   var images = this;

   var showVisible;
   (showVisible = function (){
      images = $.grep(images, function(el,index){
         var img = $(el);
         var imgTop = img.offset().top, wTop = $(window).scrollTop() + $(window).height() + 100;
         if(wTop > imgTop){ 
            img.attr('src', img.data('src')).fadeIn();
            return false;
         }
         return true;
      });

   }).call();
   $(window).scroll(function(){ showVisible(); });
};
})( jQuery );