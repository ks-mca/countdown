/*
Code writen for MCA Virtual Conference 2021 LMS System
Author: Keith Schafer

Provide the Session information need to populate the LMSTimer.html page.
*/

HideField('.JSNote'); //hide the enable javascript message

const dayTitle = "";
const sessionTitle ="This Breakout Session";
const presenter = "";

var now;
var timerToUse;

//-------------------------------------------------------------------------
//Fill the banner images
fillStopKey=false;
fillStop1=false;
fillStop2=false;
fillStopTrivia=false;

function fillBanners(){

    if((now>B1Timer.sessionTimeEnd)&&(fillStop2==false)){
        setBannerImage(B2S2.dTs,B2S2.bannerImgUrl,B2S2.LMSLink);
        setBannerImage(B2S1.dTs,B2S1.bannerImgUrl,B2S1.LMSLink);
        setBannerImage(B2S3.dTs,B2S3.bannerImgUrl,B2S3.LMSLink);
        startLoop();
        fillStop2=true;
        fillStop1=false;
        fillStopKey=false;
        fillStopTrivia=false;
        LMSToFill(B2Timer);
        timerToUse = B2Timer;
    }
    else if((now<B1Timer.sessionTimeEnd)&&(now>adjustedTime(TriviaTimer.sessionTimeEnd,0,0,-7))&&(fillStop1==false)){
        setBannerImage(B1S1.dTs,B1S1.bannerImgUrl,B1S1.LMSLink);
        setBannerImage(B1S2.dTs,B1S2.bannerImgUrl,B1S2.LMSLink);
        setBannerImage(B1S3.dTs,B1S3.bannerImgUrl,B1S3.LMSLink);
        startLoop();
        fillStop2=false;
        fillStop1=true;
        fillStopKey=false;
        fillStopTrivia=false;
        LMSToFill(B1Timer);
        timerToUse = B1Timer;
    }
    else if((now<adjustedTime(TriviaTimer.sessionTimeEnd,0,0,-7))&&(now>adjustedTime(KeynoteSpeach.sessionTimeEnd,0,0,2))&&(fillStopTrivia==false)){
        setBannerImage(TriviaTimer.dTs,TriviaTimer.bannerImgUrl,TriviaTimer.LMSLink);
        stopLoop();
        fillStop2=false;
        fillStop1=false;
        fillStopKey=false;
        fillStopTrivia=true;
        LMSToFill(TriviaTimer);
        timerToUse = TriviaTimer;
    }
    else if((now<adjustedTime(KeynoteSpeach.sessionTimeEnd,0,0,2))&&(fillStopKey==false)){
        setBannerImage(KeynoteSpeach.dTs,KeynoteSpeach.bannerImgUrl,KeynoteSpeach.LMSLink);
        stopLoop();
        fillStop2=false;
        fillStop1=false;
        fillStopKey=true;
        fillStopTrivia=false;
        LMSToFill(KeynoteSpeach);
        timerToUse = KeynoteSpeach;
    }
}

function setBannerImage(sesType, imgUrl, link){
    if((sesType=="Keynote")||(sesType=="Trivia")){
        document.querySelector('#imgban1').style.backgroundImage='url('+imgUrl+')';
        document.querySelector('#imgban-box1-link').setAttribute("href",link);
        document.querySelector('#imgbanbtn-next').style.display='none';
        document.querySelector('#imgbanbtn-prev').style.display='none';
        window.onload=function(){
            bannerLoop();
        }
        banType("Keynote");
    }
    else if(sesType=="Session1"){
        document.querySelector('#imgban1').style.backgroundImage='url('+imgUrl+')';
        document.querySelector('#imgban-box1-link').setAttribute("href",link);
        banType("Multi");
    }
    else if(sesType=="Session2"){
        document.querySelector('#imgban2').style.backgroundImage='url('+imgUrl+')';
        document.querySelector('#imgban-box2-link').setAttribute("href",link);
        banType("Multi");
    }
    else if(sesType=="Session3"){
        document.querySelector('#imgban3').style.backgroundImage='url('+imgUrl+')';
        document.querySelector('#imgban-box3-link').setAttribute("href",link);
        document.querySelector('#imgbanbtn-prev').style.display='block';
        document.querySelector('#imgbanbtn-next').style.display='block';
        window.onload=function(){
            bannerLoop();
        }
        banType("Multi");
    }
}

//-------------------------------------------------------------------------
//Set the banner functions
var bannerStatus = 1;
var bannerTimer = 6000;
var startBannerLoop;
var bannerType;

    function startLoop(){
        startBannerLoop = setInterval(() => {
            bannerLoop(); 
        }, bannerTimer);
    }
    function banType(BanType){
        bannerType=BanType;
    }
    document.getElementById("main-banner").onmouseenter = function(){
        stopLoop();
    }
    document.getElementById("main-banner").onmouseleave = function(){
        if(bannerType=="Multi"){
            startLoop();
        }
        else{}
    }
    
    document.getElementById("imgbanbtn-next").onclick = function(){
        bannerLoop();
    }
    document.getElementById("imgbanbtn-prev").onclick = function(){
        if(bannerStatus === 1){
            bannerStatus=2;
        }
        else if (bannerStatus === 2) {
            bannerStatus=3;
        }
        else if (bannerStatus === 3) {
            bannerStatus=1;
        }
        bannerLoopReverse();
    }
    function stopLoop(){
        clearInterval(startBannerLoop);
    }
    function bannerLoop(){
        if (bannerStatus ===1) {
            document.getElementById("imgban2").style.opacity = "0";
            setTimeout(() => {
                document.getElementById("imgban1").style.right = "0em";
                document.getElementById("imgban1").style.zIndex = "1000";
                document.getElementById("imgban2").style.right = "-73em";
                document.getElementById("imgban2").style.zIndex = "1500";
                document.getElementById("imgban3").style.right = "73em";
                document.getElementById("imgban3").style.zIndex = "500";  
            }, 500);
            setTimeout(() => {
                document.getElementById("imgban2").style.opacity = "1";    
            }, 1000);
            bannerStatus = 2;
        }
        else if (bannerStatus ===2) {
            document.getElementById("imgban3").style.opacity = "0";
            setTimeout(() => {
                document.getElementById("imgban2").style.right = "0em";
                document.getElementById("imgban2").style.zIndex = "1000";
                document.getElementById("imgban3").style.right = "-73em";
                document.getElementById("imgban3").style.zIndex = "1500";
                document.getElementById("imgban1").style.right = "73em";
                document.getElementById("imgban1").style.zIndex = "500";  
            }, 500);
            setTimeout(() => {
                document.getElementById("imgban3").style.opacity = "1";    
            }, 1000);
            bannerStatus = 3;
        }
        else if (bannerStatus ===3) {
            document.getElementById("imgban1").style.opacity = "0";
            setTimeout(() => {
                document.getElementById("imgban3").style.right = "0em";
                document.getElementById("imgban3").style.zIndex = "1000";
                document.getElementById("imgban1").style.right = "-73em";
                document.getElementById("imgban1").style.zIndex = "1500";
                document.getElementById("imgban2").style.right = "73em";
                document.getElementById("imgban2").style.zIndex = "500";  
            }, 500);
            setTimeout(() => {
                document.getElementById("imgban1").style.opacity = "1";    
            }, 1000);
            bannerStatus = 1;
        }
    }
    function bannerLoopReverse(){
        if (bannerStatus ===1) {
            document.getElementById("imgban3").style.opacity = "0";
            setTimeout(() => {
                document.getElementById("imgban1").style.right = "0em";
                document.getElementById("imgban1").style.zIndex = "1000";
                document.getElementById("imgban3").style.right = "73em";
                document.getElementById("imgban3").style.zIndex = "1500";
                document.getElementById("imgban2").style.right = "-73em";
                document.getElementById("imgban2").style.zIndex = "500";  
            }, 500);
            setTimeout(() => {
                document.getElementById("imgban3").style.opacity = "1";    
            }, 1000);
            bannerStatus = 2;
        }
        else if (bannerStatus ===2) {
            document.getElementById("imgban1").style.opacity = "0";
            setTimeout(() => {
                document.getElementById("imgban2").style.right = "0em";
                document.getElementById("imgban2").style.zIndex = "1000";
                document.getElementById("imgban1").style.right = "73em";
                document.getElementById("imgban1").style.zIndex = "1500";
                document.getElementById("imgban3").style.right = "-73em";
                document.getElementById("imgban3").style.zIndex = "500";  
            }, 500);
            setTimeout(() => {
                document.getElementById("imgban1").style.opacity = "1";    
            }, 1000);
            bannerStatus = 3;
        }
        else if (bannerStatus ===3) {
            document.getElementById("imgban2").style.opacity = "0";
            setTimeout(() => {
                document.getElementById("imgban3").style.right = "0em";
                document.getElementById("imgban3").style.zIndex = "1000";
                document.getElementById("imgban2").style.right = "73em";
                document.getElementById("imgban2").style.zIndex = "1500";
                document.getElementById("imgban1").style.right = "-73em";
                document.getElementById("imgban1").style.zIndex = "500";  
            }, 500);
            setTimeout(() => {
                document.getElementById("imgban2").style.opacity = "1";    
            }, 1000);
            bannerStatus = 1;
        }
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//-------------------------------------------------------LMS Counter Functions-----------------------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//assign session values to pass to HTML template
function LMSToFill (sessionToSetup){
    LMS_FillPage(sessionToSetup.msgTag, sessionToSetup.dayTitle, sessionToSetup.sessionName, sessionToSetup.sessionPresenter, sessionToSetup.countdownTag, sessionToSetup.dayId, sessionToSetup.hourId, sessionToSetup.minuteId, sessionToSetup.secondsId, sessionToSetup.bannerImgUrl, sessionToSetup.dTs);
}

//set Html Templates for countdown clocks
function LMS_FillPage (h2Tag, dayTitle, sessionTitle, sessionSpeaker, counterTag, dayTag, hourTag, minuteTag, secondsTag, imgUrl, dTs){
    var temp = document.querySelector('#template');
    temp.innerHTML=
        "<div class='container sessionCountdown'>"+
            "<div class='countdownBox'>"+
                "<div id="+h2Tag+">"+
                    "<h2 class='dayTitle'>"+dayTitle+"</h2>"+
                    "<h2 class='sessionTitle'>"+sessionTitle+"</h2>"+
                    "<h2 class='sessionSpeaker'>"+sessionSpeaker+"</h2>"+
                "</div>"+
                "<div id="+counterTag+" class='countdown'>"+
                "<div id="+dayTag+" class='day'></div>"+
                "<div id="+hourTag+" class='hour'></div>"+
                "<div id="+minuteTag+" class='minute'></div>"+
                "<div id="+secondsTag+"  class='second'></div>"+
            "</div>"+
        "</div>";
}
function updateLMSCountdowns(time, session){
    if((adjustedTime(time, 0, 0, 5)>=session.sessionTimeStart)&&(adjustedTime(time, 0, 0, -5)<session.sessionTimeEnd)){//Enable the link 5 minutes before start time and keep up for 5 minutes after the end time
        if(session.stopTimer==0){//Display the link with a countdown to start
            if(session.dTs=="Keynote"){
                LMSInProgress(session.countdownTag, session.msgTag, session.zoomLink, PresentationButton, "presentation", "soon");
            }
            else if(session.dTs=="Trivia"){
                LMSInProgress(session.countdownTag, session.msgTag, session.zoomLink, JoinButton, "Trivia Game", "soon");
            }
            session.stopTimer=1;
        }
        else if((session.stopTimer==1)&&(time>session.sessionTimeStart)){//Display the link with a countdown to end
            if(session.dTs=="Keynote"){
                LMSInProgress(session.countdownTag, session.msgTag, session.zoomLink, PresentationButton, "presentation", "inProgress");
            }
            else if(session.dTs=="Trivia"){
                LMSInProgress(session.countdownTag, session.msgTag, session.zoomLink, JoinButton, "Trivia Game", "inProgress");
            }
            else {
                LMSInProgress(session.countdownTag, session.msgTag, session.zoomLink, JoinButton, "trainings", "inProgress");
            }
            session.stopTimer=2;
        }
        else if ((session.stopTimer==2)&&(time>session.sessionTimeEnd)){//Display the link but hide the countdown
            if(session.dTs=="Keynote"){
                LMSInProgress(session.countdownTag, session.msgTag, session.zoomLink, PresentationButton, "presentation", "hide");
            } else if(session.dTs=="Trivia"){
                LMSInProgress(session.countdownTag, session.msgTag, session.zoomLink, JoinButton, "Trivia Game", "hide");
            }
            else {
                LMSInProgress(session.countdownTag, session.msgTag, session.zoomLink, JoinButton, "trainings", "hide");
            }
            session.stopTimer=3;
        }
    }
    else if((adjustedTime(time, 0, 0, -5)>session.sessionTimeEnd)&&(session.stopTimer<4)){//Display the ended message only
        LMSEnded(session.countdownTag, session.msgTag);
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
function LMSEnded(timerTag, msgDisplayTag){//Session ended message
    HideField("#"+timerTag);
    document.querySelector("#"+msgDisplayTag).innerHTML = 
        "<h2>The live sessions have ended<br><br>The replays should be available soon<br>We hope you have enjoyed the content<br><br>Remember to fill out your evaluations</h2>";
}

function LMSInProgress(timerTag, msgDisplayTag, sessionLink, buttonToUse, sessionType, displayCounter){//Session in progress messages
    if(sessionType=="presentation"){
    document.querySelector("#"+msgDisplayTag).innerHTML = 
        "<h3 class='introMsg'>Live "+sessionType+" in Progress</h3>"+
        "<a class='sessionLink' href='" +sessionLink+ "' target='_blank'>"+
            "<img style='display: block; margin-left: auto; margin-right: auto;' src='"+buttonToUse+"' alt='Join' width='420' height='117'/>"+
        "</a>";
    }
    else{
        document.querySelector("#"+msgDisplayTag).innerHTML = 
        "<h3 class='introMsg'>Live "+sessionType+" in Progress</h3>";
    }
    
    if(displayCounter=="hide"){//Session is almost over. Displayed for x mins after session end time
        HideField("#"+timerTag);
        HideField("#"+msgDisplayTag+" .introMsg");
        document.querySelector("#"+msgDisplayTag).innerHTML += "<h4>The "+sessionType+" will end soon</h4>";
    }
    else if(displayCounter=="soon"){//Session is about to begin. Displayed for x minutes before session start time
        HideField("#"+msgDisplayTag+" .introMsg");
        document.querySelector("#"+msgDisplayTag).innerHTML += "<h4>The "+sessionType+" will begin in:</h4>";
    }
    else{//Session in progress
        document.querySelector("#"+msgDisplayTag).innerHTML += "<h4>The "+sessionType+" will conclude in:</h4>";
    }
}