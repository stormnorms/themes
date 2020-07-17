/*global $:false
  _____ _
 |_   _| |__   ___ _ __ ___   ___ _   _ _ __ ___
   | | | '_ \ / _ \ '_ ` _ \ / _ \ | | | '_ ` _ \
   | | | | | |  __/ | | | | |  __/ |_| | | | | | |
   |_| |_| |_|\___|_| |_| |_|\___|\__,_|_| |_| |_|

*  --------------------------------------
*         Table of Content
*  --------------------------------------
*   1. Digit Counter
*   2. Magnific Popup Shop
*   3. Sticky Nav
*   4. Coming Soon Page
*   5. Google Map
*   6. Perform AJAX Login
*   7. Register New User
*   8. Slick Slider Loading
*   9. Testimonial & Slider
*  --------------------------------------
*  -------------------------------------- */

jQuery(document).ready(function($){'use strict';

    // /* --------------------------------------
    // *       1. Home Slider
    // *  -------------------------------------- */


    // Slider Code
    if ($('.slider_content_wrapper').length > 0) {
        var control = false;
        if ($('.slider_content_wrapper').data('control') == 'yes') { control = true; }
        var autoplay = false;
        if ($('.slider_content_wrapper').data('autoplay') == 'yes') { autoplay = true; }

        $('.slider_content_wrapper').slick({
            rtl: rtl,
            autoplay: autoplay,
            dots: control,
            dotsClass: 'thm-slide-control',
            nextArrow: '',
            prevArrow: '',
            speed: 300,
            autoplaySpeed: 3000,
            adaptiveHeight: true
        });

        // Slider Animation
        setInterval(function () {
            $('.slider-single-wrapper').each(function () {

                var $speed_ = 'animation-duration';
                if ($(this).hasClass('slick-active')) {
                    $(this).find('.slider-media').addClass($(this).find('.slider-media').data('animation')).css($speed_, $(this).find('.slider-media').data('speed'));
                    $(this).find('.slider-subtitle').addClass($(this).find('.slider-subtitle').data('animation')).css($speed_, $(this).find('.slider-subtitle').data('speed'));
                    $(this).find('.slider-title').addClass($(this).find('.slider-title').data('animation')).css($speed_, $(this).find('.slider-title').data('speed'));
                    $(this).find('.slider-content').addClass($(this).find('.slider-content').data('animation')).css($speed_, $(this).find('.slider-content').data('speed'));
                    $(this).find('.slider-button-1').addClass($(this).find('.slider-button-1').data('animation')).css($speed_, $(this).find('.slider-button-1').data('speed'));
                    $(this).find('.slider-button-2').addClass($(this).find('.slider-button-2').data('animation')).css($speed_, $(this).find('.slider-button-2').data('speed'));
                } else {
                    $(this).find('.slider-media').removeClass($(this).find('.slider-media').data('animation')).css($speed_, $(this).find('.slider-media').data('speed'));
                    $(this).find('.slider-subtitle').removeClass($(this).find('.slider-subtitle').data('animation')).css($speed_, $(this).find('.slider-subtitle').data('speed'));
                    $(this).find('.slider-title').removeClass($(this).find('.slider-title').data('animation')).css($speed_, $(this).find('.slider-title').data('speed'));
                    $(this).find('.slider-content').removeClass($(this).find('.slider-content').data('animation')).css($speed_, $(this).find('.slider-content').data('speed'));
                    $(this).find('.slider-button-1').removeClass($(this).find('.slider-button-1').data('animation')).css($speed_, $(this).find('.slider-button-1').data('speed'));
                    $(this).find('.slider-button-2').removeClass($(this).find('.slider-button-2').data('animation')).css($speed_, $(this).find('.slider-button-2').data('speed'));
                }
            });
        }, 1);

    }
    // /* --------------------------------------
    // *       2. Magnific Popup Shop
    // *  -------------------------------------- */

     $('.cloud-zoom').magnificPopup({
        type: 'image',
        mainClass: 'product-img-zoomin',
        gallery: { enabled: true },
        zoom: {
            enabled: true, // By default it's false, so don't forget to enable it
            duration: 400, // duration of the effect, in milliseconds
            easing: 'ease-in-out', // CSS transition easing function
            opener: function(openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });

    /* --------------------------------------
    *       3. search
    *  -------------------------------------- */
    var thmCampItem = $('.themeum-campaign-item');
    thmCampItem.height(thmCampItem.width());
    $(window).on('load', function() {
        thmCampItem.height(thmCampItem.width());
    });
    var searchIcon = $('.search-open-icon, .thm-fullscreen-search .search-overlay'),
        searchForm = $('.thm-fullscreen-search');

    searchIcon.on('click', function(e){
        e.preventDefault();
        searchForm.toggleClass('active');
    });

    $(document).keydown(function(e){
        var code = e.keyCode || e.which;
        if( code == 27 ){
            searchForm.removeClass('active');
        }
    });

    // Social Share.
    $('.social-share-wrap').each(function(){
        //var share_url = $(this).data('url');
        $(this).jsSocials({
            shares: [
                "twitter",
                "facebook",
                "pinterest",
                "linkedin"
            ],
            shareIn: "popup",
            showLabel: false,
            showCount: "inside"
        });
        jsSocials.shares.twitter = {
            label: "Tweet now"
        };
    })

    $('.backnow-bio-social').each(function(){
        //var share_url = $(this).data('url');
        $(this).jsSocials({
            shares: [
                "facebook",
                "twitter",
                "googleplus",
                "linkedin",
                "pinterest",
                // "rss",
            ],

            shareIn: "popup",
            showLabel: false,
            showCount: false
        });

    })

    // Blog and Woocomerce Pagination JS
    if( $('.themeum-pagination').length > 0 ){
        if( !$(".themeum-pagination ul li:first-child a").hasClass('prev') ){
            $(".themeum-pagination ul").prepend('<li class="p-2 first"><span>'+$(".themeum-pagination").data("preview")+'</span></li>');
        }
        if( !$(".themeum-pagination ul li:last-child a").hasClass('next') ){
            $(".themeum-pagination ul").append('<li class="p-2 first"><span>'+$(".themeum-pagination").data("nextview")+'</span></li>');
        }
        $(".themeum-pagination ul li:last-child").addClass("ml-auto");
        $(".themeum-pagination ul").addClass("d-flex justify-content-start").find('li').addClass('p-2').eq(1).addClass('ml-auto');
    }
    // End Pagination

    /* --------------------------------------
    *       3. Sticky Nav
    *  -------------------------------------- */
    jQuery(window).on('scroll', function(){'use strict';
        if ( jQuery(window).scrollTop() > 66 ) {
            jQuery('#masthead').addClass('sticky');
        } else {
            jQuery('#masthead').removeClass('sticky');
        }
    });


    // Vedio Popup
    if ($("#videoPlay, #about-video").length > 0) {
        $("#videoPlay, #about-video").magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 300,
            preloader: false,
            fixedContentPos: false
        });
    }
    /* --------------------------------------
    *       4. Coming Soon Page
    *  -------------------------------------- */
    if (typeof loopCounterTwo !== 'undefined') {
        loopCounterTwo('.counter-class');
    }

    /* --------------------------------------
    *       5. Campaign CountDown
    *  -------------------------------------- */
    if (typeof loopCounterTwo !== 'undefined') {
        loopCounterTwo('.campaign-counter');
    }

    /* --------------------------------------
    *       5. Smooth Scrolling
    *  -------------------------------------- */
    $('a[href*="#backnow_project"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        if ( location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname ){
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                        var $target = $(target);
                        $target.focus();
                });
            }
        }
    });
    // End

    /* --------------------------------------
    *       5. Google Map
    *  -------------------------------------- */
    var map;
    function initMap() {
        var wpaddress       = $('#map').data( 'address' );
        var wplatitude      = $('#map').data( 'latitude' );
        var wplongitude     = $('#map').data( 'longitude' );
        var wpheight        = $('#map').data( 'height' );
        var wptype          = $('#map').data( 'type' );
        var wpzoom          = $('#map').data( 'zoom' );
        var flugurl         = $('#map').data( 'flugurl' );
        var wpstyles        = $('#map').data( 'styles' );
        var controls        = $('#map').data( 'controls' );
        var zoomcontrol     = $('#map').data( 'zoomcontrol' );

        // Style Option
        var styles = '';
        switch( wpstyles ){
            case 'style1':
                styles = [{"featureType": "road","stylers": [{"color": "#b4b4b4"}]}, {"featureType": "water","stylers": [{"color": "#d8d8d8"}]}, {"featureType": "landscape","stylers": [{"color": "#f1f1f1"}]}, {"elementType": "labels.text.fill","stylers": [{"color": "#000000"}]}, {"featureType": "poi","stylers": [{"color": "#d9d9d9"}]}, {"elementType": "labels.text","stylers": [{"saturation": 1}, {"weight": 0.1}, {"color": "#000000"}]}];
                break;
            case 'style2':
                styles = [{elementType: 'geometry', stylers: [{color: '#242f3e'}]},{elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},{elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},{featureType: 'administrative.locality',elementType: 'labels.text.fill',stylers: [{color: '#d59563'}]},{featureType: 'poi',elementType: 'labels.text.fill',stylers: [{color: '#d59563'}]},{featureType: 'poi.park',elementType: 'geometry',stylers: [{color: '#263c3f'}]},{featureType: 'poi.park',elementType: 'labels.text.fill',stylers: [{color: '#6b9a76'}]},{featureType: 'road',elementType: 'geometry',stylers: [{color: '#38414e'}]},{featureType: 'road',elementType: 'geometry.stroke',stylers: [{color: '#212a37'}]},{featureType: 'road',elementType: 'labels.text.fill',stylers: [{color: '#9ca5b3'}]},{featureType: 'road.highway',elementType: 'geometry',stylers: [{color: '#746855'}]},{featureType: 'road.highway',elementType: 'geometry.stroke',stylers: [{color: '#1f2835'}]},{featureType: 'road.highway',elementType: 'labels.text.fill',stylers: [{color: '#f3d19c'}]},{featureType: 'transit',elementType: 'geometry',stylers: [{color: '#2f3948'}]},{featureType: 'transit.station',elementType: 'labels.text.fill',stylers: [{color: '#d59563'}]},{featureType: 'water',elementType: 'geometry',stylers: [{color: '#17263c'}]},{featureType: 'water',elementType: 'labels.text.fill',stylers: [{color: '#515c6d'}]},{featureType: 'water',elementType: 'labels.text.stroke',stylers: [{color: '#17263c'}]}];
                break;
            case 'style3':
                styles = [{ "elementType": "labels", "stylers": [ { "visibility": "off" }, { "color": "#f49f53" }] },{ "featureType": "landscape", "stylers": [ { "color": "#f9ddc5" }, { "lightness": -7 }] },{ "featureType": "road", "stylers": [ { "color": "#813033" }, { "lightness": 43 }] },{ "featureType": "poi.business", "stylers": [ { "color": "#645c20" }, { "lightness": 38 }] },{ "featureType": "water", "stylers": [ { "color": "#1994bf" }, { "saturation": -69 }, { "gamma": 0.99 }, { "lightness": 43 }] },{ "featureType": "road.local", "elementType": "geometry.fill", "stylers": [ { "color": "#f19f53" }, { "weight": 1.3 }, { "visibility": "on" }, { "lightness": 16 }] },{ "featureType": "poi.business" },{ "featureType": "poi.park", "stylers": [ { "color": "#645c20" }, { "lightness": 39 }] },{ "featureType": "poi.school", "stylers": [ { "color": "#a95521" }, { "lightness": 35 }] },{ "featureType": "poi.medical", "elementType": "geometry.fill", "stylers": [ { "color": "#813033" }, { "lightness": 38 }, { "visibility": "off" }] },{ "elementType": "labels" },{ "featureType": "poi.sports_complex", "stylers": [ { "color": "#9e5916" }, { "lightness": 32 }] },{ "featureType": "poi.government", "stylers": [ { "color": "#9e5916" }, { "lightness": 46 }] },{ "featureType": "transit.station", "stylers": [ { "visibility": "off" }] },{ "featureType": "transit.line", "stylers": [ { "color": "#813033" }, { "lightness": 22 }] },{ "featureType": "transit", "stylers": [ { "lightness": 38 }] },{ "featureType": "road.local", "elementType": "geometry.stroke", "stylers": [ { "color": "#f19f53" }, { "lightness": -10 }] }];
                break;
            case 'style4':
                styles = [{ "featureType": "all", "elementType": "labels.text.fill", "stylers": [ { "color": "#ffffff" } ] },{ "featureType": "all", "elementType": "labels.text.stroke", "stylers": [ { "color": "#000000" }, { "lightness": 13 } ] },{ "featureType": "administrative", "elementType": "geometry.fill", "stylers": [ { "color": "#000000" } ] },{ "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [ { "color": "#144b53" }, { "lightness": 14 }, { "weight": 1.4 } ] },{ "featureType": "landscape", "elementType": "all", "stylers": [ { "color": "#08304b" } ] },{ "featureType": "poi", "elementType": "geometry", "stylers": [ { "color": "#0c4152" }, { "lightness": 5 } ] },{ "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [ { "color": "#000000" } ] },{ "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [ { "color": "#0b434f" }, { "lightness": 25 } ] },{ "featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [ { "color": "#000000" } ] },{ "featureType": "road.arterial", "elementType": "geometry.stroke", "stylers": [ { "color": "#0b3d51" }, { "lightness": 16 } ] },{ "featureType": "road.local", "elementType": "geometry", "stylers": [ { "color": "#000000" } ] },{ "featureType": "transit", "elementType": "all", "stylers": [ { "color": "#146474" } ] },{ "featureType": "water", "elementType": "all", "stylers": [ { "color": "#021019" } ] }];
                break;
            default:
                break;
        }

        $("#map").height( wpheight );
        var latlng = new google.maps.LatLng(wplatitude, wplongitude);
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: wpzoom,
          center: latlng,
          styles: styles,
          mapTypeId: wptype,
          disableDefaultUI: controls,
          scrollwheel: zoomcontrol,
        });

        // Marker + Flug
        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            icon: flugurl
        });

        // Address
        var contentString = '<div class="map-info-content">'+wpaddress+'</div>';
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });
        infowindow.open(map, marker);
    }
    if( $('#map').length > 0 ){
        initMap();
    }



    /* --------------------------------------
    *       6. Perform AJAX Login
    *  -------------------------------------- */
    $('form#login').on('submit', function(e){ 'use strict';
        $('form#login p.status').show().text(ajax_objects.loadingmessage);
        var checked = false;
        if( $('form#login #rememberlogin').is(':checked') ){ checked = true; }
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: ajax_objects.ajaxurl,
            data: {
                'action': 'ajaxlogin', //calls wp_ajax_nopriv_ajaxlogin
                'username': $('form#login #usernamelogin').val(),
                'password': $('form#login #passwordlogin').val(),
                'remember': checked,
                'security': $('form#login #securitylogin').val() },
            success: function(data){
                console.log( 'working!!!' );
                if (data.loggedin == true){
                    $('form#login div.login-error').removeClass('alert-danger').addClass('alert-success');
                    $('form#login div.login-error').text(data.message);
                    document.location.href = ajax_objects.redirecturl;
                }else{
                    $('form#login div.login-error').removeClass('alert-success').addClass('alert-danger');
                    $('form#login div.login-error').text(data.message);
                }
                if($('form#login .login-error').text() == ''){
                    $('form#login div.login-error').hide();
                }else{
                    $('form#login div.login-error').show();
                }
            }
        });
        e.preventDefault();
    });
    if($('form#login .login-error').text() == ''){
        $('form#login div.login-error').hide();
    }else{
        $('form#login div.login-error').show();
    }



    /* --------------------------------------
    *       7. Register New User
    *  -------------------------------------- */
    $('form#register').on('submit', function(e){ 'use strict';
        $('form#register p.status').show().text(ajax_objects.loadingmessage);
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: ajax_objects.ajaxurl,
            data: {
                'action':   'ajaxregister', //calls wp_ajax_nopriv_ajaxlogin
                'username': $('form#register #username').val(),
                'email':    $('form#register #email').val(),
                'password': $('form#register #password').val(),
                'security': $('form#register #security').val() },
            success: function(data){

                if (data.loggedin == true){
                    $('form#register div.login-error').removeClass('alert-danger').addClass('alert-success');
                    $('form#register div.login-error').text(data.message);
                    $('form#register')[0].reset();
                }else{
                    $('form#register div.login-error').removeClass('alert-success').addClass('alert-danger');
                    $('form#register div.login-error').text(data.message);
                }
                if($('form#register .login-error').text() == ''){
                    $('form#register div.login-error').hide();
                }else{
                    $('form#register div.login-error').show();
                }
            }
        });
        e.preventDefault();
    });

    if($('form#register .login-error').text() == ''){
        $('form#register div.login-error').hide();
    }else{
        $('form#register div.login-error').show();
    }



    /* --------------------------------------
    *       9. Testimonial & Slider
    *  -------------------------------------- */
    var dir = $("html").attr("dir");
    var rtl = false;
    if( dir == 'rtl' ){
        rtl = true;
    }
    if( $('.testimonial_content_wrapper').length > 0 ){
        $('.testimonial_content_wrapper').slick({
            rtl: rtl,
            nextArrow: '<div class="slick-prev"><i class="fa fa-chevron-left"></i></div>',
            prevArrow: '<div class="slick-next"><i class="fa fa-chevron-right"></i></div>',
        });
    }

    /* --------------------------------------
    *       10. Product Slider
    *  -------------------------------------- */
    var dir = $("html").attr("dir");
    var rtl = false;
    if( dir == 'rtl' ){
      rtl = true;
    }
    if( $('.themeum-product-slider').length > 0 ){
    $('.themeum-product-slider').slick({
      rtl: rtl,
      nextArrow: '<div class="slick-prev"><i class="fa fa-angle-left"></i></div>',
      prevArrow: '<div class="slick-next"><i class="fa fa-angle-right"></i></div>',
      });
    }


    /* --------------------------------------
    *       11. Explore category hover & category tab button hover
    *  -------------------------------------- */
    var current = '';
    $('.thm-iconic-category li')
    .on('mouseenter', function() {
        current = $(this).find('a').css("color");
        $(this).find('a').css( 'color', $(this).data('color') );
    })
    .on('mouseleave', function() {
        $(this).find('a').css( 'color', current );
    });

    // category tab button hover
    $('.themeum-tab-category a.thm-btn').on('mouseenter', function() {
        var catBg = $(this).data('catbg');
        $(this).css({
            color: catBg,
            borderColor: catBg,
            background: '#fff'
        });
    }).on('mouseleave',function () {
        var catBg = $(this).data('catbg');
        $(this).css({
            color: '#fff',
            background: catBg
        });
    });


    /* --------------------------------------
    *       12. Love It Button
    *  -------------------------------------- */
    $('.thm-love-btn').on('click', function(e) {
        e.preventDefault();
        var that = $(this);
        var campaign_id = that.data('campaign');
        var user_id = that.data('user');

       if( user_id != 0 && campaign_id ){
            $.ajax({
                type:"POST",
                url: ajax_objects.ajaxurl,
                data: {'action': 'thm_campaign_action', 'campaign_id': campaign_id},
                success:function(data){
                    data = JSON.parse(data);
                    if (data.success == 1){
                        that.find('.amount').html(data.number);
                        if( data.message == 'love' ){
                            that.addClass( 'active' ).parents('.themeum-campaign-post').find('.themeum-campaign-img').addClass('active');
                        }else{
                            that.removeClass( 'active' ).parents('.themeum-campaign-post').find('.themeum-campaign-img').removeClass('active');
                        }
                    }
                }
            });
        }else{
            $('#myModal').modal('show');
        }
    });


});
