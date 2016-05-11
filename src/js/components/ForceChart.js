"use strict";

import d3 from "d3";
import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";


let name = d => d.name;
let usage = d => d.usage;
let charge = d => -0.13 * d.r * d.r;
let cScale = d3.scale.category10();

class ForceChart extends Component {

    componentDidMount() {
        d3.json('src/data/browsers.json', function (error, data) {
            console.log(data);
            data = data.values;
            let content = ReactDOM.findDOMNode(this.refs.content);

            let svg = d3.select(content).append("svg")
                .attr("width", 700)
                .attr("height", 400);

            let g = svg.append("g");


            data.sort(function (a, b) {
                return usage(b) - usage(a);
            });

            let nameList = data.map(name),
                uniqueNames = d3.set(nameList).values();

            cScale.domain(uniqueNames);

            let rScale = d3.scale.sqrt()
                .domain(d3.extent(data, usage))
                .range([10, 50]);

            data.forEach(d => {
                d.r = rScale(usage(d));
            });

            let force = d3.layout.force()
                .nodes(data)
                .links([])
                .size([700, 400])
                .charge(charge)
                .start();

            console.log(data);
            let bubbles = g.selectAll("circle")
                .data(data)
                .enter()
                .append("circle")
                .attr({
                    cx: d => d.x,
                    cy: d => d.y,
                    r: d => d.r,
                    fill: d => cScale(d.name)
                })
                .call(force.drag);

            bubbles.append("title").text(d=>d.name);

            force.on("tick", function () {
                bubbles
                    .attr({
                        cx: d => d.x,
                        cy: d => d.y
                    });
            });


            let legendDiv = ReactDOM.findDOMNode(this.refs.legend);

            let browsers = d3.map();
            data.forEach(d => {
                let item = browsers.get(d.name);
                if (item) {
                    browsers.set(d.name, {
                        name: d.name,
                        usage: d.usage + item.usage
                    });
                } else {
                    browsers.set(d.name, {
                        name: d.name,
                        usage: d.usage
                    });
                }
            });

            let browserItems = browsers.values().sort(function (a, b) {
                return b.usage - a.usage;
            });

            d3.select(legendDiv).selectAll("p.legend-title")
                .data([browserItems])
                .enter()
                .append("p")
                .attr("class", "legend-title")
                .text("Legend");

            let itemDiv = d3.select(legendDiv).selectAll("div.item")
                .data(browserItems)
                .enter()
                .append("div")
                .attr("class", "item");

            let itemP = itemDiv.append("p")
                .style({
                    'line-height': '0.8em',
                    'font-size': '11px'
                });

            itemP.append("span").text("..")
                .style({
                    "color": d => cScale(d.name),
                    "background": d => cScale(d.name)
                });

            itemP.append("text").text(d => " " + d.name);


        }.bind(this));
    }

    render() {
        return (
            <div>
                <div ref="content" style={{width: '500px',float:'left'}}></div>
                <div ref="legend" style={{width: '200px',float:'left'}}></div>
            </div>
        );
    }
}

export default ForceChart;