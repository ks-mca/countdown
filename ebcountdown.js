const earlyBirdDate = new Date("June 18, 2021 17:00:00").getTime(); //Early Bird
//Constant Calcs
const second = 1000
const minute = second *60
const hour = minute *60
const day = hour *24

    setInterval(function(){
        var currentTime = new Date().getTime();
        earlyBirdEndDate(currentTime), 1000
        ebZeroTimer(currentTime), 1000
    })
    function earlyBirdEndDate(now){

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
 
    function ebZeroTimer(current){
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