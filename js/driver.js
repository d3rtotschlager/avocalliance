// Making JSLint compatible with jquery
/*jslint browser: true*/
/*global  $*/

/*
    My custom events
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/*
    Jquery plugins launchers and settings
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

$(document).on("ready", function () {

    "use strict";

    /*
        One page nav smooth scroll jquery plugin
        https://github.com/davist11/jQuery-One-Page-Nav
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    $('#header').onePageNav({

        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
        // When animation start
        begin: function () {
        },

        // When animation ends
        end: function () {
        }
    });


    /*
        Fade in/out carousel
        http://www.simonbattersby.com/blog/simple-jquery-image-crossfade/
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    // Settings
    $(".rslides").responsiveSlides({
        auto: true,             // Boolean: Animate automatically, true or false
        speed: 1000,             // Integer: Speed of the transition, in milliseconds
        timeout: 3000,          // Integer: Time between slide transitions, in milliseconds
        pager: false,           // Boolean: Show pager, true or false
        nav: false,             // Boolean: Show navigation, true or false
        random: false,          // Boolean: Randomize the order of the slides, true or false
        pause: false,           // Boolean: Pause on hover, true or false
        pauseControls: true,    // Boolean: Pause when hovering controls, true or false
        prevText: "Previous",   // String: Text for the "previous" button
        nextText: "Next",       // String: Text for the "next" button
        maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
        navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
        manualControls: "",     // Selector: Declare custom pager navigation
        namespace: "rslides",   // String: Change the default namespace used
        before: function(){},   // Function: Before callback
        after: function(){}     // Function: After callback
    });

    /*
        Maplace - Jquery interface for GoogleMap API
        https://pixelcog.github.io/parallax.js/

        Theme based on : https://snazzymaps.com/style/1/pale-dawn
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    var gmap_options = {
        generate_controls : false,
        locations : [{
            lat : 50.6687744,
            lon : 4.3859488,
            animation : google.maps.Animation.DROP,
            html : "AvocAlliance",
            clickable : false,
        }],
        map_options : {
            scrollwheel : false,
            mapTypeControl : false,
            streetViewControl : false,
            zoomControlOptions : {
                style : google.maps.ZoomControlStyle.SMAL,
            },
            zoom : 16,
        },

        styles: {
            custom:[
                {featureType:"administrative",elementType:"all",stylers:[{visibility:"on"},{lightness:33}]},
                {featureType:"landscape",elementType:"all",stylers:[{color:"#d0d0d0"}]},
                {featureType:"poi.park",elementType:"geometry",stylers:[{color:"#c5dac6"}]},
                {featureType:"poi.park",elementType:"labels",stylers:[{visibility:"on"},{lightness:20}]},
                {featureType:"road",elementType:"all",stylers:[{lightness:20}]},
                {featureType:"road.highway",elementType:"geometry",stylers:[{color:"#ce8f00"}]},
                {featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#e4d7c6"}]},
                {featureType:"road.local",elementType:"geometry",stylers:[{color:"#fbfaf7"}]},
                {featureType:"water",elementType:"all",stylers:[{visibility:"on"},{color:"#acbcc9"}]}
            ]
        }
    };

    new Maplace(gmap_options).Load();

    /*
        Stellar - parallax scrolling
        http://markdalgleish.com/projects/stellar.js/demos/
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    $(function(){
        $.stellar({
            // Set scrolling to be in either one or both directions
            horizontalScrolling: true,
            verticalScrolling: true,

            // Set the global alignment offsets
            horizontalOffset: 0,
            verticalOffset: 0,

            // Refreshes parallax content on window load and resize
            responsive: false,

            // Select which property is used to calculate scroll.
            // Choose 'scroll', 'position', 'margin' or 'transform',
            // or write your own 'scrollProperty' plugin.
            scrollProperty: 'scroll',

            // Select which property is used to position elements.
            // Choose between 'position' or 'transform',
            // or write your own 'positionProperty' plugin.
            positionProperty: 'position',

            // Enable or disable the two types of parallax
            parallaxBackgrounds: true,
            parallaxElements: true,

            // Hide parallax elements that move outside the viewport
            hideDistantElements: true,

            // Customise how elements are shown and hidden
            hideElement: function($elem) { $elem.hide(); },
            showElement: function($elem) { $elem.show(); }
        });
    });

});
