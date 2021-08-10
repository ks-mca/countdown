/*
Code writen for MCA Virtual Conference 2021
Author: Keith Schafer

Functions built to handle countdown timers for multple sessions.
Countdown timers convert to links and buttons based on the individual day javascript files.
*/

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
    temp.innerHTML+="<div class='container sessionCountdown'><div class='countdownBox'><div id="+h2Tag+"><h2 class='dayTitle'>"+dayTitle+"</h2><h2 class='sessionTitle'>"+sessionTitle+"</h2><h2 class='sessionSpeaker'>"+sessionSpeaker+"</h2><h2 class='beginText'>Will Begin In:</h2></div><div id="+counterTag+" class='countdown'><div id="+dayTag+" class='day'></div><div id="+hourTag+" class='hour'></div><div id="+minuteTag+" class='minute'></div><div id="+secondsTag+"  class='second'></div></div></div>";
    temp.style.zIndex=2000;
}

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
//Update HTML with current countdown values and text
const JoinButton = 'https://ks-mca.github.io/countdown/JoinButton(green).png';
const ConversationButton = 'https://ks-mca.github.io/countdown/JoinConversationButton(green).png';
const PresentationButton = 'https://ks-mca.github.io/countdown/JoinPresentationButton(green).png';
const EventButton = 'https://ks-mca.github.io/countdown/JoinEventButton(green).png';
const EvalButton = 'https://ks-mca.github.io/countdown/EvalButton.png';

function updateCountdowns(time, session){
    if((adjustedTime(time, 0, 0, 5)>=session.sessionTimeStart)&&(adjustedTime(time, 0, 0, -5)<session.sessionTimeEnd)){//Enable the link 5 minutes before start time and keep up for 5 minutes after the end time
        if(session.stopTimer==0){//Display the link with a countdown to start
            if(session.dTs=="Session1"){
                sessionInProgress(session.countdownTag, session.msgTag, session.zoomLink, PresentationButton, "presentation", "soon");
            }
            else if(session.dTs=="Session4"){
                sessionInProgress(session.countdownTag, session.msgTag, session.zoomLink, EventButton, "Reception", "soon");
            }
            else {
                sessionInProgress(session.countdownTag, session.msgTag, session.zoomLink, JoinButton, "training", "soon");
            }
            session.stopTimer=1;
        }
        else if((session.stopTimer==1)&&(time>session.sessionTimeStart)){//Display the link with a countdown to end
            if(session.dTs=="Session1"){
                sessionInProgress(session.countdownTag, session.msgTag, session.zoomLink, PresentationButton, "presentation", "inProgress");
            }
            else if(session.dTs=="Session4"){
                sessionInProgress(session.countdownTag, session.msgTag, session.zoomLink, EventButton, "Reception", "inProgress");
            }
            else {
                sessionInProgress(session.countdownTag, session.msgTag, session.zoomLink, JoinButton, "training", "inProgress");
            }
            session.stopTimer=2;
        }
        else if ((session.stopTimer==2)&&(time>session.sessionTimeEnd)){//Display the link but hide the countdown
            if(session.dTs=="Session1"){
                sessionInProgress(session.countdownTag, session.msgTag, session.zoomLink, PresentationButton, "presentation", "hide");
            }
            else if(session.dTs=="Session4"){
                sessionInProgress(session.countdownTag, session.msgTag, session.zoomLink, EventButton, "Reception", "hide");
            }
            else {
                sessionInProgress(session.countdownTag, session.msgTag, session.zoomLink, JoinButton, "training", "hide");
            }
            session.stopTimer=3;
        }
    }
    else if((adjustedTime(time, 0, 0, 0)>session.sessionTimeEnd)&&(session.stopTimer<4)){//Display the ended message only
        sessionEnded(session.countdownTag, session.msgTag, session.surveyLink);
        session.stopTimer=4;
    }
    if(session.stopTimer<2){//Countdown to the start time
    document.querySelector("#"+session.dayId).innerText = endDay(session.sessionTimeStart, time);
    document.querySelector("#"+session.hourId).innerText = endHour(session.sessionTimeStart, time);
    document.querySelector("#"+session.minuteId).innerText = endMinute(session.sessionTimeStart, time);
    document.querySelector("#"+session.secondsId).innerText = endSecond(session.sessionTimeStart, time);
    }
    else if(session.stopTimer==2){//Countdown to the end time
    document.querySelector("#"+session.dayId).innerText = endDay(session.sessionTimeEnd, time);
    document.querySelector("#"+session.hourId).innerText = endHour(session.sessionTimeEnd, time);
    document.querySelector("#"+session.minuteId).innerText = endMinute(session.sessionTimeEnd, time);
    document.querySelector("#"+session.secondsId).innerText = endSecond(session.sessionTimeEnd, time);
    }
}
//------------------------------------------------------------------------------------------------------

function sessionEnded(timerTag, msgDisplayTag, evalLink){//Session ended message
    HideField("#"+timerTag);
    document.querySelector("#"+msgDisplayTag).innerHTML = "<h2>Live session has ended<br>The replay should be available soon</h2>"+
    "<a class='sessionLink' href='" +evalLink+ "' target='_blank'><img style='display: block; margin-left: auto; margin-right: auto;' src='"+EvalButton+"' alt='Evaluate the Session' width='420' height='117'/></a>";
}

function sessionInProgress(timerTag, msgDisplayTag, sessionLink, buttonToUse, sessionType, displayCounter){//Session in progress messages
    document.querySelector("#"+msgDisplayTag).innerHTML = "<h3 class='introMsg'>Live "+sessionType+" in Progress</h3><a class='sessionLink' href='" +sessionLink+ "' target='_blank'><img style='display: block; margin-left: auto; margin-right: auto;' src='"+buttonToUse+"' alt='Join' width='420' height='117'/></a>";
    
    if(displayCounter=="hide"){//Session is almost over. Displayed for x mins after session end time
        HideField("#"+timerTag);
        HideField("#"+msgDisplayTag+" .introMsg");
        document.querySelector("#"+msgDisplayTag).innerHTML += "<h4>This "+sessionType+" will end soon</h4>";
    }
    else if(displayCounter=="soon"){//Session is about to begin. Displayed for x minutes before session start time
        HideField("#"+msgDisplayTag+" .introMsg");
        document.querySelector("#"+msgDisplayTag).innerHTML += "<h4>This "+sessionType+" will begin in:</h4>";
    }
    else{//Session in progress
        document.querySelector("#"+msgDisplayTag).innerHTML += "<h4>This "+sessionType+" will conclude in:</h4>";
    }
}

function HideField(tag){//Pass a class or id tag to hide
    document.querySelector(tag).style.display="none";
}

function adjustedTime(now, dayAdjust, hourAdjust, minuteAdjust){//Adjust the current time by supplied days, hours, minutes
    return now + ((dayAdjust *1000*60*60*24)+(hourAdjust*1000*60*60)+(minuteAdjust*1000*60));   
}