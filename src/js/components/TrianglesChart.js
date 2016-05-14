"use strict";

import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

const propTypes = {
    width: PropTypes.number,
    height: PropTypes.number
};
const defaultProps = {
    width: 700,
    height: 200
};

let COLORS = ['#eaa55b', '#66a2e2', '#8065e5', '#4acc81']

let pathTriangle = (cx, cy, h, b) => (
    `${cx},${cy - h} ${cx - b},${cy} ${cx + b},${cy}`
);

let ANIM_DURATION = 700;
let ANIM_DELAY = 200;

let xScale = d3.scale.linear();
let yScale = d3.scale.linear();


const randomize = (min, max, len) => {
    len = len || 4;

    return d3.range(len).map(d => Math.floor(Math.random() * (max - min) + min));
};

export default class TrianglesChart extends Component {

    componentDidMount() {
        let el = ReactDOM.findDOMNode(this);

        this.W = this.props.width;
        this.H = this.props.height;

        this.svg = d3.select(el).append("svg")
            .attr('width', this.W)
            .attr('height', this.H);

        this.canvas = this.svg.append("g");

        this.renderTriangles(randomize(5, 40))
        this.intervalID = setInterval(() => {
            this.renderTriangles(randomize(5, 40))
        }, 2000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    renderTriangles(data) {

        let B = (this.W / (data.length * 2)) + 5;

        xScale
            .domain([0, data.length - 1])
            .range([0 + B, this.W - B]);

        yScale
            .domain([0, d3.max(data)])
            .range([this.H, 0]);

        let triangles = this.canvas
            .selectAll('polygon')
            .data(data);

        triangles
            .transition()
            .delay((d, i) => i * ANIM_DELAY)
            .duration(ANIM_DURATION)
            .attr('points', (d, i) => {
                let x = xScale(i);
                let y = this.H;

                return pathTriangle(x, y, this.H - yScale(d), B)
            });

        triangles
            .enter()
            .append('polygon')
            .style('fill', (d, i) => COLORS[i % COLORS.length])
            .style('fill-opacity', '0.9')
            .attr('points', (d, i) => {
                let x = xScale(i);
                let y = this.H;

                return pathTriangle(x, y, 0, B);
            })
            .transition()
            .delay((d, i) => i * ANIM_DELAY)
            .duration(ANIM_DURATION)
            .attr('points', (d, i) => {
                let x = xScale(i);
                let y = this.H;
                return pathTriangle(x, y, this.H - yScale(d), B)
            });

        triangles.exit().remove();

        //console.log(data);
        //
        //let line = d3.svg.line()
        //    .x((d, i) => xScale(i))
        //    .y(d => this.H - yScale(d));
        //
        //let lines = this.canvas
        //    .selectAll('path')
        //    .data([data]);
        //
        //lines
        //    .enter()
        //    .append('path')
        //    .attr('d', line)
        //    .attr('fill', 'none')
        //    .attr('stroke-width', 4)
        //    .attr('stroke', 'orange');
        //
        //lines
        //    .transition()
        //    .delay((d, i) => i * ANIM_DELAY)
        //    .duration(ANIM_DURATION)
        //    .attr('d', line);
    }

    render() {
        return (
            <div className="triangle"></div>
        );
    }
};

TrianglesChart.propTypes = propTypes;
TrianglesChart.defaultProps = defaultProps;


