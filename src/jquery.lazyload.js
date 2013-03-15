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
             showVisible,
             img,
             top = {};
         (showVisible = function() {
             images = $.grep(images, function(el) {
                 img = $(el);
                 top.img = img.offset().top;
                 top.win = win.scrollTop() + win.height() + 100;
                 if(top.win > top.img) {
                     img.attr('src', img.data('src')).fadeIn();
                     return false;
                 }
                 return true;
             });
         })();
         win.on('scroll', showVisible);
     };
 })(jQuery);