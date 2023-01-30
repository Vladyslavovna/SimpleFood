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

$(".select-style, .product-item__num").styler();

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







$(".product-item__slider").slick({
	arrows: true,
	prevArrow: '<button class="product-item-arrow__prev"><svg class="product-item-arrow__right icon"><use xlink:href="images/sprite.svg#icon-thin-arrow-right"></use></svg></button> ',
	nextArrow: '<button class="product-item-arrow__next"> <svg class="product-item-arrow__right icon"><use xlink:href="images/sprite.svg#icon-thin-arrow-right"></use></svg></button>',
});



const swiper = new Swiper('.swiper', {
	loop: true,
	speed:2000,
	centerSlides: true,
	sliderPerView: 1,
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});


$(function () {
 
	$(".product-item__star").rateYo({
	  rating: 4,
	  starWidth: "17px",
	  ratedFill: "#FFB800",
	  normalFill: "rgba(193, 193, 193, 0.3)",
	  readOnly: true,
	  starSvg:'<svg class="product-item__stars" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path d="M.023 6.164a.469.469 0 0 1 .378-.319l4.96-.72L7.58.63a.469.469 0 0 1 .84 0l2.219 4.494 4.96.721a.469.469 0 0 1 .26.8l-3.59 3.498.848 4.94a.469.469 0 0 1-.68.495L8 13.245l-4.436 2.333a.469.469 0 0 1-.68-.495l.847-4.94-3.59-3.498a.469.469 0 0 1-.118-.48Z"/></svg>'
	});
    
   });


$(function () {
 
	$(".tab__star").rateYo({
	  rating: 5,
	  starWidth: "17px",
	  ratedFill: "#FFB800",
	  normalFill: "rgba(193, 193, 193, 0.3)",
	  readOnly: true,
	  starSvg:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path d="M.023 6.164a.469.469 0 0 1 .378-.319l4.96-.72L7.58.63a.469.469 0 0 1 .84 0l2.219 4.494 4.96.721a.469.469 0 0 1 .26.8l-3.59 3.498.848 4.94a.469.469 0 0 1-.68.495L8 13.245l-4.436 2.333a.469.469 0 0 1-.68-.495l.847-4.94-3.59-3.498a.469.469 0 0 1-.118-.48Z"/></svg>'
	});
    
   });
$(function () {
 
	$(".tab__grade-rate").rateYo({
	  rating: 0,
	  starWidth: "17px",
	  ratedFill: "#FFB800",
	  normalFill: "#C1C1C1",
	  fullStar: true,
	  starSvg:'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path d="M.023 6.164a.469.469 0 0 1 .378-.319l4.96-.72L7.58.63a.469.469 0 0 1 .84 0l2.219 4.494 4.96.721a.469.469 0 0 1 .26.8l-3.59 3.498.848 4.94a.469.469 0 0 1-.68.495L8 13.245l-4.436 2.333a.469.469 0 0 1-.68-.495l.847-4.94-3.59-3.498a.469.469 0 0 1-.118-.48Z"/></svg>'
	});
    
   });




   






var modal = document.getElementById('myModal');


var btn = document.getElementById("myBtn");
var btnSec = document.getElementById("myBtnSec");
var btnThird = document.getElementById("myBtnThird");


var span = document.getElementsByClassName("modal-close")[0];


btn.onclick = function () {
	modal.style.display = "block";
}
btnSec.onclick = function () {
	modal.style.display = "block";
}
btnThird.onclick = function () {
	modal.style.display = "block";
}


span.onclick = function () {
	modal.style.display = "none";
}


window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}













const tabBtn = document.querySelectorAll(".tab__btn");
const tabContents = document.querySelectorAll(".tab__item");

tabBtn.forEach(function(element) {
   element.addEventListener("click", openTabs);
});

function openTabs(evt) {
  const btnTarget = evt.currentTarget;
  const item = btnTarget.dataset.item;

   tabContents.forEach(function(item) {
      item.classList.remove("tab__item--active");
   });

   tabBtn.forEach(function(item) {
      item.classList.remove("tab__btn--active");
   });

   document.querySelector(`#${item}`).classList.add("tab__item--active");

   btnTarget.classList.add("tab__btn--active"); 
}


















var mixer = mixitup(".popular__catalog");
