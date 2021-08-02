/*/////////////////////////////////////////////////////////////////////////////////////////
/Code writen for MCA Virtual Conference 2021
/Author: Keith Schafer
/
/Uses functions built in the countdownConstants.js file for the countdown timers
/Uses functions built in the LMSTimer.js for banner filling
/
/Content is changed based on the timers so that the banners are current and timers are as well
/for every section of the training schedule.
/
/////////////////////////////////////////////////////////////////////////////////////////*/

//---------------------Day 2-------------------------------------------
var dayTimer = {
    session1StartTime: new Date("August 11, 2021 11:00:00").getTime(),
    session1EndTime: new Date("August 11, 2021 11:45:00").getTime(),
    s1StopTimer: 0,
    session2StartTime: new Date("August 11, 2021 12:15:00").getTime(),
    session2EndTime: new Date("August 11, 2021 13:15:00").getTime(),
    s2StopTimer: 0,
    session3StartTime: new Date("August 11, 2021 13:30:00").getTime(),
    session3EndTime: new Date("August 11, 2021 14:30:00").getTime(),
    s3StopTimer: 0,
}

//----------------------------------------------------------------------------
//------------Opening Speaker Timer-------------------------------------------
var KeynoteSpeach = {
    sessionTimeStart: dayTimer.session1StartTime,
    sessionTimeEnd: dayTimer.session1EndTime,
    dTs: 'Keynote',
    dayTitle: dayTitle,
    sessionName: "Welcome to Day 2 of the 2021 MCA Virtual Conference",
    sessionPresenter: "Join us for a Keynote Speach by:<br>Dr. Donna M. Beegle",
    zoomLink: 'https://zoom.us/j/96324184740?pwd=b08wbFVrcG5pTFp0dVRMSkxHOERSdz09', //must include the http:// or https:// in order to work
    stopTimer: 0,
    bannerImgUrl: "https://mcac.mclms.net/en/content-library/access/184076",
    LMSLink:"https://mcac.mclms.net/en/profile/my-courses/12695/lesson/50165/view",
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

//------------------------------------------------------------------------
//------------Trivia Timer-------------------------------------------
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

//------------------------------------------------------------------------
//------------Breakout 1 Timer-------------------------------------------
var B1Timer = {
    sessionTimeStart: dayTimer.session2StartTime,
    sessionTimeEnd: dayTimer.session2EndTime,
    dTs: 'Session1',
    dayTitle: dayTitle,
    sessionName: "We hope you enjoyed our keynote",
    sessionPresenter: "Join us in one of our great breakout sessions<br>Session start in:",
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

//------------------------------------------------------------------------
//------------Breakout 2 Timer-------------------------------------------
var B2Timer = {
    sessionTimeStart: dayTimer.session3StartTime,
    sessionTimeEnd: dayTimer.session3EndTime,
    dTs: 'Session2',
    dayTitle: dayTitle,
    sessionName: "We hope you have enjoyed the sessions so far",
    sessionPresenter: "We have more great content yet to come<br>Sessions start in:",
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

//-----------------------------------------------------------------------
//------------Breakout 1 Session 1-------------------------------------------
var B1S1 ={
    sesTitle:"Tools and Techniques for Effective CAA Board Leadership; Jonathan Cohen, Esq. and Edward Faust, Esq., CAPLAW",
    bannerImgUrl: "https://mcac.mclms.net/en/content-library/access/184077",
    dTs:"Session1",
    LMSLink:"https://mcac.mclms.net/en/profile/my-courses/12695/lesson/50166/view",
}

//-----------------------------------------------------------------------
//------------Breakout 1 Session 2-------------------------------------------
var B1S2 ={
    sesTitle:"Communicating and Relating More Effectively Across Poverty Barriers Part 1; Dr. Donna M. Beegle",
    bannerImgUrl: "https://mcac.mclms.net/en/content-library/access/184078",
    dTs:"Session2",
    LMSLink:"https://mcac.mclms.net/en/profile/my-courses/12695/lesson/50167/view",
}

//-----------------------------------------------------------------------
//------------Breakout 1 Session 3-------------------------------------------
var B1S3 ={
    sesTitle:"Employee Communications 101: Creating a Positive Workplace Culture; Katena Cain, PhD Nonprofit Network",
    bannerImgUrl: "https://mcac.mclms.net/en/content-library/access/184079",
    dTs:"Session3",
    LMSLink:"https://mcac.mclms.net/en/profile/my-courses/12695/lesson/50168/view",
}

//-----------------------------------------------------------------------
//------------Breakout 2 Session 1-------------------------------------------
var B2S1 ={
    sesTitle:"Maximizing Success: CAA Personnel Policies and Practices Post-Pandemic; Jonathan Cohen, Esq. and Edward Faust, Esq., CAPLAW",
    bannerImgUrl: "https://mcac.mclms.net/en/content-library/access/184080",
    dTs:"Session1",
    LMSLink:"https://mcac.mclms.net/en/profile/my-courses/12695/lesson/50169/view",
}

//-----------------------------------------------------------------------
//------------Breakout 2 Session 2-------------------------------------------
var B2S2 ={
    sesTitle:"Communicating and Relating More Effectively Across Poverty Barriers Part 2; Dr. Donna M. Beegle",
    bannerImgUrl: "https://mcac.mclms.net/en/content-library/access/184081",
    dTs:"Session2",
    LMSLink:"https://mcac.mclms.net/en/profile/my-courses/12695/lesson/50170/view",
}

//-----------------------------------------------------------------------
//------------Breakout 2 Session 3-------------------------------------------
var B2S3 ={
    sesTitle:"ROMA Principles of Data Analysis for Boards; Barbara Mooney and Carey Gibson, Association of Nationally Certified ROMA Trainers",
    bannerImgUrl: "https://mcac.mclms.net/en/content-library/access/184082",
    dTs:"Session3",
    LMSLink:"https://mcac.mclms.net/en/profile/my-courses/12695/lesson/50171/view",
}

setInterval(function(){
    var currentTime = new Date().getTime();
    
    var newTime = adjustedTime(currentTime, 0, 0, 0); //for testing
    currentTime = newTime; //for testing
    now = currentTime;

    fillBanners();
    updateLMSCountdowns(currentTime,timerToUse), 1000;
   
})