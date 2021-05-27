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
    temp.innerHTML+="<div class='container sessionCountdown'><div class='countdownBox'><h2 id="+h2Tag+">"+dayTitle+"<br>"+sessionTitle+"<br>"+sessionSpeaker+"<br>Will Begin In:</h2><div id="+counterTag+" class='countdown'><div id="+dayTag+" class='day'></div><div id="+hourTag+" class='hour'></div><div id="+minuteTag+" class='minute'></div><div id="+secondsTag+"  class='second'></div></div></div>";
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
function HideField(tag){
    document.querySelector(tag).style.display="none";
}