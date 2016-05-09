"use strict";

import d3 from "d3";
import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";

class DualBarChart extends Component {

    constructor() {
        super();

        this.state = {
            data: [
                {date: '01/01', A: 80, B: 40},
                {date: '04/01', A: 40, B: 70},
                {date: '07/01', A: 80, B: 100},
                {date: '10/01', A: 60, B: 30},
                {date: '01/01', A: 90, B: 50},
                {date: '04/01', A: 90, B: 110}
            ]
        };
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

        let aMax = d3.max(data, d=>d.A);
        let bMax = d3.max(data, d=>d.B);

        let yScale = d3.scale.linear()
            .domain([0, d3.max([aMax, bMax])])
            .range([height, 0]);

        let rectGroups = g.selectAll("g")
            .data(data, (d, i) => i)
            .enter()
            .append("g");


        rectGroups
            .each(function (d, i) {
                rectGroups.append("rect")
                    .attr({
                        x: xScale(i),
                        y: yScale(d.A),
                        width: xScale.rangeBand() / 2,
                        height: height - yScale(d.A),
                        fill: color
                    });

                rectGroups.append("rect")
                    .attr({
                        x: xScale(i) + (xScale.rangeBand() / 2),
                        y: yScale(d.B),
                        width: xScale.rangeBand() / 2,
                        height: height - yScale(d.B),
                        fill: '#ff8f00'
                    });
            });


        let xAxis = d3.svg.axis()
            .scale(xScale)
            .orient("bottom")
            .tickFormat(i=>data[i].date);


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

DualBarChart.propTypes = {
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

DualBarChart.defaultProps = {
    margin: {top: 10, right: 10, bottom: 20, left: 30},
    width: 720,
    height: 400,
    color: '#6C97CE'
};

export default DualBarChart;
