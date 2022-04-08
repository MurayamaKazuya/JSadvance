$(function () {
  $('a[href^="#"]').click(function () {
    const speed = 400;
    const href = $(this).attr("href");
    const target = $(href == "#" || href == "" ? 'html' : href);
    $('body,html').animate({
      scrollTop: target.offset().top
    }, speed, 'swing');
    return false;
  });
});