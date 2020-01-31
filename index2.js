$(function(){
	var myChart1 = echarts.init(document.getElementById('map'));
	$.get('./Echarts/baoan.json',function(geoJson){
		echarts.registerMap('baoan',geoJson,{});
		var option = {
			title: {
                text: '调查问卷发放回收情况-人数分布'
            },
		    tooltip: {
		        trigger: 'item',
            	formatter: '{b}<br/>{c}'
		    },
		    visualMap: {
	            min: 0,
	            max: 170,
	            text:['High','Low'],
	            left: 'right',
	            realtime: false,
	            calculable: true,
	            inRange: {
	                color: ['#313695','#4575b4', '#74add1','#abd9e9','#e0f3f8']
	            }
	        },
		    series: [
		        {
		        	name: '宝安',
		            type: 'map',
		            mapType: 'baoan',
		            aspectScale: 0.85,  //地图长度比
		            label: {
		                normal: {
		                    show: true,
		                    textStyle: {
		                        color: '#fff'
		                    }
		                },
		                emphasis: {
		                    show: true,
		                    textStyle: {
		                        color: '#333'
		                    }
		                }
		            },
		            data: [
		            	{name: '沙井街道', value: 117},
	                    {name: '燕罗街道', value: 14},
	                    {name: '福海街道', value: 7},
	                    {name: '新安街道', value: 112},
	                    {name: '西乡街道', value: 169},
	                    {name: '新桥街道', value: 6},
	                    {name: '松岗街道', value: 32},
	                    {name: '福永街道', value: 89},
	                    {name: '航城街道', value: 6},
	                    {name: '石岩街道', value: 90}
		            ]
		        }                              
		    ]
		};
		myChart1.setOption(option);
	});

});