"use strict";

import d3 from "d3";
import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";

class BasicBarChart extends React.Component {

    constructor() {
        super();

        this.state = {
            data: []
        }
    }

    componentWillMount() {

        let arr = d3.range(15).map(() => 0 | Math.random() * 100 + 10)
        this.setState({
            data: arr
        });
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
            })
            .on("mouseover", function (d) {
                var xPosition = parseFloat(d3.select(this).attr("x")) + xScale.rangeBand() + 10;
                var yPosition = parseFloat(d3.select(this).attr("y"));

                d3.select("#tooltip")
                    .style("left", xPosition + "px")
                    .style("top", yPosition + "px")
                    .select("#value")
                    .text(d);

                d3.select("#tooltip").classed("hidden", false);
            })
            .on("mouseout", function (d) {
                d3.select("#tooltip").classed("hidden", true);
            });

        let xAxis = d3.svg.axis()
            .scale(xScale)
            .orient("bottom");
        //.tickFormat(i=>data[i]);

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

        style['position'] = 'relative';

        return (
            <div ref="content" style={style}>

                <div id="tooltip" className="hidden">
                    <p><strong>Important Label Heading</strong></p>

                    <p><span id="value">100</span>%</p>
                </div>
            </div>
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
    color: '#6C97CE',
    style: {}
};

export default BasicBarChart;