/*
 * jQuery Lazy Load
 * https://github.com/gserrano/jQuery-Lazy-Load
 *
 * Copyright (c) 2013 Guilherme Serrano (http://guilhermeserrano.com.br)
 * Licensed under the MIT, GPL licenses.
 */

 (function($) {
     $.fn.lazyLoad = function() {
         var images = this,
             win = $(window),
             showVisible;
         (showVisible = function() {
             images = $.grep(images, function(el, i) {
                 var img = $(el),
                     imgTop = img.offset().top,
                     winTop = win.scrollTop() + win.height() + 100;
                 if(winTop > imgTop) {
                     img.attr('src', img.data('src')).fadeIn();
                     return false;
                 }
                 return true;
             });
         }).call();
         win.on('scroll', function() { showVisible(); });
     };
 })(jQuery);