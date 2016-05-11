"use strict";

import d3 from "d3";
import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";

class ScatterChart extends Component {
    constructor() {
        super()
        this.state = {
            dataset: []
        };
    }

    componentWillMount() {
        let dataset = [];
        var numDataPoints = 50;
        var xRange = Math.random() * 1000;
        var yRange = Math.random() * 1000;

        for (let i = 0; i < numDataPoints; i++) {
            let num1 = Math.floor(Math.random() * xRange);
            let num2 = Math.floor(Math.random() * yRange);
            dataset.push([num1, num2]);
        }

        this.setState({
            dataset: dataset
        });
    }

    componentDidMount() {
        let content = ReactDOM.findDOMNode(this.refs.content);

        let {margin, width, height} = this.props;

        let W = width + margin.left + margin.right,
            H = height + margin.top + margin.bottom;

        let dataset = this.state.dataset;
        let svg = d3.select(content).append("svg")
            .attr("width", W)
            .attr("height", H)
            .call(this.svgInit.bind(this));

        let xScale = d3.scale.linear()
            .domain([0, d3.max(dataset, function (d) {
                return d[0];
            })])
            .range([0, width]);

        let yScale = d3.scale.linear()
            .domain([0, d3.max(dataset, function (d) {
                return d[1];
            })])
            .range([height, 0]);

        let g = svg.select("g.content").selectAll("circle")
            .data(dataset)
            .enter()
            .append("circle")
            .attr("cx", function (d) {
                return xScale(d[0]);
            })
            .attr("cy", function (d) {
                return yScale(d[1]);
            })
            .attr("r", 4)
            .attr("fill", "pink")
            .attr("title", function (d) {
                return d[0] + "," + d[1];
            });

        // 축 생성
        let xAxis = d3.svg.axis()
            .scale(xScale)
            .orient("bottom");

        let yAxis = d3.svg.axis()
            .scale(yScale)
            .orient("left");

        svg.select("g.xaxis")
            .call(xAxis);

        svg.select("g.yaxis")
            .call(yAxis);


    }

    svgInit(svg) {

        let {margin, width, height, style} = this.props;

        svg.append("g")
            .attr("class", "content")
            .attr("width", width)
            .attr("height", height)
            .attr("transform", "translate(" + [margin.left, margin.top] + ")");

        let xAxis = svg.append("g")
            .attr("class", "xaxis" + " " + style)
            .attr("transform", "translate(" + [margin.left, height + margin.top] + ")");

        let yAxis = svg.append("g")
            .attr("class", "yaxis" + " " + style)
            .attr("transform", "translate(" + [margin.left, margin.top] + ")");
    }

    render() {
        return (
            <div ref="content"></div>
        );
    }
}

ScatterChart.propTypes = {};
ScatterChart.defaultProps = {
    margin: {top: 20, right: 20, bottom: 40, left: 60},
    width: 700,
    height: 400
};

export default ScatterChart;

