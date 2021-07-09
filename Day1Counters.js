/*
Code writen for MCA Virtual Conference 2021 Day 1
Author: Keith Schafer

Provide the Session information need to populate the Day1Counters.html page.
*/

HideField('.JSNote'); //hide the enable javascript message
//---------------------Day 1-------------------------------------------
var dayTimer = {
    session1StartTime:new Date("August 10, 2021 11:00:00").getTime(),
    session1EndTime:new Date("August 10, 2021 11:45:00").getTime(),
    s1StopTimer:0,
    session2StartTime:new Date("August 10, 2021 12:15:00").getTime(),
    session2EndTime:new Date("August 10, 2021 13:15:00").getTime(),
    s2StopTimer:0,
    session3StartTime:new Date("August 10, 2021 13:30:00").getTime(),
    session3EndTime:new Date("August 10, 2021 14:30:00").getTime(),
    s3StopTimer:0
}

const dayTitle = "";
const sessionTitle ="This Breakout Session";
const presenter = "";

//-------------Day 1 Sessions-------------------------------------------
//------------Opening Speaker-------------------------------------------
var Session1Opening = {
    sessionTimeStart: dayTimer.session1StartTime,
    sessionTimeEnd: dayTimer.session1EndTime,
    dTs:'Session1',
    dayTitle: dayTitle,
    sessionName:"Keynote Presentation",
    sessionPresenter: presenter,
    zoomLink: 'https://zoom.us/j/96474286801?pwd=SGt1bnVVRkorZ3JFTDZySFZSU25QUT09', //must include the http:// or https:// in order to work
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
    sessionName: sessionTitle,
    sessionPresenter: presenter,
    zoomLink: 'https://zoom.us/j/93225017761?pwd=d1ZwWEhrUXNHQ3VHL2RKMHU5bmtlQT09', //must include the http:// or https:// in order to work
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
    sessionName: sessionTitle,
    sessionPresenter: presenter,
    zoomLink: 'https://zoom.us/j/98925013094?pwd=R1hoYWsyTDNydGJVckQ1NmlXK1VUZz09', //must include the http:// or https:// in order to work
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
    sessionName: sessionTitle,
    sessionPresenter: presenter,
    zoomLink: 'https://zoom.us/j/93544113693?pwd=T2VWVlBNakpiQXE2ejRsbms3MjFLUT09', //must include the http:// or https:// in order to work
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
    sessionName: sessionTitle,
    sessionPresenter: presenter,
    zoomLink: 'https://zoom.us/j/94189015286?pwd=UW5kbU90K3hkZDl2RkFiczZubWtVUT09', //must include the http:// or https:// in order to work
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
    sessionName: sessionTitle,
    sessionPresenter: presenter,
    zoomLink: 'https://zoom.us/j/95596263145?pwd=WjdZL3RKOHZUcVgwOHFSUnpFV2tJUT09', //must include the http:// or https:// in order to work
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
    sessionName: sessionTitle,
    sessionPresenter: presenter,
    zoomLink: 'https://zoom.us/j/98762245455?pwd=VXQ1STJTUVROZ09UVi9rekxiZEpWQT09', //must include the http:// or https:// in order to work
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
//Set the intervals for each session to update
setInterval(function(){
    var currentTime = new Date().getTime();
    // var newTime = adjustedTime(currentTime, 0, 0, 0); //for testing
    // currentTime = newTime; //for testing

    //Opening Speaker
    updateCountdowns(currentTime,Session1Opening), 1000;

    //Session 2
    //updateCountdowns(newTime,session2Track1), 1000;
    updateCountdowns(currentTime,session2Track1), 1000;
    updateCountdowns(currentTime,session2Track2), 1000;
    updateCountdowns(currentTime,session2Track3), 1000;
    //Session 3
    updateCountdowns(currentTime,session3Track1), 1000;
    updateCountdowns(currentTime,session3Track2), 1000;
    updateCountdowns(currentTime,session3Track3), 1000;
})
