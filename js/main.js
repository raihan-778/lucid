(function ($){

'use strict'
// start code here
// owl carousel start
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

  $(document).ready(function(){
    $('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:1,
          nav:false
      },
      1000:{
          items:2,
          nav:true,
          loop:true,
          autoplay:true
      }
  }
})
  });

//   owl carousel end
// water ripple plugin start

$('header').ripples();

// isotope plugin
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  var $grid = $('.grid').isotope({
    // set itemSelector so .grid-sizer is not used in layout
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      // use element for option
      columnWidth: '.grid-item'
    }
  })

  $('.gallery-button button').on('click',function(){
      
      $('.gallery-button button').removeClass('activ')
      $(this).addClass('activ')
  })

//   wow js
var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animate__animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    }
  );
  wow.init();
    
     

  
  })(jQuery);



