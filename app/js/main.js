$(".reviews__wrap").slick({
  dots: true,
  arrows: true,
  infinite: false,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  prevArrow:
    '<button class="reviews-arrow__prev"><svg class="reviews-arrow__right icon"><use xlink:href="images/sprite.svg#icon-left"></use></svg></button> ',
  nextArrow:
    '<button class="reviews-arrow__next"> <svg class="reviews-arrow__right icon"><use xlink:href="images/sprite.svg#icon-left"></use></svg></button>',
});

$(window).on("load resize", function () {
  if ($(window).width() < 992) {
    $(".resturant__catalog:not(.slick-initialized)").slick({
      arrows: false,
      dots: true,
      infinite: true,
      slidesToScroll: 1,
      slidesToShow: 1,
    });
  } else {
    $(".resturant__catalog.slick-initialized").slick("unslick");
  }
});

$(window).on("load resize", function () {
  if ($(window).width() < 992) {
    $(".promo-catalog:not(.slick-initialized)").slick({
      arrows: false,
      dots: true,
      infinite: true,
      slidesToScroll: 1,
      slidesToShow: 1,
    });
  } else {
    $(".promo-catalog.slick-initialized").slick("unslick");
  }
});

$("").ionRangeSlider({
  type: "double",
  min: 0,
  max: 1400,
  hide_from_to: false,
});

var $range = $(".filter-price__range"),
  $inputFrom = $(".filter-price__from"),
  $inputTo = $(".filter-price__to"),
  instance,
  min = 0,
  max = 1000,
  from = 0,
  to = 0;

$range.ionRangeSlider({
  type: "double",
  min: min,
  max: max,
  from: 200,
  to: 800,
  onStart: updateInputs,
  onChange: updateInputs,
});
instance = $range.data("ionRangeSlider");

function updateInputs(data) {
  from = data.from;
  to = data.to;

  $inputFrom.prop("value", from);
  $inputTo.prop("value", to);
}

$inputFrom.on("input", function () {
  var val = $(this).prop("value");

  // validate
  if (val < min) {
    val = min;
  } else if (val > to) {
    val = to;
  }

  instance.update({
    from: val,
  });
});

$inputTo.on("input", function () {
  var val = $(this).prop("value");

  // validate
  if (val < from) {
    val = from;
  } else if (val > max) {
    val = max;
  }

  instance.update({
    to: val,
  });
});

$(".select-style").styler();

$(".burger-page, .burger, .shop-filter__btn").on("click", function (e) {
  e.preventDefault();
  $(".mobile-menu, .burger-menu").toggleClass("active");
  $("body").toggleClass("lock");
});

$(".mobile-menu__btn, .burger-menu--btn").on("click", function () {
  $(".mobile-menu, .burger-menu").removeClass("active");
});
$(".mobile-menu__btn, .burger-menu").on("click", function () {
  $("body").removeClass("lock");
});

$(document).mouseup(function (e) {
  const div = $("burger-menu, .mobile-menu");
  if (!div.is(e.targer) && div.has(e.target).length === 0) {
    $(".burger-menu, .mobile-menu").removeClass("active");
    $("body").removeClass("lock");
  }
});

var mixer = mixitup(".popular__catalog");
