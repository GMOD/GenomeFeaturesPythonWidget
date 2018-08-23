'use strict';
import GenomeFeatureViewer from 'genomefeaturecomponent';

require('./genomeFeature.css');

function guid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

var create = function (that) {
    console.log('start create');

    // create svg element
    // GenomeFeature(title='Sox9b',genome='Homo sapiens',location='7:27144266..27149087')
    let title = that.model.get("title");

    title = title ? title : 'HOXA6';
    let header = document.createElement('h2');
    let txtnode = document.createTextNode(title);
    header.appendChild(txtnode);
    that.el.appendChild(header);


    let componentID = guid();
    console.log('componentID', componentID);

    let svgElmt = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgElmt.setAttribute('width', '900');
    svgElmt.setAttribute('height', '100');
    svgElmt.setAttribute("id", componentID);
    // //
    // // // append svg element to dom
    that.el.appendChild(svgElmt);
    let chromosome = that.model.get("chromosome");
    chromosome = chromosome ? chromosome : 7;
    let start = 27144266;
    let end = 27149087;

    let location = that.model.get("location");
    if (location) {
        chromosome = location.split(':')[0];
        start = location.split(':')[1].split('..')[0];
        end = location.split(':')[1].split('..')[1];
    }
    let genome = that.model.get("genome");
    if (!genome) {
        genome = 'Homo sapiens';
    }
    let gene = that.model.get("gene");
    let server = that.model.get("server");
    if (!server) {
        server = 'https://agr-apollo.berkeleybop.io/apollo/';
    }
    let track = that.model.get("track");
    if (!track) {
        track = 'All Genes';
    }
    let action = that.model.get("action");
    if (!action) {
        action = 'display';
    }
    let highlightNames = that.model.get("highlightNames");

    console.log('action',action)

    switch (action) {
        case 'getTracks':
            that.el.textContent = 'Lookup for tracks goes here';
            break;
        case 'getGenomes':
            that.el.textContent = 'Lookup for genomes goes here';
            break;
        case 'getServer':
            that.el.textContent = server ;
            break;
        case 'display':
        default:
            let options = {
                chromosome,
                start,
                end,
                genome,
                gene,
                track,
                highlightNames,
                server,
            };
            console.log('options', options);
            that.component = GenomeFeatureViewer(options, '#' + componentID);
            break;
    }


    console.log('end create');
};


var value_changed = function (that) {

    // // var prev_h = that.model.previous('value');
    // // var new_h = that.model.get('value');
};


var genomeFeatureComponent = {
    create: create,
    value_changed: value_changed
};

export {genomeFeatureComponent};

