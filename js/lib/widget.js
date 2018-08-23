import * as widgets from '@jupyter-widgets/base';
import _ from 'lodash';
import {genomeFeatureComponent} from './genomeFeature';


// Custom Model. Custom widgets models must at least provide default values
// for model attributes, including
//
//  - `_view_name`
//  - `_view_module`
//  - `_view_module_version`
//
//  - `_model_name`
//  - `_model_module`
//  - `_model_module_version`
//
//  when different from the base class.

// When serialiazing the entire widget state for embedding, only values that
// differ from the defaults will be specified.
var HelloModel = widgets.DOMWidgetModel.extend({
    defaults: _.extend(widgets.DOMWidgetModel.prototype.defaults(), {
        _model_name : 'HelloModel',
        _view_name : 'HelloView',
        _model_module : 'genomefeatures',
        _view_module : 'genomefeatures',
        _model_module_version : '0.1.0',
        _view_module_version : '0.1.0',
        value : 'Hello World, rendered in JS, updated B'
    })
});


// Custom View. Renders the widget model.
var HelloView = widgets.DOMWidgetView.extend({
    render: function() {
        this.value_changed();
        this.model.on('change:value', this.value_changed, this);
    },

    value_changed: function() {
        this.el.textContent = this.model.get('value');
    }
});

var GenomeFeatureModel = widgets.DOMWidgetModel.extend({
    defaults: _.extend(widgets.DOMWidgetModel.prototype.defaults(), {
        _model_name: 'GenomeFeatureModel',
        _view_name: 'GenomeFeatureView',
        _model_module : 'genomefeatures',
        _view_module : 'genomefeatures',
        _model_module_version: '0.1.0',
        _view_module_version: '0.1.0',
        title: undefined,
        genome: undefined ,
        location: undefined,
        chromosome : undefined,
        gene: undefined,
        track: undefined,
        highlightNames:undefined,
        server:undefined,
    })
});

// derived from https://bl.ocks.org/mbostock/6452972
var GenomeFeatureView = widgets.DOMWidgetView.extend({
    render: function () {

        console.log('jupyter-widget-d3-slider GenomeFeatureModel start render');

        // explicit
        console.log('title',this.model.get('title'));
        console.log(this.model.keys().join(','));
        var that = this;

        // build svg and append it to dom
        genomeFeatureComponent.create(that);

        // event listener
        that.model.on('change:value', that.value_changed, that);

        // debug
        // window.dom = that.el;
    },

    value_changed: function () {

        console.log('jupyter-widget-d3-slider GenomeFeatureModel start value_changed');
        console.log('changed title',this.model.get('title'));

        // explicit
        var that = this;

        // update
        genomeFeatureComponent.value_changed(that);
    }
});

export {HelloModel, HelloView, GenomeFeatureModel, GenomeFeatureView}