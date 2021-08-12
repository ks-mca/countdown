/*/////////////////////////////////////////////////////////////////////////////////////////
/Code writen for MCA Virtual Conference 2021
/Author: Keith Schafer
/
/Uses functions built in the LMSTimer.js for banner filling
/
/Fill banner images and operate the scrolling functions.
/
/////////////////////////////////////////////////////////////////////////////////////////*/

//-----------------------------------------------------------------------
//------------------------   Keynote   -------------------------------
var ses1 ={
    sesName:"Keynote Session",
    bannerImgUrl: "https://mcac.mclms.net/en/content-library/access/184076",
    LMSLink:"https://mcac.mclms.net/en/profile/my-courses/13399/lesson/52943/view",
}

//-----------------------------------------------------------------------------
//-------------------------  Session 1 Room 1  --------------------------------
var ses2 ={
    sesName:"Tools and Techniques for Effective CAA Board Leadership; Jonathan Cohen, Esq., CAPLAW",
    bannerImgUrl: "https://mcac.mclms.net/en/content-library/access/185439",
    LMSLink:"https://mcac.mclms.net/en/profile/my-courses/13399/lesson/52945/view",
}

//-----------------------------------------------------------------------------
//---------------------------  Session 1 Room 2  ------------------------------
var ses3 ={
    sesName:"Communicating and Relating More Effectively Across Poverty Barriers Part 1; Dr. Donna M. Beegle",
    bannerImgUrl: "https://mcac.mclms.net/en/content-library/access/184078",
    LMSLink:"https://mcac.mclms.net/en/profile/my-courses/13399/lesson/52946/view",
}

//-------------------------------------------------------------------------
//---------------------------  Session 1 Room 3   -------------------------
var ses4 ={
    sesName:"Employee Communications 101: Creating a Positive Workplace Culture; Katena Cain, PhD Nonprofit Network",
    bannerImgUrl: "https://mcac.mclms.net/en/content-library/access/184079",
    LMSLink:"https://mcac.mclms.net/en/profile/my-courses/13399/lesson/52947/view",
}

//--------------------------------------------------------------------------
//----------------------------   Session 2 Room 1  -------------------------
var ses5 ={
    sesName:"Maximizing Success: CAA Personnel Policies and Practices Post-Pandemic; Jonathan Cohen, Esq. and Edward Faust, Esq., CAPLAW",
    bannerImgUrl: "https://mcac.mclms.net/en/content-library/access/184080",
    LMSLink:"https://mcac.mclms.net/en/profile/my-courses/13399/lesson/52949/view",
}

//--------------------------------------------------------------------
//-----------------------------  Session 2 Room 2  -------------------
var ses6 ={
    sesName:"Communicating and Relating More Effectively Across Poverty Barriers Part 2; Dr. Donna M. Beegle",
    bannerImgUrl: "https://mcac.mclms.net/en/content-library/access/184081",
    LMSLink:"https://mcac.mclms.net/en/profile/my-courses/13399/lesson/52950/view",
}
//--------------------------------------------------------------------
//-----------------------------  Session 2 Room 3  -------------------
var ses7 ={
    sesName:"ROMA Principles of Data Analysis for Boards; Barbara Mooney and Carey Gibson, Association of Nationally Certified ROMA Trainers",
    bannerImgUrl: "https://mcac.mclms.net/en/content-library/access/184082",
    LMSLink:"https://mcac.mclms.net/en/profile/my-courses/13399/lesson/52951/view",
}

document.getElementById("imgban2").style.opacity = "0";
document.getElementById("imgban3").style.opacity = "0";
document.getElementById("imgban4").style.opacity = "0";
document.getElementById("imgban5").style.opacity = "0";
document.getElementById("imgban6").style.opacity = "0";
document.getElementById("imgban7").style.opacity = "0";
document.getElementById("imgbanbtn-prev").style.display="none";
document.getElementById("imgbanbtn-next").style.display="none";
fillLMSBanners(1,ses1.bannerImgUrl,ses1.LMSLink,ses1.sesName);
fillLMSBanners(2,ses2.bannerImgUrl,ses2.LMSLink,ses2.sesName);
fillLMSBanners(3,ses3.bannerImgUrl,ses3.LMSLink,ses3.sesName);
fillLMSBanners(4,ses4.bannerImgUrl,ses4.LMSLink,ses4.sesName);
fillLMSBanners(5,ses5.bannerImgUrl,ses5.LMSLink,ses5.sesName);
fillLMSBanners(6,ses6.bannerImgUrl,ses6.LMSLink,ses6.sesName);
fillLMSBanners(7,ses7.bannerImgUrl,ses7.LMSLink,ses7.sesName);
setTimeout(() => {
    startLoop();
}, 0.0001);

/*==============================================================================
/                       Populate the banner images
/=============================================================================*/
function fillLMSBanners(imgNum, imgUrl, link, altTag){
    if(imgNum===1){
        document.querySelector('#imgban1').style.backgroundImage='url('+imgUrl+')';
        document.querySelector('#imgban-box1-link').setAttribute("href",link);
        document.querySelector('#imgban-box1-link').setAttribute("alt",altTag);
    }
    else if(imgNum===2){
        document.querySelector('#imgban2').style.backgroundImage='url('+imgUrl+')';
        document.querySelector('#imgban-box2-link').setAttribute("href",link);
        document.querySelector('#imgban-box2-link').setAttribute("alt",altTag);
    }
    else if(imgNum===3){
        document.querySelector('#imgban3').style.backgroundImage='url('+imgUrl+')';
        document.querySelector('#imgban-box3-link').setAttribute("href",link);
        document.querySelector('#imgban-box3-link').setAttribute("alt",altTag);
    }
    else if(imgNum===4){
        document.querySelector('#imgban4').style.backgroundImage='url('+imgUrl+')';
        document.querySelector('#imgban-box4-link').setAttribute("href",link);
        document.querySelector('#imgban-box4-link').setAttribute("alt",altTag);
    }
    else if(imgNum===5){
        document.querySelector('#imgban5').style.backgroundImage='url('+imgUrl+')';
        document.querySelector('#imgban-box5-link').setAttribute("href",link);
        document.querySelector('#imgban-box5-link').setAttribute("alt",altTag);
    }
    else if(imgNum===6){
        document.querySelector('#imgban6').style.backgroundImage='url('+imgUrl+')';
        document.querySelector('#imgban-box6-link').setAttribute("href",link);
        document.querySelector('#imgban-box6-link').setAttribute("alt",altTag);
    }
    else if(imgNum===7){
        document.querySelector('#imgban7').style.backgroundImage='url('+imgUrl+')';
        document.querySelector('#imgban-box7-link').setAttribute("href",link);
        document.querySelector('#imgban-box7-link').setAttribute("alt",altTag);
    }
}


var bannerStatus = 1;
var bannerTimer = 6000;
var startBannerLoop;
var bannerType;

    function startLoop(){
        startBannerLoop = setInterval(() => {
            bannerLoop(); 
        }, bannerTimer);
    }
    document.getElementById("main-banner").onmouseenter = function(){
        stopLoop();
    }
    document.getElementById("main-banner").onmouseleave = function(){
        startLoop();
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
            bannerStatus=4;
        }
        else if (bannerStatus === 4) {
            bannerStatus=5;
        }
        else if (bannerStatus === 5) {
            bannerStatus=6;
        }
        else if (bannerStatus === 6) {
            bannerStatus=7;
        }
        else if (bannerStatus === 7) {
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
            document.getElementById("imgban4").style.opacity = "0";
            document.getElementById("imgban5").style.opacity = "0";
            setTimeout(() => {
                document.getElementById("imgban1").style.right = "0em";     //in front
                document.getElementById("imgban1").style.zIndex = "1000";
                document.getElementById("imgban2").style.right = "-75em";   //on right
                document.getElementById("imgban2").style.zIndex = "1500";
                document.getElementById("imgban3").style.right = "75em";    //on left
                document.getElementById("imgban3").style.zIndex = "500";  
                document.getElementById("imgban4").style.right = "75em";
                document.getElementById("imgban4").style.zIndex = "500";
                document.getElementById("imgban5").style.right = "75em";
                document.getElementById("imgban5").style.zIndex = "500";
                document.getElementById("imgban6").style.right = "75em";
                document.getElementById("imgban6").style.zIndex = "500";  
                document.getElementById("imgban7").style.right = "75em";
                document.getElementById("imgban7").style.zIndex = "500";  
            }, 500);
            setTimeout(() => {
                document.getElementById("imgban2").style.opacity = "1";     
                document.getElementById("imgban4").style.opacity = "1";    
                document.getElementById("imgban5").style.opacity = "1";     
            }, 1100);
            bannerStatus = 2;
        }
        else if (bannerStatus ===2) {
            document.getElementById("imgban3").style.opacity = "0";
            document.getElementById("imgban5").style.opacity = "0";
            document.getElementById("imgban6").style.opacity = "0";
            setTimeout(() => {
                document.getElementById("imgban2").style.right = "0em";     //in front
                document.getElementById("imgban2").style.zIndex = "1000";
                document.getElementById("imgban3").style.right = "-75em";   //on right
                document.getElementById("imgban3").style.zIndex = "1500";
                document.getElementById("imgban4").style.right = "75em";    //on left
                document.getElementById("imgban4").style.zIndex = "500";  
                document.getElementById("imgban5").style.right = "75em";   //on right
                document.getElementById("imgban5").style.zIndex = "500";
                document.getElementById("imgban6").style.right = "75em";   //on right
                document.getElementById("imgban6").style.zIndex = "500";
                document.getElementById("imgban7").style.right = "75em";   //on right
                document.getElementById("imgban7").style.zIndex = "500";
                document.getElementById("imgban1").style.right = "75em";   //on right
                document.getElementById("imgban1").style.zIndex = "500";  
            }, 500);
            setTimeout(() => {
                document.getElementById("imgban3").style.opacity = "1";    
                document.getElementById("imgban5").style.opacity = "1";    
                document.getElementById("imgban6").style.opacity = "1";    
            }, 1100);
            bannerStatus = 3;
        }
        else if (bannerStatus ===3) {
            document.getElementById("imgban4").style.opacity = "0";
            document.getElementById("imgban6").style.opacity = "0";
            document.getElementById("imgban7").style.opacity = "0";
            setTimeout(() => {
                document.getElementById("imgban3").style.right = "0em";     //in front
                document.getElementById("imgban3").style.zIndex = "1000";
                document.getElementById("imgban4").style.right = "-75em";   //on right
                document.getElementById("imgban4").style.zIndex = "1500";
                document.getElementById("imgban5").style.right = "75em";    //on left
                document.getElementById("imgban5").style.zIndex = "500";  
                document.getElementById("imgban6").style.right = "75em";   //on right
                document.getElementById("imgban6").style.zIndex = "500";
                document.getElementById("imgban7").style.right = "75em";   //on right
                document.getElementById("imgban7").style.zIndex = "500";
                document.getElementById("imgban1").style.right = "75em";   //on right
                document.getElementById("imgban1").style.zIndex = "500";
                document.getElementById("imgban2").style.right = "75em";    //on right
                document.getElementById("imgban2").style.zIndex = "500";  
            }, 500);
            setTimeout(() => {
                document.getElementById("imgban4").style.opacity = "1";    
                document.getElementById("imgban6").style.opacity = "1";    
                document.getElementById("imgban7").style.opacity = "1";      
            }, 1100);
            bannerStatus = 4;
        }
        else if (bannerStatus ===4) {
            document.getElementById("imgban5").style.opacity = "0";
            document.getElementById("imgban7").style.opacity = "0";
            document.getElementById("imgban1").style.opacity = "0";
            setTimeout(() => {
                document.getElementById("imgban4").style.right = "0em";     //in front
                document.getElementById("imgban4").style.zIndex = "1000";
                document.getElementById("imgban5").style.right = "-75em";   //on right
                document.getElementById("imgban5").style.zIndex = "1500";
                document.getElementById("imgban6").style.right = "75em";    //on left
                document.getElementById("imgban6").style.zIndex = "500";  
                document.getElementById("imgban7").style.right = "75em";    //on left
                document.getElementById("imgban7").style.zIndex = "500";  
                document.getElementById("imgban1").style.right = "75em";
                document.getElementById("imgban1").style.zIndex = "500";
                document.getElementById("imgban2").style.right = "75em";
                document.getElementById("imgban2").style.zIndex = "500";
                document.getElementById("imgban3").style.right = "75em";
                document.getElementById("imgban3").style.zIndex = "500";  
            }, 500);
            setTimeout(() => {
                document.getElementById("imgban5").style.opacity = "1";    
                document.getElementById("imgban7").style.opacity = "1";    
                document.getElementById("imgban1").style.opacity = "1";    
            }, 1100);
            bannerStatus = 5;
        }
        else if (bannerStatus ===5) {
            document.getElementById("imgban6").style.opacity = "0";
            document.getElementById("imgban1").style.opacity = "0";
            document.getElementById("imgban2").style.opacity = "0";
            setTimeout(() => {
                document.getElementById("imgban5").style.right = "0em";     //in front
                document.getElementById("imgban5").style.zIndex = "1000";
                document.getElementById("imgban6").style.right = "-75em";   //on right
                document.getElementById("imgban6").style.zIndex = "1500";
                document.getElementById("imgban7").style.right = "75em";    //on left
                document.getElementById("imgban7").style.zIndex = "500";  
                document.getElementById("imgban1").style.right = "75em";    //on left
                document.getElementById("imgban1").style.zIndex = "500";  
                document.getElementById("imgban2").style.right = "75em";   //on right
                document.getElementById("imgban2").style.zIndex = "500";
                document.getElementById("imgban3").style.right = "75em";   //on right
                document.getElementById("imgban3").style.zIndex = "500";
                document.getElementById("imgban4").style.right = "75em";   //on right
                document.getElementById("imgban4").style.zIndex = "500";  
            }, 500);
            setTimeout(() => {
                document.getElementById("imgban6").style.opacity = "1";    
                document.getElementById("imgban1").style.opacity = "1";    
                document.getElementById("imgban2").style.opacity = "1";    
            }, 1100);
            bannerStatus = 6;
        }
        else if (bannerStatus ===6) {
            document.getElementById("imgban7").style.opacity = "0";
            document.getElementById("imgban2").style.opacity = "0";
            document.getElementById("imgban3").style.opacity = "0";
            setTimeout(() => {
                document.getElementById("imgban6").style.right = "0em";     //in front
                document.getElementById("imgban6").style.zIndex = "1000";
                document.getElementById("imgban7").style.right = "-75em";   //on right
                document.getElementById("imgban7").style.zIndex = "1500";
                document.getElementById("imgban1").style.right = "75em";    //on left
                document.getElementById("imgban1").style.zIndex = "500";  
                document.getElementById("imgban2").style.right = "75em";    //on left
                document.getElementById("imgban2").style.zIndex = "500";  
                document.getElementById("imgban3").style.right = "75em";   //on right
                document.getElementById("imgban3").style.zIndex = "500";
                document.getElementById("imgban4").style.right = "75em";   //on right
                document.getElementById("imgban4").style.zIndex = "500";
                document.getElementById("imgban5").style.right = "75em";    //on right
                document.getElementById("imgban5").style.zIndex = "500";  
            }, 500);
            setTimeout(() => {
                document.getElementById("imgban7").style.opacity = "1";    
                document.getElementById("imgban2").style.opacity = "1";    
                document.getElementById("imgban3").style.opacity = "1";     
            }, 1100);
            bannerStatus = 7;
        }
        else if (bannerStatus ===7) {
            document.getElementById("imgban1").style.opacity = "0";
            document.getElementById("imgban3").style.opacity = "0";
            document.getElementById("imgban4").style.opacity = "0";
            setTimeout(() => {
                document.getElementById("imgban7").style.right = "0em";     //in front
                document.getElementById("imgban7").style.zIndex = "1000";
                document.getElementById("imgban1").style.right = "-75em";   //on right
                document.getElementById("imgban1").style.zIndex = "1500";
                document.getElementById("imgban2").style.right = "75em";    //on left
                document.getElementById("imgban2").style.zIndex = "500";  
                document.getElementById("imgban3").style.right = "75em";    //on left
                document.getElementById("imgban3").style.zIndex = "500";  
                document.getElementById("imgban4").style.right = "75em";   //on right
                document.getElementById("imgban4").style.zIndex = "500";
                document.getElementById("imgban5").style.right = "75em";   //on right
                document.getElementById("imgban5").style.zIndex = "500";
                document.getElementById("imgban6").style.right = "75em";    //on right
                document.getElementById("imgban6").style.zIndex = "500";  
            }, 500);
            setTimeout(() => {
                document.getElementById("imgban1").style.opacity = "1";    
                document.getElementById("imgban3").style.opacity = "1";    
                document.getElementById("imgban4").style.opacity = "1";     
            }, 1100);
            bannerStatus = 1;
        }
    }
    function bannerLoopReverse(){
        if (bannerStatus ===1) {
            document.getElementById("imgban3").style.opacity = "0";
            setTimeout(() => {
                document.getElementById("imgban1").style.right = "0em";
                document.getElementById("imgban1").style.zIndex = "1000";
                document.getElementById("imgban3").style.right = "75em";
                document.getElementById("imgban3").style.zIndex = "1500";
                document.getElementById("imgban2").style.right = "-75em";
                document.getElementById("imgban2").style.zIndex = "500";  
            }, 500);
            setTimeout(() => {
                document.getElementById("imgban3").style.opacity = "1";    
            }, 1100);
            bannerStatus = 2;
        }
        else if (bannerStatus ===2) {
            document.getElementById("imgban1").style.opacity = "0";
            setTimeout(() => {
                document.getElementById("imgban2").style.right = "0em";
                document.getElementById("imgban2").style.zIndex = "1000";
                document.getElementById("imgban1").style.right = "75em";
                document.getElementById("imgban1").style.zIndex = "1500";
                document.getElementById("imgban3").style.right = "-75em";
                document.getElementById("imgban3").style.zIndex = "500";  
            }, 500);
            setTimeout(() => {
                document.getElementById("imgban1").style.opacity = "1";    
            }, 1100);
            bannerStatus = 3;
        }
        else if (bannerStatus ===3) {
            document.getElementById("imgban2").style.opacity = "0";
            setTimeout(() => {
                document.getElementById("imgban3").style.right = "0em";
                document.getElementById("imgban3").style.zIndex = "1000";
                document.getElementById("imgban2").style.right = "75em";
                document.getElementById("imgban2").style.zIndex = "1500";
                document.getElementById("imgban1").style.right = "-75em";
                document.getElementById("imgban1").style.zIndex = "500";  
            }, 500);
            setTimeout(() => {
                document.getElementById("imgban2").style.opacity = "1";    
            }, 1100);
            bannerStatus = 1;
        }
    }