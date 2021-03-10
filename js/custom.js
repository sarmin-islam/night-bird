
// //typing effect
// var typed = new Typed('#typed', {

//     // Waits 1000ms after typing "First"
//     strings: ['about night', 'bird'],
//     loop:true,


// //   });
//   //menu-list filltering
//   $('.menu-list ul li a').click(function(){
//      $(this).addClass('active');
//   });
  //venubox effect
  $('.venobox').venobox(); 

//silck effect banner text
  $('.banner-text').slick({
   prevArrow:'<i class="fas fa-chevron-left slick-prev"></i>',
   nextArrow:'<i class="fas fa-chevron-right slick-next"></i>',
   dots:true,
  });
	
//silck effect centermode events
$('.events-content').slick({
   autoplay:true,
   arrows:true,
   autoplaySpeed:1500,
   slidesToShow:4,
   slidesToScroll:1,
   prevArrow:'<i class="fas fa-chevron-left slick-prev"></i>',
   nextArrow:'<i class="fas fa-chevron-right slick-next"></i>',
});
//silck effect upcoming events
$('.image-slider').slick({
   autoplay:true,
   arrows:false,
   asNavFor: '.text-slider',
 
});
//silck effect upcoming events text
$('.text-slider').slick({
   autoplay:true,
   arrows:true,
   asNavFor: '.image-slider',
   prevArrow:'<i class="fas fa-chevron-left slick-prev"></i>',
   nextArrow:'<i class="fas fa-chevron-right slick-next"></i>',
});


//silck effect blog
$('.sliding-blog').slick({
   arrows:true,
   prevArrow:'<i class="fas fa-chevron-left slick-prev"></i>',
   nextArrow:'<i class="fas fa-chevron-right slick-next"></i>',
});
//silck effect testimonial
$('.slider-testimonial').slick({
   autoplay:true,
   arrows:true,
   autoplaySpeed:1500,
   slidesToShow:2,
   slidesToScroll:1,
   prevArrow:'<i class="fas fa-chevron-left slick-prev"></i>',
   nextArrow:'<i class="fas fa-chevron-right slick-next"></i>',
});

//testimonial parallax effect
$('.testimonial-banner').parallax({imageSrc: 'images/tes-img.jpg'});



//galerry parallax effect
$('.gallery-bg').parallax({imageSrc: 'images/abp1.jpg'});
$(function(){
   var scrollTop =$('.back-to-up');

   $(window).scroll(function(){
       var scrolling = $(this).scrollTop();

       if(scrolling > 600){
           scrollTop . fadeIn();
       }else{
           scrollTop . fadeOut();
       }
       
   if(scrolling >600){
       $('.menu-bg').addClass('fixed-nav');
   }else{
       $('.menu-bg').removeClass('fixed-nav');
   }

   });
   scrollTop. click(function(){
       $('html,body') .animate({
           scrollTop:0,
       } ,1500);
   });

});