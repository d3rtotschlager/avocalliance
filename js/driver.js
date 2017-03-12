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

    $('#nav').onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
        begin: function () {
            //I get fired when the animation is starting
        },
        end: function () {
            //I get fired when the animation is ending
        },
        scrollChange: function ($currentListItem) {
            //I get fired when you enter a section and I pass the list item of the section
        }
    });

    /*
        Maplace - Jquery interface for GoogleMap API
        Theme based on : https://snazzymaps.com/style/1/pale-dawn
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    var gmap_options = {
        generate_controls: false,
        locations: [{
            lat: 50.6687744,
            lon: 4.3859488,
            animation: google.maps.Animation.DROP,
            html: "AvocAlliance",
            clickable: false,
        }],
        map_options: {
            scrollwheel: false,
            mapTypeControl: false,
            streetViewControl: false,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.SMAL,
            },
            zoom: 16,
        },

        styles: {
            custom: [
                {
                    featureType: "administrative",
                    elementType: "all",
                    stylers: [{
                        visibility: "on"
                    }, {
                        lightness: 33
                    }]
                },
                {
                    featureType: "landscape",
                    elementType: "all",
                    stylers: [{
                        color: "#d0d0d0"
                    }]
                },
                {
                    featureType: "poi.park",
                    elementType: "geometry",
                    stylers: [{
                        color: "#c5dac6"
                    }]
                },
                {
                    featureType: "poi.park",
                    elementType: "labels",
                    stylers: [{
                        visibility: "on"
                    }, {
                        lightness: 20
                    }]
                },
                {
                    featureType: "road",
                    elementType: "all",
                    stylers: [{
                        lightness: 20
                    }]
                },
                {
                    featureType: "road.highway",
                    elementType: "geometry",
                    stylers: [{
                        color: "#ce8f00"
                    }]
                },
                {
                    featureType: "road.arterial",
                    elementType: "geometry",
                    stylers: [{
                        color: "#e4d7c6"
                    }]
                },
                {
                    featureType: "road.local",
                    elementType: "geometry",
                    stylers: [{
                        color: "#fbfaf7"
                    }]
                },
                {
                    featureType: "water",
                    elementType: "all",
                    stylers: [{
                        visibility: "on"
                    }, {
                        color: "#acbcc9"
                    }]
                }
            ]
        }
    };

    new Maplace(gmap_options).Load();
});
