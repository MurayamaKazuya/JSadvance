$(function () {
  var textHeight1 = $(".origin1").height();
  $('.text1').css('height', textHeight1 + 'px')
  var textHeight2 = $(".origin2").height();
  $('.text2').css('height', textHeight2 + 'px')
  var textHeight3 = $(".origin3").height();
  $('.text3').css('height', textHeight3 + 'px')
  $(window).scroll(function () {
    const scrollAmount = $(window).scrollTop();
    const wHeight = $(window).height();
    $('.image').each(function () {
      const targetPosition = $(this).offset().top;
      if (scrollAmount > targetPosition - wHeight + 60) {
        $(this).addClass("fade");
      }
    });
    $('.text').each(function () {
      const targetPosition = $(this).offset().top;
      if (scrollAmount > targetPosition - wHeight + 60) {
        $(this).addClass("fade");
      }
    });
  });
  $(window).resize(function () {
    textHeight1 = $(".origin1").height();
    $('.text1').css('height', textHeight1 + 'px')
    textHeight2 = $(".origin2").height();
    $('.text2').css('height', textHeight2 + 'px')
    textHeight3 = $(".origin3").height();
    $('.text3').css('height', textHeight3 + 'px')
  });
  $('.content1').hover(function () {
      $('.content1 .base').addClass("zoom-in");
      $('.content1 .image').addClass("zoom-out");
      $('.origin1,.content1 .slide').css('transform', 'translateY(-' + textHeight1 + 'px)')
    },
    function () {
      $('.content1 .base').removeClass("zoom-in");
      $('.content1 .image').removeClass("zoom-out");
      $('.origin1,.content1 .slide').css('transform', '')
    });
  $('.content2').hover(function () {
      $('.base').addClass("zoom-in");
      $('.content2 .image').addClass("zoom-out");
      $('.origin2,.content2 .slide').css('transform', 'translateY(-' + textHeight2 + 'px)')
    },
    function () {
      $('.content2 .base').removeClass("zoom-in");
      $('.content2 .image').removeClass("zoom-out");
      $('.origin2,.content2 .slide').css('transform', '')
    });
  $('.content3').hover(function () {
      $('.base').addClass("zoom-in");
      $('.content3 .image').addClass("zoom-out");
      $('.origin3,.content3 .slide').css('transform', 'translateY(-' + textHeight3 + 'px)')
    },
    function () {
      $('.content3 .base').removeClass("zoom-in");
      $('.content3 .image').removeClass("zoom-out");
      $('.origin3,.content3 .slide').css('transform', '')

    });

});