$(document).ready(function () {

  //To show mini-cart layer
  $("#header-cart-btn").on({
    mouseenter: function () {
      $('body').addClass('cart-data-open');
      $("#header-cart-btn").addClass("hover-effect");
    },
    mouseleave: function () {
      $('body').removeClass('cart-data-open');
      $("#header-cart-btn").removeClass("hover-effect");
    }
  });
});