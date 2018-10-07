"use strict";
function runNetwork(container) {
// create an array with nodes
    var nodes = new vis.DataSet([
        {id: 'java', label: 'Java'},
        {id: 'c++', label: 'C++'},
        {id: 'c', label: 'C'},
        {id: 'algolw', label: 'Algol  W'},
        {id: 'pascal', label: 'Pascal'}
    ]);

// create an array with edges
    var edges = new vis.DataSet([
        {from: 'c++', to: 'java',  arrows:'to'},
        {from:'c', to: 'c++',  arrows:'to'},
        {from: 'algolw', to: 'pascal',  arrows:'to'},
        {from: 'algolw', to: 'c',  arrows:'to'},

    ]);

// create a network

    var data = {
        nodes: nodes,
        edges: edges
    };
    var options = {};
    var network = new vis.Network(container, data, options);
    return network;
}

Reveal.addEventListener( 'langNetwork', function() {
    runNetwork();
}, false );

Reveal.addEventListener( 'slidechanged', function( event ) {
    var network =  event.currentSlide.querySelector('.langNetwork');
    if (network ) {
        console.log('mam');
        runNetwork(network);
    }
} );