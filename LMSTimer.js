/*
Code writen for MCA Virtual Conference 2021 LMS System
Author: Keith Schafer

Provide the Session information need to populate the LMSTimer.html page.
*/

HideField('.JSNote'); //hide the enable javascript message

const dayTitle = "";
const sessionTitle ="This Breakout Session";
const presenter = "";
//---------------------Day 1-------------------------------------------
var day1Timer = {
    session1StartTime: new Date("August 10, 2021 11:00:00").getTime(),
    session1EndTime: new Date("August 10, 2021 11:45:00").getTime(),
    s1StopTimer: 0,
    session2StartTime: new Date("August 10, 2021 12:15:00").getTime(),
    session2EndTime: new Date("August 10, 2021 13:15:00").getTime(),
    s2StopTimer: 0,
    session3StartTime: new Date("August 10, 2021 13:30:00").getTime(),
    session3EndTime: new Date("August 10, 2021 14:30:00").getTime(),
    s3StopTimer: 0
}
//---------------------Day 2-------------------------------------------
var day2Timer = {
    session1StartTime: new Date("August 11, 2021 11:00:00").getTime(),
    session1EndTime: new Date("August 11, 2021 11:45:00").getTime(),
    s1StopTimer: 0,
    session2StartTime: new Date("August 11, 2021 12:15:00").getTime(),
    session2EndTime: new Date("August 11, 2021 13:15:00").getTime(),
    s2StopTimer: 0,
    session3StartTime: new Date("August 11, 2021 13:30:00").getTime(),
    session3EndTime: new Date("August 11, 2021 14:30:00").getTime(),
    s3StopTimer: 0,
    session4StartTime: new Date("August 11, 2021 14:45:00").getTime(),
    session4EndTime: new Date("August 11, 2021 15:15:00").getTime(),
    s4StopTimer: 0
}
//---------------------Day 3-------------------------------------------
var day3Timer = {
    session1StartTime: new Date("August 12, 2021 11:00:00").getTime(),
    session1EndTime: new Date("August 12, 2021 11:45:00").getTime(),
    s1StopTimer: 0,
    session2StartTime: new Date("August 12, 2021 12:15:00").getTime(),
    session2EndTime: new Date("August 12, 2021 13:15:00").getTime(),
    s2StopTimer: 0,
    session3StartTime: new Date("August 12, 2021 13:30:00").getTime(),
    session3EndTime: new Date("August 12, 2021 14:30:00").getTime(),
    s3StopTimer: 0,
}
//------------------------------------------------------------------------
//------------Opening Speaker-------------------------------------------
var KeynoteSpeach = {
    sessionTimeStart: day1Timer.session1StartTime,
    sessionTimeEnd: day1Timer.session1EndTime,
    dTs: 'Keynote',
    dayTitle: dayTitle,
    sessionName: "Welcome to the 2021 MCA Virtual Conference",
    sessionPresenter: "Join us for a Keynote Speach from Dr. Mona Hanna-Attisha",
    zoomLink: 'http://www.mcaaa.org', //must include the http:// or https:// in order to work
    stopTimer: 0,
    bannerImgUrl: "https://mcac.mclms.net/en/content-library/access/183843",
    setTags() {
        this.countdownTag = this.dTs + 'Countdown';
        this.msgTag = this.dTs + 'CountMsg';
        this.dayId = this.dTs + 'day';
        this.hourId = this.dTs + 'hour';
        this.minuteId = this.dTs + 'minute';
        this.secondsId = this.dTs + 'second';
    }
}
KeynoteSpeach.setTags();

//-------------------------------------------------------------------------
//Set the intervals for each session banner to update

LMSToFill(KeynoteSpeach);
//-------------------------------------------------------------------------
//Set the intervals for each session to update
setInterval(function(){
    var currentTime = new Date().getTime();
    //var newTime = adjustedTime(currentTime, 0, 0, 0); //for testing
    //currentTime = newTime; //for testing

    //Opening Speaker
    updateLMSCountdowns(currentTime,KeynoteSpeach), 1000;
})

//-------------------------------------------------------------------------
//Set the banner functions
var bannerStatus = 1;
var bannerTimer = 6000;
var startBannerLoop;
var bannerType;

    function startLoop(){
        startBannerLoop = setInterval(() => {
            bannerLoop(); 
        }, bannerTimer);
    }
    function banType(BanType){
        bannerType=BanType;
        console.log(bannerType);
    }
    document.getElementById("main-banner").onmouseenter = function(){
        stopLoop();
    }
    document.getElementById("main-banner").onmouseleave = function(){
        if(bannerType=="Multi"){
            startLoop();
        }
        else{}
    }
    
    document.getElementById("imgbanbtn-next").onclick = function(){
        bannerLoop();
    }
    document.getElementById("imgbanbtn-prev").onclick = function(){
        if(bannerStatus === 1){
            bannerStatus=2;
        }
        else if (bannerStatus === 2) {
            bannerStatus=3;
        }
        else if (bannerStatus === 3) {
            bannerStatus=1;
        }
        bannerLoopReverse();
    }
    function stopLoop(){
        clearInterval(startBannerLoop);
    }
    function bannerLoop(){
        if (bannerStatus ===1) {
            document.getElementById("imgban2").style.opacity = "0";
            setTimeout(() => {
                document.getElementById("imgban1").style.right = "0em";
                document.getElementById("imgban1").style.zIndex = "1000";
                document.getElementById("imgban2").style.right = "-80em";
                document.getElementById("imgban2").style.zIndex = "1500";
                document.getElementById("imgban3").style.right = "80em";
                document.getElementById("imgban3").style.zIndex = "500";  
            }, 500);
            setTimeout(() => {
                document.getElementById("imgban2").style.opacity = "1";    
            }, 1000);
            bannerStatus = 2;
        }
        else if (bannerStatus ===2) {
            document.getElementById("imgban3").style.opacity = "0";
            setTimeout(() => {
                document.getElementById("imgban2").style.right = "0em";
                document.getElementById("imgban2").style.zIndex = "1000";
                document.getElementById("imgban3").style.right = "-80em";
                document.getElementById("imgban3").style.zIndex = "1500";
                document.getElementById("imgban1").style.right = "80em";
                document.getElementById("imgban1").style.zIndex = "500";  
            }, 500);
            setTimeout(() => {
                document.getElementById("imgban3").style.opacity = "1";    
            }, 1000);
            bannerStatus = 3;
        }
        else if (bannerStatus ===3) {
            document.getElementById("imgban1").style.opacity = "0";
            setTimeout(() => {
                document.getElementById("imgban3").style.right = "0em";
                document.getElementById("imgban3").style.zIndex = "1000";
                document.getElementById("imgban1").style.right = "-80em";
                document.getElementById("imgban1").style.zIndex = "1500";
                document.getElementById("imgban2").style.right = "80em";
                document.getElementById("imgban2").style.zIndex = "500";  
            }, 500);
            setTimeout(() => {
                document.getElementById("imgban1").style.opacity = "1";    
            }, 1000);
            bannerStatus = 1;
        }
    }
    function bannerLoopReverse(){
        if (bannerStatus ===1) {
            document.getElementById("imgban3").style.opacity = "0";
            setTimeout(() => {
                document.getElementById("imgban1").style.right = "0em";
                document.getElementById("imgban1").style.zIndex = "1000";
                document.getElementById("imgban3").style.right = "80em";
                document.getElementById("imgban3").style.zIndex = "1500";
                document.getElementById("imgban2").style.right = "-80em";
                document.getElementById("imgban2").style.zIndex = "500";  
            }, 500);
            setTimeout(() => {
                document.getElementById("imgban3").style.opacity = "1";    
            }, 1000);
            bannerStatus = 2;
        }
        else if (bannerStatus ===2) {
            document.getElementById("imgban1").style.opacity = "0";
            setTimeout(() => {
                document.getElementById("imgban2").style.right = "0em";
                document.getElementById("imgban2").style.zIndex = "1000";
                document.getElementById("imgban1").style.right = "80em";
                document.getElementById("imgban1").style.zIndex = "1500";
                document.getElementById("imgban3").style.right = "-80em";
                document.getElementById("imgban3").style.zIndex = "500";  
            }, 500);
            setTimeout(() => {
                document.getElementById("imgban1").style.opacity = "1";    
            }, 1000);
            bannerStatus = 3;
        }
        else if (bannerStatus ===3) {
            document.getElementById("imgban2").style.opacity = "0";
            setTimeout(() => {
                document.getElementById("imgban3").style.right = "0em";
                document.getElementById("imgban3").style.zIndex = "1000";
                document.getElementById("imgban2").style.right = "80em";
                document.getElementById("imgban2").style.zIndex = "1500";
                document.getElementById("imgban1").style.right = "-80em";
                document.getElementById("imgban1").style.zIndex = "500";  
            }, 500);
            setTimeout(() => {
                document.getElementById("imgban2").style.opacity = "1";    
            }, 1000);
            bannerStatus = 1;
        }
    }