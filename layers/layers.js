var wms_layers = [];

        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });var lyr_NDVI_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI_1.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6532728.555785, -3814123.429582, -6531730.277274, -3813832.384943]
                            })
                        });var lyr_GNDVI_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "GNDVI",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/GNDVI_2.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6532728.555785, -3814123.429582, -6531730.277274, -3813832.384943]
                            })
                        });var lyr_NDRE_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDRE",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDRE_3.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6532728.555785, -3814123.429582, -6531730.277274, -3813832.384943]
                            })
                        });var lyr_Sequoia_clip_32721_b5_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Sequoia_clip_32721_b5",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Sequoia_clip_32721_b5_4.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6532728.555785, -3814123.429582, -6531730.277274, -3813832.384943]
                            })
                        });

lyr_GoogleSatellite_0.setVisible(true);lyr_NDVI_1.setVisible(true);lyr_GNDVI_2.setVisible(true);lyr_NDRE_3.setVisible(true);lyr_Sequoia_clip_32721_b5_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_NDVI_1,lyr_GNDVI_2,lyr_NDRE_3,lyr_Sequoia_clip_32721_b5_4];
