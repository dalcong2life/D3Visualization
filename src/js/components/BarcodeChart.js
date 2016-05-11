"use strict";

import d3 from "d3";
import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";


let randomInterval = avgSeconds => (
    Math.floor(-Math.log(Math.random()) * 1000 * avgSeconds)
);

let addData = (data, numItems, avgSeconds) => {
    var n = data.length,
        t = (n > 0) ? data[n - 1].date : new Date();

    for (var i = 0; i < numItems; i++) {
        t = new Date(t.getTime() + randomInterval(avgSeconds));
        data.push({date: t});
    }

    return data;
};

class BarcodeChart extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        let content = ReactDOM.findDOMNode(this.refs.content);

        this.svg = d3.select(content).append("svg")
            .call(this.svgInit.bind(this));

        let dataset = addData([], 300, 2 * 60);
        this.renderBars.bind(this)(dataset);
        this.interval = setInterval(() => {
            this.renderBars.bind(this)(addData(dataset, 50, 2 * 60));
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    renderBars(data) {
        console.log(data.length);

        let {margin, width, height, value, timeInterval, isStacked} = this.props;

        let g = this.svg.select("g.content"),
            line = g.selectAll("line");

        let lastDate = d3.max(data, value);
        lastDate = line.empty() ? lastDate : d3.max(line.data(), value);
        let firstDate = isStacked ? d3.min(data, value) : timeInterval.offset(lastDate, -1);

        let xScale = d3.time.scale()
            .domain([firstDate, lastDate])
            .range([0, width]);

        let bars = g.selectAll("line")
            .data(data, value);

        // Enter
        bars.enter()
            .append("line")
            .attr("x1", width)
            .attr("x2", width)
            .attr("y1", 0)
            .attr("y2", height)
            .attr("stroke-opacity", 0);

        // Update
        lastDate = d3.max(data, value);
        firstDate = isStacked ? d3.min(data, value) : timeInterval.offset(lastDate, -1);
        xScale.domain([firstDate, lastDate]);

        bars.transition()
            .duration(1000)
            .attr("x1", d => xScale(value(d)))
            .attr("x2", d => xScale(value(d)))
            .attr("stroke", "#000")
            .attr("stroke-opacity", 0.5);

        // Exit
        bars.exit()
            .transition()
            .duration(1000)
            .attr("stroke-opacity", 0)
            .remove();


    }

    svgInit(svg) {
        let {margin, width, height, value} = this.props;

        let W = width + margin.left + margin.right,
            H = height + margin.top + margin.bottom;

        svg
            .attr("width", W)
            .attr("height", H);

        var g = svg.append("g")
            .attr("class", "content")
            .attr("width", W)
            .attr("height", height)
            .attr("transform", "translate(" + [0, margin.top] + ")");

        g.append("rect")
            .attr("width", W)
            .attr("height", height)
            .attr("fill", "white");
    }


    render() {
        return (
            <div ref="content"></div>
        );
    }
}

BarcodeChart.propTypes = {
    margin: PropTypes.shape({
        top: PropTypes.number,
        right: PropTypes.number,
        bottom: PropTypes.number,
        left: PropTypes.number
    }),
    width: PropTypes.number,
    height: PropTypes.number,
    value: PropTypes.func
};

BarcodeChart.defaultProps = {
    margin: {top: 20, right: 20, bottom: 20, left: 20},
    width: 700,
    height: 400,
    value: function (d) {
        return d.date;
    },
    timeInterval: d3.time.day,
    isStacked: false
};


export default BarcodeChart;

