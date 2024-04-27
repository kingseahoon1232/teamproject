$(function () {
  $(window).scroll(function () {
    var value = $(this).scrollTop();

    if (value > 300) {
      $(".p_chapSub").animation({ left: 0, opacity: 1 }, 1000);
    }
  });
});
