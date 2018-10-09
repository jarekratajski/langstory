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

Reveal.addEventListener( 'cycleNetwork', function() {
    runCycle();
}, false );


Reveal.addEventListener( 'slidechanged', function( event ) {

    var network =  event.currentSlide.querySelector('.langNetwork');
    if ( event.currentSlide.querySelector('.langNetwork') ) {
        console.log('mam');
        runNetwork(network);
    }
    var cycle =  event.currentSlide.querySelector('.cycleNetwork');
    if (cycle ) {

        runCycle(cycle);
    }
} );


function runCycle(container) {

    var nodes = new vis.DataSet([
        {id: 'bug', label: 'New errors'},
        {id: 'hardware', label: 'New hardware'},
        {id: 'idea', label: 'New ideas'},

    ]);

// create an array with edges
    var edges = new vis.DataSet([
        {from: 'idea', to: 'bug',  arrows:'to'},
        {from:'hardware', to: 'idea',  arrows:'to'},
        {from: 'bug', to: 'hardware',  arrows:'to'}

    ]);

// create a network

    var data = {
        nodes: nodes,
        edges: edges
    };
    var options = {
        autoResize: true,
        layout: {
            randomSeed: 17,
            improvedLayout:true,
            hierarchical: {
                enabled:false,
                levelSeparation: 150,
                nodeSpacing: 500,
                treeSpacing: 400,
                blockShifting: true,
                edgeMinimization: true,
                parentCentralization: true,
                direction: 'LR',        // UD, DU, LR, RL
                sortMethod: 'hubsize'   // hubsize, directed
            }
        }
    };
    var network = new vis.Network(container, data, options);
    return network;
}