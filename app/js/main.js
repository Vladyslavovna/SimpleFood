$(".reviews__wrap").slick({
  dots: true,
  arrows: true,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  prevArrow:
    ' <svg class="slick-priv__arrow slick-priv__arrow--normal"><use xlink:href="images/sprite.svg#icon-left"></use></svg>',
  nextArrow:
    ' <svg class="slick-next__arrow"><use xlink:href="images/sprite.svg#icon-right"></use></svg>',
});

var mixer = mixitup(".popular__catalog");
