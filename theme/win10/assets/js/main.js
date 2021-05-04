var configs = {};
var charts = {};
window.onload = function(){
    config_load();
}
function config_load(){
    let ctx = document.getElementById("cpu_all");
    configs["cpu_all"] = config_cpu_chart("ALLCPU");
    charts["cpu_all"] = new Chart(ctx, configs["cpu_all"]);

    ctx = document.getElementById("mem");
    configs["mem"] = config_mem_chart("MEM");
    charts["mem"] = new Chart(ctx, configs["mem"]);


    let chart = document.getElementById('charts');
    getData(function(response){
        cpulist = response.mpstat.slice(6);
        cpulist.forEach(function(cpu){
            let div = document.createElement('div');
            div.setAttribute('class', "chart");
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
        document.getElementById('Modelname').textContent = response.lscpu["Modelname"][0];
        document.getElementById('details_CPUmaxMHz').textContent = (Math.round(response.lscpu["CPUmaxMHz"][0] / 10) / 100).toFixed(2);
        document.getElementById('details_Sockets').textContent = response.lscpu["Socket(s)"][0];
        document.getElementById('details_Corespersocket').textContent = response.lscpu["Core(s)persocket"][0];
        document.getElementById('details_CPUs').textContent = response.lscpu["CPU(s)"][0];
        if(response.lscpu["Frequencyboost"] === undefined){
            document.getElementById('details_Frequencyboost').textContent = "取得できません";
        }else if(response.lscpu["Frequencyboost"][0] === "enabled")
            document.getElementById('details_Frequencyboost').textContent = "有効";
        else
            document.getElementById('details_Frequencyboost').textContent = "無効";

        document.getElementById('details_L1cache').textContent = byte_to_SIprefix(SIprefix_to_byte(response.lscpu["L1dcache"][0]) + SIprefix_to_byte(response.lscpu["L1icache"][0]));
        for (let i = 2; response.lscpu["L" + i + "cache"] !== undefined; i++) {
            let key = "L" + i + "cache";
            let left = document.getElementById('details_right_left');
            let right = document.getElementById('details_right_right');

            let title = document.createElement('p');
            title.setAttribute('class', "title");
            title.textContent = "L" + i + " キャッシュ";
            left.appendChild(title);


            let main = document.createElement('p');
            main.setAttribute('class', "main");
            
            let main_child = document.createElement('span');
            main_child.setAttribute('id', "details_"+ key);
            main_child.setAttribute('class', "main");
            main_child.textContent = response.lscpu["L" + i + "cache"][0];
            main.appendChild(main_child);
            right.appendChild(main);
        }
        setInterval(function(){
            loop()
        }, 1000);
    },["mpstat","lscpu"]);
}

function SIprefix_to_byte(text){
    return {
        "B":1,
        "KiB":1024,
        "MiB":1024 * 1024,
        "GiB":1024 * 1024 * 1024,
        "TiB":1024 * 1024 * 1024 * 1024,
        "PiB":1024 * 1024 * 1024 * 1024 * 1024,
        "EiB":1024 * 1024 * 1024 * 1024 * 1024 * 1024,
        "ZiB":1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024,
        "YiB":1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024,
    }[text.replace(/[^A-Za-z]/gi, '')] * text.replace(/[^0-9]/gi, '');
}

function byte_to_SIprefix(number) {
    let data = {
        "B":1,
        "KiB":1024,
        "MiB":1024 * 1024,
        "GiB":1024 * 1024 * 1024,
        "TiB":1024 * 1024 * 1024 * 1024,
        "PiB":1024 * 1024 * 1024 * 1024 * 1024,
        "EiB":1024 * 1024 * 1024 * 1024 * 1024 * 1024,
        "ZiB":1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024,
        "YiB":1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024,
    };
    let output;
    Object.keys(data).forEach(function(SIprefix){
        if(number < data[SIprefix] * 1024 && number >= data[SIprefix])
            output = String(parseInt(number / data[SIprefix])) + SIprefix;
    });
    return output;
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
    getData(function(response){
        cpu = response.mpstat.slice(5);
        Object.keys(cpu).forEach(function(i){
            adddata("cpu_"+cpu[i][1],cpu[i][2]);
        });
        adddata("mem",Math.round(response.free.Mem[1] / response.free.Mem[0] * 100));
        document.getElementById('apu_all').textContent = Math.round(response.mpstat[5][2]);
        document.getElementById('CPUMHz').textContent = (Math.round(response.lscpu.CPUMHz[0] / 10) / 100).toFixed(2);
        document.getElementById('mem_total').textContent = (Math.round(response.free.Mem[0] / 104857.6) / 10).toFixed(1);
        document.getElementById('mem_used').textContent = (Math.round(response.free.Mem[1] / 104857.6) / 10).toFixed(1);
        document.getElementById('mem_per').textContent = Math.round(response.free.Mem[1] / response.free.Mem[0] * 100);

        document.getElementById('details_time_days').textContent = response.uptime[4];
        document.getElementById('details_time_hrs').textContent = response.uptime[0];
        document.getElementById('details_time_mins').textContent = response.uptime[1];
        document.getElementById('details_time_secs').textContent = response.uptime[2];

        document.getElementById('details_apu_all').textContent = Math.round(response.mpstat[5][2]);
        document.getElementById('details_CPUMHz').textContent = (Math.round(response.lscpu.CPUMHz[0] / 10) / 100).toFixed(2);
        document.getElementById('details_process').textContent = response.ps.process;
        document.getElementById('details_thread').textContent = response.ps.thread;
    },["free","mpstat","lscpu","ps","uptime","iostat"]);
}