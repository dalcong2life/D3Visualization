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

var barchart = Chart.barchart();

slideShow.on('beforeShowSlide', function (slide) {
    console.log(slide.getSlideIndex());

    switch (slide.getSlideIndex()) {
        case 0:


            break;
        case 13:

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

            break;
        default :
            console.log('default');
    }
});

slideShow.on('hideSlide', function (slide) {
    console.log('Hide Slide: ', slide.getSlideIndex());

    switch (slide.getSlideIndex()) {
        case 13:
            document.querySelector('#barchar01')
                .innerHTML = '';
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