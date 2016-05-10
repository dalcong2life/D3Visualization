"use strict";

import d3 from "d3";
import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";


class EasingChecker extends Component {
    constructor() {
        super();
    }

    componentDidMount() {

        let dataset = ["linear", "quad", "cubic", "sin", "exp", "circle", "elastic", "back", "bounce"];

        let content = ReactDOM.findDOMNode(this.refs.content);

        let {margin, width, height, r} = this.props;

        console.log(margin);

        let svg = d3.select(content).append("svg")
            .attr({
                width: width,
                height: height
            });

        svg.selectAll("text")
            .data(dataset)
            .enter()
            .append("text")
            .attr({
                x: 0,
                y: (d, i) => (i * height / dataset.length) + margin.top,
                dy: 5,
                "font-size": 18

            })
            .text(d => d);

        svg.selectAll("line")
            .data(dataset)
            .enter()
            .append("line")
            .attr({
                x1: 100,
                y1: (d, i) => (i * height / dataset.length) + margin.top * 2,
                x2: width,
                y2: (d, i) => (i * height / dataset.length) + margin.top * 2,
                stroke: "darkorange"
            });

        svg.selectAll("circle")
            .data(dataset)
            .enter()
            .append("circle")
            .attr({
                cx: 100,
                cy: (d, i) => (i * height / dataset.length) + margin.top * 2,
                r: r,
                fill: "orange"
            })
            .on("mouseover", function () {
                d3.select(this).attr("fill", "green");
            })
            .on("mouseout", function () {
                d3.select(this).attr("fill", "orange");
            })
            .on("click", function (d) {
                d3.select(this)
                    .transition()
                    .duration(2000)
                    .ease(d)
                    .attr("cx", width - r)
                    .each("end", function () {
                        d3.select(this)
                            .transition()
                            .delay(500)
                            .duration(500)
                            .attr("cx", 100);
                    });
            });


    }

    render() {
        return (
            <div ref="content"></div>
        );
    }
}

EasingChecker.propTypes = {};

EasingChecker.defaultProps = {
    margin: {top: 10, right: 10, bottom: 40, left: 40},
    width: 700,
    height: 400,
    r: 20
};

export default EasingChecker;