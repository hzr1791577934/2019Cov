var ec_left3 = echarts.init(document.getElementById('l3'), "vintage");
var ec_left3_Option = {
    title: {
		text: "疫情确诊治愈比例图",
        subtext:"Data from Tencent",
        left: 'left',
	},
angleAxis: {
        type: 'category',
        data: []
    },
    radiusAxis: {
    },
    polar: {
    },
    series: [{
        type: 'bar',
        data: [],
        coordinateSystem: 'polar',
        name: '累计确诊',
        stack: 'a'
    }, {
        type: 'bar',
        data: [],
        coordinateSystem: 'polar',
        name: '累计治愈',
        stack: 'b'
    }],
    legend: {
        show: true,
        data: ['累计确诊', '累计治愈']
    }
};

ec_left3.setOption(ec_left3_Option)
