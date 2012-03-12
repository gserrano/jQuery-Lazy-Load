/*
 * jQuery LazyLoad Plugin v1.0
 * http://odesenvolvedor.com.br/
 *
 * Copyright 2011, Guilherme Serrano - http://guilhermeserrano.com.br
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Required: jQuery Javascript Library
 * http://jquery.com/
 */

(function($){
$.fn.lazyLoad = function() {
   var images = this;
   showVisible();

   $(window).scroll(function(){ showVisible(); })
   
   function showVisible(){
      images = $.grep(images, function(el,index){
         var img = $(el);
            var imgTop = img.offset().top, wTop = $(window).scrollTop() + $(window).height() + 100;
            if(wTop > imgTop){ 
               img.attr('src', img.data('src')).fadeIn();
               return false;
            }else{
               return true;
            }
      })
   }
};
})( jQuery );