;
(function (root, d3) {
    "use strict";

    root.Chart = root.Chart || {};

    root.Chart.barchart = function () {
        var width = 700,
            height = 400;


        function chart(selection) {
            selection.each(function (data) {
                var div = d3.select(this),
                    svg = div.append('svg')
                        .call(svgInit);

                var xScale = d3.scale.ordinal()
                    .domain(d3.range(data.length))
                    .rangeRoundBands([0, width], 0.02);

                var yScale = d3.scale.linear()
                    .domain([0, d3.max(data)])
                    .range([height, 0]);

                svg.selectAll('rect')
                    .data(data)
                    .enter()
                    .append('rect')
                    .attr('x', function (d, i) {
                        return xScale(i);
                    })
                    .attr('y', function (d) {
                        return yScale(d);
                    })
                    .attr('width', function (d) {
                        return xScale.rangeBand();
                    })
                    .attr('height', function (d) {
                        return height- yScale(d);
                    })
                    .attr('fill', 'red');




            });

            return chart;

        }

        var svgInit = function (svg) {
            svg
                .attr('width', width)
                .attr('height', height)

        };

        return chart;
    }


})(window, d3);