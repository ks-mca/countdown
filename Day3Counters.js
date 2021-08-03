/*
Code writen for MCA Virtual Conference 2021 Day 3
Author: Keith Schafer

Provide the Session information need to populate the Day3Counters.html page.
*/

HideField('.JSNote'); //hide the enable javascript message
//---------------------Day 3-------------------------------------------
var dayTimer = {
    session1StartTime:new Date("August 12, 2021 11:00:00").getTime(),
    session1EndTime:new Date("August 12, 2021 11:45:00").getTime(),
    s1StopTimer:0,
    session2StartTime:new Date("August 12, 2021 12:15:00").getTime(),
    session2EndTime:new Date("August 12, 2021 13:15:00").getTime(),
    s2StopTimer:0,
    session3StartTime:new Date("August 12, 2021 13:30:00").getTime(),
    session3EndTime:new Date("August 12, 2021 14:30:00").getTime(),
    s3StopTimer:0,
}

const dayTitle = "";
const sessionTitle ="This Breakout Session";
const presenter = "";

//-------------Day 3 Sessions-------------------------------------------
//------------Opening Speaker-------------------------------------------
var Session1Opening = {
    sessionTimeStart: dayTimer.session1StartTime,
    sessionTimeEnd: dayTimer.session1EndTime,
    dTs:'Session1',
    dayTitle: dayTitle,
    sessionName:"Keynote Presentation",
    sessionPresenter: presenter,
    zoomLink: 'https://zoom.us/j/91709164260?pwd=SHBrRFk4RkQxVXRFYlhUbE8vd3pLdz09', //must include the http:// or https:// in order to work
    stopTimer:0,
    surveyLink:'https://www.surveymonkey.com/r/KYK2GJP',
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
//Leveraging Data Locally: Utilizing data and data visualizations to empower community action work; Paige Teegarden
var session2Track1 = {
    sessionTimeStart: dayTimer.session2StartTime,
    sessionTimeEnd: dayTimer.session2EndTime,
    dTs:'Session2Track1',
    dayTitle: dayTitle,
    sessionName: sessionTitle,
    sessionPresenter: presenter,
    zoomLink: 'https://zoom.us/j/98355724273?pwd=N0hXQS9jTEg5ZzYrOWxEblkvTWwyZz09', //must include the http:// or https:// in order to work
    stopTimer:0,
    surveyLink:'https://www.surveymonkey.com/r/KYQKQF9',
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
//Quality Improvement 101; Ashley Mosier
var session2Track2 = {
    sessionTimeStart: dayTimer.session2StartTime,
    sessionTimeEnd: dayTimer.session2EndTime,
    dTs:'Session2Track2',
    dayTitle: dayTitle,
    sessionName: sessionTitle,
    sessionPresenter: presenter,
    zoomLink: 'https://zoom.us/j/92486248499?pwd=bngzYlQyN0VkbFRaSllYbTYvNVZodz09', //must include the http:// or https:// in order to work
    stopTimer:0,
    surveyLink:'https://www.surveymonkey.com/r/KYN893S',
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
//Change, Crisis Management and Tending to Self; Katena Cain, PhD., Nonprofit Network
var session2Track3 = {
    sessionTimeStart: dayTimer.session2StartTime,
    sessionTimeEnd: dayTimer.session2EndTime,
    dTs:'Session2Track3',
    dayTitle: dayTitle,
    sessionName: sessionTitle,
    sessionPresenter: presenter,
    zoomLink: 'https://zoom.us/j/97107585784?pwd=REhiY0YyYTVZWXdXUkNSOTdjbDk3dz09', //must include the http:// or https:// in order to work
    stopTimer:0,
    surveyLink:'https://www.surveymonkey.com/r/K29JTN9',
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
//How to Raise Hell and Raise Money, Too; Alan Jennings
var session3Track1 = {
    sessionTimeStart: dayTimer.session3StartTime,
    sessionTimeEnd: dayTimer.session3EndTime,
    dTs:'Session3Track1',
    dayTitle: dayTitle,
    sessionName: sessionTitle,
    sessionPresenter: presenter,
    zoomLink: 'https://zoom.us/j/95017125342?pwd=MGFyZ3lKNEVGS0tocThjb1VFUHdDUT09', //must include the http:// or https:// in order to work
    stopTimer:0,
    surveyLink:'https://www.surveymonkey.com/r/K2NBDH9',
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
//Quality Improvement 201; Ashley Mosier
var session3Track2 = {
    sessionTimeStart: dayTimer.session3StartTime,
    sessionTimeEnd: dayTimer.session3EndTime,
    dTs:'Session3Track2',
    dayTitle: dayTitle,
    sessionName: sessionTitle,
    sessionPresenter: presenter,
    zoomLink: 'https://zoom.us/j/92486248499?pwd=bngzYlQyN0VkbFRaSllYbTYvNVZodz09', //must include the http:// or https:// in order to work
    stopTimer:0,
    surveyLink:'https://www.surveymonkey.com/r/KYHZF9K',
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
//Hiring Revolution; Trina Olson, Team Dynamics
var session3Track3 = {
    sessionTimeStart: dayTimer.session3StartTime,
    sessionTimeEnd: dayTimer.session3EndTime,
    dTs:'Session3Track3',
    dayTitle: dayTitle,
    sessionName: sessionTitle,
    sessionPresenter: presenter,
    zoomLink: 'https://zoom.us/j/99799363396?pwd=RVJmQ2RRSk1Bb2ROL2xNQXNyRjU2UT09', //must include the http:// or https:// in order to work
    stopTimer:0,
    surveyLink:'https://www.surveymonkey.com/r/K26NTNL',
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
