import Graph from "react-graph-vis";
import React, {useState} from "react";
import data from "./data.json";

const options = {
    autoResize: true, height: '100%', width: '100%', locale: 'en',
    groups: {
        users: {
            shape: "icon",
            icon: {
                face: "'FontAwesome'",
                code: "\uf007",
                size: 50,
                color: "#aa00ff",
            },
        },
    },

    layout: {
        hierarchical: false
    }, edges: {
        width: 2,
        size: 50,
        smooth: {
            enabled: true, type: "dynamic", roundness: 1
        }, arrows: {
            from: {
                enabled: true, scaleFactor: 0.7
            }, to: {
                enabled: true
            }
        }
    },
    nodes: {
        shape: "circle",
        font: {
            color: "#0c36d5",
            size: 20
        },
        margin: {
            top: 10, bottom: 10, left: 10, right: 10
        }, mass: 1
    },
    interaction: {
        dragNodes: true,
        dragView: true,
        hideEdgesOnDrag: false,
        hideEdgesOnZoom: false,
        hideNodesOnDrag: false,
        hover: false,
        hoverConnectedEdges: true,
        keyboard: {
            enabled: false, speed: {x: 20, y: 20, zoom: 0.02}, bindToWindow: true, autoFocus: true,
        },
        multiselect: false,
        navigationButtons: false,
        selectable: true,
        tooltipDelay: 300,
        zoomSpeed: 1,
        zoomView: true
    },

    physics: {
        stabilization: false, enabled: true, solver: "repulsion", repulsion: {
            nodeDistance: 250,// Put more distance between the nodes.
            centralGravity: 0.3, springLength: 300, springConstant: 0.05, damping: 0.09, avoidOverlap: 0
        }
    }

};

// function randomColor() {
//     const red = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
//     const green = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
//     const blue = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
//     return `#${red}${green}${blue}`;
// }

const NetworkGraph = () => {
    const [state] = useState({
        counter: 5, graph: {
            ...data
        }, events: {
            select: ({nodes, edges}) => {
                console.log("Selected nodes:");
                console.log(nodes);
                console.log("Selected edges:");
                console.log(edges);

            }, stabilized: (event) => {
                console.log(event)
            }
        }
    })
    const {graph, events} = state;

    return (<div>
        <Graph graph={graph} options={options} events={events} style={{height: "800px"}}/>
    </div>);

}

export default NetworkGraph;