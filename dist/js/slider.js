$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      smartSpeed: 500,
       center: true,
       items: 3,
       margin: 35,
       nav: false,
       dots: false,
       center:true,
       loop:true,
       touchDrag: false,
       mouseDrag: false,
       URLhashListener:true,
       autoplayHoverPause:false,
       startPosition: 'URLHash',
       itemElement: "collection-slider__box-item",
       autoplay:true,
       autoplayTimeout:5000,
       responsive:{
        1100: {
            items:3
        },    
        769: {
            items:2
        },   
        0:{
            URLhashListener:false,
            items:1,
            margin: 0,
            touchDrag: true,
            autoplayTimeout:6000,
            smartSpeed: 700,
        },
    } 
  });
});