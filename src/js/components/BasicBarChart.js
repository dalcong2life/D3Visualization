"use strict";

import d3 from "d3";
import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";

class BasicBarChart extends React.Component {

    constructor() {
        super();

        this.state = {
            data: [10, 16, 17, 18, 20, 21, 23, 28, 34, 60, 61, 62, 68, 82, 89, 94]
        }
    }

    componentDidMount() {
        let content = ReactDOM.findDOMNode(this.refs.content);
        let data = this.state.data;

        let {margin, width, height, color} = this.props;
        let W = width + margin.left + margin.right;
        let H = height + margin.top + margin.bottom;

        let svg = d3.select(content)
            .append("svg")
            .attr({
                width: W,
                height: H
            });

        let g = svg.append("g")
            .attr("width", width)
            .attr("height", height)
            .attr("transform", "translate(" + [margin.left, margin.top] + ")");

        let xScale = d3.scale.ordinal()
            .domain(d3.range(data.length))
            .rangeRoundBands([0, width], 0.1);

        let yScale = d3.scale.linear()
            .domain([0, d3.max(data)])
            .range([height, 0]);

        g.selectAll("rect")
            .data(data, (d, i) => i)
            .enter()
            .append("rect")
            //.transition()
            //.delay((d, i) => i / data.length * 400)
            //.duration(400)
            .attr({
                x: (d, i) => xScale(i),
                y: (d, i) => yScale(d),
                width: () => xScale.rangeBand(),
                height: (d) => height - yScale(d),
                fill: color
            }
        );

        let xAxis = d3.svg.axis()
            .scale(xScale)
            .orient("bottom")
            .tickFormat(i=>data[i]);

        let yAxis = d3.svg.axis()
            .scale(yScale)
            .orient("left");

        svg.append("g")
            .attr("class", "axis xaxis")
            .attr("transform", "translate(" + [margin.left, height + margin.top] + ")")
            .call(xAxis);

        svg.append("g")
            .attr("class", "axis yaxis")
            .attr("transform", "translate(" + [margin.left, margin.top] + ")")
            .call(yAxis);

    }

    render() {

        let {style} = this.props;

        return (
            <div ref="content" style={style}></div>
        );
    }
}

BasicBarChart.propTypes = {
    margin: PropTypes.shape({
        top: PropTypes.number,
        right: PropTypes.number,
        bottom: PropTypes.number,
        left: PropTypes.number
    }),
    width: PropTypes.number,
    height: PropTypes.number,
    color: PropTypes.string
};

BasicBarChart.defaultProps = {
    margin: {top: 10, right: 10, bottom: 20, left: 30},
    width: 720,
    height: 400,
    color: '#6C97CE'
};

export default BasicBarChart;