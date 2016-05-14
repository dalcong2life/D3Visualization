"use strict";

import d3 from "d3";
import React from "react";
import ReactDOM from "react-dom";

import TrianglesChart from './components/TrianglesChart';
import BasicBarChart from "./components/BasicBarChart";
import DualBarChart from "./components/DualBarChart";
import StackedBarChart from "./components/StackedBarChart";
import CanvasBarChart from "./components/CanvasBarChart";
import EasingChecker from "./components/EasingChecker";
import PieChart from "./components/PieChart";
import ScatterChart from "./components/ScatterChart";
import BarcodeChart from "./components/BarcodeChart";
import ForceChart from "./components/ForceChart";


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
        case 1:
            ReactDOM.render(
                <TrianglesChart/>,
                document.getElementById('mainchart')
            );
            break;
        case 19:
            ReactDOM.render(
                <div>
                    <BasicBarChart width={345} height={300} style={{ width:"50%",float:"left"}}/>
                    <DualBarChart width={345} height={300} style={{ width:"50%",float:"left"}}/>
                </div>,
                document.getElementById("barchart")
            );
            break;
        case 44:
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
                <ScatterChart/>,
                document.getElementById("scatter-chart")
            );
            break;
        case 68:
            ReactDOM.render(
                <ScatterChart width={600} height={200} style={"axis"}/>,
                document.getElementById("style-scatter")
            );
            break;
        case 70:
            ReactDOM.render(
                <BarcodeChart height={100}/>,
                document.getElementById("transition-barchart1")
            );

            ReactDOM.render(
                <BarcodeChart height={100} isStacked={true}/>,
                document.getElementById("transition-barchart2")
            );
            break;
        case 71:
            ReactDOM.render(
                <EasingChecker/>,
                document.getElementById("easing-chart")
            );
            break;

        case 74:
            ReactDOM.render(
                <BasicBarChart width={700} height={200}/>,
                document.getElementById("tooltip-barchart")
            );
            break;
        case 78:
            ReactDOM.render(
                <PieChart width={700} height={400} outerRadius={200}/>,
                document.getElementById("pie-chart")
            );
            break;
        case 79:
            ReactDOM.render(
                <PieChart innerRadius={100} outerRadius={200} width={700} height={400} title={"D3 도넛"}/>,
                document.getElementById("donut-chart")
            );
            break;
        case 82:
            ReactDOM.render(
                <ForceChart/>,
                document.getElementById("force-chart")
            );
            break;
    }
});


slideShow.on('hideSlide', function (slide) {
    var currentPage = slide.getSlideIndex() + 1;

    console.log("Hide Slide:", currentPage);

    switch (currentPage) {
        case 1:
            ReactDOM.unmountComponentAtNode(document.getElementById("mainchart"));
            break;
        case 19:
            ReactDOM.unmountComponentAtNode(document.getElementById("barchart"));
            break;
        case 44:
            ReactDOM.unmountComponentAtNode(document.getElementById("canvas-area"));
            ReactDOM.unmountComponentAtNode(document.getElementById("svg-area"));
            break;
        case 66:
            ReactDOM.unmountComponentAtNode(document.getElementById("scatter-chart"));
            break;
        case 68:
            ReactDOM.unmountComponentAtNode(document.getElementById("style-scatter"));
            break;
        case 70:
            ReactDOM.unmountComponentAtNode(document.getElementById("transition-barchart1"));
            ReactDOM.unmountComponentAtNode(document.getElementById("transition-barchart2"));
            break;
        case 71:
            ReactDOM.unmountComponentAtNode(document.getElementById("easing-chart"));
            break;
        case 74:
            ReactDOM.unmountComponentAtNode(document.getElementById("tooltip-barchart"));
            break;
        case 78:
            ReactDOM.unmountComponentAtNode(document.getElementById("pie-chart"));
            break;
        case 79:
            ReactDOM.unmountComponentAtNode(document.getElementById("donut-chart"));
            break;
        case 82:
            ReactDOM.unmountComponentAtNode(document.getElementById("force-chart"));
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

ReactDOM.render(
    <TrianglesChart/>,
    document.getElementById('mainchart')
);