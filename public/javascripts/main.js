//Dark mode Features
let darkmode = window.matchMedia('(prefers-color-scheme: dark)').matches;
var toggler = document.querySelector('#toggler');
var logo = document.querySelector("#logo");
var icons = document.querySelectorAll(".icon");

//Users' preferences
let theme = "light";
var currentTheme = localStorage.getItem("theme");

//Date
if(document.documentElement.lang=="ko")
{
    var tday=["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
    var tmonth=["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
}
else
{
    var tday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var tmonth=["January","February","March","April","May","June","July","August","September","October","November","December"];
}

function light_mode() {
    toggler.classList.remove("far");
    toggler.classList.add("fas");
    document.body.classList.remove("dark-mode");
    logo.classList.remove("dark-mode");
    icons.forEach(function(userItem) {
        userItem.classList.remove("dark-mode");
    })
    localStorage.setItem("theme", "light");
}

function dark_mode() {
    toggler.classList.remove("fas");
    toggler.classList.add("far");
    document.body.classList.add("dark-mode");
    logo.classList.add("dark-mode");
    icons.forEach(function(userItem) {
        userItem.classList.add("dark-mode");
    })
    localStorage.setItem("theme", "dark");
}

if(localStorage.getItem("theme") === null)
{
    if(darkmode)
        dark_mode();
    else
        light_mode();
}
else
{
    if(localStorage.getItem("theme") == "light")
        light_mode();
    else if(localStorage.getItem("theme") == "dark")
        dark_mode();
}

function switcher() {
    //If light mode
    if(toggler.classList.contains("fas"))
        dark_mode();
    //If dark mode
    else
        light_mode();
}

function GetClock(){
    var d=new Date();
    var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate();
    var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds(),ap;

    if(nhour==0){ap=" AM";nhour=12;}
    else if(nhour<12){ap=" AM";}
    else if(nhour==12){ap=" PM";}
    else if(nhour>12){ap=" PM";nhour-=12;}

    if(document.documentElement.lang == 'ko') {if(ap == " AM") ap = "오전 "; else ap = "오후 ";}

    if(nmin<=9) nmin="0"+nmin;
    if(nsec<=9) nsec="0"+nsec;

    var clocktext;
    if(document.documentElement.lang == 'ko'){clocktext=tmonth[nmonth]+" "+ndate+"일 "+tday[nday]+" "+ap+" "+nhour+":"+nmin+":"+nsec}
    else clocktext=""+tday[nday]+", "+tmonth[nmonth]+" "+ndate+" "+nhour+":"+nmin+":"+nsec+ap+"";
    document.getElementById('time').innerHTML=clocktext;
}

if(darkmode || theme=="dark")
    dark_mode();
else if(!document.body.classList.contains("dark-mode"))
    light_mode();