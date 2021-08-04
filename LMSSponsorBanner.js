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
//------------------------   CLEAResult   -------------------------------
var sponsor1 ={
    spName:"CLEAResult",
    bannerImgUrl: "https://mcac.mclms.net/en/content-library/access/185404",
    LMSLink:"https://mcac.mclms.net/en/profile/my-courses/12693/lesson/50121/view",
}

//-----------------------------------------------------------------------------
//-------------------------  MAHP   -------------------------------------------
var sponsor2 ={
    spName:"Michigan Association of Health Plans (MAHP)",
    bannerImgUrl: "https://mcac.mclms.net/en/content-library/access/185405",
    LMSLink:"https://mcac.mclms.net/en/profile/my-courses/12693/lesson/50122/view",
}

//---------------------------------------------------------------------------
//------------    Mutual of America   ---------------------------------------
var sponsor3 ={
    spName:"Mutual of America",
    bannerImgUrl: "https://mcac.mclms.net/en/content-library/access/185406",
    LMSLink:"https://mcac.mclms.net/en/profile/my-courses/12693/lesson/50124/view",
}

//-----------------------------------------------------------------------
//-------------------   PNC   -------------------------------------------
var sponsor4 ={
    spName:"PNC",
    bannerImgUrl: "https://mcac.mclms.net/en/content-library/access/185407",
    LMSLink:"https://mcac.mclms.net/en/profile/my-courses/12693/lesson/50126/view",
}

//--------------------------------------------------------------------------
//------------   Blue Cross Complete of Michigan   -------------------------
var sponsor5 ={
    spName:"Blue Cross Complete of Michigan",
    bannerImgUrl: "https://mcac.mclms.net/en/content-library/access/185408",
    LMSLink:"https://mcac.mclms.net/en/profile/my-courses/12693/lesson/50127/view",
}

//--------------------------------------------------------------------
//------------      DNV     ------------------------------------------
var sponsor6 ={
    spName:"DNV",
    bannerImgUrl: "https://mcac.mclms.net/en/content-library/access/185409",
    LMSLink:"https://mcac.mclms.net/en/profile/my-courses/12693/lesson/50129/view",
}

document.getElementById("imgban2").style.opacity = "0";
document.getElementById("imgban3").style.opacity = "0";
document.getElementById("imgban4").style.opacity = "0";
document.getElementById("imgban5").style.opacity = "0";
document.getElementById("imgban6").style.opacity = "0";
document.getElementById("imgbanbtn-prev").style.display="none";
document.getElementById("imgbanbtn-next").style.display="none";
fillLMSBanners(1,sponsor1.bannerImgUrl,sponsor1.LMSLink);
fillLMSBanners(2,sponsor2.bannerImgUrl,sponsor2.LMSLink);
fillLMSBanners(3,sponsor3.bannerImgUrl,sponsor3.LMSLink);
fillLMSBanners(4,sponsor4.bannerImgUrl,sponsor4.LMSLink);
fillLMSBanners(5,sponsor5.bannerImgUrl,sponsor5.LMSLink);
fillLMSBanners(6,sponsor6.bannerImgUrl,sponsor6.LMSLink);
setTimeout(() => {
    startLoop();
}, 0.0001);

/*==============================================================================
/                       Populate the banner images
/=============================================================================*/
function fillLMSBanners(imgNum, imgUrl, link){
    if(imgNum===1){
        document.querySelector('#imgban1').style.backgroundImage='url('+imgUrl+')';
        document.querySelector('#imgban-box1-link').setAttribute("href",link);
    }
    else if(imgNum===2){
        document.querySelector('#imgban2').style.backgroundImage='url('+imgUrl+')';
        document.querySelector('#imgban-box2-link').setAttribute("href",link);
    }
    else if(imgNum===3){
        document.querySelector('#imgban3').style.backgroundImage='url('+imgUrl+')';
        document.querySelector('#imgban-box3-link').setAttribute("href",link);
    }
    else if(imgNum===4){
        document.querySelector('#imgban4').style.backgroundImage='url('+imgUrl+')';
        document.querySelector('#imgban-box4-link').setAttribute("href",link);
    }
    else if(imgNum===5){
        document.querySelector('#imgban5').style.backgroundImage='url('+imgUrl+')';
        document.querySelector('#imgban-box5-link').setAttribute("href",link);
    }
    else if(imgNum===6){
        document.querySelector('#imgban6').style.backgroundImage='url('+imgUrl+')';
        document.querySelector('#imgban-box6-link').setAttribute("href",link);
    }
}


var bannerStatus = 1;
var bannerTimer = 4000;
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
            bannerStatus=1;
        }
        bannerLoopReverse();
    }
    function stopLoop(){
        clearInterval(startBannerLoop);
    }
    function bannerLoop(){
        console.log(bannerStatus);
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
            document.getElementById("imgban1").style.opacity = "0";
            setTimeout(() => {
                document.getElementById("imgban3").style.right = "0em";     //in front
                document.getElementById("imgban3").style.zIndex = "1000";
                document.getElementById("imgban4").style.right = "-75em";   //on right
                document.getElementById("imgban4").style.zIndex = "1500";
                document.getElementById("imgban5").style.right = "75em";    //on left
                document.getElementById("imgban5").style.zIndex = "500";  
                document.getElementById("imgban6").style.right = "75em";   //on right
                document.getElementById("imgban6").style.zIndex = "500";
                document.getElementById("imgban1").style.right = "75em";   //on right
                document.getElementById("imgban1").style.zIndex = "500";
                document.getElementById("imgban2").style.right = "75em";    //on right
                document.getElementById("imgban2").style.zIndex = "500";  
            }, 500);
            setTimeout(() => {
                document.getElementById("imgban4").style.opacity = "1";    
                document.getElementById("imgban6").style.opacity = "1";    
                document.getElementById("imgban1").style.opacity = "1";      
            }, 1100);
            bannerStatus = 4;
        }
        else if (bannerStatus ===4) {
            document.getElementById("imgban5").style.opacity = "0";
            document.getElementById("imgban1").style.opacity = "0";
            document.getElementById("imgban2").style.opacity = "0";
            setTimeout(() => {
                document.getElementById("imgban4").style.right = "0em";     //in front
                document.getElementById("imgban4").style.zIndex = "1000";
                document.getElementById("imgban5").style.right = "-75em";   //on right
                document.getElementById("imgban5").style.zIndex = "1500";
                document.getElementById("imgban6").style.right = "75em";    //on left
                document.getElementById("imgban6").style.zIndex = "500";  
                document.getElementById("imgban1").style.right = "75em";
                document.getElementById("imgban1").style.zIndex = "500";
                document.getElementById("imgban2").style.right = "75em";
                document.getElementById("imgban2").style.zIndex = "500";
                document.getElementById("imgban3").style.right = "75em";
                document.getElementById("imgban3").style.zIndex = "500";  
            }, 500);
            setTimeout(() => {
                document.getElementById("imgban5").style.opacity = "1";    
                document.getElementById("imgban1").style.opacity = "1";    
                document.getElementById("imgban2").style.opacity = "1";    
            }, 1100);
            bannerStatus = 5;
        }
        else if (bannerStatus ===5) {
            document.getElementById("imgban6").style.opacity = "0";
            document.getElementById("imgban2").style.opacity = "0";
            document.getElementById("imgban3").style.opacity = "0";
            setTimeout(() => {
                document.getElementById("imgban5").style.right = "0em";     //in front
                document.getElementById("imgban5").style.zIndex = "1000";
                document.getElementById("imgban6").style.right = "-75em";   //on right
                document.getElementById("imgban6").style.zIndex = "1500";
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
                document.getElementById("imgban2").style.opacity = "1";    
                document.getElementById("imgban3").style.opacity = "1";    
            }, 1100);
            bannerStatus = 6;
        }
        else if (bannerStatus ===6) {
            document.getElementById("imgban1").style.opacity = "0";
            document.getElementById("imgban3").style.opacity = "0";
            document.getElementById("imgban4").style.opacity = "0";
            setTimeout(() => {
                document.getElementById("imgban6").style.right = "0em";     //in front
                document.getElementById("imgban6").style.zIndex = "1000";
                document.getElementById("imgban1").style.right = "-75em";   //on right
                document.getElementById("imgban1").style.zIndex = "1500";
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