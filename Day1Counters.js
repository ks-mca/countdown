
//---------------------Day 1-------------------------------------------
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
const dayTitle = "MCA Virtual Summer Conference Day 1"
//-------------Day 1 Sessions-------------------------------------------
//------------Opening Speaker-------------------------------------------
var sessionD1Track1Session1 = {
    sessionTimeStart: day1Timer.s1Start,
    sessionTimeEnd: day1Timer.s1End,
    dTs:'d1t1s1',
    dayTitle: dayTitle,
    sessionName:"Keynote Speach",
    sessionPresenter:"Opening Speaker",
    zoomLink: 'http://www.mcaaa.org',
    countdownTag:'',
    msgTag:'',
    dayId: '',
    hourId: '',
    minuteId: '',
    secondsId: '',
    stopTimer:0,
    setTags (){
        this.countdownTag=this.dTs+'Countdown';
        this.msgTag=this.dTs+'CountMsg';
        this.dayId= this.dTs+'day';
        this.hourId= this.dTs+'hour';
        this.minuteId= this.dTs+'minute';
        this.secondsId= this.dTs+'second';}
     }     
sessionD1Track1Session1.setTags();
sessionToFill(sessionD1Track1Session1);
//-------------------------------------------------------------------------
//---------------- Session 2 Track 1 --------------------------------------
var sessionD1Track1Session2 = {
    sessionTimeStart: day1Timer.s2Start,
    sessionTimeEnd: day1Timer.s2End,
    dTs:'d1t1s2',
    dayTitle: dayTitle,
    sessionName:"Session Name here",
    sessionPresenter:"Presenter Name here",
    zoomLink: '#',
    countdownTag:'',
    msgTag:'',
    dayId: '',
    hourId: '',
    minuteId: '',
    secondsId:'',
    stopTimer:0,
    setTags (){
        this.countdownTag=this.dTs+'Countdown';
        this.msgTag=this.dTs+'CountMsg';
        this.dayId= this.dTs+'day';
        this.hourId= this.dTs+'hour';
        this.minuteId= this.dTs+'minute';
        this.secondsId= this.dTs+'second';}
     }     
sessionD1Track1Session2.setTags();
sessionToFill(sessionD1Track1Session2);
//-------------------------------------------------------------------------
//---------------- Session 2 Track 2 --------------------------------------
var sessionD1Track2Session2 = {
    sessionTimeStart: day1Timer.s2Start,
    sessionTimeEnd: day1Timer.s2End,
    dTs:'d1t2s2',
    dayTitle: dayTitle,
    sessionName:"Session Name here",
    sessionPresenter:"Presenter Name here",
    zoomLink: '#',
    countdownTag:'',
    msgTag:'',
    dayId: '',
    hourId: '',
    minuteId: '',
    secondsId:'',
    stopTimer:0,
    setTags (){
        this.countdownTag=this.dTs+'Countdown';
        this.msgTag=this.dTs+'CountMsg';
        this.dayId= this.dTs+'day';
        this.hourId= this.dTs+'hour';
        this.minuteId= this.dTs+'minute';
        this.secondsId= this.dTs+'second';}
     }     
sessionD1Track2Session2.setTags();
sessionToFill(sessionD1Track2Session2);
//-------------------------------------------------------------------------
//---------------- Session 2 Track 3 --------------------------------------
var sessionD1Track3Session2 = {
    sessionTimeStart: day1Timer.s2Start,
    sessionTimeEnd: day1Timer.s2End,
    dTs:'d1t3s2',
    dayTitle: dayTitle,
    sessionName:"Session Name here",
    sessionPresenter:"Presenter Name here",
    zoomLink: '#',
    countdownTag:'',
    msgTag:'',
    dayId: '',
    hourId: '',
    minuteId: '',
    secondsId:'',
    stopTimer:0,
    setTags (){
        this.countdownTag=this.dTs+'Countdown';
        this.msgTag=this.dTs+'CountMsg';
        this.dayId= this.dTs+'day';
        this.hourId= this.dTs+'hour';
        this.minuteId= this.dTs+'minute';
        this.secondsId= this.dTs+'second';}
     }     
sessionD1Track3Session2.setTags();
sessionToFill(sessionD1Track3Session2);
//-------------------------------------------------------------------------
//---------------- Session 3 Track 1 --------------------------------------
var sessionD1Track1Session3 = {
    sessionTimeStart: day1Timer.s3Start,
    sessionTimeEnd: day1Timer.s3End,
    dTs:'d1t1s3',
    dayTitle: dayTitle,
    sessionName:"Session Name here",
    sessionPresenter:"Presenter Name here",
    zoomLink: '#',
    countdownTag:'',
    msgTag:'',
    dayId: '',
    hourId: '',
    minuteId: '',
    secondsId:'',
    stopTimer:0,
    setTags (){
        this.countdownTag=this.dTs+'Countdown';
        this.msgTag=this.dTs+'CountMsg';
        this.dayId= this.dTs+'day';
        this.hourId= this.dTs+'hour';
        this.minuteId= this.dTs+'minute';
        this.secondsId= this.dTs+'second';}
     }     
sessionD1Track1Session3.setTags();
sessionToFill(sessionD1Track1Session3);
//-------------------------------------------------------------------------
//---------------- Session 3 Track 2 --------------------------------------
var sessionD1Track2Session3 = {
    sessionTimeStart: day1Timer.s3Start,
    sessionTimeEnd: day1Timer.s3End,
    dTs:'d1t2s3',
    dayTitle: dayTitle,
    sessionName:"Session Name here",
    sessionPresenter:"Presenter Name here",
    zoomLink: '#',
    countdownTag:'',
    msgTag:'',
    dayId: '',
    hourId: '',
    minuteId: '',
    secondsId:'',
    stopTimer:0,
    setTags (){
        this.countdownTag=this.dTs+'Countdown';
        this.msgTag=this.dTs+'CountMsg';
        this.dayId= this.dTs+'day';
        this.hourId= this.dTs+'hour';
        this.minuteId= this.dTs+'minute';
        this.secondsId= this.dTs+'second';}
     }     
sessionD1Track2Session3.setTags();
sessionToFill(sessionD1Track2Session3);
//-------------------------------------------------------------------------
//---------------- Session 3 Track 3 --------------------------------------
var sessionD1Track3Session3 = {
    sessionTimeStart: day1Timer.s3Start,
    sessionTimeEnd: day1Timer.s3End,
    dTs:'d1t3s3',
    dayTitle: dayTitle,
    sessionName:"Session Name here",
    sessionPresenter:"Presenter Name here",
    zoomLink: '#',
    countdownTag:'',
    msgTag:'',
    dayId: '',
    hourId: '',
    minuteId: '',
    secondsId:'',
    stopTimer:0,
    setTags (){
        this.countdownTag=this.dTs+'Countdown';
        this.msgTag=this.dTs+'CountMsg';
        this.dayId= this.dTs+'day';
        this.hourId= this.dTs+'hour';
        this.minuteId= this.dTs+'minute';
        this.secondsId= this.dTs+'second';}
     }     
sessionD1Track3Session3.setTags();
sessionToFill(sessionD1Track3Session3);
//-------------------------------------------------------------------------

//Constant Calcs
const second = 1000
const minute = second *60
const hour = minute *60
const day = hour *24

//assign session values to pass to HTML template
function sessionToFill (sessionToSetup){
    FillPage(sessionToSetup.msgTag, sessionToSetup.dayTitle, sessionToSetup.sessionName, sessionToSetup.sessionPresenter, sessionToSetup.countdownTag, sessionToSetup.dayId, sessionToSetup.hourId, sessionToSetup.minuteId, sessionToSetup.secondsId);
}

//set Html Templates for countdown clocks
function FillPage (h2Tag, dayTitle, sessionTitle, sessionSpeaker, counterTag, dayTag, hourTag, minuteTag, secondsTag){
    var temp = document.querySelector('#template');
    temp.innerHTML+="<div class='container'><div class='countdownBox'><h2 id="+h2Tag+">"+dayTitle+"<br>"+sessionTitle+"<br>"+sessionSpeaker+"<br>Will Begin In:</h2><div id="+counterTag+" class='countdown'><div id="+dayTag+" class='day'></div><div id="+hourTag+" class='hour'></div><div id="+minuteTag+" class='minute'></div><div id="+secondsTag+"  class='second'></div></div></div>";
}

setInterval(function(){
    var currentTime = new Date().getTime();
    // var currentTime = new Date(2021,07,10,11,1).getTime(); //for testing
    // var currentTime = new Date(2021,07,10,12,1).getTime(); //for testing 

    //Opening Speaker
    updateCountdowns(currentTime,sessionD1Track1Session1), 1000;

    //Session 2
    updateCountdowns(currentTime,sessionD1Track1Session2), 1000;
    updateCountdowns(currentTime,sessionD1Track2Session2), 1000;
    updateCountdowns(currentTime,sessionD1Track3Session2), 1000;
    //Session 3
    updateCountdowns(currentTime,sessionD1Track1Session3), 1000;
    updateCountdowns(currentTime,sessionD1Track2Session3), 1000;
    updateCountdowns(currentTime,sessionD1Track3Session3), 1000;
})

//-----------------Countdown Calcs----------------------------
function endDay(sessionTimeSlot, now){
    gap = sessionTimeSlot-now;
    const calcDay = Math.floor(gap /(day));
    return calcDay;
}
function endHour(sessionTimeSlot, now){
    gap = sessionTimeSlot-now;
    const calcHour = Math.floor((gap % (day)) / (hour));
    return calcHour;
}
function endMinute(sessionTimeSlot, now){
    gap = sessionTimeSlot-now;
    const calcMin = Math.floor((gap % (hour)) / (minute));
    return calcMin;
}
function endSecond(sessionTimeSlot, now){
    gap = sessionTimeSlot-now;
    const calcSec = Math.floor((gap % (minute)) / (second));
    return calcSec;
}
//------------------------------------------------------------
//Update HTML with current countdown values
function updateCountdowns(time, session){
    if((time>session.sessionTimeStart)&&(time<session.sessionTimeEnd)&&(session.stopTimer==0)){
        sessionInProgress(session.countdownTag, session.msgTag, session.zoomLink);
        session.stopTimer=1;
    }
    else if((time>session.sessionTimeEnd)&&(session.stopTimer==1)){
        sessionEnded(session.countdownTag, session.msgTag);
        session.stopTimer=2;
    }

    document.querySelector("#"+session.dayId).innerText = endDay(session.sessionTimeStart, time);
    document.querySelector("#"+session.hourId).innerText = endHour(session.sessionTimeStart, time);
    document.querySelector("#"+session.minuteId).innerText = endMinute(session.sessionTimeStart, time);
    document.querySelector("#"+session.secondsId).innerText = endSecond(session.sessionTimeStart, time);
}
function sessionEnded(timerTag, msgDisplayTag){
    document.querySelector("#"+timerTag).style.display="none";
    document.querySelector("#"+msgDisplayTag).innerHTML = "Live session has ended<br>The replay should be available soon";

}
function sessionInProgress(timerTag, msgDisplayTag, sessionLink){
    document.querySelector("#"+timerTag).style.display="none";
    document.querySelector("#"+msgDisplayTag).innerHTML = "Live Session in Progress<br><a class='sessionLink' href='" +sessionLink+ "' target='_blank'>Click here to join</a>";
}
