var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([35.0, 39.0]), 
        zoom: 6
    })
});

document.getElementById('addPoint').addEventListener('click', function() {
    var lon = parseFloat(document.getElementById('posx').value);
    var lat = parseFloat(document.getElementById('posy').value);

    if (isNaN(lon) || isNaN(lat)) {
        alert('Lütfen geçerli koordinatlar girin!');
        return;
    }

    var coord = ol.proj.fromLonLat([lon, lat]);
    var pointFeature = new ol.Feature(new ol.geom.Point(coord));

    var vectorSource = new ol.source.Vector({
        features: [pointFeature]
    });
    var vectorLayer = new ol.layer.Vector({
        source: vectorSource
    });

    map.addLayer(vectorLayer);
    alert('Nokta eklendi!');
});
