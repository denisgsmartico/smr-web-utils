function slider2() {

    let splides = $('.slider2');
    for ( let i = 0, splideLength = splides.length; i < splideLength; i++ ) {
        new Splide( splides[ i ], {
      // Desktop on down
        perPage: 1,
        perMove: 1,
      focus: 'center', // 0 = left and 'center' = center
      type: 'loop', // 'loop' or 'slide'
      gap: '1.25rem', // space between slides
      arrows: 'slider', // 'slider' or false
      pagination: 'slider', // 'slider' or false
      speed : 850, // transition speed in miliseconds
      dragAngleThreshold: 80, // default is 30
      autoWidth: false, // for cards with differing widths
      rewind : false, // go back to beginning when reach end
      rewindSpeed : 800,
      waitForTransition : false,
      updateOnMove : true,
      trimSpace: false,
      breakpoints: {
            991: {
            // Tablet
                perPage: 1,
          gap: '1.25rem',
            },
        767: {
            // Mobile Landscape
                perPage: 1,
                gap: '1rem',
            },
        479: {
            // Mobile Portrait
                perPage: 1,
          gap: '1rem',
            }
        }
    } ).mount();
    }
    
    }
    slider2();