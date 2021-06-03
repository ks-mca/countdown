/*
Code writen for MCA Virtual Conference 2021 Day 2
Author: Keith Schafer

Provide the Session information need to populate the Day2Counters.html page.
*/

HideField('.JSNote'); //hide the enable javascript message
//---------------------Day 2-------------------------------------------
var dayTimer = {
    session1StartTime:new Date("August 11, 2021 11:00:00").getTime(),
    session1EndTime:new Date("August 11, 2021 11:45:00").getTime(),
    s1StopTimer:0,
    session2StartTime:new Date("August 11, 2021 12:15:00").getTime(),
    session2EndTime:new Date("August 11, 2021 13:15:00").getTime(),
    s2StopTimer:0,
    session3StartTime:new Date("August 11, 2021 13:30:00").getTime(),
    session3EndTime:new Date("August 11, 2021 14:30:00").getTime(),
    s3StopTimer:0,
    session4StartTime:new Date("August 11, 2021 14:45:00").getTime(),
    session4EndTime:new Date("August 11, 2021 15:15:00").getTime(),
    s4StopTimer:0
}
const dayTitle = "MCA Virtual Summer Conference Day 2"
//-------------Day 2 Sessions-------------------------------------------
//------------Opening Speaker-------------------------------------------
var Session1Opening = {
    sessionTimeStart: dayTimer.session1StartTime,
    sessionTimeEnd: dayTimer.session1EndTime,
    dTs:'Session1',
    dayTitle: dayTitle,
    sessionName:"Keynote Speach",
    sessionPresenter:"Donna Beegle",
    zoomLink: 'http://www.mcaaa.org', //must include the http:// or https:// in order to work
    stopTimer:0,
    setTags (){
        this.countdownTag=this.dTs+'Countdown';
        this.msgTag=this.dTs+'CountMsg';
        this.dayId= this.dTs+'day';
        this.hourId= this.dTs+'hour';
        this.minuteId= this.dTs+'minute';
        this.secondsId= this.dTs+'second';}
     }     
Session1Opening.setTags();
sessionToFill(Session1Opening);
//-------------------------------------------------------------------------
//---------------- Session 2 Track 1 --------------------------------------
var session2Track1 = {
    sessionTimeStart: dayTimer.session2StartTime,
    sessionTimeEnd: dayTimer.session2EndTime,
    dTs:'Session2Track1',
    dayTitle: dayTitle,
    sessionName:"Leveraging Data Locally",
    sessionPresenter:"Paige Teegarden",
    zoomLink: '#', //must include the http:// or https:// in order to work
    stopTimer:0,
    setTags (){
        this.countdownTag=this.dTs+'Countdown';
        this.msgTag=this.dTs+'CountMsg';
        this.dayId= this.dTs+'day';
        this.hourId= this.dTs+'hour';
        this.minuteId= this.dTs+'minute';
        this.secondsId= this.dTs+'second';}
     }     
session2Track1.setTags();
sessionToFill(session2Track1);
//-------------------------------------------------------------------------
//---------------- Session 2 Track 2 --------------------------------------
var session2Track2 = {
    sessionTimeStart: dayTimer.session2StartTime,
    sessionTimeEnd: dayTimer.session2EndTime,
    dTs:'Session2Track2',
    dayTitle: dayTitle,
    sessionName:"Session Name here",
    sessionPresenter:"Donna Beegle",
    zoomLink: '#', //must include the http:// or https:// in order to work
    stopTimer:0,
    setTags (){
        this.countdownTag=this.dTs+'Countdown';
        this.msgTag=this.dTs+'CountMsg';
        this.dayId= this.dTs+'day';
        this.hourId= this.dTs+'hour';
        this.minuteId= this.dTs+'minute';
        this.secondsId= this.dTs+'second';}
     }     
session2Track2.setTags();
sessionToFill(session2Track2);
//-------------------------------------------------------------------------
//---------------- Session 2 Track 3 --------------------------------------
var session2Track3 = {
    sessionTimeStart: dayTimer.session2StartTime,
    sessionTimeEnd: dayTimer.session2EndTime,
    dTs:'Session2Track3',
    dayTitle: dayTitle,
    sessionName:"Session Name here",
    sessionPresenter:"Presenter Name here",
    zoomLink: '#', //must include the http:// or https:// in order to work
    stopTimer:0,
    setTags (){
        this.countdownTag=this.dTs+'Countdown';
        this.msgTag=this.dTs+'CountMsg';
        this.dayId= this.dTs+'day';
        this.hourId= this.dTs+'hour';
        this.minuteId= this.dTs+'minute';
        this.secondsId= this.dTs+'second';}
     }     
session2Track3.setTags();
sessionToFill(session2Track3);
//-------------------------------------------------------------------------
//---------------- Session 3 Track 1 --------------------------------------
var session3Track1 = {
    sessionTimeStart: dayTimer.session3StartTime,
    sessionTimeEnd: dayTimer.session3EndTime,
    dTs:'Session3Track1',
    dayTitle: dayTitle,
    sessionName:"Session Name here",
    sessionPresenter:"Presenter Name here",
    zoomLink: '#', //must include the http:// or https:// in order to work
    stopTimer:0,
    setTags (){
        this.countdownTag=this.dTs+'Countdown';
        this.msgTag=this.dTs+'CountMsg';
        this.dayId= this.dTs+'day';
        this.hourId= this.dTs+'hour';
        this.minuteId= this.dTs+'minute';
        this.secondsId= this.dTs+'second';}
     }     
session3Track1.setTags();
sessionToFill(session3Track1);
//-------------------------------------------------------------------------
//---------------- Session 3 Track 2 --------------------------------------
var session3Track2 = {
    sessionTimeStart: dayTimer.session3StartTime,
    sessionTimeEnd: dayTimer.session3EndTime,
    dTs:'Session3Track2',
    dayTitle: dayTitle,
    sessionName:"Session Name here",
    sessionPresenter:"Donna Beegle",
    zoomLink: '#', //must include the http:// or https:// in order to work
    stopTimer:0,
    setTags (){
        this.countdownTag=this.dTs+'Countdown';
        this.msgTag=this.dTs+'CountMsg';
        this.dayId= this.dTs+'day';
        this.hourId= this.dTs+'hour';
        this.minuteId= this.dTs+'minute';
        this.secondsId= this.dTs+'second';}
     }     
session3Track2.setTags();
sessionToFill(session3Track2);
//-------------------------------------------------------------------------
//---------------- Session 3 Track 3 --------------------------------------
var session3Track3 = {
    sessionTimeStart: dayTimer.session3StartTime,
    sessionTimeEnd: dayTimer.session3EndTime,
    dTs:'Session3Track3',
    dayTitle: dayTitle,
    sessionName:"Session Name here",
    sessionPresenter:"Presenter Name here",
    zoomLink: '#', //must include the http:// or https:// in order to work
    stopTimer:0,
    setTags (){
        this.countdownTag=this.dTs+'Countdown';
        this.msgTag=this.dTs+'CountMsg';
        this.dayId= this.dTs+'day';
        this.hourId= this.dTs+'hour';
        this.minuteId= this.dTs+'minute';
        this.secondsId= this.dTs+'second';}
     }     
session3Track3.setTags();
sessionToFill(session3Track3);
//-------------------------------------------------------------------------
//---------------- Session 4--------------------------------------
var session4 = {
    sessionTimeStart: dayTimer.session4StartTime,
    sessionTimeEnd: dayTimer.session4EndTime,
    dTs:'Session4',
    dayTitle: dayTitle,
    sessionName:"Conference Awards Reception",
    sessionPresenter:"Presented by MCA",
    zoomLink: '#', //must include the http:// or https:// in order to work
    stopTimer:0,
    setTags (){
        this.countdownTag=this.dTs+'Countdown';
        this.msgTag=this.dTs+'CountMsg';
        this.dayId= this.dTs+'day';
        this.hourId= this.dTs+'hour';
        this.minuteId= this.dTs+'minute';
        this.secondsId= this.dTs+'second';}
     }     
session4.setTags();
sessionToFill(session4);
//-------------------------------------------------------------------------

//Set the intervals for each session to update
setInterval(function(){
    var currentTime = new Date().getTime();
    // var newTime = adjustedTime(currentTime, 0, 0, 0); //for testing
    // currentTime = newTime; //for testing

    //Opening Speaker
    updateCountdowns(currentTime,Session1Opening), 1000;

    //Session 2
    updateCountdowns(currentTime,session2Track1), 1000;
    updateCountdowns(currentTime,session2Track2), 1000;
    updateCountdowns(currentTime,session2Track3), 1000;
    //Session 3
    updateCountdowns(currentTime,session3Track1), 1000;
    updateCountdowns(currentTime,session3Track2), 1000;
    updateCountdowns(currentTime,session3Track3), 1000;
    //Session 4
    updateCountdowns(currentTime,session4), 1000;
})