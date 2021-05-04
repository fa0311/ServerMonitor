var config;
var chart;

function config_load(){
    let ctx = document.getElementById("chart");
    config = config_chart();
    chart = new Chart(ctx, config);
    setTimeout(loop(), 0);
}

function getTime(){
    let now = new Date();
    let Hour = now.getHours();
    let Min = now.getMinutes();
    let Sec = now.getSeconds();
    if (Hour < 10) Hour = "0" + Hour;
    if (Min < 10) Min = "0" + Min;
    if (Sec < 10) Sec = "0" + Sec;
    return String(Hour + ":" + Min + ":" + Sec);
}

function loop() {
    setTimeout(function () {
        loop();
    }, 1000);
    getData(function(response){
        config.data.labels.push(getTime());
        config.data.datasets[0].data.push(Math.round(response.free.Mem[1] / response.free.Mem[0] * 100));
        config.data.datasets[1].data.push(response.mpstat[5][2]);
        if(config.data.labels.length > 60){
            config.data.datasets[0].data.shift();
            config.data.datasets[1].data.shift();
            config.data.labels.shift();
        }
        chart.update();
    },["free","mpstat"]);
}
if(config_no_load === true){
    config_load();
}