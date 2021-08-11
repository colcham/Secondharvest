ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([-122.555640, 37.109201, -121.582987, 37.751084]);
var wms_layers = [];

var format_CITY_0 = new ol.format.GeoJSON();
var features_CITY_0 = format_CITY_0.readFeatures(json_CITY_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CITY_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CITY_0.addFeatures(features_CITY_0);
var lyr_CITY_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CITY_0, 
                style: style_CITY_0,
                interactive: true,
                title: '<img src="styles/legend/CITY_0.png" /> CITY'
            });
var format_SanMateoCounty_1 = new ol.format.GeoJSON();
var features_SanMateoCounty_1 = format_SanMateoCounty_1.readFeatures(json_SanMateoCounty_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SanMateoCounty_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SanMateoCounty_1.addFeatures(features_SanMateoCounty_1);
var lyr_SanMateoCounty_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SanMateoCounty_1, 
                style: style_SanMateoCounty_1,
                interactive: true,
    title: 'San Mateo County<br />\
    <img src="styles/legend/SanMateoCounty_1_0.png" /> 0 - 12<br />\
    <img src="styles/legend/SanMateoCounty_1_1.png" /> 12 - 42<br />\
    <img src="styles/legend/SanMateoCounty_1_2.png" /> 42 - 74<br />\
    <img src="styles/legend/SanMateoCounty_1_3.png" /> 74 - 116<br />\
    <img src="styles/legend/SanMateoCounty_1_4.png" /> 116 - 221<br />'
        });
var format_SantaClaraCounty_2 = new ol.format.GeoJSON();
var features_SantaClaraCounty_2 = format_SantaClaraCounty_2.readFeatures(json_SantaClaraCounty_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SantaClaraCounty_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SantaClaraCounty_2.addFeatures(features_SantaClaraCounty_2);
var lyr_SantaClaraCounty_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SantaClaraCounty_2, 
                style: style_SantaClaraCounty_2,
                interactive: true,
    title: 'Santa Clara County<br />\
    <img src="styles/legend/SantaClaraCounty_2_0.png" /> 0 - 6<br />\
    <img src="styles/legend/SantaClaraCounty_2_1.png" /> 6 - 17<br />\
    <img src="styles/legend/SantaClaraCounty_2_2.png" /> 17 - 29<br />\
    <img src="styles/legend/SantaClaraCounty_2_3.png" /> 29 - 43<br />\
    <img src="styles/legend/SantaClaraCounty_2_4.png" /> 43 - 59<br />\
    <img src="styles/legend/SantaClaraCounty_2_5.png" /> 59 - 80<br />\
    <img src="styles/legend/SantaClaraCounty_2_6.png" /> 80 - 115<br />\
    <img src="styles/legend/SantaClaraCounty_2_7.png" /> 115 - 159<br />\
    <img src="styles/legend/SantaClaraCounty_2_8.png" /> 159 - 233<br />\
    <img src="styles/legend/SantaClaraCounty_2_9.png" /> 233 - 352<br />'
        });
var format_CITY_3 = new ol.format.GeoJSON();
var features_CITY_3 = format_CITY_3.readFeatures(json_CITY_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CITY_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CITY_3.addFeatures(features_CITY_3);
var lyr_CITY_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CITY_3, 
                style: style_CITY_3,
                interactive: true,
                title: '<img src="styles/legend/CITY_3.png" /> CITY'
            });
var format_SanMateoCounty_4 = new ol.format.GeoJSON();
var features_SanMateoCounty_4 = format_SanMateoCounty_4.readFeatures(json_SanMateoCounty_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SanMateoCounty_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SanMateoCounty_4.addFeatures(features_SanMateoCounty_4);
var lyr_SanMateoCounty_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SanMateoCounty_4, 
                style: style_SanMateoCounty_4,
                interactive: true,
    title: 'San Mateo County<br />\
    <img src="styles/legend/SanMateoCounty_4_0.png" /> 0 - 12<br />\
    <img src="styles/legend/SanMateoCounty_4_1.png" /> 12 - 42<br />\
    <img src="styles/legend/SanMateoCounty_4_2.png" /> 42 - 74<br />\
    <img src="styles/legend/SanMateoCounty_4_3.png" /> 74 - 116<br />\
    <img src="styles/legend/SanMateoCounty_4_4.png" /> 116 - 221<br />'
        });
var format_UnhousedProgramsPartneredOrganizationsServingUnhoused_5 = new ol.format.GeoJSON();
var features_UnhousedProgramsPartneredOrganizationsServingUnhoused_5 = format_UnhousedProgramsPartneredOrganizationsServingUnhoused_5.readFeatures(json_UnhousedProgramsPartneredOrganizationsServingUnhoused_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_UnhousedProgramsPartneredOrganizationsServingUnhoused_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnhousedProgramsPartneredOrganizationsServingUnhoused_5.addFeatures(features_UnhousedProgramsPartneredOrganizationsServingUnhoused_5);
var lyr_UnhousedProgramsPartneredOrganizationsServingUnhoused_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UnhousedProgramsPartneredOrganizationsServingUnhoused_5, 
                style: style_UnhousedProgramsPartneredOrganizationsServingUnhoused_5,
                interactive: true,
                title: '<img src="styles/legend/UnhousedProgramsPartneredOrganizationsServingUnhoused_5.png" /> Unhoused Programs Partnered Organizations Serving Unhoused'
            });
var format_UnhousedProgramsOrganizations_6 = new ol.format.GeoJSON();
var features_UnhousedProgramsOrganizations_6 = format_UnhousedProgramsOrganizations_6.readFeatures(json_UnhousedProgramsOrganizations_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_UnhousedProgramsOrganizations_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnhousedProgramsOrganizations_6.addFeatures(features_UnhousedProgramsOrganizations_6);
var lyr_UnhousedProgramsOrganizations_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UnhousedProgramsOrganizations_6, 
                style: style_UnhousedProgramsOrganizations_6,
                interactive: true,
                title: '<img src="styles/legend/UnhousedProgramsOrganizations_6.png" /> Unhoused Programs Organizations'
            });
var group_group1 = new ol.layer.Group({
                                layers: [lyr_SantaClaraCounty_2,lyr_CITY_3,lyr_SanMateoCounty_4,lyr_UnhousedProgramsPartneredOrganizationsServingUnhoused_5,lyr_UnhousedProgramsOrganizations_6,],
                                title: "group1"});
var group_SanMateoCounty = new ol.layer.Group({
                                layers: [lyr_CITY_3,lyr_SanMateoCounty_4,],
                                title: "San Mateo County"});

lyr_CITY_0.setVisible(true);lyr_SanMateoCounty_1.setVisible(true);lyr_SantaClaraCounty_2.setVisible(true);lyr_CITY_3.setVisible(true);lyr_SanMateoCounty_4.setVisible(true);lyr_UnhousedProgramsPartneredOrganizationsServingUnhoused_5.setVisible(true);lyr_UnhousedProgramsOrganizations_6.setVisible(true);
var layersList = [group_SanMateoCounty,group_group1];
lyr_CITY_0.set('fieldAliases', {'CITY_BDRY_': 'CITY_BDRY_', 'GIS_ADMIN_': 'GIS_ADMIN_', 'PERIMETER': 'PERIMETER', 'NAME': 'NAME', 'SRC_DOC': 'SRC_DOC', 'SRC_SCALE': 'SRC_SCALE', 'SRC_AGENCY': 'SRC_AGENCY', 'SRC_COMMEN': 'SRC_COMMEN', 'SRC_DATE': 'SRC_DATE', 'REV_DATE': 'REV_DATE', 'UNINCORPOR': 'UNINCORPOR', 'ABBR': 'ABBR', 'HANSEN_ARE': 'HANSEN_ARE', 'CNAME': 'CNAME', 'GEOMETRY_A': 'GEOMETRY_A', 'GEOMETRY_L': 'GEOMETRY_L', });
lyr_SanMateoCounty_1.set('fieldAliases', {'CITY_BDRY_': 'CITY_BDRY_', 'GIS_ADMIN_': 'GIS_ADMIN_', 'PERIMETER': 'PERIMETER', 'NAME': 'NAME', 'SRC_DOC': 'SRC_DOC', 'SRC_SCALE': 'SRC_SCALE', 'SRC_AGENCY': 'SRC_AGENCY', 'SRC_COMMEN': 'SRC_COMMEN', 'SRC_DATE': 'SRC_DATE', 'REV_DATE': 'REV_DATE', 'UNINCORPOR': 'UNINCORPOR', 'ABBR': 'ABBR', 'HANSEN_ARE': 'HANSEN_ARE', 'CNAME': 'CNAME', 'GEOMETRY_A': 'GEOMETRY_A', 'GEOMETRY_L': 'GEOMETRY_L', 'SMC_Jurisdiction': 'SMC_Jurisdiction', 'SMC_Unhoused Pop': 'SMC_Unhoused Pop', 'SMC_field_3': 'SMC_field_3', 'SMC_field_4': 'SMC_field_4', 'SMC_field_5': 'SMC_field_5', 'SMC_field_6': 'SMC_field_6', });
lyr_SantaClaraCounty_2.set('fieldAliases', {'asian': 'asian', 'asian_pct': 'asian_pct', 'black': 'black', 'black_pct': 'black_pct', 'dec_10_sf1': 'dec_10_sf1', 'hispanic': 'hispanic', 'hispanic_p': 'hispanic_p', 'objectid': 'objectid', 'other': 'other', 'other_pct': 'other_pct', 'pop_densit': 'pop_densit', 'shape_area': 'shape_area', 'shape_leng': 'shape_leng', 'total': 'total', 'tract': 'tract', 'tract_2010': 'tract_2010', 'tract_is_r': 'tract_is_r', 'tract_name': 'tract_name', 'tract_sqmi': 'tract_sqmi', 'white': 'white', 'white_pct': 'white_pct', 'SCUNHOUSED5_Name': 'SCUNHOUSED5_Name', 'SCUNHOUSED5_Geometry': 'SCUNHOUSED5_Geometry', 'SCUNHOUSED5_Latitude (generated)': 'SCUNHOUSED5_Latitude (generated)', 'SCUNHOUSED5_Longitude (generated)': 'SCUNHOUSED5_Longitude (generated)', 'SCUNHOUSED5_Number': 'SCUNHOUSED5_Number', 'SCUNHOUSED5_field_6': 'SCUNHOUSED5_field_6', 'SCUNHOUSED5_ID': 'SCUNHOUSED5_ID', });
lyr_CITY_3.set('fieldAliases', {'CITY_BDRY_': 'CITY_BDRY_', 'GIS_ADMIN_': 'GIS_ADMIN_', 'PERIMETER': 'PERIMETER', 'NAME': 'NAME', 'SRC_DOC': 'SRC_DOC', 'SRC_SCALE': 'SRC_SCALE', 'SRC_AGENCY': 'SRC_AGENCY', 'SRC_COMMEN': 'SRC_COMMEN', 'SRC_DATE': 'SRC_DATE', 'REV_DATE': 'REV_DATE', 'UNINCORPOR': 'UNINCORPOR', 'ABBR': 'ABBR', 'HANSEN_ARE': 'HANSEN_ARE', 'CNAME': 'CNAME', 'GEOMETRY_A': 'GEOMETRY_A', 'GEOMETRY_L': 'GEOMETRY_L', });
lyr_SanMateoCounty_4.set('fieldAliases', {'CITY_BDRY_': 'CITY_BDRY_', 'GIS_ADMIN_': 'GIS_ADMIN_', 'PERIMETER': 'PERIMETER', 'NAME': 'NAME', 'SRC_DOC': 'SRC_DOC', 'SRC_SCALE': 'SRC_SCALE', 'SRC_AGENCY': 'SRC_AGENCY', 'SRC_COMMEN': 'SRC_COMMEN', 'SRC_DATE': 'SRC_DATE', 'REV_DATE': 'REV_DATE', 'UNINCORPOR': 'UNINCORPOR', 'ABBR': 'ABBR', 'HANSEN_ARE': 'HANSEN_ARE', 'CNAME': 'CNAME', 'GEOMETRY_A': 'GEOMETRY_A', 'GEOMETRY_L': 'GEOMETRY_L', 'SMC_Jurisdiction': 'SMC_Jurisdiction', 'SMC_Unhoused Pop': 'SMC_Unhoused Pop', 'SMC_field_3': 'SMC_field_3', 'SMC_field_4': 'SMC_field_4', 'SMC_field_5': 'SMC_field_5', 'SMC_field_6': 'SMC_field_6', });
lyr_UnhousedProgramsPartneredOrganizationsServingUnhoused_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_UnhousedProgramsOrganizations_6.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CITY_0.set('fieldImages', {'CITY_BDRY_': 'TextEdit', 'GIS_ADMIN_': 'TextEdit', 'PERIMETER': 'TextEdit', 'NAME': 'TextEdit', 'SRC_DOC': 'TextEdit', 'SRC_SCALE': 'TextEdit', 'SRC_AGENCY': 'TextEdit', 'SRC_COMMEN': 'TextEdit', 'SRC_DATE': 'TextEdit', 'REV_DATE': 'TextEdit', 'UNINCORPOR': 'Range', 'ABBR': 'TextEdit', 'HANSEN_ARE': 'TextEdit', 'CNAME': 'TextEdit', 'GEOMETRY_A': 'TextEdit', 'GEOMETRY_L': 'TextEdit', });
lyr_SanMateoCounty_1.set('fieldImages', {'CITY_BDRY_': 'TextEdit', 'GIS_ADMIN_': 'TextEdit', 'PERIMETER': 'TextEdit', 'NAME': 'TextEdit', 'SRC_DOC': 'TextEdit', 'SRC_SCALE': 'TextEdit', 'SRC_AGENCY': 'TextEdit', 'SRC_COMMEN': 'TextEdit', 'SRC_DATE': 'TextEdit', 'REV_DATE': 'TextEdit', 'UNINCORPOR': 'Range', 'ABBR': 'TextEdit', 'HANSEN_ARE': 'TextEdit', 'CNAME': 'TextEdit', 'GEOMETRY_A': 'TextEdit', 'GEOMETRY_L': 'TextEdit', 'SMC_Jurisdiction': 'TextEdit', 'SMC_Unhoused Pop': 'Range', 'SMC_field_3': 'TextEdit', 'SMC_field_4': 'TextEdit', 'SMC_field_5': 'TextEdit', 'SMC_field_6': 'TextEdit', });
lyr_SantaClaraCounty_2.set('fieldImages', {'asian': 'TextEdit', 'asian_pct': 'TextEdit', 'black': 'TextEdit', 'black_pct': 'TextEdit', 'dec_10_sf1': 'TextEdit', 'hispanic': 'TextEdit', 'hispanic_p': 'TextEdit', 'objectid': 'TextEdit', 'other': 'TextEdit', 'other_pct': 'TextEdit', 'pop_densit': 'TextEdit', 'shape_area': 'TextEdit', 'shape_leng': 'TextEdit', 'total': 'TextEdit', 'tract': 'TextEdit', 'tract_2010': 'TextEdit', 'tract_is_r': 'TextEdit', 'tract_name': 'TextEdit', 'tract_sqmi': 'TextEdit', 'white': 'TextEdit', 'white_pct': 'TextEdit', 'SCUNHOUSED5_Name': 'TextEdit', 'SCUNHOUSED5_Geometry': 'TextEdit', 'SCUNHOUSED5_Latitude (generated)': 'TextEdit', 'SCUNHOUSED5_Longitude (generated)': 'TextEdit', 'SCUNHOUSED5_Number': 'Range', 'SCUNHOUSED5_field_6': 'TextEdit', 'SCUNHOUSED5_ID': 'TextEdit', });
lyr_CITY_3.set('fieldImages', {'CITY_BDRY_': 'TextEdit', 'GIS_ADMIN_': 'TextEdit', 'PERIMETER': 'TextEdit', 'NAME': 'TextEdit', 'SRC_DOC': 'TextEdit', 'SRC_SCALE': 'TextEdit', 'SRC_AGENCY': 'TextEdit', 'SRC_COMMEN': 'TextEdit', 'SRC_DATE': 'TextEdit', 'REV_DATE': 'TextEdit', 'UNINCORPOR': 'Range', 'ABBR': 'TextEdit', 'HANSEN_ARE': 'TextEdit', 'CNAME': 'TextEdit', 'GEOMETRY_A': 'TextEdit', 'GEOMETRY_L': 'TextEdit', });
lyr_SanMateoCounty_4.set('fieldImages', {'CITY_BDRY_': 'TextEdit', 'GIS_ADMIN_': 'TextEdit', 'PERIMETER': 'TextEdit', 'NAME': 'TextEdit', 'SRC_DOC': 'TextEdit', 'SRC_SCALE': 'TextEdit', 'SRC_AGENCY': 'TextEdit', 'SRC_COMMEN': 'TextEdit', 'SRC_DATE': 'TextEdit', 'REV_DATE': 'TextEdit', 'UNINCORPOR': 'Range', 'ABBR': 'TextEdit', 'HANSEN_ARE': 'TextEdit', 'CNAME': 'TextEdit', 'GEOMETRY_A': 'TextEdit', 'GEOMETRY_L': 'TextEdit', 'SMC_Jurisdiction': 'TextEdit', 'SMC_Unhoused Pop': 'Range', 'SMC_field_3': 'TextEdit', 'SMC_field_4': 'TextEdit', 'SMC_field_5': 'TextEdit', 'SMC_field_6': 'TextEdit', });
lyr_UnhousedProgramsPartneredOrganizationsServingUnhoused_5.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_UnhousedProgramsOrganizations_6.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_CITY_0.set('fieldLabels', {});
lyr_SanMateoCounty_1.set('fieldLabels', {});
lyr_SantaClaraCounty_2.set('fieldLabels', {});
lyr_CITY_3.set('fieldLabels', {});
lyr_SanMateoCounty_4.set('fieldLabels', {});
lyr_UnhousedProgramsPartneredOrganizationsServingUnhoused_5.set('fieldLabels', {});
lyr_UnhousedProgramsOrganizations_6.set('fieldLabels', {});
lyr_UnhousedProgramsOrganizations_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});