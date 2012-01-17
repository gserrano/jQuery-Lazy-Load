/*
 * jQuery LazyLoad Plugin v0.5
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
   var images = this,
       classe = this.selector.replace('.','');
   showVisible();
   $(window).scroll(function(){ showVisible(); })
   function showVisible(){
      images.each(function(){
         var img = $(this);
         if(img.hasClass(classe)){
            var imgTop = img.offset().top, wTop = $(window).scrollTop() + $(window).height() + 100;
            if(wTop > imgTop){ 
               img.removeClass(classe).attr('src', img.data('src')).fadeIn();
            } 
         }
      })
   }
};
})( jQuery );