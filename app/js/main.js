$(".reviews__wrap").slick({
  dots: true,
  arrows: true,
  infinite: false,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  //     autoplay: true,
  prevArrow:
    '<button class="slick-arrow__prev"><svg class="slick-arrow__right icon"><use xlink:href="images/sprite.svg#icon-left"></use></svg></button> ',
  nextArrow:
    '<button class="slick-arrow__next"> <svg class="slick-arrow__right icon"><use xlink:href="images/sprite.svg#icon-left"></use></svg></button>',
});


$(window).on("load resize", function () {
  var width = $(document).width();
  if (width > 992) {
    $(".resturant__catalog").slick("unslick");
  } else {
    $(".resturant__catalog").not(".slick-initialized").slick({
      arrows: false,
      dots: true,
      infinite: true,
      slidesToScroll: 1,
      variableWidth: true,
      mobileFirst: true,
    });
  }
});

$(".burger").on("click", function (e) {
  e.preventDefault();
  $(".burger__menu").toggleClass("burger__menu-active");
  $("body").toggleClass("lock");
});

$(".burger__menu-btn").on("click", function () {
  $(".burger__menu").removeClass("burger__menu-active");
});
$(".burger__menu-btn").on("click", function () {
  $("body").removeClass("lock");
});

var mixer = mixitup(".popular__catalog");
