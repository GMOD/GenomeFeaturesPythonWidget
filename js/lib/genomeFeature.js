'use strict';

// var d3 = require('d3');
var GenomeFeatureComponent  = require('../../../GenomeFeatureComponent');
// require('../../../GenomeFeatureComponent/src/App.css');
// require('./test.less');
require('./genomeFeature.css');


var create = function (that) {
    console.log('start create');

    // create svg element
    // GenomeFeature(title='Sox9b',genome='Homo sapiens',location='7:27144266..27149087')
    var title = that.model.get("title") ;

    title = title ? title : 'HOXA6';
    var header = document.createElement('h2');
    var txtnode = document.createTextNode(title);
    header.appendChild(txtnode)
    that.el.appendChild(header);

    var svgElmt = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgElmt.setAttribute('width', '900');
    svgElmt.setAttribute('height', '100');
    svgElmt.setAttribute("id","viewer");
    // //
    // // // append svg element to dom
    that.el.appendChild(svgElmt);
    var chromosome = 7 ;
    var start = 27144266;
    var end =   27149087 ;

    var location = that.model.get("location");
    if(location){
        chromosome = location.split(':')[0];
        start = location.split(':')[1].split('..')[0];
        end = location.split(':')[1].split('..')[1];
    }
    var genome = that.model.get("genome");
    if(!genome){
        genome = 'Homo sapiens';
    }
    var gene = that.model.get("gene");
    var server = that.model.get("server");
    if(!server){
        server = 'https://agr-apollo.berkeleybop.io/apollo/';
    }
    var track = that.model.get("track");
    if(!track){
        track = 'All Genes';
    }
    var highlightNamesString = that.model.get("highlightNames");
    alert(highlightNamesString);
    let highlightNames = highlightNamesString ? highlightNamesString.split(',') : undefined;

    // let {chromosome, start, end, genome, server, track, highlightNames} = options;
    var options = {
        chromosome,
        start,
        end,
        genome,
        gene,
        track,
        highlightNames,
        server,
    };
    console.log('options',options);
    GenomeFeatureComponent("#viewer",options);


    console.log('end create');
};


var value_changed = function (that) {

    var prev_h = that.model.previous('value');
    var new_h = that.model.get('value');

    // debug
    console.log('prev_h = ' + prev_h + ', new_h = ' + new_h);

    // collect function hue stored in that during render()
    // var hue = that.hue;

    // direct set
    // hue(new_h);

    // tweened move - works but does not fit
    // jupyter-widget 1 model - many views concept
    var slider = that.slider;
    slider.transition().duration(750);
    // 	.tween('hue', function () {
    // 		var i = d3.interpolate(prev_h, new_h);
    // 		return function (t) { hue(i(t)); };
    // 	});
};


var genomeFeatureComponent = {
    create: create,
    value_changed: value_changed
};

module.exports = genomeFeatureComponent;

