$(function(){

	// 调查问卷发放回收情况-人数分布
	var myChart1 = echarts.init(document.getElementById('first'));
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
	            // inRange: {
	            //     color: ['#313695','#4575b4', '#74add1','#abd9e9','#e0f3f8']
				// }
				inRange: {
					color: ['DodgerBlue','PaleGoldenRod', 'OrangeRed']
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

// 人数分布饼图
	var myChart5 = echarts.init(document.getElementById('fifth'));
	var option = {

		title: {
			text: '调查问卷发放回收情况-人数分布'
		},

		tooltip: {
			trigger: 'item',
			formatter: '{b}<br/>{c}'
		},

		visualMap: {
			show: false,
			min: 0,
			max: 170,
			inRange: {
				color: ['DodgerBlue','PaleGoldenRod', 'OrangeRed']
			}
		},
		series: [
			{
				name: '人数分布',
				type: 'pie',
				radius: '55%',
				center: ['50%', '50%'],
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
				].sort(function (a, b) { return a.value - b.value; }),
				roseType: 'radius',
				label: {
					color: 'rgba(255, 255, 255, 0.3)'
				},
				labelLine: {
					lineStyle: {
						color: 'rgba(255, 255, 255, 0.3)'
					},
					smooth: 0.2,
					length: 10,
					length2: 20
				},
				itemStyle: {
					color: '#c23531',
					shadowBlur: 200,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				},

				animationType: 'scale',
				animationEasing: 'elasticOut',
				animationDelay: function (idx) {
					return Math.random() * 200;
				}
			}
		]
	};
	myChart5.setOption(option);	



// 调查问卷发放回收情况-年龄分布
	var myChart2 = echarts.init(document.getElementById('second'));
	$.get('./Echarts/baoan.json',function(geoJson){
		echarts.registerMap('baoan',geoJson,{});
		var option = {
			title: {
                text: '调查问卷发放回收情况-年龄分布'
            },
		    tooltip: {
		        trigger: 'item',
            	formatter: '{b}<br/>{c}'
		    },
		    visualMap: {
	            min: 25,
	            max: 40,
	            text:['High','Low'],
	            left: 'right',
	            realtime: false,
	            calculable: true,
				inRange: {
					color: ['DodgerBlue','PaleGoldenRod', 'OrangeRed']
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
		            	{name: '沙井街道', value: 32.19},
	                    {name: '燕罗街道', value: 30.84},
	                    {name: '福海街道', value: 33.0},
	                    {name: '新安街道', value: 34.24},
	                    {name: '西乡街道', value: 32.46},
	                    {name: '新桥街道', value: 33.0},
	                    {name: '松岗街道', value: 35.58},
	                    {name: '福永街道', value: 32.55},
	                    {name: '航城街道', value: 29.0},
	                    {name: '石岩街道', value: 36.08}
		            ]
		        }                              
		    ]
		};
		myChart2.setOption(option);
	});


	// 调查问卷发放回收情况-性别分布
	var myChart3 = echarts.init(document.getElementById('third'));
	var option = {
		title: {
			text: '调查问卷发放回收情况-性别分布',
		},
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			data: ['男', '女']
		},
		toolbox: {
			show: true,
			feature: {
				dataView: {show: true, readOnly: false},
				magicType: {show: true, type: ['line', 'bar']},
				restore: {show: true},
				saveAsImage: {show: true}
			}
		},
		calculable: true,
		xAxis: [
			{
				type: 'category',
				data: ['沙井街道','燕罗街道','福海街道','新安街道','西乡街道','新桥街道','松岗街道','福永街道','航城街道','石岩街道']
			}
		],
		yAxis: [
			{
				type: 'value'
			}
		],
		series: [
			{
				name: '男',
				type: 'bar',
				data: [51, 2, 1, 38, 61, 5, 14, 34, 6, 36],
				markPoint: {
					data: [
						{type: 'max', name: '最大值'},
						{type: 'min', name: '最小值'}
					]
				},
			},
			{
				name: '女',
				type: 'bar',
				data: [65, 7, 1, 73, 107, 5, 17, 54, 3, 53],
				markPoint: {
					data: [
						{type: 'max', name: '最大值'},
						{type: 'min', name: '最小值'}
					]
				}


			}
		]
	};
	myChart3.setOption(option);	


	// 调查问卷发放回收情况-学历分布
	var myChart4 = echarts.init(document.getElementById('fourth'));
	var option = {
		title: {
			text: '调查问卷发放回收情况-学历分布',
		},
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			data: ['大学或大专', '高中或职高', '初中及以下', '硕士及以上']
		},
		toolbox: {
			show: true,
			feature: {
				dataView: {show: true, readOnly: false},
				magicType: {show: true, type: ['line', 'bar']},
				restore: {show: true},
				saveAsImage: {show: true}
			}
		},
		calculable: true,
		xAxis: [
			{
				type: 'category',
				data: ['西乡街道', '沙井街道', '新安街道', '石岩街道', '福永街道', '松岗街道',  '福海街道', '燕罗街道', '新桥街道', '航城街道']
			}
		],
		yAxis: [
			{
				type: 'value'
			}
		],
		series: [
			{
				name: '大学或大专',
				type: 'bar',
				data: [116,53,74,38,47,14,3,4,4,4],
				markPoint: {
					data: [
						{type: 'max', name: '最大值'},
						{type: 'min', name: '最小值'}
					]
				},
			},
			{
				name: '高中或职高',
				type: 'bar',
				data: [39,49,24,35,27,14,6,1,1,0],
				markPoint: {
					data: [
						{type: 'max', name: '最大值'},
						{type: 'min', name: '最小值'}
					]
				}


			},
			{
				name: '初中及以下',
				type: 'bar',
				data: [10,11,11,15,12,3,4,0,1,0],
				markPoint: {
					data: [
						{type: 'max', name: '最大值'},
						{type: 'min', name: '最小值'}
					]
				},
			},

			{
				name: '硕士及以上',
				type: 'bar',
				data: [3,3,2,1,2,0,0,1,0,1],
				markPoint: {
					data: [
						{type: 'max', name: '最大值'},
						{type: 'min', name: '最小值'}
					]
				},
			}






		]
	};
	// 使用刚指定的配置项和数据显示图表。
	myChart4.setOption(option);	


	






});