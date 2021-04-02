const earlyBirdDate = new Date("May 28, 2021 17:00:00").getTime(); //Early Bird
//Day 1 Session 1
const d1s1Start = new Date("August 10, 2021 11:00:00").getTime();
const d1s1End = new Date("August 10, 2021 11:45:00").getTime();
//Day 1 Session 2
const d1s2Start = new Date("August 10, 2021 12:15:00").getTime();
const d1s2End = new Date("August 10, 2021 13:15:00").getTime();
//Day 1 Session 3
const d1s3Start = new Date("August 10, 2021 13:30:00").getTime();
const d1s3End = new Date("August 10, 2021 14:30:00").getTime(); 
//Day 2 Session 1
const d2s1Start = new Date("August 11, 2021 11:00:00").getTime();
const d2s1End = new Date("August 11, 2021 11:45:00").getTime();
//Day 2 Session 2
const d2s2Start = new Date("August 11, 2021 12:15:00").getTime();
const d2s2End = new Date("August 11, 2021 13:15:00").getTime();
//Day 2 Session 3
const d2s3Start = new Date("August 11, 2021 13:30:00").getTime();
const d2s3End = new Date("August 11, 2021 14:30:00").getTime(); 
//Day 3 Session 1
const d3s1Start = new Date("August 12, 2021 11:00:00").getTime();
const d3s1End = new Date("August 12, 2021 11:45:00").getTime();
//Day 3 Session 2
const d3s2Start = new Date("August 12, 2021 12:15:00").getTime();
const d3s2End = new Date("August 12, 2021 13:15:00").getTime();
//Day 3 Session 3
const d3s3Start = new Date("August 12, 2021 13:30:00").getTime();
const d3s3End = new Date("August 12, 2021 14:30:00").getTime(); 
//Constant Calcs
const second = 1000
const minute = second *60
const hour = minute *60
const day = hour *24

    function earlyBirdEndDate(){
        const now = new Date().getTime(); //Current Time
        ebGap = earlyBirdDate -now; //Early Bird

        //Early Bird Calcs
        const d = Math.floor(ebGap /(day));
        const h = Math.floor((ebGap % (day)) / (hour));
        const m = Math.floor((ebGap % (hour)) / (minute));
        const s = Math.floor((ebGap % (minute)) / (second));
        
        //Early Bird
        document.querySelector('#day').innerText =d;
        document.querySelector('#hour').innerText =h;
        document.querySelector('#minute').innerText =m;
        document.querySelector('#second').innerText =s;
        document.querySelector('#smallday').innerText =d;
        document.querySelector('#smallhour').innerText =h;
        document.querySelector('#smallminute').innerText =m;
        document.querySelector('#smallsecond').innerText =s;
    }
    function sessionEndDate(){
        const now = new Date().getTime(); //Current Time

        d1s1Gap=d1s1Start-now; //Day 1 Session 1
        d1s2Gap=d1s2Start-now; //Day 1 Session 2
        d1s3Gap=d1s3Start-now; //Day 1 Session 3
        d2s1Gap=d2s1Start-now; //Day 2 Session 1
        d2s2Gap=d2s2Start-now; //Day 2 Session 2
        d2s3Gap=d2s3Start-now; //Day 2 Session 3
        d3s1Gap=d3s1Start-now; //Day 3 Session 1
        d3s2Gap=d3s2Start-now; //Day 3 Session 2
        d3s3Gap=d3s3Start-now; //Day 3 Session 3

        //Day 1 Calcs
        const d1s1d = Math.floor(d1s1Gap /(day));
        const d1s1h = Math.floor((d1s1Gap % (day)) / (hour));
        const d1s1m = Math.floor((d1s1Gap % (hour)) / (minute));
        const d1s1s = Math.floor((d1s1Gap % (minute)) / (second));
        const d1s2d = Math.floor(d1s2Gap /(day));
        const d1s2h = Math.floor((d1s2Gap % (day)) / (hour));
        const d1s2m = Math.floor((d1s2Gap % (hour)) / (minute));
        const d1s2s = Math.floor((d1s2Gap % (minute)) / (second));
        const d1s3d = Math.floor(d1s3Gap /(day));
        const d1s3h = Math.floor((d1s3Gap % (day)) / (hour));
        const d1s3m = Math.floor((d1s3Gap % (hour)) / (minute));
        const d1s3s = Math.floor((d1s3Gap % (minute)) / (second));
        //Day 2 Calcs
        const d2s1d = Math.floor(d2s1Gap /(day));
        const d2s1h = Math.floor((d2s1Gap % (day)) / (hour));
        const d2s1m = Math.floor((d2s1Gap % (hour)) / (minute));
        const d2s1s = Math.floor((d2s1Gap % (minute)) / (second));
        const d2s2d = Math.floor(d2s2Gap /(day));
        const d2s2h = Math.floor((d2s2Gap % (day)) / (hour));
        const d2s2m = Math.floor((d2s2Gap % (hour)) / (minute));
        const d2s2s = Math.floor((d2s2Gap % (minute)) / (second));
        const d2s3d = Math.floor(d2s3Gap /(day));
        const d2s3h = Math.floor((d2s3Gap % (day)) / (hour));
        const d2s3m = Math.floor((d2s3Gap % (hour)) / (minute));
        const d2s3s = Math.floor((d2s3Gap % (minute)) / (second));
        //Day 3 Calcs
        const d3s1d = Math.floor(d3s1Gap /(day));
        const d3s1h = Math.floor((d3s1Gap % (day)) / (hour));
        const d3s1m = Math.floor((d3s1Gap % (hour)) / (minute));
        const d3s1s = Math.floor((d3s1Gap % (minute)) / (second));
        const d3s2d = Math.floor(d3s2Gap /(day));
        const d3s2h = Math.floor((d3s2Gap % (day)) / (hour));
        const d3s2m = Math.floor((d3s2Gap % (hour)) / (minute));
        const d3s2s = Math.floor((d3s2Gap % (minute)) / (second));
        const d3s3d = Math.floor(d3s3Gap /(day));
        const d3s3h = Math.floor((d3s3Gap % (day)) / (hour));
        const d3s3m = Math.floor((d3s3Gap % (hour)) / (minute));
        const d3s3s = Math.floor((d3s3Gap % (minute)) / (second));

        //Day 1
        document.querySelector('#d1s1day').innerText =d1s1d;
        document.querySelector('#d1s1hour').innerText =d1s1h;
        document.querySelector('#d1s1minute').innerText =d1s1m;
        document.querySelector('#d1s1second').innerText =d1s1s;
        document.querySelector('#d1s2day').innerText =d1s2d;
        document.querySelector('#d1s2hour').innerText =d1s2h;
        document.querySelector('#d1s2minute').innerText =d1s2m;
        document.querySelector('#d1s2second').innerText =d1s2s;
        document.querySelector('#d1s3day').innerText =d1s3d;
        document.querySelector('#d1s3hour').innerText =d1s3h;
        document.querySelector('#d1s3minute').innerText =d1s3m;
        document.querySelector('#d1s3second').innerText =d1s3s;
        //Day 2
        document.querySelector('#d2s1day').innerText =d2s1d;
        document.querySelector('#d2s1hour').innerText =d2s1h;
        document.querySelector('#d2s1minute').innerText =d2s1m;
        document.querySelector('#d2s1second').innerText =d2s1s;
        document.querySelector('#d2s2day').innerText =d2s2d;
        document.querySelector('#d2s2hour').innerText =d2s2h;
        document.querySelector('#d2s2minute').innerText =d2s2m;
        document.querySelector('#d2s2second').innerText =d2s2s;
        document.querySelector('#d2s3day').innerText =d2s3d;
        document.querySelector('#d2s3hour').innerText =d2s3h;
        document.querySelector('#d2s3minute').innerText =d2s3m;
        document.querySelector('#d2s3second').innerText =d2s3s;
        //Day 3
        document.querySelector('#d3s1day').innerText =d3s1d;
        document.querySelector('#d3s1hour').innerText =d3s1h;
        document.querySelector('#d3s1minute').innerText =d3s1m;
        document.querySelector('#d3s1second').innerText =d3s1s;
        document.querySelector('#d3s2day').innerText =d3s2d;
        document.querySelector('#d3s2hour').innerText =d3s2h;
        document.querySelector('#d3s2minute').innerText =d3s2m;
        document.querySelector('#d3s2second').innerText =d3s2s;
        document.querySelector('#d3s3day').innerText =d3s3d;
        document.querySelector('#d3s3hour').innerText =d3s3h;
        document.querySelector('#d3s3minute').innerText =d3s3m;
        document.querySelector('#d3s3second').innerText =d3s3s;
    } 
    setInterval(function(){
            var currentTime = new Date().getTime();
            earlyBirdEndDate(), 1000
            ebZeroTimer(), 1000
            sessionEndDate(), 1000
            if(currentTime>earlyBirdDate){
                sessionZeroTimer(), 1000
            }
        })

    function ebZeroTimer(){
        var current = new Date().getTime(); //get the current date for expiration

        //Early Bird
        if(current>earlyBirdDate){
        document.querySelector('#day').innerText ="0";
        document.querySelector('#hour').innerText ="0";
        document.querySelector('#minute').innerText ="0";
        document.querySelector('#second').innerText ="0";
        document.querySelector('#smallday').innerText ="0";
        document.querySelector('#smallhour').innerText ="0";
        document.querySelector('#smallminute').innerText ="0";
        document.querySelector('#smallsecond').innerText ="0";
        document.querySelector('#countMsg').innerText = "Early Bird Pricing has Ended";
        document.querySelector('#smallcountMsg').innerText = "Early Bird Pricing has Ended";
        }
    }
    function sessionZeroTimer(){
        var current = new Date().getTime(); //get the current date for expiration
        var current = new Date(2021,07,10,13,1).getTime(); //for testing
        //Day 1
        if(current>d1s1End){
            document.querySelector('#d1s1Countdown').style.display="none";
            document.querySelector('#d1s1CountMsg').innerHTML = "Live session has ended<br>The replay should be available soon";
        } else if(current>d1s1Start){
            document.querySelector('#d1s1Countdown').style.display="none";
            document.querySelector('#d1s1CountMsg').innerHTML = "<a class='sessionLink' href='#' target='_blank'>Live Session in Progress<br>Click here to join</a>";
        }
        if(current>d1s2End){
            document.querySelector('#d1s2Countdown').style.display="none";
            document.querySelector('#d1s2CountMsg').innerText = "Live session has ended";
        } else if(current>d1s2Start){
            document.querySelector('#d1s2Countdown').style.display="none";
            document.querySelector('#d1s2CountMsg').innerText = "Live Session in Progress";
        }
        if(current>d1s3End){
            document.querySelector('#d1s3Countdown').style.display="none";
            document.querySelector('#d1s3CountMsg').innerText = "Live session has ended";
        } else if(current>d1s3Start){
            document.querySelector('#d1s3Countdown').style.display="none";
            document.querySelector('#d1s3CountMsg').innerText = "Live Session in Progress";
        }
        //Day 2
        if(current>d2s1End){
            document.querySelector('#d2s1Countdown').style.display="none";
            document.querySelector('#d2s1CountMsg').innerText = "Live session has ended";
        } else if(current>d2s1Start){
            document.querySelector('#d2s1Countdown').style.display="none";
            document.querySelector('#d2s1CountMsg').innerText = "Live Session in Progress";
        }
        if(current>d2s2End){
            document.querySelector('#d2s2Countdown').style.display="none";
            document.querySelector('#d2s2CountMsg').innerText = "Live session has ended";
        } else if(current>d2s2Start){
            document.querySelector('#d2s2Countdown').style.display="none";
            document.querySelector('#d2s2CountMsg').innerText = "Live Session in Progress";
        }
        if(current>d2s3End){
            document.querySelector('#d2s3Countdown').style.display="none";
            document.querySelector('#d2s3CountMsg').innerText = "Live session has ended";
        } else if(current>d2s3Start){
            document.querySelector('#d2s3Countdown').style.display="none";
            document.querySelector('#d2s3CountMsg').innerText = "Live Session in Progress";
        }
        //Day 3
        if(current>d3s1End){
            document.querySelector('#d3s1Countdown').style.display="none";
            document.querySelector('#d3s1CountMsg').innerText = "Live session has ended";
        } else if(current>d3s1Start){
            document.querySelector('#d3s1Countdown').style.display="none";
            document.querySelector('#d3s1CountMsg').innerText = "Live Session in Progress";
        }
        if(current>d3s2End){
            document.querySelector('#d3s2Countdown').style.display="none";
            document.querySelector('#d3s2CountMsg').innerText = "Live session has ended";
        } else if(current>d3s2Start){
            document.querySelector('#d3s2Countdown').style.display="none";
            document.querySelector('#d3s2CountMsg').innerText = "Live Session in Progress";
        }
        if(current>d3s3End){
            document.querySelector('#d3s3Countdown').style.display="none";
            document.querySelector('#d3s3CountMsg').innerText = "Live session has ended";
        } else if(current>d3s3Start){
            document.querySelector('#d3s3Countdown').style.display="none";
            document.querySelector('#d3s3CountMsg').innerText = "Live Session in Progress";
        }
    }