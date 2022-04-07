$(function () {
  $('.icon1').on('click', function () {
    $('.group1').next().slideToggle();
    $(this).toggleClass("open");
  });
  $('.icon2').on('click', function () {
    $('.group2').next().slideToggle();
    $(this).toggleClass("open");
  });
  $('.icon3').on('click', function () {
    $('.group3').next().slideToggle();
    $(this).toggleClass("open");
  });
});