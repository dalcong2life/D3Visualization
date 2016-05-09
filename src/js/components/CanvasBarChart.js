"use strict";

import d3 from "d3";
import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";

class CanvasBarChart extends Component {

    componentDidMount() {
        let canvas = ReactDOM.findDOMNode(this.refs.content);

        let ctx = canvas.getContext('2d');

        var barPosX = 5;
        var data = [60, 40, 78, 59, 84, 95, 63, 42, 31, 53, 56, 53, 43, 13];

        for (var i = 0, len = data.length; i < len; i += 1) {
            ctx.fillStyle = 'rgba(250,100,100,.7)';
            ctx.fillRect(barPosX, 200, 20, -data[i])
            barPosX += (20 + 5);
        }
    }


    render() {
        return (
            <canvas ref="content" width={400} height={300}></canvas>
        )
    }
}

export default CanvasBarChart;
