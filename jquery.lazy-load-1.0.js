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

 (function($) {
     $.fn.lazyload = function() {
         var images = this,
             win = $(window),
             showVisible;
         (showVisible = function() {
             images = $.grep(images, function(el, i) {
                 var img = $(el),
                     imgTop = img.offset().top,
                     winTop = win.scrollTop() + win.height() + 100;
                 if(winTop > imgTop) {
                     img.attr('src', img.data('src')).fadeIn()
                     return false;
                 }
                 return true;
             });
         }).call();
         win.on('scroll', function() { showVisible(); });
     }
 })(jQuery);