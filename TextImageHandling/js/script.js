$(function () {
  $(window).scroll(function () {
    const scrollAmount = $(window).scrollTop();
    const wHeight = $(window).height();
    $('.image, .text').each(function () {
      const targetPosition = $(this).offset().top;
      if (scrollAmount > targetPosition - wHeight + 60) {
        $(this).addClass("fade");
      }
    });
  });

  $('.content').hover(function () {
      let textHeight = $(this).find('.origin').height();
      $(this).find('.text').css('height', textHeight + 'px')
      $(this).find('.base').addClass("zoom-in");
      $(this).find('.image').addClass("zoom-out");
      $(this).find('.origin, .slide').css('transform', 'translateY(-' + textHeight + 'px)')
    },
    function () {
      $(this).find('.base').removeClass("zoom-in");
      $(this).find('.image').removeClass("zoom-out");
      $(this).find('.origin, .slide').css('transform', '')
    });
});