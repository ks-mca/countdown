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

//---------------------Day 1-------------------------------------------
var dayTimer = {
    session1StartTime: new Date("August 10, 2021 11:00:00 GMT-0400").getTime(),
    session1EndTime: new Date("August 10, 2021 11:45:00 GMT-0400").getTime(),
    s1StopTimer: 0,
    session2StartTime: new Date("August 10, 2021 12:15:00 GMT-0400").getTime(),
    session2EndTime: new Date("August 10, 2021 13:15:00 GMT-0400").getTime(),
    s2StopTimer: 0,
    session3StartTime: new Date("August 10, 2021 13:30:00 GMT-0400").getTime(),
    session3EndTime: new Date("August 10, 2021 14:30:00 GMT-0400").getTime(),
    s3StopTimer: 0
}

//----------------------------------------------------------------------------
//------------Opening Speaker Timer-------------------------------------------
var KeynoteSpeach = {
    sessionTimeStart: dayTimer.session1StartTime,
    sessionTimeEnd: dayTimer.session1EndTime,
    dTs: 'Keynote',
    dayTitle: dayTitle,
    sessionName: "Welcome to the 2021 MCA Virtual Conference",
    sessionPresenter: "Join us for a Keynote Speach by:<br>Dr. Mona Hanna-Attisha",
    zoomLink: 'https://zoom.us/j/96474286801?pwd=SGt1bnVVRkorZ3JFTDZySFZSU25QUT09', //must include the http:// or https:// in order to work
    stopTimer: 0,
    bannerImgUrl: "https://mcac.mclms.net/en/content-library/access/183843",
    LMSLink:"https://mcac.mclms.net/en/profile/my-courses/12693/lesson/50120/view",
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
    zoomLink: KeynoteSpeach.zoomLink, //must include the http:// or https:// in order to work
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
    sessionPresenter: "Join us in one of our great breakout sessions<br>Sessions start in:",
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
    sessionPresenter: "We have more great content yet to come today<br>Sessions start in:",
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
    sesTitle:" Building Immigrant Inclusion to Local Anti-Poverty and Economic Opportunity Work; Fayrouz Saad, Global Michigan and Steve Tobocman, Global Detroit",
    bannerImgUrl: "https://mcac.mclms.net/en/content-library/access/183911",
    dTs:"Session1",
    LMSLink:"https://mcac.mclms.net/en/profile/my-courses/12693/lesson/50121/view",
}

//-----------------------------------------------------------------------
//------------Breakout 1 Session 2-------------------------------------------
var B1S2 ={
    sesTitle:"Living and Leading Boldly in Your 100-Year Life; Barbara Pagano",
    bannerImgUrl: "https://mcac.mclms.net/en/content-library/access/183919",
    dTs:"Session2",
    LMSLink:"https://mcac.mclms.net/en/profile/my-courses/12693/lesson/50122/view",
}

//-----------------------------------------------------------------------
//------------Breakout 1 Session 3-------------------------------------------
var B1S3 ={
    sesTitle:"Cybersecurity Playbook in Action; Dan Miller, Wipfli and Brad Michaud, OLHSA",
    bannerImgUrl: "https://mcac.mclms.net/en/content-library/access/184487",
    dTs:"Session3",
    LMSLink:"https://mcac.mclms.net/en/profile/my-courses/12693/lesson/50124/view",
}

//-----------------------------------------------------------------------
//------------Breakout 2 Session 1-------------------------------------------
var B2S1 ={
    sesTitle:"Moving from Fundraising to Philanthropy; Regina Pinney, ED, Nonprofit Network",
    bannerImgUrl: "https://mcac.mclms.net/en/content-library/access/183973",
    dTs:"Session1",
    LMSLink:"https://mcac.mclms.net/en/profile/my-courses/12693/lesson/50126/view",
}

//-----------------------------------------------------------------------
//------------Breakout 2 Session 2-------------------------------------------
var B2S2 ={
    sesTitle:"Creating Fair Districts; Jim Masters, CCAP, NCRT",
    bannerImgUrl: "https://mcac.mclms.net/en/content-library/access/183974",
    dTs:"Session2",
    LMSLink:"https://mcac.mclms.net/en/profile/my-courses/12693/lesson/50127/view",
}

//-----------------------------------------------------------------------
//------------Breakout 2 Session 3-------------------------------------------
var B2S3 ={
    sesTitle:"Economic Mobility through SNAP E&T Community Partnerships – How Community Colleges and Community Action Agencies can partner up; Steph Smith NCAP, Katie Brown and José Miranda, ACCT",
    bannerImgUrl: "https://mcac.mclms.net/en/content-library/access/183975",
    dTs:"Session3",
    LMSLink:"https://mcac.mclms.net/en/profile/my-courses/12693/lesson/50129/view",
}

setInterval(function(){
    var currentTime = new Date().getTime();
    // console.log(currentTime.toLocaleString('en-US', { timeZone: 'UTC' }));
    
    var newTime = adjustedTime(currentTime, 0, 0, 0); //for testing
    currentTime = newTime; //for testing
    now = currentTime;

    fillBanners();
    updateLMSCountdowns(currentTime,timerToUse), 1000;
   
})