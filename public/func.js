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

  // uncheck all radio buttons - at first
  $('input[type=radio]:checked').prop('checked', false);

  //insert value in html according to what user select
  $(".radio-group").on("click", "label", function()
  {
      radio_value = $(this).prev(":radio").val();
      $("#show").html(radio_value);
  });


});