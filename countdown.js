const earlyBirdDate = new Date("June 18, 2021 17:00:00").getTime(); //Early Bird
//---------------Day 1------------------
var day1Timer = {
    s1Start:new Date("August 10, 2021 11:00:00").getTime(),
    s1End:new Date("August 10, 2021 11:45:00").getTime(),
    s1StopTimer:0,
    s2Start:new Date("August 10, 2021 12:15:00").getTime(),
    s2End:new Date("August 10, 2021 13:15:00").getTime(),
    s2StopTimer:0,
    s3Start:new Date("August 10, 2021 13:30:00").getTime(),
    s3End:new Date("August 10, 2021 14:30:00").getTime(),
    s3StopTimer:0
}
//-------------Day 1 Sessions---------------------
var sessionD1T1S1 = {
    sessionName:"Session 1 Name here",
    sessionPresenter:"Presenter Name here",
    zoomLink: '#',
    countdownTag:'#d1s1Countdown',
    msgTag:'#d1s1CountMsg',
     }

//---------------Day 2 -------------------------
var day2Timer = {
    s1Start:new Date("August 11, 2021 11:00:00").getTime(),
    s2End:new Date("August 11, 2021 11:45:00").getTime(),
    s1StopTimer:0,
    s2Start:new Date("August 11, 2021 12:15:00").getTime(),
    s2End:new Date("August 11, 2021 13:15:00").getTime(),
    s2StopTimer:0,
    s3Start:new Date("August 11, 2021 13:30:00").getTime(),
    s3End:new Date("August 11, 2021 14:30:00").getTime(),
    s3StopTimer:0,
    s4Start:new Date("August 11, 2021 14:45:00").getTime(),
    s4End:new Date("August 11, 2021 15:15:00").getTime(),
    s4StopTimer:0
}
//---------------Day 3 -------------------------
var day3Timer = {
    s1Start:new Date("August 12, 2021 11:00:00").getTime(),
    s2End:new Date("August 12, 2021 11:45:00").getTime(),
    s1StopTimer:0,
    s2Start:new Date("August 12, 2021 12:15:00").getTime(),
    s2End:new Date("August 12, 2021 13:15:00").getTime(),
    s2StopTimer:0,
    s3Start:new Date("August 12, 2021 13:30:00").getTime(),
    s3End:new Date("August 12, 2021 14:30:00").getTime(),
    s3StopTimer:0
}

//Constant Calcs
const second = 1000
const minute = second *60
const hour = minute *60
const day = hour *24

    function earlyBirdEndDate(now){

        ebGap = earlyBirdDate -now; //Early Bird

        //Early Bird Calcs
        const d = Math.floor(ebGap /(day));
        const h = Math.floor((ebGap % (day)) / (hour));
        const m = Math.floor((ebGap % (hour)) / (minute));
        const s = Math.floor((ebGap % (minute)) / (second));
        
        //Early Bird
        document.querySelector('#day').innerText =d;
        document.querySelector('#hour').innerText =h;
        document.querySelector('#minute').innerText =m;
        document.querySelector('#second').innerText =s;
        document.querySelector('#smallday').innerText =d;
        document.querySelector('#smallhour').innerText =h;
        document.querySelector('#smallminute').innerText =m;
        document.querySelector('#smallsecond').innerText =s;
    }
    function sessionEndDate(now){

        d1s1Gap=day1Timer.s1Start-now; //Day 1 Session Timeslot 1
        d1s2Gap=day1Timer.s2Start-now; //Day 1 Session Timeslot 2
        d1s3Gap=day1Timer.s3Start-now; //Day 1 Session Timeslot 3
        d2s1Gap=day2Timer.s1Start-now; //Day 2 Session Timeslot 1
        d2s2Gap=day2Timer.s2Start-now; //Day 2 Session Timeslot 2
        d2s3Gap=day2Timer.s3Start-now; //Day 2 Session Timeslot 3
        d2s4Gap=day2Timer.s4Start-now; //Day 2 Session Timeslot 3
        d3s1Gap=day3Timer.s1Start-now; //Day 3 Session Timeslot 1
        d3s2Gap=day3Timer.s2Start-now; //Day 3 Session Timeslot 2
        d3s3Gap=day3Timer.s3Start-now; //Day 3 Session Timeslot 3

        //Day 1 Calcs
        const d1s1d = Math.floor(d1s1Gap /(day));
        const d1s1h = Math.floor((d1s1Gap % (day)) / (hour));
        const d1s1m = Math.floor((d1s1Gap % (hour)) / (minute));
        const d1s1s = Math.floor((d1s1Gap % (minute)) / (second));
        const d1s2d = Math.floor(d1s2Gap /(day));
        const d1s2h = Math.floor((d1s2Gap % (day)) / (hour));
        const d1s2m = Math.floor((d1s2Gap % (hour)) / (minute));
        const d1s2s = Math.floor((d1s2Gap % (minute)) / (second));
        const d1s3d = Math.floor(d1s3Gap /(day));
        const d1s3h = Math.floor((d1s3Gap % (day)) / (hour));
        const d1s3m = Math.floor((d1s3Gap % (hour)) / (minute));
        const d1s3s = Math.floor((d1s3Gap % (minute)) / (second));
        //Day 2 Calcs
        const d2s1d = Math.floor(d2s1Gap /(day));
        const d2s1h = Math.floor((d2s1Gap % (day)) / (hour));
        const d2s1m = Math.floor((d2s1Gap % (hour)) / (minute));
        const d2s1s = Math.floor((d2s1Gap % (minute)) / (second));
        const d2s2d = Math.floor(d2s2Gap /(day));
        const d2s2h = Math.floor((d2s2Gap % (day)) / (hour));
        const d2s2m = Math.floor((d2s2Gap % (hour)) / (minute));
        const d2s2s = Math.floor((d2s2Gap % (minute)) / (second));
        const d2s3d = Math.floor(d2s3Gap /(day));
        const d2s3h = Math.floor((d2s3Gap % (day)) / (hour));
        const d2s3m = Math.floor((d2s3Gap % (hour)) / (minute));
        const d2s3s = Math.floor((d2s3Gap % (minute)) / (second));
        const d2s4d = Math.floor(d2s4Gap /(day));
        const d2s4h = Math.floor((d2s4Gap % (day)) / (hour));
        const d2s4m = Math.floor((d2s4Gap % (hour)) / (minute));
        const d2s4s = Math.floor((d2s4Gap % (minute)) / (second));
        //Day 3 Calcs
        const d3s1d = Math.floor(d3s1Gap /(day));
        const d3s1h = Math.floor((d3s1Gap % (day)) / (hour));
        const d3s1m = Math.floor((d3s1Gap % (hour)) / (minute));
        const d3s1s = Math.floor((d3s1Gap % (minute)) / (second));
        const d3s2d = Math.floor(d3s2Gap /(day));
        const d3s2h = Math.floor((d3s2Gap % (day)) / (hour));
        const d3s2m = Math.floor((d3s2Gap % (hour)) / (minute));
        const d3s2s = Math.floor((d3s2Gap % (minute)) / (second));
        const d3s3d = Math.floor(d3s3Gap /(day));
        const d3s3h = Math.floor((d3s3Gap % (day)) / (hour));
        const d3s3m = Math.floor((d3s3Gap % (hour)) / (minute));
        const d3s3s = Math.floor((d3s3Gap % (minute)) / (second));

        //Day 1
        document.querySelector('.d1s1day').innerText =d1s1d;
        document.querySelector('.d1s1hour').innerText =d1s1h;
        document.querySelector('.d1s1minute').innerText =d1s1m;
        document.querySelector('.d1s1second').innerText =d1s1s;
        document.querySelector('.d1s2day').innerText =d1s2d;
        document.querySelector('.d1s2hour').innerText =d1s2h;
        document.querySelector('.d1s2minute').innerText =d1s2m;
        document.querySelector('.d1s2second').innerText =d1s2s;
        document.querySelector('.d1s3day').innerText =d1s3d;
        document.querySelector('.d1s3hour').innerText =d1s3h;
        document.querySelector('.d1s3minute').innerText =d1s3m;
        document.querySelector('.d1s3second').innerText =d1s3s;
        //Day 2
        document.querySelector('.d2s1day').innerText =d2s1d;
        document.querySelector('.d2s1hour').innerText =d2s1h;
        document.querySelector('.d2s1minute').innerText =d2s1m;
        document.querySelector('.d2s1second').innerText =d2s1s;
        document.querySelector('.d2s2day').innerText =d2s2d;
        document.querySelector('.d2s2hour').innerText =d2s2h;
        document.querySelector('.d2s2minute').innerText =d2s2m;
        document.querySelector('.d2s2second').innerText =d2s2s;
        document.querySelector('.d2s3day').innerText =d2s3d;
        document.querySelector('.d2s3hour').innerText =d2s3h;
        document.querySelector('.d2s3minute').innerText =d2s3m;
        document.querySelector('.d2s3second').innerText =d2s3s;
        document.querySelector('.d2s4day').innerText =d2s4d;
        document.querySelector('.d2s4hour').innerText =d2s4h;
        document.querySelector('.d2s4minute').innerText =d2s4m;
        document.querySelector('.d2s4second').innerText =d2s4s;
        //Day 3
        document.querySelector('.d3s1day').innerText =d3s1d;
        document.querySelector('.d3s1hour').innerText =d3s1h;
        document.querySelector('.d3s1minute').innerText =d3s1m;
        document.querySelector('.d3s1second').innerText =d3s1s;
        document.querySelector('.d3s2day').innerText =d3s2d;
        document.querySelector('.d3s2hour').innerText =d3s2h;
        document.querySelector('.d3s2minute').innerText =d3s2m;
        document.querySelector('.d3s2second').innerText =d3s2s;
        document.querySelector('.d3s3day').innerText =d3s3d;
        document.querySelector('.d3s3hour').innerText =d3s3h;
        document.querySelector('.d3s3minute').innerText =d3s3m;
        document.querySelector('.d3s3second').innerText =d3s3s;
    } 
    setInterval(function(){
            var currentTime = new Date().getTime();
            earlyBirdEndDate(currentTime), 1000
            ebZeroTimer(currentTime), 1000
            sessionEndDate(currentTime), 1000

            //var current = new Date(2021,07,10,11,1).getTime(); //for testing
            var current = currentTime;
            if((current>day1Timer.s1Start)&&(current<day1Timer.s1End)&&(day1Timer.s1StopTimer==0)){
                sessionInProgress(sessionD1T1S1.countdownTag, sessionD1T1S1.msgTag, sessionD1T1S1.zoomLink) ,1000;
                day1Timer.s1StopTimer=1;
            }
            //var current = new Date(2021,07,10,12,1).getTime(); //for testing
            if((current>day1Timer.s1End)&&(day1Timer.s1StopTimer==1)){
                sessionEnded(sessionD1T1S1.countdownTag, sessionD1T1S1.msgTag), 1000;
                day1Timer.s1StopTimer=2;
             }
        })

    function ebZeroTimer(current){
        //Early Bird
        if(current>earlyBirdDate){
        document.querySelector('#day').innerText ="0";
        document.querySelector('#hour').innerText ="0";
        document.querySelector('#minute').innerText ="0";
        document.querySelector('#second').innerText ="0";
        document.querySelector('#smallday').innerText ="0";
        document.querySelector('#smallhour').innerText ="0";
        document.querySelector('#smallminute').innerText ="0";
        document.querySelector('#smallsecond').innerText ="0";
        document.querySelector('#countMsg').innerText = "Early Bird Pricing has Ended";
        document.querySelector('#smallcountMsg').innerText = "Early Bird Pricing has Ended";
        }
    }

    function sessionEnded(timerTag, msgDisplayTag){
            document.querySelector(timerTag).style.display="none";
            document.querySelector(msgDisplayTag).innerHTML = "Live session has ended<br>The replay should be available soon";

    }
    function sessionInProgress(timerTag, msgDisplayTag, sessionLink){
            document.querySelector(timerTag).style.display="none";
            document.querySelector(msgDisplayTag).innerHTML = "Live Session in Progress<br><a class='sessionLink' href='" +sessionLink+ "' target='_blank'>Click here to join</a>";
        }