import d3 from "d3";
import React from "react";
import ReactDOM from "react-dom";

import BasicBarChart from "./components/BasicBarChart";
import DualBarChart from "./components/DualBarChart";
import StackedBarChart from "./components/StackedBarChart";
import CanvasBarChart from "./components/CanvasBarChart";
import EasingChecker from "./components/EasingChecker";
import PieChart from "./components/PieChart";


remark.macros.scale = function (percentage) {
    return '<img src="' + this + '" style="width: ' + percentage + '" />';
};

var slideShow = remark.create({
    ratio: '4:3',

    navigation: {
        scroll: false
    },

    sourceUrl: 'src/html/slide0.md',
    highlightLanguage: 'javascript',
    highlightStyle: 'zenburn',
    highlightLines: true,
    highlightSpans: true
});


var getEl = document.getElementById.bind(document);


slideShow.on('beforeShowSlide', function (slide) {
    var currentPage = slide.getSlideIndex() + 1;

    console.log("Show Slide:", currentPage);
    switch (currentPage) {

        case 18:
            ReactDOM.render(
                <div>
                    <BasicBarChart width={345} height={300} style={{width:"50%",float:"left"}}/>
                    <DualBarChart width={345} height={300} style={{width:"50%",float:"left"}}/>
                </div>,
                document.getElementById("barchart")
            );
            break;

        case 19:
            ReactDOM.render(
                <StackedBarChart />,
                document.getElementById("stackedchart")
            );
        case 43:
            ReactDOM.render(
                <CanvasBarChart width={330} height={200}/>,
                document.getElementById("canvas-area")
            );

            ReactDOM.render(
                <BasicBarChart width={330} height={200} color="orange"/>,
                document.getElementById("svg-area")
            );
            break;

        case 66:
            ReactDOM.render(
                <EasingChecker/>,
                document.getElementById("easing-chart")
            );
            break;

        case 72:
            ReactDOM.render(
                <PieChart width={700} height={400} outerRadius={200}/>,
                document.getElementById("pie-chart")
            );
            break;
        case 73:
            ReactDOM.render(
                <PieChart innerRadius={100} outerRadius={200} width={700} height={400} title={"D3 도넛"}/>,
                document.getElementById("donut-chart")
            );
            break;


        case 44:

            //var base = d3.select("#canvas-area");
            //var chart = base.append("canvas")
            //    .attr("width", 200)
            //    .attr("height", 100);
            //
            //var context = chart.node().getContext("2d");
            //var data = [1, 2, 13, 20, 23];
            //
            //var scale = d3.scale.linear()
            //    .range([10, 390])
            //    .domain([1, 23]);
            //
            //data.forEach(function (d, i) {
            //    context.beginPath();
            //    context.rect(scale(d), 150, 10, 10);
            //    context.fillStyle = "red";
            //    context.fill();
            //    context.closePath();
            //});
            //
            //d3.json('../../data/miserables.json', function (error, graph) {
            //    if (error) {
            //        return error;
            //    }
            //    var chart = Chart.ForceDirectedGraph()
            //        .width(400)
            //        .height(130);
            //
            //    d3.select('#svg-area')
            //        .data([graph])
            //        .call(chart);
            //});


            break;
        default :
            console.log('default');
    }
});


slideShow.on('hideSlide', function (slide) {
    var currentPage = slide.getSlideIndex() + 1;

    console.log("Hide Slide:", currentPage);

    switch (currentPage) {
        case 18:
            ReactDOM.unmountComponentAtNode(document.getElementById("barchart"));
            break;
        case 19:
            ReactDOM.unmountComponentAtNode(document.getElementById("stackedchart"));
            break;

        case 43:
            ReactDOM.unmountComponentAtNode(document.getElementById("canvas-area"));
            ReactDOM.unmountComponentAtNode(document.getElementById("svg-area"));
            break;


        case 66:
            ReactDOM.unmountComponentAtNode(document.getElementById("easing-chart"));
            break;
        case 72:
            ReactDOM.unmountComponentAtNode(document.getElementById("pie-chart"));
            break;
        case 73:
            ReactDOM.unmountComponentAtNode(document.getElementById("donut-chart"));
            break;
    }
});


var addBarchartData = function (data, len) {
    for (var i = len - 1; i >= 0; i--) {
        data.push(Math.floor(Math.random() * 100) + 1);
    }
    return data;
};


d3.selectAll(".layout li")
    .on("click", function () {
        var layout = d3.select(this).attr("class");
        if (layout) {
            d3.select("#layout")
                .attr("src", "src/img/" + layout + ".png");
            d3.select("#layout-id")
                .text(layout[0].toUpperCase() + layout.substr(1));
        }
    });