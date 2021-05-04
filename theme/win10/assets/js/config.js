/* Chart.js v2.9.3 */
/* config */
function config_cpu_chart(title) {
    return {
        type: 'line',
        tension:0,
        data: {
            labels: [...Array(60)],
            datasets: [
                {
                    label: title,
                    data: [...Array(60)].fill(0),
                    borderColor: "#00a2ff",
                    backgroundColor: "#00a2ff22",
                    borderWidth: 1
                }
            ],
        },
        options: {
            animation:false,
            showTooltips: false,
            responsive:true,
            title: {
                display: false,
                text: "ServerStatus"
            },
            hover: {
                mode: false,
                intersect: true
            },
            scales: {
              yAxes: [
                  {
                      ticks: {
                          display:false,
                          min: 0,
                          max: 100,
                          autoSkip: false,
                          stepSize: 10,
                        },
                        gridLines: {
                            display: true,
                            drawTicks:false,
                        }
                    }
                ],
                xAxes: [
                    {
                        ticks: {
                            callback: function(value, index, values) {
                                return "";
                            },
                            maxTicksLimit:6
                          },
                          gridLines: {
                              display: true,
                              drawTicks:false,
                              offsetGridLines:false
                            }
                        }
                  ]
            },
            legend: {
               display: false
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },
            elements: {
                point:{
                    radius: 0
                }
            }
        }
    }
}
function config_mem_chart(title) {
    return {
        type: 'line',
        tension:0,
        data: {
            labels: [...Array(60)],
            datasets: [
                {
                    label: title,
                    data: [...Array(60)].fill(0),
                    borderColor: "#b01fff",
                    backgroundColor: "#b01fff22",
                    borderWidth: 1
                }
            ],
        },
        options: {
            animation:false,
            showTooltips: false,
            responsive:true,
            title: {
                display: false,
                text: "ServerStatus"
            },
            hover: {
                mode: false,
                intersect: true
            },
            scales: {
              yAxes: [
                  {
                      ticks: {
                          display:false,
                          min: 0,
                          max: 100,
                          autoSkip: false,
                          stepSize: 10,
                        },
                        gridLines: {
                            display: true,
                            drawTicks:false,
                        }
                    }
                ],
                xAxes: [
                    {
                        ticks: {
                            callback: function(value, index, values) {
                                return "";
                            },
                            maxTicksLimit:6
                          },
                          gridLines: {
                              display: true,
                              drawTicks:false,
                              offsetGridLines:false
                            }
                        }
                  ]
            },
            legend: {
               display: false
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },
            elements: {
                point:{
                    radius: 0
                }
            }
        }
    }
}