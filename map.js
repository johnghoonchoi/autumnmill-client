$(function() {
            // Also works with: var yourStartLatLng = '59.3426606750, 18.0736160278';
            var autumnmill = new google.maps.LatLng(37.548128, 126.918691);
            $('#map_canvas').gmap({'center':autumnmill,'zoom':15});
			      $('#map_canvas').gmap('addMarker',{'position':autumnmill});
    });