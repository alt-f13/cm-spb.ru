// Google Maps Scripts
var map = null;
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);
google.maps.event.addDomListener(window, 'resize', function() {
    map.setCenter(new google.maps.LatLng(40.6700, -73.9400));
});

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(59.831163, 30.3940273),

        // Disables the default Google Maps UI components
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false,

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: [
{
    "elementType": "geometry",
    "stylers": [
        {
            "hue": "#ff4400"
        },
        {
            "saturation": -68
        },
        {
            "lightness": -4
        },
        {
            "gamma": 0.72
        }
    ]
},
{
    "featureType": "road",
    "elementType": "labels.icon"
},
{
    "featureType": "landscape.man_made",
    "elementType": "geometry",
    "stylers": [
        {
            "hue": "#0077ff"
        },
        {
            "gamma": 3.1
        }
    ]
},
{
    "featureType": "water",
    "stylers": [
        {
            "hue": "#00ccff"
        },
        {
            "gamma": 0.44
        },
        {
            "saturation": -33
        }
    ]
},
{
    "featureType": "poi.park",
    "stylers": [
        {
            "hue": "#44ff00"
        },
        {
            "saturation": -23
        }
    ]
},
{
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
        {
            "hue": "#007fff"
        },
        {
            "gamma": 0.77
        },
        {
            "saturation": 65
        },
        {
            "lightness": 99
        }
    ]
},
{
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": [
        {
            "gamma": 0.11
        },
        {
            "weight": 5.6
        },
        {
            "saturation": 99
        },
        {
            "hue": "#0091ff"
        },
        {
            "lightness": -86
        }
    ]
},
{
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
        {
            "lightness": -48
        },
        {
            "hue": "#ff5e00"
        },
        {
            "gamma": 1.2
        },
        {
            "saturation": -23
        }
    ]
},
{
    "featureType": "transit",
    "elementType": "labels.text.stroke",
    "stylers": [
        {
            "saturation": -64
        },
        {
            "hue": "#ff9100"
        },
        {
            "lightness": 16
        },
        {
            "gamma": 0.47
        },
        {
            "weight": 2.7
        }
    ]
}
]
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    map = new google.maps.Map(mapElement, mapOptions);

    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    var image = '/images/logo.png';
    var myLatLng = new google.maps.LatLng(59.831163, 30.3940273);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
}
