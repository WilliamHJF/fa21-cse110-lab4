function newTime(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time); 
}

let nowTime = setInterval(newTime, 1000);