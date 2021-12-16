var wms_layers = [];


        var lyr_GoogleEarth_0 = new ol.layer.Tile({
            'title': 'Google Earth',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_RAEngBVMSamples_1 = new ol.format.GeoJSON();
var features_RAEngBVMSamples_1 = format_RAEngBVMSamples_1.readFeatures(json_RAEngBVMSamples_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RAEngBVMSamples_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RAEngBVMSamples_1.addFeatures(features_RAEngBVMSamples_1);
var lyr_RAEngBVMSamples_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RAEngBVMSamples_1, 
                style: style_RAEngBVMSamples_1,
                interactive: true,
    title: 'RAEngBVMSamples<br />\
    <img src="styles/legend/RAEngBVMSamples_1_0.png" /> BAR01<br />\
    <img src="styles/legend/RAEngBVMSamples_1_1.png" /> DOL04<br />\
    <img src="styles/legend/RAEngBVMSamples_1_2.png" /> DOL05<br />\
    <img src="styles/legend/RAEngBVMSamples_1_3.png" /> DOL06<br />\
    <img src="styles/legend/RAEngBVMSamples_1_4.png" /> DOL08<br />\
    <img src="styles/legend/RAEngBVMSamples_1_5.png" /> DOL09<br />\
    <img src="styles/legend/RAEngBVMSamples_1_6.png" /> DOL10<br />\
    <img src="styles/legend/RAEngBVMSamples_1_7.png" /> DOL11a<br />\
    <img src="styles/legend/RAEngBVMSamples_1_8.png" /> GRT01<br />\
    <img src="styles/legend/RAEngBVMSamples_1_9.png" /> KYA01<br />\
    <img src="styles/legend/RAEngBVMSamples_1_10.png" /> LST01<br />\
    <img src="styles/legend/RAEngBVMSamples_1_11.png" /> LST02<br />\
    <img src="styles/legend/RAEngBVMSamples_1_12.png" /> LST03<br />\
    <img src="styles/legend/RAEngBVMSamples_1_13.png" /> LST04<br />\
    <img src="styles/legend/RAEngBVMSamples_1_14.png" /> LST10<br />\
    <img src="styles/legend/RAEngBVMSamples_1_15.png" /> MAG02<br />\
    <img src="styles/legend/RAEngBVMSamples_1_16.png" /> MAG06<br />\
    <img src="styles/legend/RAEngBVMSamples_1_17.png" /> MQ03<br />\
    <img src="styles/legend/RAEngBVMSamples_1_18.png" /> PHO01<br />\
    <img src="styles/legend/RAEngBVMSamples_1_19.png" /> QTZ07<br />\
    <img src="styles/legend/RAEngBVMSamples_1_20.png" /> SLT01<br />\
    <img src="styles/legend/RAEngBVMSamples_1_21.png" /> TLC10<br />\
    <img src="styles/legend/RAEngBVMSamples_1_22.png" /> VER01<br />\
    <img src="styles/legend/RAEngBVMSamples_1_23.png" /> VER02<br />\
    <img src="styles/legend/RAEngBVMSamples_1_24.png" /> <br />'
        });
var format_Samples_2 = new ol.format.GeoJSON();
var features_Samples_2 = format_Samples_2.readFeatures(json_Samples_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Samples_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Samples_2.addFeatures(features_Samples_2);
var lyr_Samples_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Samples_2, 
                style: style_Samples_2,
                interactive: true,
                title: '<img src="styles/legend/Samples_2.png" /> Samples'
            });

lyr_GoogleEarth_0.setVisible(true);lyr_RAEngBVMSamples_1.setVisible(true);lyr_Samples_2.setVisible(true);
var layersList = [lyr_GoogleEarth_0,lyr_RAEngBVMSamples_1,lyr_Samples_2];
lyr_RAEngBVMSamples_1.set('fieldAliases', {'Id': 'Id', 'Sample_ID': 'Sample_ID', 'feature': 'feature', 'type': 'type', 'name': 'name', 'remarks': 'remarks', 'LabSubmit': 'LabSubmit', 'mapname': 'mapname', });
lyr_Samples_2.set('fieldAliases', {'Id': 'Id', 'Sample_ID': 'Sample_ID', 'feature': 'feature', 'type': 'type', 'name': 'name', 'remarks': 'remarks', 'LabSubmit': 'LabSubmit', 'mapname': 'mapname', });
lyr_RAEngBVMSamples_1.set('fieldImages', {'Id': 'Range', 'Sample_ID': 'TextEdit', 'feature': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', 'remarks': 'TextEdit', 'LabSubmit': 'TextEdit', 'mapname': 'TextEdit', });
lyr_Samples_2.set('fieldImages', {'Id': '', 'Sample_ID': '', 'feature': '', 'type': '', 'name': '', 'remarks': '', 'LabSubmit': '', 'mapname': '', });
lyr_RAEngBVMSamples_1.set('fieldLabels', {'Id': 'no label', 'Sample_ID': 'no label', 'feature': 'no label', 'type': 'no label', 'name': 'no label', 'remarks': 'no label', 'LabSubmit': 'no label', 'mapname': 'no label', });
lyr_Samples_2.set('fieldLabels', {'Id': 'no label', 'Sample_ID': 'no label', 'feature': 'no label', 'type': 'no label', 'name': 'no label', 'remarks': 'no label', 'LabSubmit': 'no label', 'mapname': 'no label', });
lyr_Samples_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});