var configs = {};
var charts = {};

function config_load(){
    let ctx = document.getElementById("cpu_all");
    configs["cpu_all"] = config_cpu_chart("ALLCPU");
    charts["cpu_all"] = new Chart(ctx, configs["cpu_all"]);

    ctx = document.getElementById("mem");
    configs["mem"] = config_mem_chart("MEM");
    charts["mem"] = new Chart(ctx, configs["mem"]);


    const chart = document.getElementById('charts');
    getData(function(response){
        cpulist = response.mpstat.slice(6);
        cpulist.forEach(function(cpu){
            let div = document.createElement('div');
            div.setAttribute('class', "cpu_"+cpu[1]);
            div.setAttribute('id', "id_cpu_"+cpu[1]);
            chart.appendChild(div);
    
            let box = document.getElementById("id_cpu_"+cpu[1]);
    
            let canvas = document.createElement('canvas');
            canvas.setAttribute('id', "cpu_"+cpu[1]);
            box.appendChild(canvas);
            let ctx = document.getElementById("cpu_"+cpu[1]);
            configs["cpu_"+cpu[1]] = config_cpu_chart("CPU"+cpu[1]);
            charts["cpu_"+cpu[1]] = new Chart(ctx, configs["cpu_"+cpu[1]]);
        });
        document.getElementById('Modelname').textContent = response.lscpu[13][1];

        setTimeout(loop(), 1000);
    },["mpstat","lscpu"]);

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

function adddata(key,push,max=60){
    config = configs[key];
    config.data.labels.push("");
    config.data.datasets[0].data.push(push);
    if(config.data.labels.length > max){
        config.data.datasets[0].data.shift();
        config.data.labels.shift();
    }
    charts[key].update();
}


function loop() {
    setTimeout(function () {
        loop();
    }, 1000);
    getData(function(response){
        cpu = response.mpstat.slice(5);
        Object.keys(cpu).forEach(function(i){
            adddata("cpu_"+cpu[i][1],cpu[i][2]);
        });
        adddata("mem",Math.round(response.free[1][2] / response.free[1][1] * 100));
        document.getElementById('apu_all').textContent = Math.round(response.mpstat[5][2]);
        document.getElementById('CPUMHz').textContent = (Math.round(response.lscpu[16][1] / 10) / 100).toFixed(2);
        document.getElementById('mem_total').textContent = (Math.round(response.free[1][1] / 104857.6) / 10).toFixed(1);
        document.getElementById('mem_used').textContent = (Math.round(response.free[1][2] / 104857.6) / 10).toFixed(1);
        document.getElementById('mem_per').textContent = Math.round(response.free[1][2] / response.free[1][1] * 100);

    },["free","mpstat"]);
}
if(config_no_load === true){
    config_load();
}