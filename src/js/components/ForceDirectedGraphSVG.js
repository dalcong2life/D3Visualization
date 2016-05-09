;
(function (root, d3) {
    "use strict";

    root.Chart = root.Chart || {};

    root.Chart.ForceDirectedGraph = function () {
        var attributes = {
            width: 750,
            height: 400,
            margin: {top: 10, right: 10, bottom: 10, left: 10}
        };

        var color=  d3.scale.category20();
        function chart(selection) {

            selection.each(function (data) {
                var div = d3.select(this),
                    svg = div.append('svg')
                        .call(svgInit);


                var g = svg.select('g.chart');

                var force = d3.layout.force()
                    .charge(-120)
                    .linkDistance(30)
                    .size([chart.width(), chart.height()]);


                force
                    .nodes(data.nodes)
                    .links(data.links)
                    .start();

                var link = g.selectAll('.link')
                    .data(data.links)
                    .enter()
                    .append('line')
                    .attr('class', 'link')
                    .attr('stroke-width', function (d) {
                        Math.sqrt(d.value);
                    });

                var node = g.selectAll('.node')
                    .data(data.nodes)
                    .enter()
                    .append('circle')
                    .attr('class', 'node')
                    .attr('r', 5)
                    .attr('fill', function (d) {
                        return color(d.group);
                    })
                    .call(force.drag);

                force.on('tick', function () {
                    link.attr("x1", function(d) { return d.source.x; })
                        .attr("y1", function(d) { return d.source.y; })
                        .attr("x2", function(d) { return d.target.x; })
                        .attr("y2", function(d) { return d.target.y; });

                    node.attr("cx", function(d) { return d.x; })
                        .attr("cy", function(d) { return d.y; });
                })



            });
        }

        function svgInit(svg) {
            var width = chart.width() + chart.margin().left + chart.margin().right,
                height = chart.height() + chart.margin().top + chart.margin().bottom;

            svg.attr('width', width)
                .attr('height', height);

            svg.append('g')
                .attr('class', 'chart')
                .attr('width', chart.width())
                .attr('height', chart.height());

        }


        function createAccessor(attr) {

            function accessor(value) {
                if (!arguments.length) {
                    return attributes[attr];
                }

                attributes[attr] = value;
                return chart;
            }

            return accessor;
        }

        for (var attr in attributes) {
            if (!chart[attr] && attributes.hasOwnProperty(attr)) {
                chart[attr] = createAccessor(attr);
            }
        }

        return chart;
    };

})(window, d3);