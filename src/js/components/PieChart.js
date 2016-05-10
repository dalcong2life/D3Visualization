"use strict";

import d3 from "d3";
import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";

let randomize = (min, max, len = 5) => {
    return d3.range(len).map(d => (
        Math.floor(Math.random() * (max - min) + min)
    ));
};

class PieChart extends Component {

    constructor() {
        super();
    }

    componentDidMount() {
        let content = ReactDOM.findDOMNode(this.refs.content);
        let {width, height, outerRadius} = this.props;

        let svg = d3.select(content)
            .append("svg")
            .attr("width", width)
            .attr("height", height);

        this.canvas = svg.append("g")
            .attr("width", outerRadius * 2)
            .attr("height", outerRadius * 2)
            .attr("transform", "translate(" + [width / 2 - outerRadius, height / 2 - outerRadius] + ")");

        this.renderPie(randomize(10, 100));
        this.interval = setInterval(() => {
            this.renderPie(randomize(10, 100));
        }, 2000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    renderPie(data) {
        // 내림 차순 정렬
        data = data.sort(function (a, b) {
            return b - a;
        });

        let {innerRadius, outerRadius} = this.props;

        let color = d3.scale.category10();
        let pie = d3.layout.pie();

        let arc = d3.svg.arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius);
        let arcs = this.canvas
            .selectAll("g.arc")
            .data(pie(data));

        let groups = arcs.enter()
            .append("g")
            .attr("class", "arc")
            .attr("transform", "translate(" + [outerRadius, outerRadius] + ")");

        groups.append("path")
            .transition()
            .duration(500)
            .attr("fill", (d, i) => color(i))
            .attr("d", arc);

        groups.append("text")
            .attr("transform", (d) => "translate(" + arc.centroid(d) + ")")
            .attr("font-size", 22)
            .attr("font-weight", "bold")
            .attr("fill", "white")
            .attr("font-family", "sans-serif")
            .attr("text-anchor", "middle")
            .text(d => d.value);

        if (innerRadius > 0) {
            this.canvas.selectAll("text.title")
                .data([0])
                .enter()
                .append("text")
                .attr("class", "title")
                .attr({
                    x: outerRadius,
                    y: outerRadius,
                    dy: 15,
                    "text-anchor": "middle"
                })
                .text(this.props.title);
        }

        arcs.each(function (d, i) {
            d3.select(this).select('path')
                .transition()
                .duration(500)
                .attr("fill", color(i))
                .attr("d", arc);

            d3.select(this).select('text')
                .transition()
                .duration(500)
                .attr("transform", (d) => "translate(" + arc.centroid(d) + ")")
                .attr("text-anchor", "middle")
                .text(d => d.value);
        });


        arcs.exit().remove();


    }

    render() {
        return (
            <div ref="content"></div>
        );
    }
}

PieChart.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    innerRadius: PropTypes.number,
    outerRadius: PropTypes.number
};

PieChart.defaultProps = {
    width: 300,
    height: 300,
    innerRadius: 0,
    outerRadius: 150
};

export default PieChart;