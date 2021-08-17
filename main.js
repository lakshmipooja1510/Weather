var data = '{"nome": {"cityName": "Nome","dateAndTime": "3/31/2020, 9:21:46 PM","timeZone": "America/Nome","temperature": "4°C","humidity": "91%","precipitation": "8%","nextFiveHrs": ["6°C", "7°C", "11°C", "2°C"]},"newyork": {"cityName": "NewYork","dateAndTime": "4/1/2020, 1:21:46 AM","timeZone": "America/New_york","temperature": "23°C","humidity": "52%","precipitation": "46%","nextFiveHrs": ["18°C", "20°C", "18°C", "17°C"]},"jamaica": {"cityName": "Jamaica","dateAndTime": "4/1/2020, 12:21:46 AM","timeZone": "America/Jamaica","temperature": "29°C","humidity": "39%","precipitation": "58%","nextFiveHrs": ["24°C", "27°C", "28°C", "24°C"]},"losangeles": {"cityName": "LosAngeles","dateAndTime": "3/31/2020, 10:21:46 PM","timeZone": "America/Los_Angeles","temperature": "23°C","humidity": "52%","precipitation": "46%","nextFiveHrs": ["19°C", "21°C", "23°C", "18°C"]},"winnipeg": {"cityName": "Winnipeg","dateAndTime": "4/1/2020, 12:21:46 AM","timeZone": "America/Winnipeg","temperature": "9°C","humidity": "81%","precipitation": "18%","nextFiveHrs": ["3°C", "7°C", "4°C", "-1°C"]},"juba": {"cityName": "Juba","dateAndTime": "4/1/2020, 8:21:46 AM","timeZone": "Africa/Juba","temperature": "18°C","humidity": "62%","precipitation": "36%","nextFiveHrs": ["37°C", "41°C", "38°C", "37°C"]},"maseru": {"cityName": "Maseru","dateAndTime": "4/1/2020, 7:21:46 AM", "timeZone": "Africa/Maseru","temperature": "43°C","humidity": "10%","precipitation": "86%","nextFiveHrs": ["17°C", "17°C", "19°C", "15°C"]},"london": {"cityName": "London","dateAndTime": "4/1/2020, 6:21:46 AM","timeZone": "Europe/London","temperature": "7°C","humidity": "85%","precipitation": "14%","nextFiveHrs": ["-7°C", "-6°C", "-5°C", "-10°C"]}, "vienna": {"cityName": "Vienna","dateAndTime": "4/1/2020, 7:21:46 AM","timeZone": "Europe/Vienna","temperature": "10°C","humidity": "79%","precipitation": "20%","nextFiveHrs": ["-1°C", "-1°C", "4°C", "-2°C"]},  "moscow": {"cityName": "Moscow","dateAndTime": "4/1/2020, 8:21:46 AM","timeZone": "Europe/Moscow","temperature": "11°C","humidity": "77%","precipitation": "22%","nextFiveHrs": ["12°C", "14°C", "15°C", "8°C"]},  "dublin": {"cityName": "Dublin","dateAndTime": "4/1/2020, 6:21:46 AM","timeZone": "Europe/Dublin","temperature": "15°C","humidity": "68%","precipitation": "30%","nextFiveHrs": ["24°C", "28°C", "29°C", "21°C"]},  "karachi": {"cityName": "Karachi","dateAndTime": "4/1/2020, 10:21:46 AM","timeZone": "Asia/Karachi","temperature": "25°C","humidity": "47%","precipitation": "50%","nextFiveHrs": ["21°C", "24°C", "21°C", "19°C"]},  "kolkata": {"cityName": "Kolkata","dateAndTime": "4/1/2020, 10:51:46 AM","timeZone": "Asia/Kolkata","temperature": "34°C","humidity": "29%","precipitation": "68%","nextFiveHrs": ["33°C", "35°C", "37°C", "32°C"]},  "yangon": {"cityName": "Yangon","dateAndTime": "4/1/2020, 11:51:46 AM","timeZone": "Asia/Yangon","temperature": "24°C","humidity": "50%","precipitation": "48%","nextFiveHrs": ["31°C", "32°C", "36°C", "27°C"]},  "bangkok": {"cityName": "BangKok","dateAndTime": "4/1/2020, 12:21:46 PM","timeZone": "Asia/BangKok","temperature": "32°C","humidity": "33%","precipitation": "64%","nextFiveHrs": ["32°C", "34°C", "32°C", "32°C"]},  "seoul": {"cityName": "Seoul","dateAndTime": "4/1/2020, 2:21:46 PM","timeZone": "Asia/Seoul","temperature": "6°C","humidity": "87%","precipitation": "12%","nextFiveHrs": ["1°C", "1°C", "3°C", "0°C"]},  "anadyr": {"cityName": "Anadyr","dateAndTime": "4/1/2020, 5:21:46 PM","timeZone": "Asia/Anadyr","temperature": "-2°C","humidity": "100%","precipitation": "0%","nextFiveHrs": ["-1°C", "3°C", "-1°C", "-3°C"]},  "brokenhill": {"cityName": "BrokenHill","dateAndTime": "4/1/2020, 3:51:46 PM","timeZone": "Australia/Broken_Hill","temperature": "10°C","humidity": "79%","precipitation": "20%","nextFiveHrs": ["17°C", "21°C", "22°C", "15°C"]},  "perth": {"cityName": "Perth","dateAndTime": "4/1/2020, 1:21:46 PM","timeZone": "Australia/Perth","temperature": "18°C","humidity": "62%","precipitation": "36%","nextFiveHrs": ["6°C", "10°C", "11°C", "6°C"]},  "auckland": {"cityName": "Auckland","dateAndTime": "4/1/2020, 6:21:46 PM","timeZone": "Pacific/Auckland","temperature": "17°C","humidity": "64%","precipitation": "34%","nextFiveHrs": ["17°C", "19°C", "18°C", "17°C"]},  "vostok": {"cityName": "Vostok","dateAndTime": "4/1/2020, 11:21:46 AM","timeZone": "Antarctica/Vostok","temperature": "-61°C","humidity": "100%","precipitation": "0%","nextFiveHrs": ["-64°C", "-59°C", "-64°C", "-68°C"]},  "troll": {"cityName": "Troll","dateAndTime": "4/1/2020, 7:21:46 AM","timeZone": "Antarctica/Troll","temperature": "-52°C","humidity": "100%","precipitation": "0%","nextFiveHrs": ["-70°C", "-70°C", "-66°C", "-71°C"]}}'
var mydata = JSON.parse(data);
 
var dAndT = mydata.anadyr.dateAndTime;
var temp = mydata.anadyr.temperature;
var humid = mydata.anadyr.humidity;
var precip = mydata.anadyr.precipitation;
var d = dAndT.slice(0,8);
var t = dAndT.slice(9,20);
var c1 = parseInt(t.slice(0,2)); 
 
var hr1 = mydata.anadyr.nextFiveHrs[0];
var hr2 = mydata.anadyr.nextFiveHrs[1];
var hr3 = mydata.anadyr.nextFiveHrs[2];
var hr4 = mydata.anadyr.nextFiveHrs[3];
 
document.getElementById("temp1").innerHTML =temp;
document.getElementById("date").innerHTML = d;
document.getElementById("time1").innerHTML = t;
document.getElementById("humid1").innerHTML =humid;
document.getElementById("precip1").innerHTML =precip;
 
document.getElementById("cloud0").innerHTML = temp;
document.getElementById("cloud1").innerHTML = hr1;
document.getElementById("cloud2").innerHTML = hr2;
document.getElementById("cloud3").innerHTML = hr3;
document.getElementById("cloud4").innerHTML = hr4;
 
document.getElementById("t1").innerHTML = c1+1+" "+"PM";
document.getElementById("t2").innerHTML = c1+2+" "+"PM";
document.getElementById("t3").innerHTML = c1+3+" "+"PM";
document.getElementById("t4").innerHTML = c1+4+" "+"PM"; 
 
 
function celToFahr(tempCel) {
    return (parseInt(tempCel) * 9) / 5 + 32;
}
 
document.getElementById("cities").onchange = function()
{
    if(this.value == "Anadyr")
    {
        const img1 = document.getElementById('icon-change');
        img1.setAttribute('src','./././img/anadyr.svg');
        
        var dAndT = mydata.anadyr.dateAndTime;
        var temp = mydata.anadyr.temperature;
        var humid = mydata.anadyr.humidity;
        var precip = mydata.anadyr.precipitation;
        var fahr = celToFahr(temp);
        
        var hr1 = mydata.anadyr.nextFiveHrs[0];
        var hr2 = mydata.anadyr.nextFiveHrs[1];
        var hr3 = mydata.anadyr.nextFiveHrs[2];
        var hr4 = mydata.anadyr.nextFiveHrs[3];
        
        var d = dAndT.slice(0,8);
        var t = dAndT.slice(9,20);
        
        var c1 = parseInt(t.slice(0,2)); 
 
        document.getElementById("precip1").innerHTML =precip;
        document.getElementById("temp1").innerHTML =temp;
        document.getElementById("date").innerHTML = d;
        document.getElementById("time1").innerHTML = t;
        document.getElementById("humid1").innerHTML =humid;
        document.getElementById("temp2").innerHTML =fahr;
        
        document.getElementById("cloud0").innerHTML = temp;
        document.getElementById("cloud1").innerHTML = hr1;
        document.getElementById("cloud2").innerHTML = hr2;
        document.getElementById("cloud3").innerHTML = hr3;
        document.getElementById("cloud4").innerHTML = hr4;
 
        document.getElementById("t1").innerHTML = c1+1+" "+"PM";
        document.getElementById("t2").innerHTML = c1+2+" "+"PM";
        document.getElementById("t3").innerHTML = c1+3+" "+"PM";
        document.getElementById("t4").innerHTML = c1+4+" "+"PM";    
    }
    else if(this.value == "Auckland")
    {
        const img1 = document.getElementById('icon-change');
        img1.setAttribute('src','./././img/auckland.svg');
        
        var dAndT = mydata.auckland.dateAndTime;
        var temp = mydata.auckland.temperature;
        var humid = mydata.auckland.humidity;
        var precip = mydata.auckland.precipitation;
        var d = dAndT.slice(0,8);
        var t = dAndT.slice(9,20);
        var c1 = parseInt(t.slice(0,2)); 
        var fahr = celToFahr(temp);
        
        var hr1 = mydata.auckland.nextFiveHrs[0];
        var hr2 = mydata.auckland.nextFiveHrs[1];
        var hr3 = mydata.auckland.nextFiveHrs[2];
        var hr4 = mydata.auckland.nextFiveHrs[3];
       
        document.getElementById("temp1").innerHTML= temp;
        document.getElementById("precip1").innerHTML =precip;
        document.getElementById("date").innerHTML = d;
        document.getElementById("time1").innerHTML = t;
        document.getElementById("humid1").innerHTML = humid;
        document.getElementById("temp2").innerHTML = fahr;
 
        document.getElementById("cloud0").innerHTML = temp;
        document.getElementById("cloud1").innerHTML = hr1;
        document.getElementById("cloud2").innerHTML = hr2;
        document.getElementById("cloud3").innerHTML = hr3;
        document.getElementById("cloud4").innerHTML = hr4;
 
        document.getElementById("t1").innerHTML = c1+1+" "+"PM";
        document.getElementById("t2").innerHTML = c1+2+" "+"PM";
        document.getElementById("t3").innerHTML = c1+3+" "+"PM";
        document.getElementById("t4").innerHTML = c1+4+" "+"PM";
    }
    else if(this.value === "Bangkok")
    {
        const img1 = document.getElementById('icon-change');
        img1.setAttribute('src','./././img/bangkok.svg');
        
        var dAndT = mydata.bangkok.dateAndTime;
        var humid = mydata.bangkok.humidity;
        var temp = mydata.bangkok.temperature;
        var precip = mydata.bangkok.precipitation;
        var d = dAndT.slice(0,8);
        var t = dAndT.slice(9,21);
        var c1 = parseInt(t.slice(0,3)); 
        var fahr = celToFahr(temp);
 
        var hr1 = mydata.bangkok.nextFiveHrs[0];
        var hr2 = mydata.bangkok.nextFiveHrs[1];
        var hr3 = mydata.bangkok.nextFiveHrs[2];
        var hr4 = mydata.bangkok.nextFiveHrs[3];
 
        document.getElementById("temp1").innerHTML=temp;
        document.getElementById("date").innerHTML = d;
        document.getElementById("precip1").innerHTML =precip;
        document.getElementById("time1").innerHTML = t;
        document.getElementById("humid1").innerHTML =humid;
        document.getElementById("temp2").innerHTML =fahr;
 
        document.getElementById("cloud0").innerHTML = temp;
        document.getElementById("cloud1").innerHTML = hr1;
        document.getElementById("cloud2").innerHTML = hr2;
        document.getElementById("cloud3").innerHTML = hr3;
        document.getElementById("cloud4").innerHTML = hr4;
 
        if(c1==12)
        {
            document.getElementById("t1").innerHTML = c1-11+" "+"AM";
            document.getElementById("t2").innerHTML = c1-10+" "+"AM";
            document.getElementById("t3").innerHTML = c1-9+" "+"AM";
            document.getElementById("t4").innerHTML = c1-8+" "+"AM";
        }
    }
    else if(this.value == "Broken Hill")
    {
        const img1 = document.getElementById('icon-change');
        img1.setAttribute('src','./././img/brokenhill.svg');
        
        var dAndT = mydata.brokenhill.dateAndTime;
        var temp = mydata.brokenhill.temperature;
        var humid = mydata.brokenhill.humidity;
        var precip = mydata.brokenhill.precipitation;
        var d = dAndT.slice(0,8);
        var t = dAndT.slice(9,20);
        var c1 = parseInt(t.slice(0,3)); 
        var fahr = celToFahr(temp);
        
        var hr1 = mydata.brokenhill.nextFiveHrs[0];
        var hr2 = mydata.brokenhill.nextFiveHrs[1];
        var hr3 = mydata.brokenhill.nextFiveHrs[2];
        var hr4 = mydata.brokenhill.nextFiveHrs[3];
 
        document.getElementById("temp1").innerHTML=temp;
        document.getElementById("date").innerHTML = d;
        document.getElementById("time1").innerHTML = t;
        document.getElementById("precip1").innerHTML =precip;
        document.getElementById("humid1").innerHTML =humid;
        document.getElementById("temp2").innerHTML =fahr;
 
        document.getElementById("cloud0").innerHTML = temp;
        document.getElementById("cloud1").innerHTML = hr1;
        document.getElementById("cloud2").innerHTML = hr2;
        document.getElementById("cloud3").innerHTML = hr3;
        document.getElementById("cloud4").innerHTML = hr4;
 
        document.getElementById("t1").innerHTML = c1+1+" "+"PM";
        document.getElementById("t2").innerHTML = c1+2+" "+"PM";
        document.getElementById("t3").innerHTML = c1+3+" "+"PM";
        document.getElementById("t4").innerHTML = c1+4+" "+"PM";
    }
    else if(this.value == "Dublin")
    {
        const img1 = document.getElementById('icon-change');
        img1.setAttribute('src','./././img/dublin.svg');
 
        var dAndT = mydata.dublin.dateAndTime;
        var humid = mydata.dublin.humidity;
        var precip = mydata.dublin.precipitation;
        var temp = mydata.dublin.temperature;
        var d = dAndT.slice(0,8);
        var t = dAndT.slice(9,20);
        var c1 = parseInt(t.slice(0,3));
        var fahr = celToFahr(temp); 
 
        var hr1 = mydata.dublin.nextFiveHrs[0];
        var hr2 = mydata.dublin.nextFiveHrs[1];
        var hr3 = mydata.dublin.nextFiveHrs[2];
        var hr4 = mydata.dublin.nextFiveHrs[3];
 
        document.getElementById("temp1").innerHTML=temp;
        document.getElementById("date").innerHTML = d;
        document.getElementById("time1").innerHTML = t;
        document.getElementById("humid1").innerHTML =humid;
        document.getElementById("precip1").innerHTML =precip;
        document.getElementById("temp2").innerHTML =fahr;
 
        document.getElementById("cloud0").innerHTML = temp;
        document.getElementById("cloud1").innerHTML = hr1;
        document.getElementById("cloud2").innerHTML = hr2;
        document.getElementById("cloud3").innerHTML = hr3;
        document.getElementById("cloud4").innerHTML = hr4;
 
        document.getElementById("t1").innerHTML = c1+1+" "+"AM";
        document.getElementById("t2").innerHTML = c1+2+" "+"AM";
        document.getElementById("t3").innerHTML = c1+3+" "+"AM";
        document.getElementById("t4").innerHTML = c1+4+" "+"AM";
    }
    else if(this.value == "Jamaica")
    {
        const img1 = document.getElementById('icon-change');
        img1.setAttribute('src','./././img/jamaica.svg');
 
        var dAndT = mydata.jamaica.dateAndTime;
        var humid = mydata.jamaica.humidity;
        var precip = mydata.jamaica.precipitation;
        var temp = mydata.jamaica.temperature;
        var d = dAndT.slice(0,8);
        var t = dAndT.slice(9,21);
        var c1 = parseInt(t.slice(0,3)); 
        var fahr = celToFahr(temp);
 
        var hr1 = mydata.jamaica.nextFiveHrs[0];
        var hr2 = mydata.jamaica.nextFiveHrs[1];
        var hr3 = mydata.jamaica.nextFiveHrs[2];
        var hr4 = mydata.jamaica.nextFiveHrs[3];
 
        document.getElementById("precip1").innerHTML =precip;
        document.getElementById("temp1").innerHTML=temp;
        document.getElementById("date").innerHTML = d;
        document.getElementById("temp2").innerHTML =fahr;
        document.getElementById("humid1").innerHTML =humid;
        document.getElementById("time1").innerHTML = t;
 
        document.getElementById("cloud0").innerHTML = temp;
        document.getElementById("cloud1").innerHTML = hr1;
        document.getElementById("cloud2").innerHTML = hr2;
        document.getElementById("cloud3").innerHTML = hr3;
        document.getElementById("cloud4").innerHTML = hr4;
 
        document.getElementById("t1").innerHTML = c1-11+" "+"PM";
        document.getElementById("t2").innerHTML = c1-10+" "+"PM";
        document.getElementById("t3").innerHTML = c1-9+" "+"PM";
        document.getElementById("t4").innerHTML = c1-8+" "+"PM";
    }
    else if(this.value == "Juba")
    {
        const img1 = document.getElementById('icon-change');
        img1.setAttribute('src','./././img/juba.svg');
 
        var dAndT = mydata.juba.dateAndTime;
        var temp = mydata.juba.temperature;
        var humid = mydata.juba.humidity;
        var precip = mydata.juba.precipitation;
        var d = dAndT.slice(0,8);
        var t = dAndT.slice(9,20);
        var c1 = parseInt(t.slice(0,3)); 
        var fahr = celToFahr(temp);
 
        var hr1 = mydata.juba.nextFiveHrs[0];
        var hr2 = mydata.juba.nextFiveHrs[1];
        var hr3 = mydata.juba.nextFiveHrs[2];
        var hr4 = mydata.juba.nextFiveHrs[3];
 
        document.getElementById("temp1").innerHTML=temp;
        document.getElementById("precip1").innerHTML =precip;
        document.getElementById("date").innerHTML = d;
        document.getElementById("humid1").innerHTML =humid;
        document.getElementById("time1").innerHTML = t;
        document.getElementById("temp2").innerHTML =fahr;
 
        document.getElementById("cloud0").innerHTML = temp;
        document.getElementById("cloud1").innerHTML = hr1;
        document.getElementById("cloud2").innerHTML = hr2;
        document.getElementById("cloud3").innerHTML = hr3;
        document.getElementById("cloud4").innerHTML = hr4;
 
        document.getElementById("t1").innerHTML = c1+1+" "+"AM";
        document.getElementById("t2").innerHTML = c1+2+" "+"AM";
        document.getElementById("t3").innerHTML = c1+3+" "+"AM";
        document.getElementById("t4").innerHTML = c1+4+" "+"AM";
    }
    else if(this.value == "Karachi")
    {
        const img1 = document.getElementById('icon-change');
        img1.setAttribute('src','./././img/karachi.svg');
 
        var dAndT = mydata.karachi.dateAndTime;
        var humid = mydata.karachi.humidity;
        var temp = mydata.karachi.temperature;
        var precip = mydata.karachi.precipitation;
        var d = dAndT.slice(0,8);
        var t = dAndT.slice(9,21);
        var c1 = parseInt(t.slice(0,3));
        var fahr = celToFahr(temp); 
 
        var hr1 = mydata.karachi.nextFiveHrs[0];
        var hr2 = mydata.karachi.nextFiveHrs[1];
        var hr3 = mydata.karachi.nextFiveHrs[2];
        var hr4 = mydata.karachi.nextFiveHrs[3];
 
        document.getElementById("temp1").innerHTML=temp;
        document.getElementById("humid1").innerHTML =humid;
        document.getElementById("precip1").innerHTML =precip;
        document.getElementById("date").innerHTML = d;
        document.getElementById("time1").innerHTML = t;
        document.getElementById("temp2").innerHTML =fahr;
 
        document.getElementById("cloud0").innerHTML = temp;
        document.getElementById("cloud1").innerHTML = hr1;
        document.getElementById("cloud2").innerHTML = hr2;
        document.getElementById("cloud3").innerHTML = hr3;
        document.getElementById("cloud4").innerHTML = hr4;
 
        document.getElementById("t1").innerHTML = c1+1+" "+"AM";
        document.getElementById("t2").innerHTML = c1+2+" "+"PM";
        document.getElementById("t3").innerHTML = c1-9+" "+"PM";
        document.getElementById("t4").innerHTML = c1-8+" "+"PM";
    }
    else if(this.value == "Kolkata")
    {
        const img1 = document.getElementById('icon-change');
        img1.setAttribute('src','./././img/kolkata.svg');
 
        var dAndT = mydata.kolkata.dateAndTime;
        var temp = mydata.kolkata.temperature;
        var humid = mydata.kolkata.humidity;
        var precip = mydata.kolkata.precipitation;
        var d = dAndT.slice(0,8);
        var t = dAndT.slice(9,21);
        var c1 = parseInt(t.slice(0,3));
        var fahr = celToFahr(temp);
 
        var hr1 = mydata.kolkata.nextFiveHrs[0];
        var hr2 = mydata.kolkata.nextFiveHrs[1];
        var hr3 = mydata.kolkata.nextFiveHrs[2];
        var hr4 = mydata.kolkata.nextFiveHrs[3];
 
        document.getElementById("humid1").innerHTML =humid;
        document.getElementById("temp1").innerHTML=temp;
        document.getElementById("temp2").innerHTML =fahr;
        document.getElementById("date").innerHTML = d;
        document.getElementById("precip1").innerHTML =precip;
        document.getElementById("time1").innerHTML = t;
 
        document.getElementById("cloud0").innerHTML = temp;
        document.getElementById("cloud1").innerHTML = hr1;
        document.getElementById("cloud2").innerHTML = hr2;
        document.getElementById("cloud3").innerHTML = hr3;
        document.getElementById("cloud4").innerHTML = hr4;
 
        document.getElementById("t1").innerHTML = c1+1+" "+"AM";
        document.getElementById("t2").innerHTML = c1+2+" "+"PM";
        document.getElementById("t3").innerHTML = c1-9+" "+"PM";
        document.getElementById("t4").innerHTML = c1-8+" "+"PM";
    }
    else if(this.value == "London")
    {
        const img1 = document.getElementById('icon-change');
        img1.setAttribute('src','./././img/london.svg');
 
        var dAndT = mydata.london.dateAndTime;
        var humid = mydata.london.humidity;
        var temp = mydata.london.temperature;
        var precip = mydata.london.precipitation;
        var d = dAndT.slice(0,8);
        var t = dAndT.slice(9,20);
        var c1 = parseInt(t.slice(0,3));
        var fahr = celToFahr(temp);
 
        var hr1 = mydata.london.nextFiveHrs[0];
        var hr2 = mydata.london.nextFiveHrs[1];
        var hr3 = mydata.london.nextFiveHrs[2];
        var hr4 = mydata.london.nextFiveHrs[3];
 
        document.getElementById("humid1").innerHTML =humid;
        document.getElementById("temp1").innerHTML=temp;
        document.getElementById("date").innerHTML = d;
        document.getElementById("time1").innerHTML = t;
        document.getElementById("precip1").innerHTML =precip;
        document.getElementById("temp2").innerHTML =fahr;
 
        document.getElementById("cloud0").innerHTML = temp;
        document.getElementById("cloud1").innerHTML = hr1;
        document.getElementById("cloud2").innerHTML = hr2;
        document.getElementById("cloud3").innerHTML = hr3;
        document.getElementById("cloud4").innerHTML = hr4;
 
        document.getElementById("t1").innerHTML = c1+1+" "+"AM";
        document.getElementById("t2").innerHTML = c1+2+" "+"AM";
        document.getElementById("t3").innerHTML = c1+3+" "+"AM";
        document.getElementById("t4").innerHTML = c1+4+" "+"AM";
    }
    else if(this.value == "Los Angeles")
    {
        const img1 = document.getElementById('icon-change');
        img1.setAttribute('src','./././img/losangeles.svg');
 
        var dAndT = mydata.losangeles.dateAndTime;
        var temp = mydata.losangeles.temperature;
        var humid = mydata.losangeles.humidity;
        var precip = mydata.losangeles.precipitation;
        var d = dAndT.slice(0,9);
        var t = dAndT.slice(11,22);
        var c1 = parseInt(t.slice(0,3));
        var fahr = celToFahr(temp);
 
        var hr1 = mydata.losangeles.nextFiveHrs[0];
        var hr2 = mydata.losangeles.nextFiveHrs[1];
        var hr3 = mydata.losangeles.nextFiveHrs[2];
        var hr4 = mydata.losangeles.nextFiveHrs[3];
 
        document.getElementById("temp1").innerHTML = temp;
        document.getElementById("humid1").innerHTML =humid;
        document.getElementById("date").innerHTML = d;
        document.getElementById("time1").innerHTML = t;
        document.getElementById("temp2").innerHTML =fahr;
        document.getElementById("precip1").innerHTML =precip;
 
        document.getElementById("cloud0").innerHTML = temp;
        document.getElementById("cloud1").innerHTML = hr1;
        document.getElementById("cloud2").innerHTML = hr2;
        document.getElementById("cloud3").innerHTML = hr3;
        document.getElementById("cloud4").innerHTML = hr4;
 
        document.getElementById("t1").innerHTML = c1+1+" "+"AM";
        document.getElementById("t2").innerHTML = c1+2+" "+"AM";
        document.getElementById("t3").innerHTML = c1+3+" "+"AM";
        document.getElementById("t4").innerHTML = c1+4+" "+"AM";
    }
    else if(this.value == "Maseru")
    {
        const img1 = document.getElementById('icon-change');
        img1.setAttribute('src','./././img/maseru.svg');
 
        var dAndT = mydata.maseru.dateAndTime;
        var temp = mydata.maseru.temperature;
        var precip = mydata.maseru.precipitation;
        var humid = mydata.maseru.humidity;
        var d = dAndT.slice(0,8);
        var t = dAndT.slice(9,20);
        var c1 = parseInt(t.slice(0,2));
        var fahr = celToFahr(temp);
 
        var hr1 = mydata.maseru.nextFiveHrs[0];
        var hr2 = mydata.maseru.nextFiveHrs[1];
        var hr3 = mydata.maseru.nextFiveHrs[2];
        var hr4 = mydata.maseru.nextFiveHrs[3];
 
        document.getElementById("precip1").innerHTML =precip;
        document.getElementById("temp1").innerHTML=temp;
        document.getElementById("date").innerHTML = d;
        document.getElementById("temp2").innerHTML =fahr;
        document.getElementById("humid1").innerHTML =humid;
        document.getElementById("time1").innerHTML = t;
 
        document.getElementById("cloud0").innerHTML = temp;
        document.getElementById("cloud1").innerHTML = hr1;
        document.getElementById("cloud2").innerHTML = hr2;
        document.getElementById("cloud3").innerHTML = hr3;
        document.getElementById("cloud4").innerHTML = hr4;
 
        document.getElementById("t1").innerHTML = c1+1+" "+"AM";
        document.getElementById("t2").innerHTML = c1+2+" "+"AM";
        document.getElementById("t3").innerHTML = c1+3+" "+"AM";
        document.getElementById("t4").innerHTML = c1+4+" "+"AM";
    }
    else if(this.value == "Moscow")
    {
        const img1 = document.getElementById('icon-change');
        img1.setAttribute('src','./././img/moscow.svg');
 
        var dAndT = mydata.moscow.dateAndTime;
        var humid = mydata.moscow.humidity;
        var precip = mydata.moscow.precipitation;
        var temp = mydata.moscow.temperature;
        var d = dAndT.slice(0,8);
        var t = dAndT.slice(9,20);
        var c1 = parseInt(t.slice(0,3));
        var fahr = celToFahr(temp);
 
        var hr1 = mydata.moscow.nextFiveHrs[0];
        var hr2 = mydata.moscow.nextFiveHrs[1];
        var hr3 = mydata.moscow.nextFiveHrs[2];
        var hr4 = mydata.moscow.nextFiveHrs[3];
 
        document.getElementById("temp1").innerHTML=temp;
        document.getElementById("precip1").innerHTML =precip;
        document.getElementById("date").innerHTML = d;
        document.getElementById("time1").innerHTML = t;
        document.getElementById("humid1").innerHTML =humid;
        document.getElementById("temp2").innerHTML =fahr;
 
        document.getElementById("cloud0").innerHTML = temp;
        document.getElementById("cloud1").innerHTML = hr1;
        document.getElementById("cloud2").innerHTML = hr2;
        document.getElementById("cloud3").innerHTML = hr3;
        document.getElementById("cloud4").innerHTML = hr4;
 
        document.getElementById("t1").innerHTML = c1+1+" "+"AM";
        document.getElementById("t2").innerHTML = c1+2+" "+"AM";
        document.getElementById("t3").innerHTML = c1+3+" "+"AM";
        document.getElementById("t4").innerHTML = c1+4+" "+"PM";
    }
    else if(this.value == "New York")
    {
        const img1 = document.getElementById('icon-change');
        img1.setAttribute('src','./././img/newyork.svg');
 
        var dAndT = mydata.newyork.dateAndTime;
        var temp = mydata.newyork.temperature;
        var precip = mydata.newyork.precipitation;
        var humid = mydata.newyork.humidity;
        var d = dAndT.slice(0,8);
        var t = dAndT.slice(9,20);
        var c1 = parseInt(t.slice(0,3));
        var fahr = celToFahr(temp);
 
        var hr1 = mydata.newyork.nextFiveHrs[0];
        var hr2 = mydata.newyork.nextFiveHrs[1];
        var hr3 = mydata.newyork.nextFiveHrs[2];
        var hr4 = mydata.newyork.nextFiveHrs[3];
 
        document.getElementById("humid1").innerHTML =humid;
        document.getElementById("temp1").innerHTML=temp;
        document.getElementById("precip1").innerHTML =precip;
        document.getElementById("date").innerHTML = d;
        document.getElementById("time1").innerHTML = t;
        document.getElementById("temp2").innerHTML =fahr;
 
        document.getElementById("cloud0").innerHTML = temp;
        document.getElementById("cloud1").innerHTML = hr1;
        document.getElementById("cloud2").innerHTML = hr2;
        document.getElementById("cloud3").innerHTML = hr3;
        document.getElementById("cloud4").innerHTML = hr4;
 
        document.getElementById("t1").innerHTML = c1+1+" "+"AM";
        document.getElementById("t2").innerHTML = c1+2+" "+"AM";
        document.getElementById("t3").innerHTML = c1+3+" "+"AM";
        document.getElementById("t4").innerHTML = c1+4+" "+"AM";
    }
    else if(this.value == "Nome")
    {
        const img1 = document.getElementById('icon-change');
        img1.setAttribute('src','./././img/nome.svg');
 
        var dAndT = mydata.nome.dateAndTime;
        var humid = mydata.nome.humidity;
        var precip = mydata.nome.precipitation;
        var temp = mydata.nome.temperature;
        var d = dAndT.slice(0,9);
        var t = dAndT.slice(10,22);
        var c1 = parseInt(t.slice(0,3));
        var fahr = celToFahr(temp);
 
        var hr1 = mydata.nome.nextFiveHrs[0];
        var hr2 = mydata.nome.nextFiveHrs[1];
        var hr3 = mydata.nome.nextFiveHrs[2];
        var hr4 = mydata.nome.nextFiveHrs[3];
 
        document.getElementById("temp1").innerHTML=temp;
        document.getElementById("date").innerHTML = d;
        document.getElementById("humid1").innerHTML =humid;
        document.getElementById("temp2").innerHTML =fahr;
        document.getElementById("precip1").innerHTML =precip;
        document.getElementById("time1").innerHTML = t;
 
        document.getElementById("cloud0").innerHTML = temp;
        document.getElementById("cloud1").innerHTML = hr1;
        document.getElementById("cloud2").innerHTML = hr2;
        document.getElementById("cloud3").innerHTML = hr3;
        document.getElementById("cloud4").innerHTML = hr4;
 
        document.getElementById("t1").innerHTML = c1+1+" "+"AM";
        document.getElementById("t2").innerHTML = c1+2+" "+"AM";
        document.getElementById("t3").innerHTML = c1+3+" "+"AM";
        document.getElementById("t4").innerHTML = c1+4+" "+"AM";
    }
    else if(this.value == "Perth")
    {
        const img1 = document.getElementById('icon-change');
        img1.setAttribute('src','./././img/perth.svg');
 
        var dAndT = mydata.perth.dateAndTime;
        var humid = mydata.perth.humidity;
        var precip = mydata.perth.precipitation;
        var temp = mydata.perth.temperature;
        var d = dAndT.slice(0,8);
        var t = dAndT.slice(9,20);
        var c1 = parseInt(t.slice(0,3));
        var fahr = celToFahr(temp);
 
        var hr1 = mydata.perth.nextFiveHrs[0];
        var hr2 = mydata.perth.nextFiveHrs[1];
        var hr3 = mydata.perth.nextFiveHrs[2];
        var hr4 = mydata.perth.nextFiveHrs[3];
 
        document.getElementById("temp1").innerHTML=temp;
        document.getElementById("humid1").innerHTML =humid;
        document.getElementById("date").innerHTML = d;
        document.getElementById("time1").innerHTML = t;
        document.getElementById("temp2").innerHTML =fahr;
        document.getElementById("precip1").innerHTML =precip;
 
        document.getElementById("cloud0").innerHTML = temp;
        document.getElementById("cloud1").innerHTML = hr1;
        document.getElementById("cloud2").innerHTML = hr2;
        document.getElementById("cloud3").innerHTML = hr3;
        document.getElementById("cloud4").innerHTML = hr4;
 
        document.getElementById("t1").innerHTML = c1+1+" "+"PM";
        document.getElementById("t2").innerHTML = c1+2+" "+"PM";
        document.getElementById("t3").innerHTML = c1+3+" "+"PM";
        document.getElementById("t4").innerHTML = c1+4+" "+"PM";
    }
    else if(this.value == "Seoul")
    {
        const img1 = document.getElementById('icon-change');
        img1.setAttribute('src','./././img/seoul.svg');
 
        var dAndT = mydata.seoul.dateAndTime;
        var humid = mydata.seoul.humidity;
        var temp = mydata.seoul.temperature;
        var precip = mydata.seoul.precipitation;
        var d = dAndT.slice(0,8);
        var t = dAndT.slice(9,20);
        var c1 = parseInt(t.slice(0,3));
        var fahr = celToFahr(temp);
 
        var hr1 = mydata.seoul.nextFiveHrs[0];
        var hr2 = mydata.seoul.nextFiveHrs[1];
        var hr3 = mydata.seoul.nextFiveHrs[2];
        var hr4 = mydata.seoul.nextFiveHrs[3];
 
        document.getElementById("precip1").innerHTML =precip;
        document.getElementById("temp1").innerHTML=temp;
        document.getElementById("date").innerHTML = d;
        document.getElementById("time1").innerHTML = t;
        document.getElementById("temp2").innerHTML =fahr;
        document.getElementById("humid1").innerHTML =humid;
 
        document.getElementById("cloud0").innerHTML = temp;
        document.getElementById("cloud1").innerHTML = hr1;
        document.getElementById("cloud2").innerHTML = hr2;
        document.getElementById("cloud3").innerHTML = hr3;
        document.getElementById("cloud4").innerHTML = hr4;
 
        document.getElementById("t1").innerHTML = c1+1+" "+"PM";
        document.getElementById("t2").innerHTML = c1+2+" "+"PM";
        document.getElementById("t3").innerHTML = c1+3+" "+"PM";
        document.getElementById("t4").innerHTML = c1+4+" "+"PM";
    }
    else if(this.value == "Troll")
    {
        const img1 = document.getElementById('icon-change');
        img1.setAttribute('src','./././img/troll.svg');
 
        var dAndT = mydata.troll.dateAndTime;
        var precip = mydata.troll.precipitation;
        var humid = mydata.troll.humidity;
        var temp = mydata.troll.temperature;
        var d = dAndT.slice(0,8);
        var t = dAndT.slice(9,20);
        var c1 = parseInt(t.slice(0,3));
        var fahr = celToFahr(temp);
 
        var hr1 = mydata.troll.nextFiveHrs[0];
        var hr2 = mydata.troll.nextFiveHrs[1];
        var hr3 = mydata.troll.nextFiveHrs[2];
        var hr4 = mydata.troll.nextFiveHrs[3];
 
        document.getElementById("humid1").innerHTML =humid;
        document.getElementById("precip1").innerHTML =precip;
        document.getElementById("temp1").innerHTML=temp;
        document.getElementById("date").innerHTML = d;
        document.getElementById("temp2").innerHTML =fahr.toFixed(2);
        document.getElementById("time1").innerHTML = t;
 
        document.getElementById("cloud0").innerHTML = temp;
        document.getElementById("cloud1").innerHTML = hr1;
        document.getElementById("cloud2").innerHTML = hr2;
        document.getElementById("cloud3").innerHTML = hr3;
        document.getElementById("cloud4").innerHTML = hr4;
 
        document.getElementById("t1").innerHTML = c1+1+" "+"PM";
        document.getElementById("t2").innerHTML = c1+2+" "+"PM";
        document.getElementById("t3").innerHTML = c1+3+" "+"PM";
        document.getElementById("t4").innerHTML = c1+4+" "+"PM";
    }
    else if(this.value == "Vienna")
    {
        const img1 = document.getElementById('icon-change');
        img1.setAttribute('src','./././img/Vienna.svg');
 
        var dAndT = mydata.vienna.dateAndTime;
        var humid = mydata.vienna.humidity;
        var precip = mydata.vienna.precipitation;
        var temp = mydata.vienna.temperature;
        var d = dAndT.slice(0,8);
        var t = dAndT.slice(9,20);
        var c1 = parseInt(t.slice(0,3));
        var fahr = celToFahr(temp);
 
        var hr1 = mydata.vienna.nextFiveHrs[0];
        var hr2 = mydata.vienna.nextFiveHrs[1];
        var hr3 = mydata.vienna.nextFiveHrs[2];
        var hr4 = mydata.vienna.nextFiveHrs[3];
 
        document.getElementById("temp1").innerHTML=temp;
        document.getElementById("humid1").innerHTML =humid;
        document.getElementById("temp2").innerHTML =fahr;
        document.getElementById("precip1").innerHTML =precip;
        document.getElementById("date").innerHTML = d;
        document.getElementById("time1").innerHTML = t;
 
        document.getElementById("cloud0").innerHTML = temp;
        document.getElementById("cloud1").innerHTML = hr1;
        document.getElementById("cloud2").innerHTML = hr2;
        document.getElementById("cloud3").innerHTML = hr3;
        document.getElementById("cloud4").innerHTML = hr4;
 
        document.getElementById("t1").innerHTML = c1+1+" "+"AM";
        document.getElementById("t2").innerHTML = c1+2+" "+"AM";
        document.getElementById("t3").innerHTML = c1+3+" "+"AM";
        document.getElementById("t4").innerHTML = c1+4+" "+"AM";
    }
    else if(this.value == "Vostok")
    {
        const img1 = document.getElementById('icon-change');
        img1.setAttribute('src','./././img/vostok.svg');
 
        var dAndT = mydata.vostok.dateAndTime;
        var humid = mydata.vostok.humidity;
        var temp = mydata.vostok.temperature;
        var precip = mydata.vostok.precipitation;
        var d = dAndT.slice(0,8);
        var t = dAndT.slice(9,21);
        var c1 = parseInt(t.slice(0,3));
        var fahr = celToFahr(temp);
 
        var hr1 = mydata.vostok.nextFiveHrs[0];
        var hr2 = mydata.vostok.nextFiveHrs[1];
        var hr3 = mydata.vostok.nextFiveHrs[2];
        var hr4 = mydata.vostok.nextFiveHrs[3];
 
        document.getElementById("temp1").innerHTML=temp;
        document.getElementById("date").innerHTML = d;
        document.getElementById("humid1").innerHTML =humid;
        document.getElementById("precip1").innerHTML =precip;
        document.getElementById("temp2").innerHTML =fahr;
        document.getElementById("time1").innerHTML = t;
 
        document.getElementById("cloud0").innerHTML = temp;
        document.getElementById("cloud1").innerHTML = hr1;
        document.getElementById("cloud2").innerHTML = hr2;
        document.getElementById("cloud3").innerHTML = hr3;
        document.getElementById("cloud4").innerHTML = hr4;
 
        document.getElementById("t1").innerHTML = c1+1+" "+"PM";
        document.getElementById("t2").innerHTML = c1-10+" "+"PM";
        document.getElementById("t3").innerHTML = c1-9+" "+"PM";
        document.getElementById("t4").innerHTML = c1-8+" "+"PM";
    }
    else if(this.value == "Winnipeg")
    {
        const img1 = document.getElementById('icon-change');
        img1.setAttribute('src','./././img/winnipeg.svg');
 
        var dAndT = mydata.winnipeg.dateAndTime;
        var humid = mydata.winnipeg.humidity;
        var precip = mydata.winnipeg.precipitation;
        var temp = mydata.winnipeg.temperature;
        var d = dAndT.slice(0,8);
        var t = dAndT.slice(9,21);
        var c1 = parseInt(t.slice(0,3));
        var fahr = celToFahr(temp);
 
        var hr1 = mydata.winnipeg.nextFiveHrs[0];
        var hr2 = mydata.winnipeg.nextFiveHrs[1];
        var hr3 = mydata.winnipeg.nextFiveHrs[2];
        var hr4 = mydata.winnipeg.nextFiveHrs[3];
 
        document.getElementById("temp1").innerHTML=temp;
        document.getElementById("date").innerHTML = d;
        document.getElementById("time1").innerHTML = t;
        document.getElementById("humid1").innerHTML =humid;
        document.getElementById("temp2").innerHTML =fahr;
        document.getElementById("precip1").innerHTML =precip;
 
        document.getElementById("cloud0").innerHTML = temp;
        document.getElementById("cloud1").innerHTML = hr1;
        document.getElementById("cloud2").innerHTML = hr2;
        document.getElementById("cloud3").innerHTML = hr3;
        document.getElementById("cloud4").innerHTML = hr4;
 
        document.getElementById("t1").innerHTML = c1-11+" "+"AM";
        document.getElementById("t2").innerHTML = c1-10+" "+"AM";
        document.getElementById("t3").innerHTML = c1-9+" "+"AM";
        document.getElementById("t4").innerHTML = c1-8+" "+"AM";
    }
    else if(this.value == "Yangon")
    {
        const img1 = document.getElementById('icon-change');
        img1.setAttribute('src','./././img/yangon.svg');
 
        var dAndT = mydata.yangon.dateAndTime;
        var humid = mydata.yangon.humidity;
        var precip = mydata.yangon.precipitation;
        var temp = mydata.yangon.temperature;
        var d = dAndT.slice(0,8);
        var t = dAndT.slice(9,21);
        var c1 = parseInt(t.slice(0,3));
        var fahr = celToFahr(temp);
 
        var hr1 = mydata.yangon.nextFiveHrs[0];
        var hr2 = mydata.yangon.nextFiveHrs[1];
        var hr3 = mydata.yangon.nextFiveHrs[2];
        var hr4 = mydata.yangon.nextFiveHrs[3];
 
        document.getElementById("precip1").innerHTML =precip;
        document.getElementById("humid1").innerHTML =humid;
        document.getElementById("temp1").innerHTML=temp;
        document.getElementById("temp2").innerHTML =fahr;
        document.getElementById("date").innerHTML = d;
        document.getElementById("time1").innerHTML = t;
 
        document.getElementById("cloud0").innerHTML = temp;
        document.getElementById("cloud1").innerHTML = hr1;
        document.getElementById("cloud2").innerHTML = hr2;
        document.getElementById("cloud3").innerHTML = hr3;
        document.getElementById("cloud4").innerHTML = hr4;
 
        document.getElementById("t1").innerHTML = c1+1+" "+"PM";
        document.getElementById("t2").innerHTML = c1-10+" "+"PM";
        document.getElementById("t3").innerHTML = c1-9+" "+"PM";
        document.getElementById("t4").innerHTML = c1-8+" "+"PM";
    }
}
 
 
// //current date of Anadyr
// var d1 = new Date();
// var n1 = d1.toLocaleString('en-GB', {day: '2-digit', month:'short',  year:'numeric' , timeZone: 'Asia/Anadyr'});
// var p1 = d1.toLocaleString('en-GB', {hour: '2-digit', minute: '2-digit', second: '2-digit',  hourCycle: 'h11',timeZone: 'Asia/Anadyr'});
// document.getElementById("date").innerHTML = n1;
// document.getElementById("time1").innerHTML = p1;
 
// //change the cities from the drop down the icon, time, date, temperature in celcius and fahrenheit, humidity and precipitation will be changed
// document.getElementById("cities").onchange = function()
// {
//     if(this.value == "Anadyr")
//     {
//         const img1 = document.getElementById('icon-change');
//         img1.setAttribute('src','./././img/anadyr.svg');
//         var d = new Date();
//         var n = d.toLocaleString('en-GB', {day: '2-digit', month:'short',  year:'numeric' , timeZone: 'Asia/Anadyr'});
//         var p = d.toLocaleString('en-GB', {hour: '2-digit', minute: '2-digit', second: '2-digit',  hourCycle: 'h11',timeZone: 'Asia/Anadyr'});
//         document.getElementById("date").innerHTML = n;
//         document.getElementById("time1").innerHTML = p;
//     }
//     else if(this.value == "Auckland")
//     {
//         const img1 = document.getElementById('icon-change');
//         img1.setAttribute('src','./././img/auckland.svg');
//         var d = new Date();
//         var n = d.toLocaleString('en-GB', {day: '2-digit', month:'short',  year:'numeric' , timeZone: 'Pacific/Auckland'});
//         var p = d.toLocaleString('en-GB', {hour: '2-digit', minute: '2-digit', second: '2-digit',  hourCycle: 'h11',timeZone: 'Pacific/Auckland'});
//         document.getElementById("date").innerHTML = n;
//         document.getElementById("time1").innerHTML = p;
//     }
    // else if(this.value === "Bangkok")
    // {
    //     const img1 = document.getElementById('icon-change');
    //     img1.setAttribute('src','./././img/bangkok.svg');
    //     var d = new Date();
    //     var n = d.toLocaleString('en-GB', {day: '2-digit', month:'short',  year:'numeric' , timeZone: 'Asia/Bangkok'});
    //     var p = d.toLocaleString('en-GB', {hour: '2-digit', minute: '2-digit', second: '2-digit',  hourCycle: 'h11',timeZone: 'Asia/Bangkok'});
    //     document.getElementById("date").innerHTML = n;
    //     document.getElementById("time1").innerHTML = p;
    // }
    // else if(this.value == "Broken Hill")
    // {
    //     const img1 = document.getElementById('icon-change');
    //     img1.setAttribute('src','./././img/brokenhill.svg');
    //     var d = new Date();
    //     var n = d.toLocaleString('en-GB', {day: '2-digit', month:'short',  year:'numeric' , timeZone: 'Australia/Broken_Hill'});
    //     var p = d.toLocaleString('en-GB', {hour: '2-digit', minute: '2-digit', second: '2-digit',  hourCycle: 'h11',timeZone: 'Australia/Broken_Hill'});
    //     document.getElementById("date").innerHTML = n;
    //     document.getElementById("time1").innerHTML = p;
    // }
    // else if(this.value == "Dublin")
    // {
    //     const img1 = document.getElementById('icon-change');
    //     img1.setAttribute('src','./././img/dublin.svg');
    //     var d = new Date();
    //     var n = d.toLocaleString('en-GB', {day: '2-digit', month:'short',  year:'numeric' , timeZone: 'Etc/GMT+1'});
    //     var p = d.toLocaleString('en-GB', {hour: '2-digit', minute: '2-digit', second: '2-digit',  hourCycle: 'h11',timeZone: 'Etc/GMT+1'});
    //     document.getElementById("date").innerHTML = n;
    //     document.getElementById("time1").innerHTML = p;
    // }
    // else if(this.value == "Jamaica")
    // {
    //     const img1 = document.getElementById('icon-change');
    //     img1.setAttribute('src','./././img/jamaica.svg');
    //     var d = new Date();
    //     var n = d.toLocaleString('en-GB', {day: '2-digit', month:'short',  year:'numeric' , timeZone: 'Etc/GMT-5'});
    //     var p = d.toLocaleString('en-GB', {hour: '2-digit', minute: '2-digit', second: '2-digit',  hourCycle: 'h11',timeZone: 'Etc/GMT-5'});
    //     document.getElementById("date").innerHTML = n;
    //     document.getElementById("time1").innerHTML = p;
    // }
    // else if(this.value == "Juba")
    // {
    //     const img1 = document.getElementById('icon-change');
    //     img1.setAttribute('src','./././img/juba.svg');
    //     var d = new Date();
    //     var n = d.toLocaleString('en-GB', {day: '2-digit', month:'short',  year:'numeric' , timeZone: 'Africa/Juba'});
    //     var p = d.toLocaleString('en-GB', {hour: '2-digit', minute: '2-digit', second: '2-digit',  hourCycle: 'h11',timeZone: 'Africa/Juba'});
    //     document.getElementById("date").innerHTML = n;
    //     document.getElementById("time1").innerHTML = p;
    // }
    // else if(this.value == "Karachi")
    // {
    //     const img1 = document.getElementById('icon-change');
    //     img1.setAttribute('src','./././img/karachi.svg');
    //     var d = new Date();
    //     var n = d.toLocaleString('en-GB', {day: '2-digit', month:'short',  year:'numeric' , timeZone: 'Asia/Karachi'});
    //     var p = d.toLocaleString('en-GB', {hour: '2-digit', minute: '2-digit', second: '2-digit',  hourCycle: 'h11',timeZone: 'Asia/Karachi'});
    //     document.getElementById("date").innerHTML = n;
    //     document.getElementById("time1").innerHTML = p;
    // }
    // else if(this.value == "Kolkata")
    // {
    //     const img1 = document.getElementById('icon-change');
    //     img1.setAttribute('src','./././img/kolkata.svg');
    //     var d = new Date();
    //     var n = d.toLocaleString('en-GB', {day: '2-digit', month:'short',  year:'numeric' , timeZone: 'Asia/Kolkata'});
    //     var p = d.toLocaleString('en-GB', {hour: '2-digit', minute: '2-digit', second: '2-digit',  hourCycle: 'h11',timeZone: 'Asia/Kolkata'});
    //     document.getElementById("date").innerHTML = n;
    //     document.getElementById("time1").innerHTML = p;
    // }
    // else if(this.value == "London")
    // {
    //     const img1 = document.getElementById('icon-change');
    //     img1.setAttribute('src','./././img/london.svg');
    //     var d = new Date();
    //     var n = d.toLocaleString('en-GB', {day: '2-digit', month:'short',  year:'numeric' , timeZone: 'Europe/London'});
    //     var p = d.toLocaleString('en-GB', {hour: '2-digit', minute: '2-digit', second: '2-digit',  hourCycle: 'h11',timeZone: 'Europe/London'});
    //     document.getElementById("date").innerHTML = n;
    //     document.getElementById("time1").innerHTML = p;
    // }
    // else if(this.value == "Los Angeles")
    // {
    //     const img1 = document.getElementById('icon-change');
    //     img1.setAttribute('src','./././img/losangeles.svg');
    //     var d = new Date();
    //     var n = d.toLocaleString('en-GB', {day: '2-digit', month:'short',  year:'numeric' , timeZone: 'America/Los_Angeles'});
    //     var p = d.toLocaleString('en-GB', {hour: '2-digit', minute: '2-digit', second: '2-digit',  hourCycle: 'h11',timeZone: 'America/Los_Angeles'});
    //     document.getElementById("date").innerHTML = n;
    //     document.getElementById("time1").innerHTML = p;
    // }
    // else if(this.value == "Maseru")
    // {
    //     const img1 = document.getElementById('icon-change');
    //     img1.setAttribute('src','./././img/maseru.svg');
    //     var d = new Date();
    //     var n = d.toLocaleString('en-GB', {day: '2-digit', month:'short',  year:'numeric' , timeZone: 'Africa/Maseru'});
    //     var p = d.toLocaleString('en-GB', {hour: '2-digit', minute: '2-digit', second: '2-digit',  hourCycle: 'h11',timeZone: 'Africa/Maseru'});
    //     document.getElementById("date").innerHTML = n;
    //     document.getElementById("time1").innerHTML = p;
    // }
    // else if(this.value == "Moscow")
    // {
    //     const img1 = document.getElementById('icon-change');
    //     img1.setAttribute('src','./././img/moscow.svg');
    //     var d = new Date();
    //     var n = d.toLocaleString('en-GB', {day: '2-digit', month:'short',  year:'numeric' , timeZone: 'Europe/Moscow'});
    //     var p = d.toLocaleString('en-GB', {hour: '2-digit', minute: '2-digit', second: '2-digit',  hourCycle: 'h11',timeZone: 'Europe/Moscow'});
    //     document.getElementById("date").innerHTML = n;
    //     document.getElementById("time1").innerHTML = p;
    // }
    // else if(this.value == "New York")
    // {
    //     const img1 = document.getElementById('icon-change');
    //     img1.setAttribute('src','./././img/newyork.svg');
    //     var d = new Date();
    //     var n = d.toLocaleString('en-GB', {day: '2-digit', month:'short',  year:'numeric' , timeZone: 'America/New_York'});
    //     var p = d.toLocaleString('en-GB', {hour: '2-digit', minute: '2-digit', second: '2-digit',  hourCycle: 'h11',timeZone: 'America/New_York'});
    //     document.getElementById("date").innerHTML = n;
    //     document.getElementById("time1").innerHTML = p;
    // }
    // else if(this.value == "Nome")
    // {
    //     const img1 = document.getElementById('icon-change');
    //     img1.setAttribute('src','./././img/nome.svg');
    //     var d = new Date();
    //     var n = d.toLocaleString('en-GB', {day: '2-digit', month:'short',  year:'numeric' , timeZone: 'America/Nome'});
    //     var p = d.toLocaleString('en-GB', {hour: '2-digit', minute: '2-digit', second: '2-digit',  hourCycle: 'h11',timeZone: 'America/Nome'});
    //     document.getElementById("date").innerHTML = n;
    //     document.getElementById("time1").innerHTML = p;
    // }
    // else if(this.value == "Perth")
    // {
    //     const img1 = document.getElementById('icon-change');
    //     img1.setAttribute('src','./././img/perth.svg');
    //     var d = new Date();
    //     var n = d.toLocaleString('en-GB', {day: '2-digit', month:'short',  year:'numeric' , timeZone: 'Australia/Perth'});
    //     var p = d.toLocaleString('en-GB', {hour: '2-digit', minute: '2-digit', second: '2-digit',  hourCycle: 'h11',timeZone: 'Australia/Perth'});
    //     document.getElementById("date").innerHTML = n;
    //     document.getElementById("time1").innerHTML = p;
    // // }
    // else if(this.value == "Seoul")
    // {
    //     const img1 = document.getElementById('icon-change');
    //     img1.setAttribute('src','./././img/seoul.svg');
    //     var d = new Date();
    //     var n = d.toLocaleString('en-GB', {day: '2-digit', month:'short',  year:'numeric' , timeZone: 'Asia/Seoul'});
    //     var p = d.toLocaleString('en-GB', {hour: '2-digit', minute: '2-digit', second: '2-digit',  hourCycle: 'h11',timeZone: 'Asia/Seoul'});
    //     document.getElementById("date").innerHTML = n;
    //     document.getElementById("time1").innerHTML = p;
    // }
//     else if(this.value == "Troll")
//     {
//         const img1 = document.getElementById('icon-change');
//         img1.setAttribute('src','./././img/troll.svg');
//         var d = new Date();
//         var n = d.toLocaleString('en-GB', {day: '2-digit', month:'short',  year:'numeric' , timeZone: 'Antarctica/Troll'});
//         var p = d.toLocaleString('en-GB', {hour: '2-digit', minute: '2-digit', second: '2-digit',  hourCycle: 'h11',timeZone: 'Antarctica/Troll'});
//         document.getElementById("date").innerHTML = n;
//         document.getElementById("time1").innerHTML = p;
//     }
//     else if(this.value == "Vienna")
//     {
//         const img1 = document.getElementById('icon-change');
//         img1.setAttribute('src','./././img/Vienna.svg');
//         var d = new Date();
//         var n = d.toLocaleString('en-GB', {day: '2-digit', month:'short',  year:'numeric' , timeZone: 'Europe/Vienna'});
//         var p = d.toLocaleString('en-GB', {hour: '2-digit', minute: '2-digit', second: '2-digit',  hourCycle: 'h11',timeZone: 'Europe/Vienna'});
//         document.getElementById("date").innerHTML = n;
//         document.getElementById("time1").innerHTML = p;
//     }
//     else if(this.value == "Vostok")
//     {
//         const img1 = document.getElementById('icon-change');
//         img1.setAttribute('src','./././img/vostok.svg');
//         var d = new Date();
//         var n = d.toLocaleString('en-GB', {day: '2-digit', month:'short',  year:'numeric' , timeZone: 'Antarctica/Vostok'});
//         var p = d.toLocaleString('en-GB', {hour: '2-digit', minute: '2-digit', second: '2-digit',  hourCycle: 'h11',timeZone: 'Antarctica/Vostok'});
//         document.getElementById("date").innerHTML = n;
//         document.getElementById("time1").innerHTML = p;
//     }
//     else if(this.value == "Winnipeg")
//     {
//         const img1 = document.getElementById('icon-change');
//         img1.setAttribute('src','./././img/winnipeg.svg');
//         var d = new Date();
//         var n = d.toLocaleString('en-GB', {day: '2-digit', month:'short',  year:'numeric' , timeZone: 'America/Winnipeg'});
//         var p = d.toLocaleString('en-GB', {hour: '2-digit', minute: '2-digit', second: '2-digit',  hourCycle: 'h11',timeZone: 'America/Winnipeg'});
//         document.getElementById("date").innerHTML = n;
//         document.getElementById("time1").innerHTML = p;
//     }
//     else if(this.value == "Yangon")
//     {
//         const img1 = document.getElementById('icon-change');
//         img1.setAttribute('src','./././img/yangon.svg');
//         var d = new Date();
//         var n = d.toLocaleString('en-GB', {day: '2-digit', month:'short',  year:'numeric' , timeZone: 'Asia/Yangon'});
//         var p = d.toLocaleString('en-GB', {hour: '2-digit', minute: '2-digit', second: '2-digit',  hourCycle: 'h11',timeZone: 'Asia/Yangon'});
//         document.getElementById("date").innerHTML = n;
//         document.getElementById("time1").innerHTML = p;
//     }
// };