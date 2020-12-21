$(function(){
    $(window).on('load', function(){
      $('[data-src]').each(function(){
        var $this = $(this),
            src = $(this).data('src');
        $this.attr('src', src);
        console.log(src);
      });
    });
  });