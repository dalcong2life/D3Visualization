;
(function (root, d3) {
    "use strict";

    root.Chart = root.Chart || {};

    root.Chart.barchart = function () {

        var width = 800,
            height = 300,
            margin = {top: 20, right: 20, bottom: 40, left: 40};

        function chart(selection) {
            selection.each(function (data) {
                var div = d3.select(this),
                    svg = div.append('svg')
                        .call(svgInit);

                var xScale = d3.scale.ordinal()
                    .domain(d3.range(data.length))
                    .rangeRoundBands([0, width - margin.left - margin.right], 0.1);

                var yScale = d3.scale.linear()
                    .domain([0, d3.max(data)])
                    .range([height - margin.top - margin.bottom, 0]);

                var chart = svg.select('g.chart-content');

                chart.selectAll('rect')
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
                        return height - margin.top - margin.bottom - yScale(d);
                    })
                    .attr('fill', '#6C97CE');


                var xAxis = d3.svg.axis()
                    .scale(xScale)
                    .orient('bottom');

                var yAxis = d3.svg.axis()
                    .scale(yScale)
                    .orient('left');


                svg.select('g.xAxis')
                    .call(xAxis);

                svg.select('g.yAxis')
                    .call(yAxis);


            });

            return chart;
        }

        var svgInit = function (svg) {

            svg
                .attr('width', width)
                .attr('height', height)

            svg.append('g')
                .attr('class', 'chart-content')
                .attr('width', width - margin.left - margin.right)
                .attr('height', height - margin.top - margin.bottom)
                .attr('transform', 'translate(' + [margin.left, margin.top] + ')');

            svg.append('g')
                .attr('class', 'axis xAxis')
                .attr('transform', 'translate(' + [margin.left, height - margin.bottom] + ')');

            svg.append('g')
                .attr('class', 'axis yAxis')
                .attr('transform', 'translate(' + [margin.left, margin.top] + ')');
        };

        chart.width = function (value) {
            if (!arguments.length) {
                return width;
            }
            width = value;
            return chart;
        };

        chart.height = function (value) {
            if (!arguments.length) {
                return height;
            }
            height = value;
            return chart;
        };

        return chart;
    }

})(window, d3);