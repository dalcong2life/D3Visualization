;
(function (root, d3) {
    "use strict";

    root.Chart = root.Chart || {};

    var nodes = d3.range(1000).map(function (i) {
        return {
            index: i
        };
    });

    var links = d3.range(nodes.length - 1).map(function (i) {
        return {
            source: Math.floor(Math.sqrt(i)),
            target: i + 1
        };
    });


    root.Chart.ForceChart = function (selector) {

        var canvas = document.querySelector(selector),
            context = canvas.getContext("2d"),
            width = canvas.width,
            height = canvas.height;

        function ticked() {
            context.clearRect(0, 0, width, height);
            context.save();
            context.translate(width / 2, height / 2);

            context.beginPath();
            links.forEach(drawLink);
            context.strokeStyle = "#aaa";
            context.stroke();

            context.beginPath();
            nodes.forEach(drawNode);
            context.fill();
            context.strokeStyle = "#fff";
            context.stroke();

            context.restore();
        }

        function drawLink(d) {
            context.moveTo(d.source.x, d.source.y);
            context.lineTo(d.target.x, d.target.y);
        }

        function drawNode(d) {
            context.moveTo(d.x + 3, d.y);
            context.arc(d.x, d.y, 3, 0, 2 * Math.PI);
        }

        var simulation = d3.forceSimulation(nodes)
            .force("charge", d3.forceManyBody().strength(-25))
            .force("link", d3.forceLink(links).distance(0).strength(0.8))
            .force("X", d3.forceX())
            .force("Y", d3.forceY())
            .on("tick", ticked);

    };


})(window, d3);

