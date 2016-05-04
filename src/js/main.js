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
            var Force = Chart.ForceChart('#force-chart');
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


var dataset = addBarchartData([], 15);
console.log(dataset);

d3.select('#barchar01')
    .data([dataset])
    .call(barchart);