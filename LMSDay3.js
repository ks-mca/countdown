/*============================================================================================
/Code writen for MCA Virtual Conference 2021
/Author: Keith Schafer
/
/Uses functions built in the countdownConstants.js file for the countdown timers
/Uses functions built in the LMSTimer.js for banner filling
/
/Content is changed based on the timers so that the banners are current and timers are as well
/for every section of the training schedule.
/
=============================================================================================*/

//---------------------Day 3-------------------------------------------------
var dayTimer = {
    session1StartTime: new Date("August 12, 2021 11:00:00 GMT-0400").getTime(),
    session1EndTime: new Date("August 12, 2021 11:45:00 GMT-0400").getTime(),
    s1StopTimer: 0,
    session2StartTime: new Date("August 12, 2021 12:15:00 GMT-0400").getTime(),
    session2EndTime: new Date("August 12, 2021 13:15:00 GMT-0400").getTime(),
    s2StopTimer: 0,
    session3StartTime: new Date("August 12, 2021 13:30:00 GMT-0400").getTime(),
    session3EndTime: new Date("August 12, 2021 14:30:00 GMT-0400").getTime(),
    s3StopTimer: 0,
}

//----------------------------------------------------------------------------
//------------Opening Speaker Timer-------------------------------------------
var KeynoteSpeach = {
    sessionTimeStart: dayTimer.session1StartTime,
    sessionTimeEnd: dayTimer.session1EndTime,
    dTs: 'Keynote',
    dayTitle: dayTitle,
    sessionName: "Welcome to the final day of the 2021 MCA Virtual Conference",
    sessionPresenter: "Join us for a Keynote Speech by:<br>Patrick Cooney",
    zoomLink: 'https://zoom.us/j/91709164260?pwd=SHBrRFk4RkQxVXRFYlhUbE8vd3pLdz09', //must include the http:// or https:// in order to work
    stopTimer: 0,
    bannerImgUrl: "https://mcac.mclms.net/en/content-library/access/184166",
    LMSLink:"https://mcac.mclms.net/en/profile/my-courses/12696/lesson/50173/view",
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

//-----------------------------------------------------------------------
//------------Trivia Timer-----------------------------------------------
var TriviaTimer = {
    sessionTimeStart: dayTimer.session1EndTime,
    sessionTimeEnd: dayTimer.session2StartTime,
    dTs: 'Trivia',
    dayTitle: dayTitle,
    sessionName: "We hope you enjoyed our keynote",
    sessionPresenter: "Join us for some fun trivia while you enjoy your lunch",
    zoomLink: 'https://mcac.mclms.net/en/', //must include the http:// or https:// in order to work
    stopTimer: 0,
    bannerImgUrl: "https://mcac.mclms.net/en/content-library/access/184227",
    LMSLink: KeynoteSpeach.zoomLink,
    setTags() {
        this.countdownTag = this.dTs + 'Countdown';
        this.msgTag = this.dTs + 'CountMsg';
        this.dayId = this.dTs + 'day';
        this.hourId = this.dTs + 'hour';
        this.minuteId = this.dTs + 'minute';
        this.secondsId = this.dTs + 'second';
    }
}
TriviaTimer.setTags();

//------------------------------------------------------------------------
//------------15 min Trivia Timer-------------------------------------------
var Trivia15Timer = {
    sessionTimeStart: dayTimer.session2EndTime,
    sessionTimeEnd: dayTimer.session3StartTime,
    dTs: 'Trivia',
    dayTitle: dayTitle,
    sessionName: "We hope you enjoyed the session",
    sessionPresenter: "Join us for some fun trivia while you enjoy your lunch",
    zoomLink: 'https://mcac.mclms.net/en/', //must include the http:// or https:// in order to work
    stopTimer: 0,
    bannerImgUrl: "https://mcac.mclms.net/en/content-library/access/184227",
    LMSLink: 'https://zoom.us/j/99664485666?pwd=U1ZzSmlzWFJpelM1MUxHMXFpdnljQT09',
    setTags() {
        this.countdownTag = this.dTs + 'Countdown';
        this.msgTag = this.dTs + 'CountMsg';
        this.dayId = this.dTs + 'day';
        this.hourId = this.dTs + 'hour';
        this.minuteId = this.dTs + 'minute';
        this.secondsId = this.dTs + 'second';
    }
}
Trivia15Timer.setTags();

//-----------------------------------------------------------------------
//------------Breakout 1 Timer-------------------------------------------
var B1Timer = {
    sessionTimeStart: dayTimer.session2StartTime,
    sessionTimeEnd: dayTimer.session2EndTime,
    dTs: 'Session1',
    dayTitle: dayTitle,
    sessionName: "We hope you enjoyed our keynote",
    sessionPresenter: "We have more great breakout sessions to come<br>Session start in:",
    zoomLink: 'https://mcac.mclms.net/en/', //must include the http:// or https:// in order to work
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
B1Timer.setTags();

//-----------------------------------------------------------------------
//------------Breakout 2 Timer-------------------------------------------
var B2Timer = {
    sessionTimeStart: dayTimer.session3StartTime,
    sessionTimeEnd: dayTimer.session3EndTime,
    dTs: 'Session2',
    dayTitle: dayTitle,
    sessionName: "We hope you have enjoyed the sessions so far",
    sessionPresenter: "There is still great content yet to come<br>Sessions start in:",
    zoomLink: 'https://mcac.mclms.net/en/', //must include the http:// or https:// in order to work
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
B2Timer.setTags();

//---------------------------------------------------------------------------
//------------Breakout 1 Session 1-------------------------------------------
var B1S1 ={
    sesTitle:"Leveraging Data Locally: Utilizing data and data visualizations to empower community action work; Paige Teegarden, EmpowOR by CSST",
    bannerImgUrl: "https://mcac.mclms.net/en/content-library/access/184167",
    dTs:"Session1",
    LMSLink:"https://mcac.mclms.net/en/profile/my-courses/12696/lesson/50174/view",
}

//---------------------------------------------------------------------------
//------------Breakout 1 Session 2-------------------------------------------
var B1S2 ={
    sesTitle:"Quality Improvement 101; Ashley Mosier, Jefferson Franklin Community Action Corporation",
    bannerImgUrl: "https://mcac.mclms.net/en/content-library/access/184168",
    dTs:"Session2",
    LMSLink:"https://mcac.mclms.net/en/profile/my-courses/12696/lesson/50175/view",
}

//---------------------------------------------------------------------------
//------------Breakout 1 Session 3-------------------------------------------
var B1S3 ={
    sesTitle:"Change, Crisis Management and Tending to Self; Katena Cain, PhD, Nonprofit Network",
    bannerImgUrl: "https://mcac.mclms.net/en/content-library/access/184170",
    dTs:"Session3",
    LMSLink:"https://mcac.mclms.net/en/profile/my-courses/12696/lesson/50176/view",
}

//---------------------------------------------------------------------------
//------------Breakout 2 Session 1-------------------------------------------
var B2S1 ={
    sesTitle:"How to Raise Hell and Raise Money, Too; Alan Jennings",
    bannerImgUrl: "https://mcac.mclms.net/en/content-library/access/184172",
    dTs:"Session1",
    LMSLink:"https://mcac.mclms.net/en/profile/my-courses/12696/lesson/50177/view",
}

//---------------------------------------------------------------------------
//------------Breakout 2 Session 2-------------------------------------------
var B2S2 ={
    sesTitle:"Quality Improvement 201; Ashley Mosier, Jefferson Franklin Community Action Corporation",
    bannerImgUrl: "https://mcac.mclms.net/en/content-library/access/184169",
    dTs:"Session2",
    LMSLink:"https://mcac.mclms.net/en/profile/my-courses/12696/lesson/50178/view",
}

//---------------------------------------------------------------------------
//------------Breakout 2 Session 3-------------------------------------------
var B2S3 ={
    sesTitle:"Hiring Revolution; Trina Olson, Team Dynamics",
    bannerImgUrl: "https://mcac.mclms.net/en/content-library/access/184173",
    dTs:"Session3",
    LMSLink:"https://mcac.mclms.net/en/profile/my-courses/12696/lesson/50179/view",
}

setInterval(function(){
    var currentTime = new Date().getTime();
    
    var newTime = adjustedTime(currentTime, 0, 0, 0); //for testing
    currentTime = newTime; //for testing
    now = currentTime;

    fillBanners();
    updateLMSCountdowns(currentTime,timerToUse), 1000;
   
})