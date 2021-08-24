var data = '{"nome": {"cityName": "Nome","dateAndTime": "3/31/2020, 9:21:46 PM","timeZone": "America/Nome","temperature": "4°C","humidity": "91%","precipitation": "8%","nextFiveHrs": ["6°C", "7°C", "11°C", "2°C"]},"newyork": {"cityName": "NewYork","dateAndTime": "4/1/2020, 1:21:46 AM","timeZone": "America/New_york","temperature": "23°C","humidity": "52%","precipitation": "46%","nextFiveHrs": ["18°C", "20°C", "18°C", "17°C"]},"jamaica": {"cityName": "Jamaica","dateAndTime": "4/1/2020, 12:21:46 AM","timeZone": "America/Jamaica","temperature": "29°C","humidity": "39%","precipitation": "58%","nextFiveHrs": ["24°C", "27°C", "28°C", "24°C"]},"losangeles": {"cityName": "LosAngeles","dateAndTime": "3/31/2020, 10:21:46 PM","timeZone": "America/Los_Angeles","temperature": "23°C","humidity": "52%","precipitation": "46%","nextFiveHrs": ["19°C", "21°C", "23°C", "18°C"]},"winnipeg": {"cityName": "Winnipeg","dateAndTime": "4/1/2020, 12:21:46 AM","timeZone": "America/Winnipeg","temperature": "9°C","humidity": "81%","precipitation": "18%","nextFiveHrs": ["3°C", "7°C", "4°C", "-1°C"]},"juba": {"cityName": "Juba","dateAndTime": "4/1/2020, 8:21:46 AM","timeZone": "Africa/Juba","temperature": "18°C","humidity": "62%","precipitation": "36%","nextFiveHrs": ["37°C", "41°C", "38°C", "37°C"]},"maseru": {"cityName": "Maseru","dateAndTime": "4/1/2020, 7:21:46 AM", "timeZone": "Africa/Maseru","temperature": "43°C","humidity": "10%","precipitation": "86%","nextFiveHrs": ["17°C", "17°C", "19°C", "15°C"]},"london": {"cityName": "London","dateAndTime": "4/1/2020, 6:21:46 AM","timeZone": "Europe/London","temperature": "7°C","humidity": "85%","precipitation": "14%","nextFiveHrs": ["-7°C", "-6°C", "-5°C", "-10°C"]}, "vienna": {"cityName": "Vienna","dateAndTime": "4/1/2020, 7:21:46 AM","timeZone": "Europe/Vienna","temperature": "10°C","humidity": "79%","precipitation": "20%","nextFiveHrs": ["-1°C", "-1°C", "4°C", "-2°C"]},  "moscow": {"cityName": "Moscow","dateAndTime": "4/1/2020, 8:21:46 AM","timeZone": "Europe/Moscow","temperature": "11°C","humidity": "77%","precipitation": "22%","nextFiveHrs": ["12°C", "14°C", "15°C", "8°C"]},  "dublin": {"cityName": "Dublin","dateAndTime": "4/1/2020, 6:21:46 AM","timeZone": "Europe/Dublin","temperature": "15°C","humidity": "68%","precipitation": "30%","nextFiveHrs": ["24°C", "28°C", "29°C", "21°C"]},  "karachi": {"cityName": "Karachi","dateAndTime": "4/1/2020, 10:21:46 AM","timeZone": "Asia/Karachi","temperature": "25°C","humidity": "47%","precipitation": "50%","nextFiveHrs": ["21°C", "24°C", "21°C", "19°C"]},  "kolkata": {"cityName": "Kolkata","dateAndTime": "4/1/2020, 10:51:46 AM","timeZone": "Asia/Kolkata","temperature": "34°C","humidity": "29%","precipitation": "68%","nextFiveHrs": ["33°C", "35°C", "37°C", "32°C"]},  "yangon": {"cityName": "Yangon","dateAndTime": "4/1/2020, 11:51:46 AM","timeZone": "Asia/Yangon","temperature": "24°C","humidity": "50%","precipitation": "48%","nextFiveHrs": ["31°C", "32°C", "36°C", "27°C"]},  "bangkok": {"cityName": "BangKok","dateAndTime": "4/1/2020, 12:21:46 PM","timeZone": "Asia/BangKok","temperature": "32°C","humidity": "33%","precipitation": "64%","nextFiveHrs": ["32°C", "34°C", "32°C", "32°C"]},  "seoul": {"cityName": "Seoul","dateAndTime": "4/1/2020, 2:21:46 PM","timeZone": "Asia/Seoul","temperature": "6°C","humidity": "87%","precipitation": "12%","nextFiveHrs": ["1°C", "1°C", "3°C", "0°C"]},  "anadyr": {"cityName": "Anadyr","dateAndTime": "4/1/2020, 5:21:46 PM","timeZone": "Asia/Anadyr","temperature": "-2°C","humidity": "100%","precipitation": "0%","nextFiveHrs": ["-1°C", "3°C", "-1°C", "-3°C"]},  "brokenhill": {"cityName": "BrokenHill","dateAndTime": "4/1/2020, 3:51:46 PM","timeZone": "Australia/Broken_Hill","temperature": "10°C","humidity": "79%","precipitation": "20%","nextFiveHrs": ["17°C", "21°C", "22°C", "15°C"]},  "perth": {"cityName": "Perth","dateAndTime": "4/1/2020, 1:21:46 PM","timeZone": "Australia/Perth","temperature": "18°C","humidity": "62%","precipitation": "36%","nextFiveHrs": ["6°C", "10°C", "11°C", "6°C"]},  "auckland": {"cityName": "Auckland","dateAndTime": "4/1/2020, 6:21:46 PM","timeZone": "Pacific/Auckland","temperature": "17°C","humidity": "64%","precipitation": "34%","nextFiveHrs": ["17°C", "19°C", "18°C", "17°C"]},  "vostok": {"cityName": "Vostok","dateAndTime": "4/1/2020, 11:21:46 AM","timeZone": "Antarctica/Vostok","temperature": "-61°C","humidity": "100%","precipitation": "0%","nextFiveHrs": ["-64°C", "-59°C", "-64°C", "-68°C"]},  "troll": {"cityName": "Troll","dateAndTime": "4/1/2020, 7:21:46 AM","timeZone": "Antarctica/Troll","temperature": "-52°C","humidity": "100%","precipitation": "0%","nextFiveHrs": ["-70°C", "-70°C", "-66°C", "-71°C"]}}'
var arr_data = JSON.parse(data);

//.................................. catagorized the cities as rainy sunny snowy..................................

(function(){

    var myobj3 = document.getElementById("sec1-4");
    myobj3.style.display = "none";

    var myobj4 = document.getElementById("sec1-5");
    myobj4.style.display = "none";

    var myobj5 = document.getElementById("sec1-6");
    myobj5.style.display = "none";

    var myobj6 = document.getElementById("sec1-7");
    myobj6.style.display = "none";

    var myobj7 = document.getElementById("sec1-8");
    myobj7.style.display = "none";

    var myobj8 = document.getElementById("sec1-9");
    myobj8.style.display = "none";

    var myobj9 = document.getElementById("sec1-10");
    myobj9.style.display = "none";

    var myobj10 = document.getElementById("sec1-11");
    myobj10.style.display = "none";

    var myobj11 = document.getElementById("sec1-12");
    myobj11.style.display = "none";

    var myobj12 = document.getElementById("sec1-13");
    myobj12.style.display = "none";

    var b1 = document.getElementById("blue1");
    b1.style.display = "none";

    var b2 = document.getElementById("blue2");
    b2.style.display = "none";
})();

const windy = [];
var i = 0;

const sunny = [];
var j = 0;

const snowy = [];
var k = 0;

// ..................function to scroll left and right the city card containers..............................

function sideScroll(element,direction,speed,distance,step){
    scrollAmount = 0;
    var slideTimer = setInterval(function(){
        if(direction == 'left')
        {
            element.scrollLeft -= step;
        } 
        else 
        {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance)
        {
            window.clearInterval(slideTimer);
        }
    }, speed);
}

for(var key in arr_data)
{
    for(var key1 in arr_data[key])
    {
        // console.log(arr_data[key]["temperature"]);
        var a = arr_data[key]["temperature"].substr(0, arr_data[key]["temperature"].indexOf('°')); 
        var t1 = parseInt(a);
        
        var b = arr_data[key]["humidity"].substr(0, arr_data[key]["humidity"].indexOf('%')); 
        var t2 = parseInt(b);

        var c = arr_data[key]["precipitation"].substr(0, arr_data[key]["precipitation"].indexOf('%')); 
    
        var t3 = parseInt(c);
        
        //console.log(t3);
        if((t1 < 20) && (t2 >= 50)) 
        {
            //console.log(arr_data[key]["cityName"])
            windy[i] = key;
            i ++;
            break;
        }
        if((t1 >= 20 && t1 <= 28) && (t2 > 50) && (t3 < 50))
        {
            //console.log(arr_data[key]["cityName"])
            snowy[k] = key;
            k ++;
            break;

        }
        if((t1 > 29) && (t2 < 50) && (t3 >= 50)) 
        {
            sunny[j] = key;
            j ++;
            break;
        }
    }
}

// .............................when sunny icon is clicked myFunction1 is executed............................

function myFunction1(){
    //alert(sunny);
    document.getElementById("city-val").innerHTML = "Maseru";

    const img1 = document.getElementById('city-icon');
    img1.setAttribute('src','./././img/sunnyIcon.svg');

    var dAndT = arr_data.maseru.dateAndTime;
    var temp = arr_data.maseru.temperature;
    var humid = arr_data.maseru.humidity;
    var precip = arr_data.maseru.precipitation;
    var d = dAndT.slice(0,8);
    var t = dAndT.slice(9,20);
    
    document.getElementById("city-temp").innerHTML = temp;
    document.getElementById("time-10").innerHTML = t;
    document.getElementById("date-a1").innerHTML = d;
    document.getElementById("hum").innerHTML = humid;
    document.getElementById("pre").innerHTML = precip;
    document.getElementById("sec1").style.backgroundImage = "url(./././img/maseru.svg)"; 
    
    document.getElementById("city-val1").innerHTML = "Kolkata";

    const img2 = document.getElementById('city-icon1');
    img2.setAttribute('src','./././img/sunnyIcon.svg');

    var dAndT1 = arr_data.kolkata.dateAndTime;
    var temp1 = arr_data.kolkata.temperature;
    var humid1 = arr_data.kolkata.humidity;
    var precip1 = arr_data.kolkata.precipitation;
    var d1 = dAndT1.slice(0,8);
    var t1 = dAndT1.slice(9,21);
    
    document.getElementById("city-temp1").innerHTML = temp1;
    document.getElementById("time-10-1").innerHTML = t1;
    document.getElementById("date-a1-1").innerHTML = d1;
    document.getElementById("hum1").innerHTML = humid1;
    document.getElementById("pre1").innerHTML = precip1;
    document.getElementById("sec1-1").style.backgroundImage = "url(./././img/kolkata.svg)";

    document.getElementById("city-val2").innerHTML = "Bangkok";

    const img3 = document.getElementById('city-icon2');
    img3.setAttribute('src','./././img/sunnyIcon.svg');

    var dAndT2 = arr_data.bangkok.dateAndTime;
    var temp2 = arr_data.bangkok.temperature;
    var humid2 = arr_data.bangkok.humidity;
    var precip2 = arr_data.bangkok.precipitation;
    var d2 = dAndT2.slice(0,8);
    var t2 = dAndT2.slice(9,21); 

    document.getElementById("city-temp2").innerHTML = temp2;
    document.getElementById("time-10-2").innerHTML = t2;
    document.getElementById("date-a1-2").innerHTML = d2;
    document.getElementById("hum2").innerHTML = humid2;
    document.getElementById("pre2").innerHTML = precip2;
    document.getElementById("sec1-2").style.backgroundImage = "url(./././img/bangkok.svg)";

    
    var x = document.getElementById("sec1-2");

    if (x.style.display === "none") {
        x.style.display = "block";
    } 
    
    var myobj = document.getElementById("sec1-3");
    myobj.style.display = "none";

    var myobj1 = document.getElementById("sec1-4");
    myobj1.style.display = "none";

    var myobj2 = document.getElementById("sec1-5");
    myobj2.style.display = "none";

    var myobj3 = document.getElementById("sec1-6");
    myobj3.style.display = "none";

    var myobj4 = document.getElementById("sec1-7");
    myobj4.style.display = "none";

    var myobj5 = document.getElementById("sec1-8");
    myobj5.style.display = "none";

    var myobj6 = document.getElementById("sec1-9");
    myobj6.style.display = "none";

    var myobj7 = document.getElementById("sec1-10");
    myobj7.style.display = "none";

    var myobj8 = document.getElementById("sec1-11");
    myobj8.style.display = "none";

    var myobj9 = document.getElementById("sec1-12");
    myobj9.style.display = "none";

    var myobj10 = document.getElementById("sec1-13");
    myobj10.style.display = "none";

    var b = document.getElementById("blue");
    if (b.style.display === "none") {
        b.style.display = "block";
    } 

    var b1 = document.getElementById("blue1");
    b1.style.display = "none";

    var b2 = document.getElementById("blue2");
    b2.style.display = "none";
}

// .............................when snowy icon is clicked myFunction2 is executed............................

function myFunction2(){
    //alert(snowy);
    document.getElementById("city-val").innerHTML = "Los Angeles";

    const img1 = document.getElementById('city-icon');
    img1.setAttribute('src','./././img/snowflakeIcon.svg');

    var dAndT = arr_data.losangeles.dateAndTime;
    var temp = arr_data.losangeles.temperature;
    var humid = arr_data.losangeles.humidity;
    var precip = arr_data.losangeles.precipitation;
    var d = dAndT.slice(0,9);
    var t = dAndT.slice(11,22);
    
    document.getElementById("city-temp").innerHTML = temp;
    document.getElementById("time-10").innerHTML = t;
    document.getElementById("date-a1").innerHTML = d;
    document.getElementById("hum").innerHTML = humid;
    document.getElementById("pre").innerHTML = precip;
    document.getElementById("sec1").style.backgroundImage = "url(./././img/losangeles.svg)"; 
    
    document.getElementById("city-val1").innerHTML = "New York";

    const img2 = document.getElementById('city-icon1');
    img2.setAttribute('src','./././img/snowflakeIcon.svg');

    var dAndT1 = arr_data.newyork.dateAndTime;
    var temp1 = arr_data.newyork.temperature;
    var humid1 = arr_data.newyork.humidity;
    var precip1 = arr_data.newyork.precipitation;
    var d1 = dAndT1.slice(0,8);
    var t1 = dAndT1.slice(9,20);
    
    document.getElementById("city-temp1").innerHTML = temp1;
    document.getElementById("time-10-1").innerHTML = t1;
    document.getElementById("date-a1-1").innerHTML = d1;
    document.getElementById("hum1").innerHTML = humid1;
    document.getElementById("pre1").innerHTML = precip1;
    document.getElementById("sec1-1").style.backgroundImage = "url(./././img/newyork.svg)";  

    var myobj1 = document.getElementById("sec1-2");
    myobj1.style.display = "none";

    var myobj2 = document.getElementById("sec1-3");
    myobj2.style.display = "none";

    var myobj3 = document.getElementById("sec1-4");
    myobj3.style.display = "none";

    var myobj4 = document.getElementById("sec1-5");
    myobj4.style.display = "none";

    var myobj5 = document.getElementById("sec1-6");
    myobj5.style.display = "none";

    var myobj6 = document.getElementById("sec1-7");
    myobj6.style.display = "none";

    var myobj7 = document.getElementById("sec1-8");
    myobj7.style.display = "none";

    var myobj8 = document.getElementById("sec1-9");
    myobj8.style.display = "none";

    var myobj9 = document.getElementById("sec1-10");
    myobj9.style.display = "none";

    var myobj10 = document.getElementById("sec1-11");
    myobj10.style.display = "none";

    var myobj11 = document.getElementById("sec1-12");
    myobj11.style.display = "none";

    var myobj12 = document.getElementById("sec1-13");
    myobj12.style.display = "none";

    var b1 = document.getElementById("blue");
    b1.style.display = "none";

    var b2 = document.getElementById("blue1");
    if (b2.style.display === "none") {
        b2.style.display = "block";
    } 

    var b3 = document.getElementById("blue2");
    b3.style.display = "none";
}

// .............................when rainy icon is clicked myFunction2 is executed............................

function myFunction3(){
    document.getElementById("city-val").innerHTML = "Nome";

    const img1 = document.getElementById('city-icon');
    img1.setAttribute('src','./././img/windyIcon.svg');

    var dAndT = arr_data.nome.dateAndTime;
    var temp = arr_data.nome.temperature;
    var humid = arr_data.nome.humidity;
    var precip = arr_data.nome.precipitation;
    var d = dAndT.slice(0,9);
    var t = dAndT.slice(10,22);
    
    document.getElementById("city-temp").innerHTML = temp;
    document.getElementById("time-10").innerHTML = t;
    document.getElementById("date-a1").innerHTML = d;
    document.getElementById("hum").innerHTML = humid;
    document.getElementById("pre").innerHTML = precip;
    document.getElementById("sec1").style.backgroundImage = "url(./././img/nome.svg)"; 
    
    document.getElementById("city-val1").innerHTML = "Winnipeg";

    const img2 = document.getElementById('city-icon1');
    img2.setAttribute('src','./././img/windyIcon.svg');

    var dAndT1 = arr_data.winnipeg.dateAndTime;
    var temp1 = arr_data.winnipeg.temperature;
    var humid1 = arr_data.winnipeg.humidity;
    var precip1 = arr_data.winnipeg.precipitation;
    var d1 = dAndT1.slice(0,8);
    var t1 = dAndT1.slice(9,21);
    
    document.getElementById("city-temp1").innerHTML = temp1;
    document.getElementById("time-10-1").innerHTML = t1;
    document.getElementById("date-a1-1").innerHTML = d1;
    document.getElementById("hum1").innerHTML = humid1;
    document.getElementById("pre1").innerHTML = precip1;
    document.getElementById("sec1-1").style.backgroundImage = "url(./././img/winnipeg.svg)";

    document.getElementById("city-val2").innerHTML = "Juba";

    const img3 = document.getElementById('city-icon2');
    img3.setAttribute('src','./././img/windyIcon.svg');

    var dAndT2 = arr_data.juba.dateAndTime;
    var temp2 = arr_data.juba.temperature;
    var humid2 = arr_data.juba.humidity;
    var precip2 = arr_data.juba.precipitation;
    var d2 = dAndT2.slice(0,8);
    var t2 = dAndT2.slice(9,20); 

    document.getElementById("city-temp2").innerHTML = temp2;
    document.getElementById("time-10-2").innerHTML = t2;
    document.getElementById("date-a1-2").innerHTML = d2;
    document.getElementById("hum2").innerHTML = humid2;
    document.getElementById("pre2").innerHTML = precip2;
    document.getElementById("sec1-2").style.backgroundImage = "url(./././img/juba.svg)";

    document.getElementById("city-val3").innerHTML = "London";

    const img4 = document.getElementById('city-icon3');
    img4.setAttribute('src','./././img/windyIcon.svg');

    var dAndT3 = arr_data.london.dateAndTime;
    var temp3 = arr_data.london.temperature;
    var humid3 = arr_data.london.humidity;
    var precip3 = arr_data.london.precipitation;
    var d3 = dAndT3.slice(0,8);
    var t3 = dAndT3.slice(9,20); 

    document.getElementById("city-temp3").innerHTML = temp3;
    document.getElementById("time-10-3").innerHTML = t3;
    document.getElementById("date-a1-3").innerHTML = d3;
    document.getElementById("hum3").innerHTML = humid3;
    document.getElementById("pre3").innerHTML = precip3;
    document.getElementById("sec1-3").style.backgroundImage = "url(./././img/london.svg)";

    document.getElementById("city-val4").innerHTML = "Vienna";

    const img5 = document.getElementById('city-icon4');
    img5.setAttribute('src','./././img/windyIcon.svg');

    var dAndT4 = arr_data.vienna.dateAndTime;
    var temp4 = arr_data.vienna.temperature;
    var humid4 = arr_data.vienna.humidity;
    var precip4 = arr_data.vienna.precipitation;
    var d4 = dAndT4.slice(0,8);
    var t4 = dAndT4.slice(9,20); 

    document.getElementById("city-temp4").innerHTML = temp4;
    document.getElementById("time-10-4").innerHTML = t4;
    document.getElementById("date-a1-4").innerHTML = d4;
    document.getElementById("hum4").innerHTML = humid4;
    document.getElementById("pre4").innerHTML = precip4;
    document.getElementById("sec1-4").style.backgroundImage = "url(./././img/vienna.svg)";

    document.getElementById("city-val5").innerHTML = "Moscow";

    const img6 = document.getElementById('city-icon5');
    img6.setAttribute('src','./././img/windyIcon.svg');

    var dAndT5 = arr_data.moscow.dateAndTime;
    var temp5 = arr_data.moscow.temperature;
    var humid5 = arr_data.moscow.humidity;
    var precip5 = arr_data.moscow.precipitation;
    var d5 = dAndT5.slice(0,8);
    var t5 = dAndT5.slice(9,20); 

    document.getElementById("city-temp5").innerHTML = temp5;
    document.getElementById("time-10-5").innerHTML = t5;
    document.getElementById("date-a1-5").innerHTML = d5;
    document.getElementById("hum5").innerHTML = humid5;
    document.getElementById("pre5").innerHTML = precip5;
    document.getElementById("sec1-5").style.backgroundImage = "url(./././img/moscow.svg)";

    document.getElementById("city-val6").innerHTML = "Dublin";

    const img7 = document.getElementById('city-icon6');
    img7.setAttribute('src','./././img/windyIcon.svg');

    var dAndT6 = arr_data.dublin.dateAndTime;
    var temp6 = arr_data.dublin.temperature;
    var humid6 = arr_data.dublin.humidity;
    var precip6 = arr_data.dublin.precipitation;
    var d6 = dAndT6.slice(0,8);
    var t6 = dAndT6.slice(9,20); 

    document.getElementById("city-temp6").innerHTML = temp6;
    document.getElementById("time-10-6").innerHTML = t6;
    document.getElementById("date-a1-6").innerHTML = d6;
    document.getElementById("hum6").innerHTML = humid6;
    document.getElementById("pre6").innerHTML = precip6;
    document.getElementById("sec1-6").style.backgroundImage = "url(./././img/dublin.svg)";

    document.getElementById("city-val7").innerHTML = "Seoul";

    const img8 = document.getElementById('city-icon7');
    img8.setAttribute('src','./././img/windyIcon.svg');

    var dAndT7 = arr_data.seoul.dateAndTime;
    var temp7 = arr_data.seoul.temperature;
    var humid7 = arr_data.seoul.humidity;
    var precip7 = arr_data.seoul.precipitation;
    var d7 = dAndT7.slice(0,8);
    var t7 = dAndT7.slice(9,20); 

    document.getElementById("city-temp7").innerHTML = temp7;
    document.getElementById("time-10-7").innerHTML = t7;
    document.getElementById("date-a1-7").innerHTML = d7;
    document.getElementById("hum7").innerHTML = humid7;
    document.getElementById("pre7").innerHTML = precip7;
    document.getElementById("sec1-7").style.backgroundImage = "url(./././img/seoul.svg)";

    document.getElementById("city-val8").innerHTML = "Anadyr";

    const img9 = document.getElementById('city-icon8');
    img9.setAttribute('src','./././img/windyIcon.svg');

    var dAndT8 = arr_data.anadyr.dateAndTime;
    var temp8 = arr_data.anadyr.temperature;
    var humid8 = arr_data.anadyr.humidity;
    var precip8 = arr_data.anadyr.precipitation;
    var d8 = dAndT8.slice(0,8);
    var t8 = dAndT8.slice(9,20); 

    document.getElementById("city-temp8").innerHTML = temp8;
    document.getElementById("time-10-8").innerHTML = t8;
    document.getElementById("date-a1-8").innerHTML = d8;
    document.getElementById("hum8").innerHTML = humid8;
    document.getElementById("pre8").innerHTML = precip8;
    document.getElementById("sec1-8").style.backgroundImage = "url(./././img/anadyr.svg)";

    document.getElementById("city-val9").innerHTML = "Broken Hill";

    const img10 = document.getElementById('city-icon9');
    img10.setAttribute('src','./././img/windyIcon.svg');

    var dAndT9 = arr_data.brokenhill.dateAndTime;
    var temp9 = arr_data.brokenhill.temperature;
    var humid9 = arr_data.brokenhill.humidity;
    var precip9 = arr_data.brokenhill.precipitation;
    var d9 = dAndT9.slice(0,8);
    var t9 = dAndT9.slice(9,20); 

    document.getElementById("city-temp9").innerHTML = temp9;
    document.getElementById("time-10-9").innerHTML = t9;
    document.getElementById("date-a1-9").innerHTML = d9;
    document.getElementById("hum9").innerHTML = humid9;
    document.getElementById("pre9").innerHTML = precip9;
    document.getElementById("sec1-9").style.backgroundImage = "url(./././img/brokenhill.svg)";

    document.getElementById("city-val10").innerHTML = "Perth";

    const img11 = document.getElementById('city-icon10');
    img11.setAttribute('src','./././img/windyIcon.svg');

    var dAndT10 = arr_data.perth.dateAndTime;
    var temp10 = arr_data.perth.temperature;
    var humid10 = arr_data.perth.humidity;
    var precip10 = arr_data.perth.precipitation;
    var d10 = dAndT10.slice(0,8);
    var t10 = dAndT10.slice(9,20); 

    document.getElementById("city-temp10").innerHTML = temp10;
    document.getElementById("time-10-10").innerHTML = t10;
    document.getElementById("date-a1-10").innerHTML = d10;
    document.getElementById("hum10").innerHTML = humid10;
    document.getElementById("pre10").innerHTML = precip10;
    document.getElementById("sec1-10").style.backgroundImage = "url(./././img/perth.svg)";

    document.getElementById("city-val11").innerHTML = "Auckland";

    const img12 = document.getElementById('city-icon11');
    img12.setAttribute('src','./././img/windyIcon.svg');

    var dAndT11 = arr_data.auckland.dateAndTime;
    var temp11 = arr_data.auckland.temperature;
    var humid11 = arr_data.auckland.humidity;
    var precip11 = arr_data.auckland.precipitation;
    var d11 = dAndT11.slice(0,8);
    var t11 = dAndT11.slice(9,20); 

    document.getElementById("city-temp11").innerHTML = temp11;
    document.getElementById("time-10-11").innerHTML = t11;
    document.getElementById("date-a1-11").innerHTML = d11;
    document.getElementById("hum11").innerHTML = humid11;
    document.getElementById("pre11").innerHTML = precip11;
    document.getElementById("sec1-11").style.backgroundImage = "url(./././img/auckland.svg)";

    document.getElementById("city-val12").innerHTML = "Vostok";

    const img13 = document.getElementById('city-icon12');
    img13.setAttribute('src','./././img/windyIcon.svg');

    var dAndT12 = arr_data.vostok.dateAndTime;
    var temp12 = arr_data.vostok.temperature;
    var humid12 = arr_data.vostok.humidity;
    var precip12 = arr_data.vostok.precipitation;
    var d12 = dAndT12.slice(0,8);
    var t12 = dAndT12.slice(9,20); 

    document.getElementById("city-temp12").innerHTML = temp12;
    document.getElementById("time-10-12").innerHTML = t12;
    document.getElementById("date-a1-12").innerHTML = d12;
    document.getElementById("hum12").innerHTML = humid12;
    document.getElementById("pre12").innerHTML = precip12;
    document.getElementById("sec1-12").style.backgroundImage = "url(./././img/vostok.svg)";

    document.getElementById("city-val13").innerHTML = "Troll";

    const img14 = document.getElementById('city-icon13');
    img14.setAttribute('src','./././img/windyIcon.svg');

    var dAndT13 = arr_data.troll.dateAndTime;
    var temp13 = arr_data.troll.temperature;
    var humid13 = arr_data.troll.humidity;
    var precip13 = arr_data.troll.precipitation;
    var d13 = dAndT13.slice(0,8);
    var t13 = dAndT13.slice(9,20); 

    document.getElementById("city-temp13").innerHTML = temp13;
    document.getElementById("time-10-13").innerHTML = t13;
    document.getElementById("date-a1-13").innerHTML = d13;
    document.getElementById("hum13").innerHTML = humid13;
    document.getElementById("pre13").innerHTML = precip13;
    document.getElementById("sec1-13").style.backgroundImage = "url(./././img/troll.svg)";

    var x = document.getElementById("sec1-2");

    if (x.style.display === "none") {
        x.style.display = "block";
    } 

    var y = document.getElementById("sec1-3");
    if (y.style.display === "none") {
        y.style.display = "block";
    } 

    var z = document.getElementById("sec1-4");
    if (z.style.display === "none") {
        z.style.display = "block";
    } 

    var x1 = document.getElementById("sec1-5");
    if (x1.style.display === "none") {
        x1.style.display = "block";
    } 

    var y1 = document.getElementById("sec1-6");
    if (y1.style.display === "none") {
        y1.style.display = "block";
    } 

    var z1 = document.getElementById("sec1-7");
    if (z1.style.display === "none") {
        z1.style.display = "block";
    } 

    var x2 = document.getElementById("sec1-8");
    if (x2.style.display === "none") {
        x2.style.display = "block";
    } 

    var y2 = document.getElementById("sec1-9");
    if (y2.style.display === "none") {
        y2.style.display = "block";
    } 

    var z2 = document.getElementById("sec1-10");
    if (z2.style.display === "none") {
        z2.style.display = "block";
    } 

    var x3 = document.getElementById("sec1-11");
    if (x3.style.display === "none") {
        x3.style.display = "block";
    } 

    var y3 = document.getElementById("sec1-12");
    if (y3.style.display === "none") {
        y3.style.display = "block";
    } 

    var z3 = document.getElementById("sec1-13");
    if (z3.style.display === "none") {
        z3.style.display = "block";
    } 

    var b1 = document.getElementById("blue");
    b1.style.display = "none";

    var b2 = document.getElementById("blue1");
    b2.style.display = "none";

    var b3 = document.getElementById("blue2");

    if (b3.style.display === "none") {
        b3.style.display = "block";
    } 
}

function spin()
{
    var spinner_val = document.getElementById("quantity").value;
    var spin_val = parseInt(spinner_val);
    
    if(spin_val == 3)
    {
        var myobj = document.getElementById("sec1-3");
        myobj.style.display = "none";

        var myobj1 = document.getElementById("sec1-4");
        myobj1.style.display = "none";

        var myobj2 = document.getElementById("sec1-5");
        myobj2.style.display = "none";

        var myobj3 = document.getElementById("sec1-6");
        myobj3.style.display = "none";

        var myobj4 = document.getElementById("sec1-7");
        myobj4.style.display = "none";

        var myobj5 = document.getElementById("sec1-8");
        myobj5.style.display = "none";

        var myobj6 = document.getElementById("sec1-9");
        myobj6.style.display = "none";

        var myobj7 = document.getElementById("sec1-10");
        myobj7.style.display = "none";

        var myobj8 = document.getElementById("sec1-11");
        myobj8.style.display = "none";

        var myobj9 = document.getElementById("sec1-12");
        myobj9.style.display = "none";

        var myobj10 = document.getElementById("sec1-13");
        myobj10.style.display = "none";
    }
    else if(spin_val == 4)
    {
        var x = document.getElementById("sec1-3");

        if (x.style.display === "none") {
            x.style.display = "block";
        } 

        var myobj1 = document.getElementById("sec1-4");
        myobj1.style.display = "none";

        var myobj2 = document.getElementById("sec1-5");
        myobj2.style.display = "none";

        var myobj3 = document.getElementById("sec1-6");
        myobj3.style.display = "none";

        var myobj4 = document.getElementById("sec1-7");
        myobj4.style.display = "none";

        var myobj5 = document.getElementById("sec1-8");
        myobj5.style.display = "none";

        var myobj6 = document.getElementById("sec1-9");
        myobj6.style.display = "none";

        var myobj7 = document.getElementById("sec1-10");
        myobj7.style.display = "none";

        var myobj8 = document.getElementById("sec1-11");
        myobj8.style.display = "none";

        var myobj9 = document.getElementById("sec1-12");
        myobj9.style.display = "none";

        var myobj10 = document.getElementById("sec1-13");
        myobj10.style.display = "none";
    }
    else if(spin_val == 5)
    {
        var x = document.getElementById("sec1-3");
        if (x.style.display === "none") {
            x.style.display = "block";
        } 

        var y = document.getElementById("sec1-4");
        if (y.style.display === "none") {
            y.style.display = "block";
        } 

        var myobj2 = document.getElementById("sec1-5");
        myobj2.style.display = "none";

        var myobj3 = document.getElementById("sec1-6");
        myobj3.style.display = "none";

        var myobj4 = document.getElementById("sec1-7");
        myobj4.style.display = "none";

        var myobj5 = document.getElementById("sec1-8");
        myobj5.style.display = "none";

        var myobj6 = document.getElementById("sec1-9");
        myobj6.style.display = "none";

        var myobj7 = document.getElementById("sec1-10");
        myobj7.style.display = "none";

        var myobj8 = document.getElementById("sec1-11");
        myobj8.style.display = "none";

        var myobj9 = document.getElementById("sec1-12");
        myobj9.style.display = "none";

        var myobj10 = document.getElementById("sec1-13");
        myobj10.style.display = "none";
    }
    else if(spin_val == 6)
    {
        var x = document.getElementById("sec1-3");
        if (x.style.display === "none") {
            x.style.display = "block";
        } 

        var y = document.getElementById("sec1-4");
        if (y.style.display === "none") {
            y.style.display = "block";
        } 

        var z = document.getElementById("sec1-5");
        if (z.style.display === "none") {
            z.style.display = "block";
        } 


        var myobj3 = document.getElementById("sec1-6");
        myobj3.style.display = "none";

        var myobj4 = document.getElementById("sec1-7");
        myobj4.style.display = "none";

        var myobj5 = document.getElementById("sec1-8");
        myobj5.style.display = "none";

        var myobj6 = document.getElementById("sec1-9");
        myobj6.style.display = "none";

        var myobj7 = document.getElementById("sec1-10");
        myobj7.style.display = "none";

        var myobj8 = document.getElementById("sec1-11");
        myobj8.style.display = "none";

        var myobj9 = document.getElementById("sec1-12");
        myobj9.style.display = "none";

        var myobj10 = document.getElementById("sec1-13");
        myobj10.style.display = "none";
    }
    else if(spin_val == 7)
    {
        var x = document.getElementById("sec1-3");
        if (x.style.display === "none") {
            x.style.display = "block";
        } 

        var y = document.getElementById("sec1-4");
        if (y.style.display === "none") {
            y.style.display = "block";
        } 

        var z = document.getElementById("sec1-5");
        if (z.style.display === "none") {
            z.style.display = "block";
        } 

        var a = document.getElementById("sec1-6");
        if (a.style.display === "none") {
            a.style.display = "block";
        }

        var myobj4 = document.getElementById("sec1-7");
        myobj4.style.display = "none";

        var myobj5 = document.getElementById("sec1-8");
        myobj5.style.display = "none";

        var myobj6 = document.getElementById("sec1-9");
        myobj6.style.display = "none";

        var myobj7 = document.getElementById("sec1-10");
        myobj7.style.display = "none";

        var myobj8 = document.getElementById("sec1-11");
        myobj8.style.display = "none";

        var myobj9 = document.getElementById("sec1-12");
        myobj9.style.display = "none";

        var myobj10 = document.getElementById("sec1-13");
        myobj10.style.display = "none";
    }
    else if(spin_val == 8)
    {
        var x = document.getElementById("sec1-3");
        if (x.style.display === "none") {
            x.style.display = "block";
        } 

        var y = document.getElementById("sec1-4");
        if (y.style.display === "none") {
            y.style.display = "block";
        } 

        var z = document.getElementById("sec1-5");
        if (z.style.display === "none") {
            z.style.display = "block";
        } 

        var a = document.getElementById("sec1-6");
        if (a.style.display === "none") {
            a.style.display = "block";
        }

        var b = document.getElementById("sec1-7");
        if (b.style.display === "none") {
            b.style.display = "block";
        }

        var myobj5 = document.getElementById("sec1-8");
        myobj5.style.display = "none";

        var myobj6 = document.getElementById("sec1-9");
        myobj6.style.display = "none";

        var myobj7 = document.getElementById("sec1-10");
        myobj7.style.display = "none";

        var myobj8 = document.getElementById("sec1-11");
        myobj8.style.display = "none";

        var myobj9 = document.getElementById("sec1-12");
        myobj9.style.display = "none";

        var myobj10 = document.getElementById("sec1-13");
        myobj10.style.display = "none";
    }
    else if(spin_val == 9)
    {
        var x = document.getElementById("sec1-3");
        if (x.style.display === "none") {
            x.style.display = "block";
        } 

        var y = document.getElementById("sec1-4");
        if (y.style.display === "none") {
            y.style.display = "block";
        } 

        var z = document.getElementById("sec1-5");
        if (z.style.display === "none") {
            z.style.display = "block";
        } 

        var a = document.getElementById("sec1-6");
        if (a.style.display === "none") {
            a.style.display = "block";
        }

        var b = document.getElementById("sec1-7");
        if (b.style.display === "none") {
            b.style.display = "block";
        }

        var c = document.getElementById("sec1-8");
        if (c.style.display === "none") {
            c.style.display = "block";
        }

        var myobj6 = document.getElementById("sec1-9");
        myobj6.style.display = "none";

        var myobj7 = document.getElementById("sec1-10");
        myobj7.style.display = "none";

        var myobj8 = document.getElementById("sec1-11");
        myobj8.style.display = "none";

        var myobj9 = document.getElementById("sec1-12");
        myobj9.style.display = "none";

        var myobj10 = document.getElementById("sec1-13");
        myobj10.style.display = "none";
    }
    else if(spin_val == 10)
    {
        var x = document.getElementById("sec1-3");
        if (x.style.display === "none") {
            x.style.display = "block";
        } 

        var y = document.getElementById("sec1-4");
        if (y.style.display === "none") {
            y.style.display = "block";
        } 

        var z = document.getElementById("sec1-5");
        if (z.style.display === "none") {
            z.style.display = "block";
        } 

        var a = document.getElementById("sec1-6");
        if (a.style.display === "none") {
            a.style.display = "block";
        }

        var b = document.getElementById("sec1-7");
        if (b.style.display === "none") {
            b.style.display = "block";
        }

        var c = document.getElementById("sec1-8");
        if (c.style.display === "none") {
            c.style.display = "block";
        }

        var d = document.getElementById("sec1-9");
        if (d.style.display === "none") {
            d.style.display = "block";
        }

        var myobj7 = document.getElementById("sec1-10");
        myobj7.style.display = "none";

        var myobj8 = document.getElementById("sec1-11");
        myobj8.style.display = "none";

        var myobj9 = document.getElementById("sec1-12");
        myobj9.style.display = "none";

        var myobj10 = document.getElementById("sec1-13");
        myobj10.style.display = "none";
    }
}

var button1 = document.getElementById("arrow-left");
button1.onclick = function(){
    var container = document.getElementById("city-cards-container");
    sideScroll(container,'left',25,100,10);
}
var button2 = document.getElementById("arrow-right");
button2.onclick = function(){
    //alert(button1);
    var container = document.getElementById("city-cards-container");
    sideScroll(container,'right',25,100,10);
}