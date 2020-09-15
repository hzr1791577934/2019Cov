var ec_right3 = echarts.init(document.getElementById('r3'), "vintage");

var ec_right3_Option ={
        //     legend: {},
        // tooltip: {
        //     trigger: 'axis',
        //     showContent: false
        // },
        // dataset: {
        //     source: [
        //         // ['日期', '2012', '2013', '2014', '2015', '2016', '2017'],
        //         // ['现有确诊', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
        //         // ['累计确诊', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
        //         // ['累计死亡', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
        //         // ['累计治愈', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
        //         [],
        //         [],
        //         [],
        //         [],
        //         []
        //     ]
        // },
        // xAxis: {type: 'category'},
        // yAxis: {gridIndex: 0},
        // grid: {top: '55%'},
        // series: [
        //     {type: 'line', smooth: true, seriesLayoutBy: 'row'},
        //     {type: 'line', smooth: true, seriesLayoutBy: 'row'},
        //     {type: 'line', smooth: true, seriesLayoutBy: 'row'},
        //     {type: 'line', smooth: true, seriesLayoutBy: 'row'},
        //     {
        //         type: 'pie',
        //         id: 'pie',
        //         radius: '30%',
        //         center: ['50%', '25%'],
        //         label: {
        //             formatter: '{b}: {@2012} ({d}%)'
        //         },
        //         encode: {
        //             itemName: '日期',
        //             value: '2012',
        //             tooltip: '2012'
        //         }
        //     }
        // ]
    title: {
        text: '全国疫情数据比例',
        subtext: 'Data from Tencent',
        left: 'left'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 'center',
        data: ['累计确诊', '现有疑似', '累计治愈', '累计死亡']
    },
    series: [
        {
            name: '2019Cov-19',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                {value: 1, name: '累计确诊'},
                {value: 1, name: '现有疑似'},
                {value: 1, name: '累计治愈'},
                {value: 1, name: '累计死亡'},
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
ec_right3.setOption(ec_right3_Option)
