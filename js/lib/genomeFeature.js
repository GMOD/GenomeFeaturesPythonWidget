'use strict';

// var d3 = require('d3');
var GenomeFeatureComponent  = require('../../../GenomeFeatureComponent');
// require('../../../GenomeFeatureComponent/src/App.css');
// require('./test.less');
require('./genomeFeature.css');


var create = function (that) {
    console.log('start create');

    // create svg element
    // let mainViewer = document.createElement('div');
    var svgElmt = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgElmt.setAttribute('width', '900');
    svgElmt.setAttribute('height', '100');
    svgElmt.setAttribute("id","viewer");
    // //
    // // // append svg element to dom
    that.el.appendChild(svgElmt);
    var title = that.model.get("title") ? that.model.get("title"): "Mus musculus";
    GenomeFeatureComponent(5,75574916,75656722,"Mus musculus","#viewer");

    var txtnode = document.createTextNode(title);
    that.el.appendChild(txtnode);

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

