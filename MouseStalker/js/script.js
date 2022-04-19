$(function () {
  $(document).on("mousemove", function (e) {
    $(".stalker").css({
      transform: 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)'
    });
  });
});