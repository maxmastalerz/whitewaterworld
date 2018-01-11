function initMap() {
	// Create a map object and specify the DOM element for display.
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 47, lng: -95},
		scrollwheel: false,
		zoom: 3,
		mapTypeId: google.maps.MapTypeId.TERRAIN,
		styles: [{"featureType":"administrative.locality","elementType":"all","stylers":[{"hue":"#2c2e33"},{"saturation":7},{"lightness":19},{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"simplified"}]},{"featureType":"poi","elementType":"all","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"hue":"#bbc0c4"},{"saturation":-93},{"lightness":31},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"hue":"#bbc0c4"},{"saturation":-93},{"lightness":31},{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"hue":"#bbc0c4"},{"saturation":-93},{"lightness":-2},{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"hue":"#e9ebed"},{"saturation":-90},{"lightness":-8},{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"hue":"#e9ebed"},{"saturation":10},{"lightness":69},{"visibility":"on"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#e9ebed"},{"saturation":-78},{"lightness":67},{"visibility":"simplified"}]}]
	});

	function addMarker(feature) {
		var marker = new google.maps.Marker({
			position: feature.position,
			icon: icons[feature.type].icon,
			map: map
		});
	}


	var icons = {
		'1_lightgreen': { icon: '../images/map-icons/1_lightgreen.png' },
		'1_green': { icon: '../images/map-icons/1_green.png' },
		'1_darkgreen': { icon: '../images/map-icons/1_darkgreen.png' },
		'1_black': { icon: '../images/map-icons/1_black.png' },
		'2_lightgreen': { icon: '../images/map-icons/2_lightgreen.png' },
		'2_green': { icon: '../images/map-icons/2_green.png' },
		'2_darkgreen': { icon: '../images/map-icons/2_darkgreen.png' },
		'2_black': { icon: '../images/map-icons/2_black.png' },
		'3-_lightgreen': { icon: '../images/map-icons/3-_lightgreen.png' },
		'3-_green': { icon: '../images/map-icons/3-_green.png' },
		'3-_darkgreen': { icon: '../images/map-icons/3-_darkgreen.png' },
		'3-_black': { icon: '../images/map-icons/3-_black.png' },
		'3_lightgreen': { icon: '../images/map-icons/3_lightgreen.png' },
		'3_green': { icon: '../images/map-icons/3_green.png' },
		'3_darkgreen': { icon: '../images/map-icons/3_darkgreen.png' },
		'3_black': { icon: '../images/map-icons/3_black.png' },
		'3+_lightgreen': { icon: '../images/map-icons/3+_lightgreen.png' },
		'3+_green': { icon: '../images/map-icons/3+_green.png' },
		'3+_darkgreen': { icon: '../images/map-icons/3+_darkgreen.png' },
		'3+_black': { icon: '../images/map-icons/3+_black.png' },
		'4-_lightgreen': { icon: '../images/map-icons/4-_lightgreen.png' },
		'4-_green': { icon: '../images/map-icons/4-_green.png' },
		'4-_darkgreen': { icon: '../images/map-icons/4-_darkgreen.png' },
		'4-_black': { icon: '../images/map-icons/4-_black.png' },
		'4_lightgreen': { icon: '../images/map-icons/4_lightgreen.png' },
		'4_green': { icon: '../images/map-icons/4_green.png' },
		'4_darkgreen': { icon: '../images/map-icons/4_darkgreen.png' },
		'4_black': { icon: '../images/map-icons/4_black.png' },
		'4+_lightgreen': { icon: '../images/map-icons/4+_lightgreen.png' },
		'4+_green': { icon: '../images/map-icons/4+_green.png' },
		'4+_darkgreen': { icon: '../images/map-icons/4+_darkgreen.png' },
		'4+_black': { icon: '../images/map-icons/4+_black.png' },
		'5-_lightgreen': { icon: '../images/map-icons/5-_lightgreen.png' },
		'5-_green': { icon: '../images/map-icons/5-_green.png' },
		'5-_darkgreen': { icon: '../images/map-icons/5-_darkgreen.png' },
		'5-_black': { icon: '../images/map-icons/5-_black.png' },
		'5_lightgreen': { icon: '../images/map-icons/5_lightgreen.png' },
		'5_green': { icon: '../images/map-icons/5_green.png' },
		'5_darkgreen': { icon: '../images/map-icons/5_darkgreen.png' },
		'5_black': { icon: '../images/map-icons/5_black.png' },
		'5+_lightgreen': { icon: '../images/map-icons/5+_lightgreen.png' },
		'5+_green': { icon: '../images/map-icons/5+_green.png' },
		'5+_darkgreen': { icon: '../images/map-icons/5+_darkgreen.png' },
		'5+_black': { icon: '../images/map-icons/5+_black.png' },
		'6_lightgreen': { icon: '../images/map-icons/6_lightgreen.png' },
		'6_green': { icon: '../images/map-icons/6_green.png' },
		'6_darkgreen': { icon: '../images/map-icons/6_darkgreen.png' },
		'6_black': { icon: '../images/map-icons/6_black.png' }
	};


	var markers = [
		{
			position: new google.maps.LatLng(-33.91721, 151.22630),
			type: '5+_green'
		}, {
			position: new google.maps.LatLng(-33.91539, 151.22820),
			type: '5-_lightgreen'
		}, {
			position: new google.maps.LatLng(-33.91747, 151.22912),
			type: '5-_black'
		}, {
			position: new google.maps.LatLng(-33.91910, 151.22907),
			type: '5_lightgreen'
		}, {
			position: new google.maps.LatLng(-33.91725, 151.23011),
			type: '5_green'
		}, {
			position: new google.maps.LatLng(-33.91872, 151.23089),
			type: '5_darkgreen'
		}, {
			position: new google.maps.LatLng(-33.91784, 151.23094),
			type: '5_black'
		}, {
			position: new google.maps.LatLng(-33.91682, 151.23149),
			type: '5+_lightgreen'
		}, {
			position: new google.maps.LatLng(-33.91790, 151.23463),
			type: '5+_green'
		}, {
			position: new google.maps.LatLng(-33.91666, 151.23468),
			type: '5+_darkgreen'
		}, {
			position: new google.maps.LatLng(-33.916988, 151.233640),
			type: '5+_black'
		}
	];

	markers.forEach(function(marker, i) {
		addMarker(marker);
	});

	map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(document.getElementById('legend'));
	$('#map > div:nth-child(1)').css({"overflow":"hidden"}); //HACK WORKAROUND FOR FIREFOX map overflow
}