import d3 from "d3";
import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";


var color = d3.scale.ordinal()
    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

class StackedBarChart extends Component {

    constructor() {
        super();
    }

    componentWillMount() {
        var that = this;
        d3.csv("/src/data/stacked_data.csv", function (error, data) {
            if (error) {
                throw error
            }
            console.log(data);

            // 데이터 가공
            color.domain(d3.keys(data[0]).filter(d => d != 'State'));

            data.forEach(d => {
                let y0 = 0;
                d.ages = color.domain().map(name => ({
                    name: name, y0: y0, y1: y0 += +d[name]
                }));
                d.total = d.ages[d.ages.length - 1].y1;
            });

            data.sort((a, b) => b.total - a.total);

            that.setState({
                data: data
            });
        });
    }

    render() {
        return (
            <div ref="content"></div>
        );
    }
}


export default StackedBarChart;