// ............................................... JSON Object.................................................
var data ='{"nome":{"cityName":"Nome","dateAndTime":"3/31/2020, 9:21:46 PM","timeZone":"America/Nome","temperature":"4°C","humidity":"91%","precipitation":"8%","nextFiveHrs":["6°C","7°C","11°C","2°C"]},"newyork":{"cityName":"NewYork","dateAndTime":"4/1/2020, 1:21:46 AM","timeZone":"America/New_york","temperature":"23°C","humidity":"52%","precipitation":"46%","nextFiveHrs":["18°C","20°C","18°C","17°C"]},"jamaica":{"cityName":"Jamaica","dateAndTime":"4/1/2020, 12:21:46 AM","timeZone":"America/Jamaica","temperature":"29°C","humidity":"39%","precipitation":"58%","nextFiveHrs":["24°C","27°C","28°C","24°C"]},"losangeles":{"cityName":"LosAngeles","dateAndTime":"3/31/2020, 10:21:46 PM","timeZone":"America/Los_Angeles","temperature":"23°C","humidity":"52%","precipitation":"46%","nextFiveHrs":["19°C","21°C","23°C","18°C"]},"winnipeg":{"cityName":"Winnipeg","dateAndTime":"4/1/2020, 12:21:46 AM","timeZone":"America/Winnipeg","temperature":"9°C","humidity":"81%","precipitation":"18%","nextFiveHrs":["3°C","7°C","4°C","-1°C"]},"juba":{"cityName":"Juba","dateAndTime":"4/1/2020, 8:21:46 AM","timeZone":"Africa/Juba","temperature":"18°C","humidity":"62%","precipitation":"36%","nextFiveHrs":["37°C","41°C","38°C","37°C"]},"maseru":{"cityName":"Maseru","dateAndTime":"4/1/2020, 7:21:46 AM","timeZone":"Africa/Maseru","temperature":"43°C","humidity":"10%","precipitation":"86%","nextFiveHrs":["17°C","17°C","19°C","15°C"]},"london":{"cityName":"London","dateAndTime":"4/1/2020, 6:21:46 AM","timeZone":"Europe/London","temperature":"7°C","humidity":"85%","precipitation":"14%","nextFiveHrs":["-7°C","-6°C","-5°C","-10°C"]},"vienna":{"cityName":"Vienna","dateAndTime":"4/1/2020, 7:21:46 AM","timeZone":"Europe/Vienna","temperature":"10°C","humidity":"79%","precipitation":"20%","nextFiveHrs":["-1°C","-1°C","4°C","-2°C"]},"moscow":{"cityName":"Moscow","dateAndTime":"4/1/2020, 8:21:46 AM","timeZone":"Europe/Moscow","temperature":"11°C","humidity":"77%","precipitation":"22%","nextFiveHrs":["12°C","14°C","15°C","8°C"]},"dublin":{"cityName":"Dublin","dateAndTime":"4/1/2020, 6:21:46 AM","timeZone":"Europe/Dublin","temperature":"15°C","humidity":"68%","precipitation":"30%","nextFiveHrs":["24°C","28°C","29°C","21°C"]},"karachi":{"cityName":"Karachi","dateAndTime":"4/1/2020, 10:21:46 AM","timeZone":"Asia/Karachi","temperature":"25°C","humidity":"47%","precipitation":"50%","nextFiveHrs":["21°C","24°C","21°C","19°C"]},"kolkata":{"cityName":"Kolkata","dateAndTime":"4/1/2020, 10:51:46 AM","timeZone":"Asia/Kolkata","temperature":"34°C","humidity":"29%","precipitation":"68%","nextFiveHrs":["33°C","35°C","37°C","32°C"]},"yangon":{"cityName":"Yangon","dateAndTime":"4/1/2020, 11:51:46 AM","timeZone":"Asia/Yangon","temperature":"24°C","humidity":"50%","precipitation":"48%","nextFiveHrs":["31°C","32°C","36°C","27°C"]},"bangkok":{"cityName":"BangKok","dateAndTime":"4/1/2020, 12:21:46 PM","timeZone":"Asia/BangKok","temperature":"32°C","humidity":"33%","precipitation":"64%","nextFiveHrs":["32°C","34°C","32°C","32°C"]},"seoul":{"cityName":"Seoul","dateAndTime":"4/1/2020, 2:21:46 PM","timeZone":"Asia/Seoul","temperature":"6°C","humidity":"87%","precipitation":"12%","nextFiveHrs":["1°C","1°C","3°C","0°C"]},"anadyr":{"cityName":"Anadyr","dateAndTime":"4/1/2020, 5:21:46 PM","timeZone":"Asia/Anadyr","temperature":"-2°C","humidity":"100%","precipitation":"0%","nextFiveHrs":["-1°C","3°C","-1°C","-3°C"]},"brokenhill":{"cityName":"BrokenHill","dateAndTime":"4/1/2020, 3:51:46 PM","timeZone":"Australia/Broken_Hill","temperature":"10°C","humidity":"79%","precipitation":"20%","nextFiveHrs":["17°C","21°C","22°C","15°C"]},"perth":{"cityName":"Perth","dateAndTime":"4/1/2020, 1:21:46 PM","timeZone":"Australia/Perth","temperature":"18°C","humidity":"62%","precipitation":"36%","nextFiveHrs":["6°C","10°C","11°C","6°C"]},"auckland":{"cityName":"Auckland","dateAndTime":"4/1/2020, 6:21:46 PM","timeZone":"Pacific/Auckland","temperature":"17°C","humidity":"64%","precipitation":"34%","nextFiveHrs":["17°C","19°C","18°C","17°C"]},"vostok":{"cityName":"Vostok","dateAndTime":"4/1/2020, 11:21:46 AM","timeZone":"Antarctica/Vostok","temperature":"-61°C","humidity":"100%","precipitation":"0%","nextFiveHrs":["-64°C","-59°C","-64°C","-68°C"]},"troll":{"cityName":"Troll","dateAndTime":"4/1/2020, 7:21:46 AM","timeZone":"Antarctica/Troll","temperature":"-52°C","humidity":"100%","precipitation":"0%","nextFiveHrs":["-70°C","-70°C","-66°C","-71°C"]}}'
var parsedData = JSON.parse(data)
/**
 * @desc changes celcius to fahrenheit
 * @param {*} tempCel
 */
function celToFahr(tempCel) {
    return ((parseInt(tempCel) * 9) / 5 + 32).toFixed(1)
}
/**
 * @desc changes the icon based on the temp value
 * @param {*} t
 * @param {*} _img_src
 */
function iconChange(t, _img_src) {
    var a = t.substr(0, t.indexOf('°'))
    var t1 = parseInt(a)
    if (t1 <= 17) {
        _img_src.setAttribute('src', './././img/rainyIcon.svg')
    } else if (t1 > 17 && t1 <= 22) {
        _img_src.setAttribute('src', './././img/windyIcon.svg')
    } else if (t1 > 22 && t1 <= 29) {
        _img_src.setAttribute('src', './././img/cloudyIcon.svg')
    } else if (t1 > 29) {
        _img_src.setAttribute('src', './././img/sunnyIcon.svg')
    }
}
var city_name = [];
var i = 0;
for (var key in parsedData) {
    for (var key1 in parsedData[key]) {
        var t = parsedData[key]['cityName']
        city_name[i] = t
        i++
        break
    }
}
var dAndT_array = [];
var j = 0;
for (var key in parsedData) {
    for (var key1 in parsedData[key]) {
        var t = parsedData[key]['dateAndTime']
        dAndT_array[j] = t
        j ++;
        break
    }
}
var temperature_array = []
var k = 0;
for (var key in parsedData) {
    for (var key1 in parsedData[key]) {
        var t = parsedData[key]['temperature']
        temperature_array[k] = t
        k ++;
        break
    }
}
var humid_array = [];
var l = 0;
for (var key in parsedData) {
    for (var key1 in parsedData[key]) {
        var t = parsedData[key]['humidity']
        humid_array[l] = t
        l ++;
        break
    }
}
var precip_array = [];
var m = 0;
for (var key in parsedData) {
    for (var key1 in parsedData[key]) {
        var t = parsedData[key]['precipitation']
        precip_array[m] = t
        m ++;
        break
    }
}
var next_five_hrs_array = [];
var n = 0;
for (var key in parsedData) {
    for (var key1 in parsedData[key]) {
        var t = parsedData[key]['nextFiveHrs'];
        next_five_hrs_array[n] = t
      n ++;
      break;
    }
}
;(function () {
    var index;
    for(var i = 0; i < city_name.length; i ++){
        if(city_name[i] == 'Anadyr'){
            index = i;
        }
    }
    document.getElementById('temp1').innerHTML = temperature_array[index];
    var fahr = celToFahr(temperature_array[index]);
    document.getElementById('temp2').innerHTML = fahr;
    document.getElementById('humid1').innerHTML = humid_array[index];
    document.getElementById('precip1').innerHTML=precip_array[index];
    var dAndT = dAndT_array[index];
    document.getElementById('date').innerHTML = dAndT.substr(0, dAndT.indexOf(','));
    document.getElementById('time1').innerHTML = dAndT.substr(dAndT.indexOf(',')+1, dAndT.length);
    var c1 = parseInt(dAndT.substr(dAndT.indexOf(',')+1, dAndT.length))
    var hr1 = next_five_hrs_array[index][0];
    var hr2 = next_five_hrs_array[index][1];
    var hr3 = next_five_hrs_array[index][0];
    var hr4 = next_five_hrs_array[index][0];
    document.getElementById('now').innerHTML = 'NOW'
    document.getElementById('cloud0').innerHTML = temperature_array[index]
    document.getElementById('cloud1').innerHTML = hr1
    document.getElementById('cloud2').innerHTML = hr2
    document.getElementById('cloud3').innerHTML = hr3
    document.getElementById('cloud4').innerHTML = hr4
    document.getElementById('t1').innerHTML = c1 + 1 
    document.getElementById('t2').innerHTML = c1 + 2 
    document.getElementById('t3').innerHTML = c1 + 3 
    document.getElementById('t4').innerHTML = c1 + 4 
    const img_am_pm = document.getElementById('am-pm')
    img_am_pm.setAttribute('src', './././img/sunnyIcon.svg')
})()
function find_index(city_val){
  var index;
  for(i = 0; i < city_name.length; i ++){
    if(city_name[i] == city_val){
      index = i;
    }
  }
  return index;
}
function parent_index(_city_)
{
  this._city_ = _city_;
}
function child_index(_city_)
{
  parent_index.call(this, _city_);
}
var ind;
parent_index.prototype.print_city = function(){
  ind = find_index(this._city_);
  console.log(this._city_ + " " + ind);
  document.getElementById('temp1').innerHTML = temperature_array[ind];
  var fahr = celToFahr(temperature_array[ind]);
  document.getElementById('temp2').innerHTML = fahr;
  document.getElementById('humid1').innerHTML = humid_array[ind];
  document.getElementById('precip1').innerHTML=precip_array[ind];
  var dAndT = dAndT_array[ind];
  document.getElementById('date').innerHTML = dAndT.substr(0, dAndT.indexOf(','));
  document.getElementById('time1').innerHTML = dAndT.substr(dAndT.indexOf(',')+1, dAndT.length);
  var hr1 = next_five_hrs_array[ind][0];
  var hr2 = next_five_hrs_array[ind][1];
  var hr3 = next_five_hrs_array[ind][0];
  var hr4 = next_five_hrs_array[ind][0];
  const _img2 = document.getElementById('img2')
  iconChange(temperature_array[ind], _img2)
  const _img3 = document.getElementById('img3')
  iconChange(hr1, _img3)
  const _img4 = document.getElementById('img4')
  iconChange(hr2, _img4)
  const _img5 = document.getElementById('img5')
  iconChange(hr3, _img5)
  const _img6 = document.getElementById('img6')
  iconChange(hr4, _img6)
  document.getElementById('now').innerHTML = 'NOW'
  document.getElementById('cloud0').innerHTML = temperature_array[ind]
  document.getElementById('cloud1').innerHTML = hr1
  document.getElementById('cloud2').innerHTML = hr2
  document.getElementById('cloud3').innerHTML = hr3
  document.getElementById('cloud4').innerHTML = hr4
  var c1 = parseInt(dAndT.substr(dAndT.indexOf(',')+1, dAndT.length))
  var c2;
  var c3;
  var c4;
  var c5;
  var am_or_pm = dAndT.substr(dAndT.length-2, dAndT.length);
  if(c1 < 9){
    c2 = c1 + 1;
    c3 = c1 + 2;
    c4 = c1 + 3;
    c5 = c1 + 4;
  }
  else if(c1 == 9){
    c2 = 10;
    c3 = 11;
    c4 = 12;
    c5 = 1;
  }
  else if(c1 == 10){
    c2 = 11;
    c3 = 12;
    c4 = 1;
    c5 = 2;
  }
  else if(c1 == 11){
    c2 = 12;
    c3 = 1;
    c4 = 2;
    c5 = 3;
  }
  else if(c1 == 12){
    c2 = 1;
    c3 = 2;
    c4 = 3;
    c5 = 4;
  }
  const img1 = document.getElementById('icon-change')
  img1.setAttribute('src', './././img/'+this._city_.toLowerCase()+'.svg')
  if(c2 == 1 && am_or_pm == 'AM'){
    document.getElementById('t1').innerHTML = c2 + " " + 'PM'
    document.getElementById('t2').innerHTML = c3 + " " + 'PM'
    document.getElementById('t3').innerHTML = c4 + " " + 'PM'
    document.getElementById('t4').innerHTML = c5 +  " " +'PM'
  }
  else if(c2 == 1 && am_or_pm == 'PM'){
    document.getElementById('t1').innerHTML = c2 + " " + 'AM'
    document.getElementById('t2').innerHTML = c3 + " " + 'AM'
    document.getElementById('t3').innerHTML = c4 + " " + 'AM'
    document.getElementById('t4').innerHTML = c5 +  " " +'AM'
  }
  else if(c3 == 1 && am_or_pm == 'PM'){
    document.getElementById('t1').innerHTML = c2 +  " " +'PM'
    document.getElementById('t2').innerHTML = c3 +  " " +'AM'
    document.getElementById('t3').innerHTML = c4 +  " " +'AM'
    document.getElementById('t4').innerHTML = c5 +  " " +'AM'
  }
  else if(c3 == 1 && am_or_pm == 'AM'){
    document.getElementById('t1').innerHTML = c2 +  " " +'AM'
    document.getElementById('t2').innerHTML = c3 +  " " +'PM'
    document.getElementById('t3').innerHTML = c4 +  " " +'PM'
    document.getElementById('t4').innerHTML = c5 + " " + 'PM'
  }
  else if(c4 == 1 && am_or_pm == 'AM'){
    document.getElementById('t1').innerHTML = c2 +  " " +'AM'
    document.getElementById('t2').innerHTML = c3 +  " " +'AM'
    document.getElementById('t3').innerHTML = c4 +  " " + 'PM'
    document.getElementById('t4').innerHTML = c5 +  " " + 'PM' 
  }
  else if(c4 == 1 && am_or_pm == 'PM'){
    document.getElementById('t1').innerHTML = c2 +  " " + 'PM'
    document.getElementById('t2').innerHTML = c3 +  " " +'PM'
    document.getElementById('t3').innerHTML = c4 +  " " +'AM'
    document.getElementById('t4').innerHTML = c5 +  " " +'AM' 
  }
  else if(c5 == 1 && am_or_pm == 'AM'){
    document.getElementById('t1').innerHTML = c2 +  " " +'AM'
    document.getElementById('t2').innerHTML = c3 +  " " +'AM'
    document.getElementById('t3').innerHTML = c4 +  " " +'AM'
    document.getElementById('t4').innerHTML = c5 +  " " +'PM' 
  }
  else if(c5 == 1 && am_or_pm == 'PM'){
    document.getElementById('t1').innerHTML = c2 + " " + 'PM'
    document.getElementById('t2').innerHTML = c3 + " " +'PM'
    document.getElementById('t3').innerHTML = c4 + " " +'PM'
    document.getElementById('t4').innerHTML = c5 + " " +'AM' 
  }
  else{
    document.getElementById('t1').innerHTML = c2 + " " + am_or_pm
    document.getElementById('t2').innerHTML = c3 + " " + am_or_pm
    document.getElementById('t3').innerHTML = c4 + " " + am_or_pm
    document.getElementById('t4').innerHTML = c5 + " " + am_or_pm
  }
}
var inherit_city;
child_index.prototype = Object.create(parent_index.prototype);
/**
 * @desc when the city is selected from the drop down
 */
document.getElementById('cities').onchange = function () {
  if (this.value == 'Anadyr') {
     inherit_city = new parent_index(this.value);
     inherit_city.print_city();
  } 
  else if (this.value == 'Auckland') {
    inherit_city = new parent_index(this.value);
    inherit_city.print_city();
  } 
  else if (this.value == 'BangKok') {
    inherit_city = new parent_index(this.value);
    inherit_city.print_city();   
  } 
  else if (this.value == 'BrokenHill') {
    inherit_city = new parent_index(this.value);
     inherit_city.print_city();     
  } 
  else if (this.value == 'Dublin') {
    inherit_city = new parent_index(this.value);
    inherit_city.print_city();  
  } 
  else if (this.value == 'Jamaica') {
    inherit_city = new parent_index(this.value);
    inherit_city.print_city();
  } 
  else if (this.value == 'Juba') {
    inherit_city = new parent_index(this.value);
    inherit_city.print_city();
  } 
  else if (this.value == 'Karachi') {
    inherit_city = new parent_index(this.value);
    inherit_city.print_city();
  } 
  else if (this.value == 'Kolkata') {
    inherit_city = new parent_index(this.value);
    inherit_city.print_city();     
  } 
  else if (this.value == 'London') {
    inherit_city = new parent_index(this.value);
    inherit_city.print_city();
  } 
  else if (this.value == 'LosAngeles') {
    inherit_city = new parent_index(this.value);
    inherit_city.print_city();    
  } 
  else if (this.value == 'Maseru') {     
    inherit_city = new parent_index(this.value);
    inherit_city.print_city();    
  } 
  else if (this.value == 'Moscow') {
    inherit_city = new parent_index(this.value);
    inherit_city.print_city();
  } 
  else if (this.value == 'NewYork') {
    inherit_city = new parent_index(this.value);
    inherit_city.print_city();
  } 
  else if (this.value == 'Nome') {
    inherit_city = new parent_index(this.value);
    inherit_city.print_city();
  } 
  else if (this.value == 'Perth') {
    inherit_city = new parent_index(this.value);
    inherit_city.print_city();
  } 
  else if (this.value == 'Seoul') {
    inherit_city = new parent_index(this.value);
    inherit_city.print_city();
  } 
  else if (this.value == 'Troll') {
    inherit_city = new parent_index(this.value);
    inherit_city.print_city();
  } 
  else if (this.value == 'Vienna') {
    inherit_city = new parent_index(this.value);
    inherit_city.print_city();
  } 
  else if (this.value == 'Vostok') {
    inherit_city = new parent_index(this.value);
    inherit_city.print_city();
  } 
  else if (this.value == 'Winnipeg') {     
    inherit_city = new parent_index(this.value);
    inherit_city.print_city();
  } 
  else if (this.value == 'Yangon') {         
    inherit_city = new parent_index(this.value);
    inherit_city.print_city();
  } 
  else {
        const img1 = document.getElementById('icon-change')
        img1.setAttribute('src', './././img/warning.svg')
        document.getElementById('precip1').innerHTML = '-'
        document.getElementById('temp1').innerHTML = '-'
        document.getElementById('date').innerHTML = '-'
        document.getElementById('time1').innerHTML = '-'
        document.getElementById('humid1').innerHTML = '-'
        document.getElementById('temp2').innerHTML = '-'
        document.getElementById('cloud0').innerHTML = '-'
        document.getElementById('cloud1').innerHTML = '-'
        document.getElementById('cloud2').innerHTML = '-'
        document.getElementById('cloud3').innerHTML = '-'
        document.getElementById('cloud4').innerHTML = '-'
        const img_am_pm = document.getElementById('am-pm')
        img_am_pm.setAttribute('src', null)
        document.getElementById('now').innerHTML = '-'
        document.getElementById('t1').innerHTML = '-'
        document.getElementById('t2').innerHTML = '-'
        document.getElementById('t3').innerHTML = '-'
        document.getElementById('t4').innerHTML = '-'
  }
}