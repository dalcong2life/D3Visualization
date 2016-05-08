remark.macros.scale = function (percentage) {
    return '<img src="' + this + '" style="width: ' + percentage + '" />';
};

var slideShow = remark.create({
    ratio: '4:3',

    navigation: {
        scroll: false
    },

    sourceUrl: 'html/slide0.md',
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
        case 35:
            //var Force = Chart.ForceChart('#force-chart');
            break;

        case 44:

            var base = d3.select("#canvas-area");
            var chart = base.append("canvas")
                .attr("width", 200)
                .attr("height", 100);

            var context = chart.node().getContext("2d");
            var data = [1,2,13,20,23];

            var scale = d3.scale.linear()
                .range([10, 390])
                .domain([1,23]);

            data.forEach(function(d, i) {
                context.beginPath();
                context.rect(scale(d), 150, 10, 10);
                context.fillStyle="red";
                context.fill();
                context.closePath();
            });

            d3.json('../../data/miserables.json', function (error, graph) {
                if (error) {
                    return error;
                }
                var chart = Chart.ForceDirectedGraph()
                    .width(400)
                    .height(130);

                d3.select('#svg-area')
                    .data([graph])
                    .call(chart);
            });


            break;
        default :
            console.log('default');
    }
});


slideShow.on('hideSlide', function (slide) {
    var currentPage = slide.getSlideIndex() + 1;

    console.log("Hide Slide:", currentPage);

    switch (currentPage) {
        case 35:
            d3.select('#force-chart')
                .selectAll('svg')
                .remove();
            break;
    }


});


var addBarchartData = function (data, len) {
    for (var i = len - 1; i >= 0; i--) {
        data.push(Math.floor(Math.random() * 100) + 1);
    }
    return data;
};

