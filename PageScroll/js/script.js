$(function () {
  $('a').click(function () {
    const speed = 400;
    const scroll = $(this).data('scroll');
    const target = $('div[data-scroll="' + scroll + '"]');
    $('body,html').animate({
      scrollTop: target.offset().top
    }, speed, 'swing');
  });
});