'use strict';
;
(function($){

  //spinner
  $(window).on('load', function () {
    var $preloader = $('#preloader'),
    $spinner   = $('#loader');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
  });

  //scroll
  function isScrolledIntoView(elem) {
    if (elem.length) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();

      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();

      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    return false;
  };

  //animate
  $(document).on( 'scroll', function () {
        const sectionTitle = $('.animate');

        sectionTitle.each( function () {
            if ( isScrolledIntoView($(this)) ) {
                $(this).addClass('animate--right');
            }
        });

  });

  $(document).ready( function () {

        //Foundation init
        $(document).foundation();

        //scroll
        $(".menu-list").on("click","a", function (event) {
          event.preventDefault();
          $('html, body').animate({
           scrollTop: $($(this).attr('href')).offset().top
         }, 500);
        });

        //slick for hero
        $(".slider").slick({
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          fade: true,
          respondTo: 'window',
          appendArrows: $('.slide-controls'),
          prevArrow: $('.slide-arrow-hero--prev'),
          nextArrow: $('.slide-arrow-hero--next'),
          appendDots: $('.slide-controls'),
          dots: true,
          dotsClass: 'custom-dots-hero'
        });

        //slick for cards
        $(".cards-slider__slider").slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          respondTo: 'window',
          appendArrows: $('.slide-cards'),
          nextArrow: $('.slide-arrow-cards--next'),
          dots: false,
          responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              arrows: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              dots: true,
              arrows: false
            }
          }
          ]
        });

        //slick for socials 
        $(".slider-social__slider").slick({
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          fade: true,
          arrows: false,
          respondTo: 'window',
          autoplay: true,
          autoplaySpeed: 2000,
          appendDots: $('.slide-social'),
          dots: true,
          dotsClass: 'custom-dots-social'
        });

        //slick for gallery
          // gallery first slider
          $slickSlider = $('.gallery__wrap-row--narrow');
          settingsSlider = {
            infinite: true,
            respondTo: 'window',
            dots: true,
            arrows: false,
            responsive: [
            {
              breakpoint: 1040,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },

            {
              breakpoint: 766,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 635,
              settings: {
                slidesToShow: 1,
                dots: true
              }
            }
            ]
          }

          // gallery second slider
          $slickSliderWide = $('.gallery__wrap-row--wide');
          settingsSliderWide = {
            slidesToShow: 1,
            slidesToScroll: 1,
            respondTo: 'window',
            infinite: true,
            dots: true,
            arrows: false
          }
          slickOnMobile( $slickSlider, settingsSlider);
          slickOnMobile( $slickSliderWide, settingsSliderWide);

        // slick on mobile
        function slickOnMobile(slider, settings){
          $(window).on('load resize', function() {
            if ($(window).width() > 1038) {
              if (slider.hasClass('slick-initialized')) {
                slider.slick('unslick');
              }
              return
            }
            if (!slider.hasClass('slick-initialized')) {
              return slider.slick(settings);
            }
          });
        };

        // counter
        $('.counter').counterUp({
          delay: 10,
          time: 2000
        });

        //three-col-toggler 
        $('.three-col-col__wrap').on('click', function() {
          $('.three-col-col').find('.three-col-col__wrap--hover').removeClass('three-col-col__wrap--hover');
          $( this ).addClass('three-col-col__wrap--hover');
        });


        //map
        function initMap() {
          var map;
          var mapContainer = $('#map')[0];
          var myCenter = {lat: 42.3556595, lng: -71.060074};
          map = new google.maps.Map(mapContainer, {
            center: myCenter,
            zoom: 15,
            styles: [
            {
              "elementType": "geometry",
              "stylers": [
              {
                "color": "#f5f5f5"
              }
              ]
            },
            {
              "elementType": "labels.icon",
              "stylers": [
              {
                "visibility": "off"
              }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
              {
                "color": "#616161"
              }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
              {
                "color": "#f5f5f5"
              }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "labels.text.fill",
              "stylers": [
              {
                "color": "#bdbdbd"
              }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [
              {
                "color": "#eeeeee"
              }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
              {
                "color": "#757575"
              }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [
              {
                "color": "#e5e5e5"
              }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
              {
                "color": "#9e9e9e"
              }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [
              {
                "color": "#ffffff"
              }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "labels.text.fill",
              "stylers": [
              {
                "color": "#757575"
              }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
              {
                "color": "#dadada"
              }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels.text.fill",
              "stylers": [
              {
                "color": "#616161"
              }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels.text.fill",
              "stylers": [
              {
                "color": "#9e9e9e"
              }
              ]
            },
            {
              "featureType": "transit.line",
              "elementType": "geometry",
              "stylers": [
              {
                "color": "#e5e5e5"
              }
              ]
            },
            {
              "featureType": "transit.station",
              "elementType": "geometry",
              "stylers": [
              {
                "color": "#eeeeee"
              }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
              {
                "color": "#c9c9c9"
              }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
              {
                "color": "#9e9e9e"
              }
              ]
            }
            ],
            mapTypeControl: true,
            mapTypeControlOptions: {
              style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
              position: google.maps.ControlPosition.TOP_RIGHT
            },
            scaleControl: true,
            streetViewControl: true,
            streetViewControlOptions: {
              position: google.maps.ControlPosition.LEFT_TOP
            },
            zoomControl: true,
            zoomControlOptions: {
              position: google.maps.ControlPosition.LEFT_CENTER
            },
            fullscreenControl: true,
            fullscreenControlOptions: {
              position: google.maps.ControlPosition.TOP_LEFT
            }
          });

      };

      initMap();

  });


})(jQuery);
