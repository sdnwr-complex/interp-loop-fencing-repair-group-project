var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_sdnwrboundaryindividualparts_updated_inventorysdnwr_boundary_individual_parts_1 = new ol.format.GeoJSON();
var features_sdnwrboundaryindividualparts_updated_inventorysdnwr_boundary_individual_parts_1 = format_sdnwrboundaryindividualparts_updated_inventorysdnwr_boundary_individual_parts_1.readFeatures(json_sdnwrboundaryindividualparts_updated_inventorysdnwr_boundary_individual_parts_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sdnwrboundaryindividualparts_updated_inventorysdnwr_boundary_individual_parts_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sdnwrboundaryindividualparts_updated_inventorysdnwr_boundary_individual_parts_1.addFeatures(features_sdnwrboundaryindividualparts_updated_inventorysdnwr_boundary_individual_parts_1);
var lyr_sdnwrboundaryindividualparts_updated_inventorysdnwr_boundary_individual_parts_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sdnwrboundaryindividualparts_updated_inventorysdnwr_boundary_individual_parts_1, 
                style: style_sdnwrboundaryindividualparts_updated_inventorysdnwr_boundary_individual_parts_1,
                popuplayertitle: 'sdnwr boundary individual parts_updated_inventory — sdnwr_boundary_individual_parts',
                interactive: true,
                title: '<img src="styles/legend/sdnwrboundaryindividualparts_updated_inventorysdnwr_boundary_individual_parts_1.png" /> sdnwr boundary individual parts_updated_inventory — sdnwr_boundary_individual_parts'
            });
var format_trailssndfinalccp_updated_inventorytrails_snd_finalccp_updated_inventory_2 = new ol.format.GeoJSON();
var features_trailssndfinalccp_updated_inventorytrails_snd_finalccp_updated_inventory_2 = format_trailssndfinalccp_updated_inventorytrails_snd_finalccp_updated_inventory_2.readFeatures(json_trailssndfinalccp_updated_inventorytrails_snd_finalccp_updated_inventory_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_trailssndfinalccp_updated_inventorytrails_snd_finalccp_updated_inventory_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_trailssndfinalccp_updated_inventorytrails_snd_finalccp_updated_inventory_2.addFeatures(features_trailssndfinalccp_updated_inventorytrails_snd_finalccp_updated_inventory_2);
var lyr_trailssndfinalccp_updated_inventorytrails_snd_finalccp_updated_inventory_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_trailssndfinalccp_updated_inventorytrails_snd_finalccp_updated_inventory_2, 
                style: style_trailssndfinalccp_updated_inventorytrails_snd_finalccp_updated_inventory_2,
                popuplayertitle: 'trails snd final ccp_updated_inventory — trails_snd_finalccp_updated_inventory',
                interactive: true,
                title: '<img src="styles/legend/trailssndfinalccp_updated_inventorytrails_snd_finalccp_updated_inventory_2.png" /> trails snd final ccp_updated_inventory — trails_snd_finalccp_updated_inventory'
            });
var format_fws_trails_all_updated_inventoryfws_trails_all__fws_trails_allshp_3 = new ol.format.GeoJSON();
var features_fws_trails_all_updated_inventoryfws_trails_all__fws_trails_allshp_3 = format_fws_trails_all_updated_inventoryfws_trails_all__fws_trails_allshp_3.readFeatures(json_fws_trails_all_updated_inventoryfws_trails_all__fws_trails_allshp_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fws_trails_all_updated_inventoryfws_trails_all__fws_trails_allshp_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fws_trails_all_updated_inventoryfws_trails_all__fws_trails_allshp_3.addFeatures(features_fws_trails_all_updated_inventoryfws_trails_all__fws_trails_allshp_3);
var lyr_fws_trails_all_updated_inventoryfws_trails_all__fws_trails_allshp_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fws_trails_all_updated_inventoryfws_trails_all__fws_trails_allshp_3, 
                style: style_fws_trails_all_updated_inventoryfws_trails_all__fws_trails_allshp_3,
                popuplayertitle: 'fws_trails_all_updated_inventory — fws_trails_all__fws_trails_allshp',
                interactive: true,
                title: '<img src="styles/legend/fws_trails_all_updated_inventoryfws_trails_all__fws_trails_allshp_3.png" /> fws_trails_all_updated_inventory — fws_trails_all__fws_trails_allshp'
            });
var format_dumping_updated_inventory_4 = new ol.format.GeoJSON();
var features_dumping_updated_inventory_4 = format_dumping_updated_inventory_4.readFeatures(json_dumping_updated_inventory_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dumping_updated_inventory_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dumping_updated_inventory_4.addFeatures(features_dumping_updated_inventory_4);
var lyr_dumping_updated_inventory_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dumping_updated_inventory_4, 
                style: style_dumping_updated_inventory_4,
                popuplayertitle: 'dumping_updated_inventory',
                interactive: true,
                title: '<img src="styles/legend/dumping_updated_inventory_4.png" /> dumping_updated_inventory'
            });
var format_fencing_updated_inventory_interplooparea_5 = new ol.format.GeoJSON();
var features_fencing_updated_inventory_interplooparea_5 = format_fencing_updated_inventory_interplooparea_5.readFeatures(json_fencing_updated_inventory_interplooparea_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fencing_updated_inventory_interplooparea_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fencing_updated_inventory_interplooparea_5.addFeatures(features_fencing_updated_inventory_interplooparea_5);
var lyr_fencing_updated_inventory_interplooparea_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fencing_updated_inventory_interplooparea_5, 
                style: style_fencing_updated_inventory_interplooparea_5,
                popuplayertitle: 'fencing_updated_inventory_interp loop area',
                interactive: true,
                title: '<img src="styles/legend/fencing_updated_inventory_interplooparea_5.png" /> fencing_updated_inventory_interp loop area'
            });
var format_signs_updated_inventory__signs_interploop_6 = new ol.format.GeoJSON();
var features_signs_updated_inventory__signs_interploop_6 = format_signs_updated_inventory__signs_interploop_6.readFeatures(json_signs_updated_inventory__signs_interploop_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_signs_updated_inventory__signs_interploop_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_signs_updated_inventory__signs_interploop_6.addFeatures(features_signs_updated_inventory__signs_interploop_6);
var lyr_signs_updated_inventory__signs_interploop_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_signs_updated_inventory__signs_interploop_6, 
                style: style_signs_updated_inventory__signs_interploop_6,
                popuplayertitle: 'signs_updated_inventory__signs_interp loop',
                interactive: true,
                title: '<img src="styles/legend/signs_updated_inventory__signs_interploop_6.png" /> signs_updated_inventory__signs_interp loop'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_sdnwrboundaryindividualparts_updated_inventorysdnwr_boundary_individual_parts_1.setVisible(true);lyr_trailssndfinalccp_updated_inventorytrails_snd_finalccp_updated_inventory_2.setVisible(true);lyr_fws_trails_all_updated_inventoryfws_trails_all__fws_trails_allshp_3.setVisible(true);lyr_dumping_updated_inventory_4.setVisible(true);lyr_fencing_updated_inventory_interplooparea_5.setVisible(true);lyr_signs_updated_inventory__signs_interploop_6.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_sdnwrboundaryindividualparts_updated_inventorysdnwr_boundary_individual_parts_1,lyr_trailssndfinalccp_updated_inventorytrails_snd_finalccp_updated_inventory_2,lyr_fws_trails_all_updated_inventoryfws_trails_all__fws_trails_allshp_3,lyr_dumping_updated_inventory_4,lyr_fencing_updated_inventory_interplooparea_5,lyr_signs_updated_inventory__signs_interploop_6];
lyr_sdnwrboundaryindividualparts_updated_inventorysdnwr_boundary_individual_parts_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'CMPXNAME': 'CMPXNAME', 'ORGNAME': 'ORGNAME', 'DIVNAME': 'DIVNAME', 'UNITNAME': 'UNITNAME', 'SUBUNAME': 'SUBUNAME', 'ORGCODE': 'ORGCODE', 'MGMTCODE': 'MGMTCODE', 'IFWS': 'IFWS', 'LIT': 'LIT', 'SWENR': 'SWENR', 'SGRNR': 'SGRNR', 'GISACRES': 'GISACRES', 'DOCACRES': 'DOCACRES', 'SURACRES': 'SURACRES', 'STATUS': 'STATUS', 'INTTYPE1': 'INTTYPE1', 'INTTYPE2': 'INTTYPE2', 'TRACTNO': 'TRACTNO', 'INTIDNO': 'INTIDNO', 'RELICODE': 'RELICODE', 'COMMENTS': 'COMMENTS', 'RSL_TYPE': 'RSL_TYPE', 'FWSREGION': 'FWSREGION', 'CreatedDat': 'CreatedDat', 'ModifiedDa': 'ModifiedDa', 'GlobalID': 'GlobalID', 'IntReg': 'IntReg', 'CostCenter': 'CostCenter', 'ACQUISITIO': 'ACQUISITIO', 'FUNDING_AU': 'FUNDING_AU', 'COSTCENT_1': 'COSTCENT_1', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Attachment': 'Attachment', });
lyr_trailssndfinalccp_updated_inventorytrails_snd_finalccp_updated_inventory_2.set('fieldAliases', {'fid': 'fid', 'FinalCCP': 'FinalCCP', });
lyr_fws_trails_all_updated_inventoryfws_trails_all__fws_trails_allshp_3.set('fieldAliases', {'fid': 'fid', 'ORGCODE': 'ORGCODE', 'ORGNAME': 'ORGNAME', 'TRNAME': 'TRNAME', 'TRALTNAME': 'TRALTNAME', 'TRNUMBER': 'TRNUMBER', 'SECNUMBER': 'SECNUMBER', 'TRTYPE': 'TRTYPE', 'TRSURFACE': 'TRSURFACE', 'TRSURFACEF': 'TRSURFACEF', 'TRSURFACEO': 'TRSURFACEO', 'TRCLASS': 'TRCLASS', 'TRCONDITIO': 'TRCONDITIO', 'TYPEROUTE': 'TYPEROUTE', 'SHAREDSYST': 'SHAREDSYST', 'DESIGNEDUS': 'DESIGNEDUS', 'MANAGEDUSE': 'MANAGEDUSE', 'TRUSE': 'TRUSE', 'ADMINORG': 'ADMINORG', 'MANAGINGOR': 'MANAGINGOR', 'OWNER': 'OWNER', 'OWNERNAME': 'OWNERNAME', 'MAINTAINER': 'MAINTAINER', 'MAINTAIN_1': 'MAINTAIN_1', 'NATTRDESIG': 'NATTRDESIG', 'NHTNSTNUMB': 'NHTNSTNUMB', 'NHTNSTADMI': 'NHTNSTADMI', 'MAPMETHOD': 'MAPMETHOD', 'XYACCURACY': 'XYACCURACY', 'AGENCYDATA': 'AGENCYDATA', 'YYYYMMDDIM': 'YYYYMMDDIM', 'FEATUREID': 'FEATUREID', 'GEOMETRYID': 'GEOMETRYID', 'CYCLEID': 'CYCLEID', 'GPSDATE': 'GPSDATE', 'REGION': 'REGION', 'STATE': 'STATE', 'LOCATION': 'LOCATION', 'ASSETCODE': 'ASSETCODE', 'WIDTH': 'WIDTH', 'MAXSLOPE': 'MAXSLOPE', 'AVGSLOPE': 'AVGSLOPE', 'AVGXSLOPE': 'AVGXSLOPE', 'SECLENGTHF': 'SECLENGTHF', 'TRAILFT': 'TRAILFT', 'SECLENGTHM': 'SECLENGTHM', 'TRAILMI': 'TRAILMI', 'STARTLAT': 'STARTLAT', 'STARTLONG': 'STARTLONG', 'ENDLAT': 'ENDLAT', 'ENDLONG': 'ENDLONG', 'STARTDESCR': 'STARTDESCR', 'ENDDESCRIP': 'ENDDESCRIP', 'ACCESSIBIL': 'ACCESSIBIL', 'INFOTYPE': 'INFOTYPE', 'BICYCLES': 'BICYCLES', 'DOGS': 'DOGS', 'DATAACCESS': 'DATAACCESS', 'PUBLICDISP': 'PUBLICDISP', 'SEASONAL': 'SEASONAL', 'SEASONALDE': 'SEASONALDE', 'NOTES': 'NOTES', 'CREATEUSER': 'CREATEUSER', 'CREATEDATE': 'CREATEDATE', 'EDITUSER': 'EDITUSER', 'EDITDATE': 'EDITDATE', 'GlobalID': 'GlobalID', 'RelateGUID': 'RelateGUID', 'Shape__Len': 'Shape__Len', });
lyr_dumping_updated_inventory_4.set('fieldAliases', {'fid': 'fid', 'type_of_dumping': 'type_of_dumping', 'date': 'date', 'comment': 'comment', 'name': 'name', });
lyr_fencing_updated_inventory_interplooparea_5.set('fieldAliases', {'fid': 'fid', 'type': 'type', 'condition': 'condition', 'post_present': 'post_present', 'date': 'date', 'post_needed': 'post_needed', 'fixed_when_logged': 'fixed_when_logged', 'description_or_comment': 'description_or_comment', });
lyr_signs_updated_inventory__signs_interploop_6.set('fieldAliases', {'fid': 'fid', 'type of sign': 'type of sign', 'date': 'date', 'mising_or_present': 'mising_or_present', 'size': 'size', 'comment': 'comment', });
lyr_sdnwrboundaryindividualparts_updated_inventorysdnwr_boundary_individual_parts_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'CMPXNAME': 'TextEdit', 'ORGNAME': 'TextEdit', 'DIVNAME': 'TextEdit', 'UNITNAME': 'TextEdit', 'SUBUNAME': 'TextEdit', 'ORGCODE': 'TextEdit', 'MGMTCODE': 'TextEdit', 'IFWS': 'TextEdit', 'LIT': 'TextEdit', 'SWENR': 'TextEdit', 'SGRNR': 'TextEdit', 'GISACRES': 'TextEdit', 'DOCACRES': 'TextEdit', 'SURACRES': 'TextEdit', 'STATUS': 'TextEdit', 'INTTYPE1': 'TextEdit', 'INTTYPE2': 'TextEdit', 'TRACTNO': 'TextEdit', 'INTIDNO': 'TextEdit', 'RELICODE': 'TextEdit', 'COMMENTS': 'TextEdit', 'RSL_TYPE': 'TextEdit', 'FWSREGION': 'TextEdit', 'CreatedDat': 'TextEdit', 'ModifiedDa': 'TextEdit', 'GlobalID': 'TextEdit', 'IntReg': 'TextEdit', 'CostCenter': 'TextEdit', 'ACQUISITIO': 'TextEdit', 'FUNDING_AU': 'TextEdit', 'COSTCENT_1': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Attachment': 'TextEdit', });
lyr_trailssndfinalccp_updated_inventorytrails_snd_finalccp_updated_inventory_2.set('fieldImages', {'fid': 'TextEdit', 'FinalCCP': 'TextEdit', });
lyr_fws_trails_all_updated_inventoryfws_trails_all__fws_trails_allshp_3.set('fieldImages', {'fid': 'TextEdit', 'ORGCODE': 'TextEdit', 'ORGNAME': 'TextEdit', 'TRNAME': 'TextEdit', 'TRALTNAME': 'TextEdit', 'TRNUMBER': 'TextEdit', 'SECNUMBER': 'TextEdit', 'TRTYPE': 'TextEdit', 'TRSURFACE': 'TextEdit', 'TRSURFACEF': 'TextEdit', 'TRSURFACEO': 'TextEdit', 'TRCLASS': 'TextEdit', 'TRCONDITIO': 'TextEdit', 'TYPEROUTE': 'TextEdit', 'SHAREDSYST': 'TextEdit', 'DESIGNEDUS': 'TextEdit', 'MANAGEDUSE': 'TextEdit', 'TRUSE': 'TextEdit', 'ADMINORG': 'TextEdit', 'MANAGINGOR': 'TextEdit', 'OWNER': 'TextEdit', 'OWNERNAME': 'TextEdit', 'MAINTAINER': 'TextEdit', 'MAINTAIN_1': 'TextEdit', 'NATTRDESIG': 'TextEdit', 'NHTNSTNUMB': 'TextEdit', 'NHTNSTADMI': 'TextEdit', 'MAPMETHOD': 'TextEdit', 'XYACCURACY': 'TextEdit', 'AGENCYDATA': 'TextEdit', 'YYYYMMDDIM': 'TextEdit', 'FEATUREID': 'TextEdit', 'GEOMETRYID': 'TextEdit', 'CYCLEID': 'TextEdit', 'GPSDATE': 'DateTime', 'REGION': 'Range', 'STATE': 'TextEdit', 'LOCATION': 'TextEdit', 'ASSETCODE': 'TextEdit', 'WIDTH': 'TextEdit', 'MAXSLOPE': 'TextEdit', 'AVGSLOPE': 'TextEdit', 'AVGXSLOPE': 'TextEdit', 'SECLENGTHF': 'TextEdit', 'TRAILFT': 'TextEdit', 'SECLENGTHM': 'TextEdit', 'TRAILMI': 'TextEdit', 'STARTLAT': 'TextEdit', 'STARTLONG': 'TextEdit', 'ENDLAT': 'TextEdit', 'ENDLONG': 'TextEdit', 'STARTDESCR': 'TextEdit', 'ENDDESCRIP': 'TextEdit', 'ACCESSIBIL': 'TextEdit', 'INFOTYPE': 'TextEdit', 'BICYCLES': 'TextEdit', 'DOGS': 'TextEdit', 'DATAACCESS': 'TextEdit', 'PUBLICDISP': 'TextEdit', 'SEASONAL': 'TextEdit', 'SEASONALDE': 'TextEdit', 'NOTES': 'TextEdit', 'CREATEUSER': 'TextEdit', 'CREATEDATE': 'DateTime', 'EDITUSER': 'TextEdit', 'EDITDATE': 'DateTime', 'GlobalID': 'TextEdit', 'RelateGUID': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_dumping_updated_inventory_4.set('fieldImages', {'fid': 'TextEdit', 'type_of_dumping': 'ValueMap', 'date': 'DateTime', 'comment': 'TextEdit', 'name': 'TextEdit', });
lyr_fencing_updated_inventory_interplooparea_5.set('fieldImages', {'fid': 'TextEdit', 'type': 'TextEdit', 'condition': 'TextEdit', 'post_present': 'TextEdit', 'date': 'DateTime', 'post_needed': 'Range', 'fixed_when_logged': 'TextEdit', 'description_or_comment': 'TextEdit', });
lyr_signs_updated_inventory__signs_interploop_6.set('fieldImages', {'fid': 'TextEdit', 'type of sign': 'TextEdit', 'date': 'DateTime', 'mising_or_present': 'TextEdit', 'size': 'TextEdit', 'comment': 'TextEdit', });
lyr_sdnwrboundaryindividualparts_updated_inventorysdnwr_boundary_individual_parts_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'CMPXNAME': 'no label', 'ORGNAME': 'no label', 'DIVNAME': 'no label', 'UNITNAME': 'no label', 'SUBUNAME': 'no label', 'ORGCODE': 'no label', 'MGMTCODE': 'no label', 'IFWS': 'no label', 'LIT': 'no label', 'SWENR': 'no label', 'SGRNR': 'no label', 'GISACRES': 'no label', 'DOCACRES': 'no label', 'SURACRES': 'no label', 'STATUS': 'no label', 'INTTYPE1': 'no label', 'INTTYPE2': 'no label', 'TRACTNO': 'no label', 'INTIDNO': 'no label', 'RELICODE': 'no label', 'COMMENTS': 'no label', 'RSL_TYPE': 'no label', 'FWSREGION': 'no label', 'CreatedDat': 'no label', 'ModifiedDa': 'no label', 'GlobalID': 'no label', 'IntReg': 'no label', 'CostCenter': 'no label', 'ACQUISITIO': 'no label', 'FUNDING_AU': 'no label', 'COSTCENT_1': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Attachment': 'no label', });
lyr_trailssndfinalccp_updated_inventorytrails_snd_finalccp_updated_inventory_2.set('fieldLabels', {'fid': 'no label', 'FinalCCP': 'no label', });
lyr_fws_trails_all_updated_inventoryfws_trails_all__fws_trails_allshp_3.set('fieldLabels', {'fid': 'no label', 'ORGCODE': 'no label', 'ORGNAME': 'no label', 'TRNAME': 'no label', 'TRALTNAME': 'no label', 'TRNUMBER': 'no label', 'SECNUMBER': 'no label', 'TRTYPE': 'no label', 'TRSURFACE': 'no label', 'TRSURFACEF': 'no label', 'TRSURFACEO': 'no label', 'TRCLASS': 'no label', 'TRCONDITIO': 'no label', 'TYPEROUTE': 'no label', 'SHAREDSYST': 'no label', 'DESIGNEDUS': 'no label', 'MANAGEDUSE': 'no label', 'TRUSE': 'no label', 'ADMINORG': 'no label', 'MANAGINGOR': 'no label', 'OWNER': 'no label', 'OWNERNAME': 'no label', 'MAINTAINER': 'no label', 'MAINTAIN_1': 'no label', 'NATTRDESIG': 'no label', 'NHTNSTNUMB': 'no label', 'NHTNSTADMI': 'no label', 'MAPMETHOD': 'no label', 'XYACCURACY': 'no label', 'AGENCYDATA': 'no label', 'YYYYMMDDIM': 'no label', 'FEATUREID': 'no label', 'GEOMETRYID': 'no label', 'CYCLEID': 'no label', 'GPSDATE': 'no label', 'REGION': 'no label', 'STATE': 'no label', 'LOCATION': 'no label', 'ASSETCODE': 'no label', 'WIDTH': 'no label', 'MAXSLOPE': 'no label', 'AVGSLOPE': 'no label', 'AVGXSLOPE': 'no label', 'SECLENGTHF': 'no label', 'TRAILFT': 'no label', 'SECLENGTHM': 'no label', 'TRAILMI': 'no label', 'STARTLAT': 'no label', 'STARTLONG': 'no label', 'ENDLAT': 'no label', 'ENDLONG': 'no label', 'STARTDESCR': 'no label', 'ENDDESCRIP': 'no label', 'ACCESSIBIL': 'no label', 'INFOTYPE': 'no label', 'BICYCLES': 'no label', 'DOGS': 'no label', 'DATAACCESS': 'no label', 'PUBLICDISP': 'no label', 'SEASONAL': 'no label', 'SEASONALDE': 'no label', 'NOTES': 'no label', 'CREATEUSER': 'no label', 'CREATEDATE': 'no label', 'EDITUSER': 'no label', 'EDITDATE': 'no label', 'GlobalID': 'no label', 'RelateGUID': 'no label', 'Shape__Len': 'no label', });
lyr_dumping_updated_inventory_4.set('fieldLabels', {'fid': 'no label', 'type_of_dumping': 'no label', 'date': 'no label', 'comment': 'no label', 'name': 'no label', });
lyr_fencing_updated_inventory_interplooparea_5.set('fieldLabels', {'fid': 'no label', 'type': 'no label', 'condition': 'no label', 'post_present': 'no label', 'date': 'no label', 'post_needed': 'no label', 'fixed_when_logged': 'no label', 'description_or_comment': 'no label', });
lyr_signs_updated_inventory__signs_interploop_6.set('fieldLabels', {'fid': 'no label', 'type of sign': 'no label', 'date': 'no label', 'mising_or_present': 'no label', 'size': 'no label', 'comment': 'no label', });
lyr_signs_updated_inventory__signs_interploop_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});