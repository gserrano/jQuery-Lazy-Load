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
var images;
(function($){
$.fn.lazyLoad = function() {
   
   images = this;
   
   showVisible();
   console.log('lazyload');
   
   $(window).scroll(function(){ showVisible(); })
   
   function showVisible(){
      console.log('showvisible');
      console.log(images);
      images.each(function(index,value){
         var img = $(this);
            var imgTop = img.offset().top,wTop = $(window).scrollTop() + $(window).height() + 100;
            
            if(wTop > imgTop){ 
               img.attr('src', img.data('src')).fadeIn();
               //images.splice(index,1);
               //console.log(index);
            } 
      })
   }
};
})( jQuery );