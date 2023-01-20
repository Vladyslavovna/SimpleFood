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
  if ($(window).width() < 768) {
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

$(".burger").on("click", function (e) {
  e.preventDefault();
  $(".burger-menu").toggleClass("burger-menu-active");
  $("body").toggleClass("lock");
});

$(".burger-menu--btn").on("click", function () {
  $(".burger-menu").removeClass("burger-menu-active");
});
$(".burger-menu--btn").on("click", function () {
  $("body").removeClass("lock");
});

$("").ionRangeSlider({
  type: "double",
  min: 0,
  max: 1400,
  hide_from_to:false,
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
    onChange: updateInputs
});
instance = $range.data("ionRangeSlider");

function updateInputs (data) {
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
        from: val
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
        to: val
    });
});

$('.select-style').styler();



var mixer = mixitup(".popular__catalog");
