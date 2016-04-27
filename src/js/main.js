var slideShow = remark.create({
    ratio: '4:3',

    navigation: {
        scroll: false
    },

    sourceUrl: 'html/slide0.md',
    highlightLanguage: 'javascript',
    highlightStyle: 'monokai',
    highlightLines: true,
    highlightSpans: true
});


var getEl = document.getElementById.bind(document);

slideShow.on('beforeShowSlide', function (slide) {
    console.log(window);
    switch (slide.getSlideIndex()) {
        case 0:

            var barData = [1, 2, 3, 4, 5];
            var barchart = Chart.barchart();

            d3.select('main')
                .data([barData])

                .call(barchart);


            break;

        default :
            console.log('default');
    }
});


// 초기화
var barchart = Chart.barchart();
var bardata = [10, 20, 30, 40, 50];

console.log(d3.select('#main'));
d3.select('#main')
    .data([bardata])
    .call(barchart);