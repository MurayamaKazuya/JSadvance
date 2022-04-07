$(function () {
  const nav = $('.navbar');
  const navTop = nav.offset().top;
  $(window).scroll(function () {
    const winTop = $(this).scrollTop();
    if (winTop >= navTop) {
      nav.addClass('fixed')
    } else {
      nav.removeClass('fixed')
    }
  });
});