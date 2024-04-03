// // rekursive function
// let x = 1
// let stop
// function rec() {
//     console.log(x);


//     if(x < 10) {
//         x++
//         rec()
//     }

//     stop = setTimeout(() => {
//         x++
//         rec()

//         if(x == 5){
//             clearInterval(stop)
//         }
//     }, 1000);
// }
// rec()

let hours = document.querySelector(".hours")
let minutes = document.querySelector(".minutes")
let h = document.querySelector(".h")
let m = document.querySelector(".m")
let s = document.querySelector(".s")


function clock() {
    let time = new Date()
    let hour = new Date().getHours()
    let minut = new Date().getMinutes()
    let sec = new Date().getSeconds()
    hours.innerText = hour
    minutes.innerText = sec
    if (sec < 10) {
        minutes.innerHTML = "0" + sec
    } else {
        minutes.innerHTML = sec
    }

    if (hour < 10) {
        hours.innerHTML = "0" + hour
    } else {
        hours.innerHTML = hour
    }

    s.style.transform = `rotate(${sec * 6}deg)`
    m.style.transform = `rotate(${minut * 6}deg)`
    h.style.transform = `rotate(${hour * 30}deg)`


    setTimeout(() => {
        clock()
    }, 1000);
}

clock()


// let tabsItemActive = document.querySelector(".tabsItemActive")
// console.log(tabsItemActive);

// tabsItemActive.addEventListener("click",function(){
//     if(this.classList.containes("active")){
//         console.log(Bor);
//     }else{
//         console.log("Yoq");
//     }
// })
let tabsItem = document.querySelectorAll(".tabsItem")
let tabsContentItem = document.querySelectorAll(".tabsContentItem")
for (let i = 0; i < tabsItem.length; i++) {
    tabsItem[i].addEventListener("click", function () {
        for (let k = 0; k < tabsItem.length; k++) {
            tabsItem[k].classList.remove("active")
            tabsContentItem[k].classList.remove("active")
        }
        tabsItem[i].classList.add("active")
        tabsContentItem[i].classList.add("active")
    })
}


//////////////
//////////////


var stopwatchbtn = document.querySelector(".stopwatch__btn");
var stopwatchhour = document.querySelector(".stopwatch__hours");
var stopwatchminute = document.querySelector(".stopwatch__minutes");
var stopwatchsecond = document.querySelector(".stopwatch__seconds");
var info = document.querySelector(".tabsLink__span");

stopwatchbtn.addEventListener("click",function(){
    if (this.innerHTML == "start") {
        this.innerHTML = "stop";
        info.classList.add("active");
        let i = 0;
        setTimeout(()=> stopWatch(this,i),10);
    }else if (this.innerHTML == "stop"){
        this.innerHTML = "clear";
        info.classList.remove("active");
        info.classList.add("active_clear")
        let i = 0;
    }else{
        this.innerHTML = 'start';
        info.classList.remove("active_clear")
        stopwatchsecond.innerHTML = 0;
        stopwatchminute.innerHTML = 0;
        stopwatchhour.innerHTML = 0;
    }
})

function stopWatch(el,i){
    if(el.innerHTML == 'stop'){
        if(i == 60){
            i = 0;
            stopwatchsecond.innerHTML = i;
            if(stopwatchminute.innerHTML == 59){
                stopwatchminute.innerHTML = 0;
                stopwatchhour.innerHTML++;
            }else{
                stopwatchminute.innerHTML++;
            }
        }else{
            i++;
            stopwatchsecond.innerHTML = i;
        }
        setTimeout(()=>stopWatch(el,i),10)
    }
}