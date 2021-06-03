/*
Code writen for MCA Virtual Conference 2021 LMS System
Author: Keith Schafer

Provide the Session information need to populate the LMSTimer.html page.
*/

HideField('.JSNote'); //hide the enable javascript message
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
var Session1Opening = {
    sessionTimeStart: dayTimer.session1StartTime,
    sessionTimeEnd: dayTimer.session1EndTime,
    dTs: 'Session1',
    dayTitle: dayTitle,
    sessionName: "Keynote Speach",
    sessionPresenter: "Opening Speaker",
    zoomLink: 'http://www.mcaaa.org', //must include the http:// or https:// in order to work
    stopTimer: 0,
    setTags() {
        this.countdownTag = this.dTs + 'Countdown';
        this.msgTag = this.dTs + 'CountMsg';
        this.dayId = this.dTs + 'day';
        this.hourId = this.dTs + 'hour';
        this.minuteId = this.dTs + 'minute';
        this.secondsId = this.dTs + 'second';
    }
}
Session1Opening.setTags();
sessionToFill(Session1Opening);
//-------------------------------------------------------------------------