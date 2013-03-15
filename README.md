jQuery Lazy Load Plugin
================================

How to use
-------------------------

Call jQuery and jQuery Lazy Load plugin

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script src="jquery.lazyload.min.js"></script>

Call plugin function.

    <script>
    $(function() {
        $('img.lazy-load').lazyLoad();
    });
    </script>

Use data-src to your images

    <img src="replace.png" data-src="http://andafter.org/media/blogs/eucompraria/shop/images/products/cortador-papel/cortador-papel4.jpg" class="lazy-load" />
