/* Chart.js v2.9.3 */
/* config */
function config_chart() {
    return {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: "MEM",
                data: [],
                borderColor: "#ff0000",
                backgroundColor: "rgba(0,0,0,0)"
            },
            {
                label: "CPU",
                data: [],
                borderColor: "#0000ff",
                backgroundColor: "rgba(0,0,0,0)"
            }
        ],
        },
        options: {
            responsive: true,
            title: {
                display: false,
                text: "ServerStatus"
            },
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
              yAxes: [
                  {
                        ticks: {
                            beginAtZero: true,
                            min: 0,
                            max: 100
                        }
                    }
                ]
            }
        }
    }
}


if (typeof config_load === 'function') {
    config_load();
}else{
    var config_no_load = true;
}