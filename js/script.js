$("nav .bag").click(function () {
  $("#bag-slider .bag-main").addClass("add");
});
$("#bag-slider .bag-main i").click(function () {
  $("#bag-slider .bag-main").removeClass("add");
});
$("nav .dot").click(function () {
  $("#bag-slider .bag-main").removeClass("add");
});
$("nav .bag").click(function () {
  $("#dot .dot-main").removeClass("dott");
});
$(".counter").counterUp({
  delay: 10,
  time: 1000,
});
$("#dish .dish-main").slick({
  slidesToShow: 4,
  prevArrow: '<i class="fas fa-chevron-left llf"></i>',
  nextArrow: '<i class="fas fa-chevron-right rrt"></i>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$("nav .dot").click(function(){
  $("#dot .dot-main").addClass("dott");
})
$("#dot .dot-main .cro").click(function(){
  $("#dot .dot-main").removeClass("dott");
})


$(window).scroll(function(){

  if($(window).scrollTop() > 200){
    $("nav").addClass("fix")
  }else{
    $("nav").removeClass("fix")
  }
  if($(window).scrollTop() > 200){
    $("nav").addClass("fix-logo")
  }else{
    $("nav").removeClass("fix-logo")
  }
  if($(window).scrollTop() > 200){
    $("nav ul li .dropdown").addClass("dro")
  }else{
    $("nav ul li .dropdown").removeClass("dro")
  }
  if($(window).scrollTop() > 200){
    $("#bag-slider .bag-main").addClass("fix2")
  }else{
    $("#bag-slider .bag-main").removeClass("fix2")
  }
  if($(window).scrollTop() > 500){
    $(".top-up").fadeIn()
  }else{
    $(".top-up").fadeOut()
  }
  if($(window).scrollTop() > 200){
    $("#dot .dot-main").addClass("drop")
  }else{
    $("#dot .dot-main").removeClass("drop")
  }
})


// $("#dot .dot-main").addClass("drop")
// }else{
//   $("#dot .dot-main").removeClass("drop")


$(".top-up").click(function(){
  $("html,body").animate({
    scrollTop: 0
  },500)
})
$("nav ul li .shop").click(function(){
  $("html,body").animate({
    scrollTop: 3300
  },500)
})

$("nav ul li .menu").click(function(){
  $("html,body").animate({
    scrollTop: 1500
  },500)
})

$(window).scroll(function(){
  console.log($(window).scrollTop())
})