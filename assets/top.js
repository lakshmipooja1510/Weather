// ............................................... JSON Object.................................................
var data ='{"nome":{"cityName":"Nome","dateAndTime":"3/31/2020, 9:21:46 PM","timeZone":"America/Nome","temperature":"4°C","humidity":"91%","precipitation":"8%","nextFiveHrs":["6°C","7°C","11°C","2°C"]},"newyork":{"cityName":"NewYork","dateAndTime":"4/1/2020, 1:21:46 AM","timeZone":"America/New_york","temperature":"23°C","humidity":"52%","precipitation":"46%","nextFiveHrs":["18°C","20°C","18°C","17°C"]},"jamaica":{"cityName":"Jamaica","dateAndTime":"4/1/2020, 12:21:46 AM","timeZone":"America/Jamaica","temperature":"29°C","humidity":"39%","precipitation":"58%","nextFiveHrs":["24°C","27°C","28°C","24°C"]},"losangeles":{"cityName":"LosAngeles","dateAndTime":"3/31/2020, 10:21:46 PM","timeZone":"America/Los_Angeles","temperature":"23°C","humidity":"52%","precipitation":"46%","nextFiveHrs":["19°C","21°C","23°C","18°C"]},"winnipeg":{"cityName":"Winnipeg","dateAndTime":"4/1/2020, 12:21:46 AM","timeZone":"America/Winnipeg","temperature":"9°C","humidity":"81%","precipitation":"18%","nextFiveHrs":["3°C","7°C","4°C","-1°C"]},"juba":{"cityName":"Juba","dateAndTime":"4/1/2020, 8:21:46 AM","timeZone":"Africa/Juba","temperature":"18°C","humidity":"62%","precipitation":"36%","nextFiveHrs":["37°C","41°C","38°C","37°C"]},"maseru":{"cityName":"Maseru","dateAndTime":"4/1/2020, 7:21:46 AM","timeZone":"Africa/Maseru","temperature":"43°C","humidity":"10%","precipitation":"86%","nextFiveHrs":["17°C","17°C","19°C","15°C"]},"london":{"cityName":"London","dateAndTime":"4/1/2020, 6:21:46 AM","timeZone":"Europe/London","temperature":"7°C","humidity":"85%","precipitation":"14%","nextFiveHrs":["-7°C","-6°C","-5°C","-10°C"]},"vienna":{"cityName":"Vienna","dateAndTime":"4/1/2020, 7:21:46 AM","timeZone":"Europe/Vienna","temperature":"10°C","humidity":"79%","precipitation":"20%","nextFiveHrs":["-1°C","-1°C","4°C","-2°C"]},"moscow":{"cityName":"Moscow","dateAndTime":"4/1/2020, 8:21:46 AM","timeZone":"Europe/Moscow","temperature":"11°C","humidity":"77%","precipitation":"22%","nextFiveHrs":["12°C","14°C","15°C","8°C"]},"dublin":{"cityName":"Dublin","dateAndTime":"4/1/2020, 6:21:46 AM","timeZone":"Europe/Dublin","temperature":"15°C","humidity":"68%","precipitation":"30%","nextFiveHrs":["24°C","28°C","29°C","21°C"]},"karachi":{"cityName":"Karachi","dateAndTime":"4/1/2020, 10:21:46 AM","timeZone":"Asia/Karachi","temperature":"25°C","humidity":"47%","precipitation":"50%","nextFiveHrs":["21°C","24°C","21°C","19°C"]},"kolkata":{"cityName":"Kolkata","dateAndTime":"4/1/2020, 10:51:46 AM","timeZone":"Asia/Kolkata","temperature":"34°C","humidity":"29%","precipitation":"68%","nextFiveHrs":["33°C","35°C","37°C","32°C"]},"yangon":{"cityName":"Yangon","dateAndTime":"4/1/2020, 11:51:46 AM","timeZone":"Asia/Yangon","temperature":"24°C","humidity":"50%","precipitation":"48%","nextFiveHrs":["31°C","32°C","36°C","27°C"]},"bangkok":{"cityName":"BangKok","dateAndTime":"4/1/2020, 12:21:46 PM","timeZone":"Asia/BangKok","temperature":"32°C","humidity":"33%","precipitation":"64%","nextFiveHrs":["32°C","34°C","32°C","32°C"]},"seoul":{"cityName":"Seoul","dateAndTime":"4/1/2020, 2:21:46 PM","timeZone":"Asia/Seoul","temperature":"6°C","humidity":"87%","precipitation":"12%","nextFiveHrs":["1°C","1°C","3°C","0°C"]},"anadyr":{"cityName":"Anadyr","dateAndTime":"4/1/2020, 5:21:46 PM","timeZone":"Asia/Anadyr","temperature":"-2°C","humidity":"100%","precipitation":"0%","nextFiveHrs":["-1°C","3°C","-1°C","-3°C"]},"brokenhill":{"cityName":"BrokenHill","dateAndTime":"4/1/2020, 3:51:46 PM","timeZone":"Australia/Broken_Hill","temperature":"10°C","humidity":"79%","precipitation":"20%","nextFiveHrs":["17°C","21°C","22°C","15°C"]},"perth":{"cityName":"Perth","dateAndTime":"4/1/2020, 1:21:46 PM","timeZone":"Australia/Perth","temperature":"18°C","humidity":"62%","precipitation":"36%","nextFiveHrs":["6°C","10°C","11°C","6°C"]},"auckland":{"cityName":"Auckland","dateAndTime":"4/1/2020, 6:21:46 PM","timeZone":"Pacific/Auckland","temperature":"17°C","humidity":"64%","precipitation":"34%","nextFiveHrs":["17°C","19°C","18°C","17°C"]},"vostok":{"cityName":"Vostok","dateAndTime":"4/1/2020, 11:21:46 AM","timeZone":"Antarctica/Vostok","temperature":"-61°C","humidity":"100%","precipitation":"0%","nextFiveHrs":["-64°C","-59°C","-64°C","-68°C"]},"troll":{"cityName":"Troll","dateAndTime":"4/1/2020, 7:21:46 AM","timeZone":"Antarctica/Troll","temperature":"-52°C","humidity":"100%","precipitation":"0%","nextFiveHrs":["-70°C","-70°C","-66°C","-71°C"]}}'
var parsedData = JSON.parse(data)
/**
 * @desc changes celcius to fahrenheit
 * @param {*} tempCel
 */
function celToFahr(tempCel) {
    return (parseInt(tempCel) * 9) / 5 + 32
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
;(function () {
    var dAndT = parsedData.anadyr.dateAndTime
    var temp = parsedData.anadyr.temperature
    var humid = parsedData.anadyr.humidity
    var precip = parsedData.anadyr.precipitation
    var d = dAndT.slice(0, 8)
    var t = dAndT.slice(9, 20)
    var c1 = parseInt(t.slice(0, 2))
    var fahr = celToFahr(temp)
    var hr1 = parsedData.anadyr.nextFiveHrs[0]
    var hr2 = parsedData.anadyr.nextFiveHrs[1]
    var hr3 = parsedData.anadyr.nextFiveHrs[2]
    var hr4 = parsedData.anadyr.nextFiveHrs[3]
    document.getElementById('temp1').innerHTML = temp
    document.getElementById('date').innerHTML = d
    document.getElementById('time1').innerHTML = t
    document.getElementById('humid1').innerHTML = humid
    document.getElementById('precip1').innerHTML = precip
    document.getElementById('now').innerHTML = 'NOW'
    document.getElementById('cloud0').innerHTML = temp
    document.getElementById('cloud1').innerHTML = hr1
    document.getElementById('cloud2').innerHTML = hr2
    document.getElementById('cloud3').innerHTML = hr3
    document.getElementById('cloud4').innerHTML = hr4
    document.getElementById('temp2').innerHTML = fahr
    document.getElementById('t1').innerHTML = c1 + 1 + ' ' + 'PM'
    document.getElementById('t2').innerHTML = c1 + 2 + ' ' + 'PM'
    document.getElementById('t3').innerHTML = c1 + 3 + ' ' + 'PM'
    document.getElementById('t4').innerHTML = c1 + 4 + ' ' + 'PM'
    const img_am_pm = document.getElementById('am-pm')
    img_am_pm.setAttribute('src', './././img/sunnyIcon.svg')
})()
/**
 * @desc when the city is selected from the drop down
 */
document.getElementById('cities').onchange = function () {
    if (this.value == 'Anadyr') {
        const img1 = document.getElementById('icon-change')
        img1.setAttribute('src', './././img/anadyr.svg')
        var dAndT = parsedData.anadyr.dateAndTime
        var temp = parsedData.anadyr.temperature
        var humid = parsedData.anadyr.humidity
        var precip = parsedData.anadyr.precipitation
        var fahr = celToFahr(temp)
        var hr1 = parsedData.anadyr.nextFiveHrs[0]
        var hr2 = parsedData.anadyr.nextFiveHrs[1]
        var hr3 = parsedData.anadyr.nextFiveHrs[2]
        var hr4 = parsedData.anadyr.nextFiveHrs[3]
        var d = dAndT.slice(0, 8)
        var t = dAndT.slice(9, 20)
        var c1 = parseInt(t.slice(0, 2))
        document.getElementById('precip1').innerHTML = precip
        document.getElementById('temp1').innerHTML = temp
        document.getElementById('date').innerHTML = d
        document.getElementById('time1').innerHTML = t
        document.getElementById('humid1').innerHTML = humid
        document.getElementById('temp2').innerHTML = fahr
        document.getElementById('cloud0').innerHTML = temp
        document.getElementById('cloud1').innerHTML = hr1
        document.getElementById('cloud2').innerHTML = hr2
        document.getElementById('cloud3').innerHTML = hr3
        document.getElementById('cloud4').innerHTML = hr4
        const _img2 = document.getElementById('img2')
        iconChange(temp, _img2)
        const _img3 = document.getElementById('img3')
        iconChange(hr1, _img3)
        const _img4 = document.getElementById('img4')
        iconChange(hr2, _img4)
        const _img5 = document.getElementById('img5')
        iconChange(hr3, _img5)
        const _img6 = document.getElementById('img6')
        iconChange(hr4, _img6)
        document.getElementById('now').innerHTML = 'NOW'
        document.getElementById('t1').innerHTML = c1 + 1 + ' ' + 'PM'
        document.getElementById('t2').innerHTML = c1 + 2 + ' ' + 'PM'
        document.getElementById('t3').innerHTML = c1 + 3 + ' ' + 'PM'
        document.getElementById('t4').innerHTML = c1 + 4 + ' ' + 'PM'
        const img_am_pm = document.getElementById('am-pm')
        img_am_pm.setAttribute('src', './././img/sunnyIcon.svg')
    } else if (this.value == 'Auckland') {
        const img1 = document.getElementById('icon-change')
        img1.setAttribute('src', './././img/auckland.svg')
        var dAndT = parsedData.auckland.dateAndTime
        var temp = parsedData.auckland.temperature
        var humid = parsedData.auckland.humidity
        var precip = parsedData.auckland.precipitation
        var d = dAndT.slice(0, 8)
        var t = dAndT.slice(9, 20)
        var c1 = parseInt(t.slice(0, 2))
        var fahr = celToFahr(temp)
        var hr1 = parsedData.auckland.nextFiveHrs[0]
        var hr2 = parsedData.auckland.nextFiveHrs[1]
        var hr3 = parsedData.auckland.nextFiveHrs[2]
        var hr4 = parsedData.auckland.nextFiveHrs[3]
        const _img2 = document.getElementById('img2')
        iconChange(temp, _img2)
        const _img3 = document.getElementById('img3')
        iconChange(hr1, _img3)
        const _img4 = document.getElementById('img4')
        iconChange(hr2, _img4)
        const _img5 = document.getElementById('img5')
        iconChange(hr3, _img5)
        const _img6 = document.getElementById('img6')
        iconChange(hr4, _img6)
        document.getElementById('temp1').innerHTML = temp
        document.getElementById('precip1').innerHTML = precip
        document.getElementById('date').innerHTML = d
        document.getElementById('time1').innerHTML = t
        document.getElementById('humid1').innerHTML = humid
        document.getElementById('temp2').innerHTML = fahr
        document.getElementById('now').innerHTML = 'NOW'
        document.getElementById('cloud0').innerHTML = temp
        document.getElementById('cloud1').innerHTML = hr1
        document.getElementById('cloud2').innerHTML = hr2
        document.getElementById('cloud3').innerHTML = hr3
        document.getElementById('cloud4').innerHTML = hr4
        document.getElementById('t1').innerHTML = c1 + 1 + ' ' + 'PM'
        document.getElementById('t2').innerHTML = c1 + 2 + ' ' + 'PM'
        document.getElementById('t3').innerHTML = c1 + 3 + ' ' + 'PM'
        document.getElementById('t4').innerHTML = c1 + 4 + ' ' + 'PM'
        const img_am_pm = document.getElementById('am-pm')
        img_am_pm.setAttribute('src', './././img/sunnyIcon.svg')
    } else if (this.value == 'Bangkok') {
        const img1 = document.getElementById('icon-change')
        img1.setAttribute('src', './././img/bangkok.svg')
        var dAndT = parsedData.bangkok.dateAndTime
        var humid = parsedData.bangkok.humidity
        var temp = parsedData.bangkok.temperature
        var precip = parsedData.bangkok.precipitation
        var d = dAndT.slice(0, 8)
        var t = dAndT.slice(9, 21)
        var c1 = parseInt(t.slice(0, 3))
        var fahr = celToFahr(temp)
        var hr1 = parsedData.bangkok.nextFiveHrs[0]
        var hr2 = parsedData.bangkok.nextFiveHrs[1]
        var hr3 = parsedData.bangkok.nextFiveHrs[2]
        var hr4 = parsedData.bangkok.nextFiveHrs[3]
        const _img2 = document.getElementById('img2')
        iconChange(temp, _img2)
        const _img3 = document.getElementById('img3')
        iconChange(hr1, _img3)
        const _img4 = document.getElementById('img4')
        iconChange(hr2, _img4)
        const _img5 = document.getElementById('img5')
        iconChange(hr3, _img5)
        const _img6 = document.getElementById('img6')
        iconChange(hr4, _img6)
        document.getElementById('temp1').innerHTML = temp
        document.getElementById('date').innerHTML = d
        document.getElementById('precip1').innerHTML = precip
        document.getElementById('time1').innerHTML = t
        document.getElementById('humid1').innerHTML = humid
        document.getElementById('temp2').innerHTML = fahr
        document.getElementById('now').innerHTML = 'NOW'
        document.getElementById('cloud0').innerHTML = temp
        document.getElementById('cloud1').innerHTML = hr1
        document.getElementById('cloud2').innerHTML = hr2
        document.getElementById('cloud3').innerHTML = hr3
        document.getElementById('cloud4').innerHTML = hr4
        if (c1 == 12) {
            document.getElementById('t1').innerHTML = c1 - 11 + ' ' + 'AM'
            document.getElementById('t2').innerHTML = c1 - 10 + ' ' + 'AM'
            document.getElementById('t3').innerHTML = c1 - 9 + ' ' + 'AM'
            document.getElementById('t4').innerHTML = c1 - 8 + ' ' + 'AM'
        }
        const img_am_pm = document.getElementById('am-pm')
        img_am_pm.setAttribute('src', './././img/sunnyIcon.svg')
    } else if (this.value == 'Broken Hill') {
        const img1 = document.getElementById('icon-change')
        img1.setAttribute('src', './././img/brokenhill.svg')
        var dAndT = parsedData.brokenhill.dateAndTime
        var temp = parsedData.brokenhill.temperature
        var humid = parsedData.brokenhill.humidity
        var precip = parsedData.brokenhill.precipitation
        var d = dAndT.slice(0, 8)
        var t = dAndT.slice(9, 20)
        var c1 = parseInt(t.slice(0, 3))
        var fahr = celToFahr(temp)
        var hr1 = parsedData.brokenhill.nextFiveHrs[0]
        var hr2 = parsedData.brokenhill.nextFiveHrs[1]
        var hr3 = parsedData.brokenhill.nextFiveHrs[2]
        var hr4 = parsedData.brokenhill.nextFiveHrs[3]
        const _img2 = document.getElementById('img2')
        iconChange(temp, _img2)
        const _img3 = document.getElementById('img3')
        iconChange(hr1, _img3)
        const _img4 = document.getElementById('img4')
        iconChange(hr2, _img4)
        const _img5 = document.getElementById('img5')
        iconChange(hr3, _img5)
        const _img6 = document.getElementById('img6')
        iconChange(hr4, _img6)
        document.getElementById('temp1').innerHTML = temp
        document.getElementById('date').innerHTML = d
        document.getElementById('time1').innerHTML = t
        document.getElementById('precip1').innerHTML = precip
        document.getElementById('humid1').innerHTML = humid
        document.getElementById('temp2').innerHTML = fahr
        document.getElementById('now').innerHTML = 'NOW'
        document.getElementById('cloud0').innerHTML = temp
        document.getElementById('cloud1').innerHTML = hr1
        document.getElementById('cloud2').innerHTML = hr2
        document.getElementById('cloud3').innerHTML = hr3
        document.getElementById('cloud4').innerHTML = hr4
        document.getElementById('t1').innerHTML = c1 + 1 + ' ' + 'PM'
        document.getElementById('t2').innerHTML = c1 + 2 + ' ' + 'PM'
        document.getElementById('t3').innerHTML = c1 + 3 + ' ' + 'PM'
        document.getElementById('t4').innerHTML = c1 + 4 + ' ' + 'PM'
        const img_am_pm = document.getElementById('am-pm')
        img_am_pm.setAttribute('src', './././img/sunnyIcon.svg')
    } else if (this.value == 'Dublin') {
        const img1 = document.getElementById('icon-change')
        img1.setAttribute('src', './././img/dublin.svg')
        var dAndT = parsedData.dublin.dateAndTime
        var humid = parsedData.dublin.humidity
        var precip = parsedData.dublin.precipitation
        var temp = parsedData.dublin.temperature
        var d = dAndT.slice(0, 8)
        var t = dAndT.slice(9, 20)
        var c1 = parseInt(t.slice(0, 3))
        var fahr = celToFahr(temp)
        var hr1 = parsedData.dublin.nextFiveHrs[0]
        var hr2 = parsedData.dublin.nextFiveHrs[1]
        var hr3 = parsedData.dublin.nextFiveHrs[2]
        var hr4 = parsedData.dublin.nextFiveHrs[3]
        const _img2 = document.getElementById('img2')
        iconChange(temp, _img2)
        const _img3 = document.getElementById('img3')
        iconChange(hr1, _img3)
        const _img4 = document.getElementById('img4')
        iconChange(hr2, _img4)
        const _img5 = document.getElementById('img5')
        iconChange(hr3, _img5)
        const _img6 = document.getElementById('img6')
        iconChange(hr4, _img6)
        document.getElementById('temp1').innerHTML = temp
        document.getElementById('date').innerHTML = d
        document.getElementById('time1').innerHTML = t
        document.getElementById('humid1').innerHTML = humid
        document.getElementById('precip1').innerHTML = precip
        document.getElementById('temp2').innerHTML = fahr
        document.getElementById('now').innerHTML = 'NOW'
        document.getElementById('cloud0').innerHTML = temp
        document.getElementById('cloud1').innerHTML = hr1
        document.getElementById('cloud2').innerHTML = hr2
        document.getElementById('cloud3').innerHTML = hr3
        document.getElementById('cloud4').innerHTML = hr4
        document.getElementById('t1').innerHTML = c1 + 1 + ' ' + 'AM'
        document.getElementById('t2').innerHTML = c1 + 2 + ' ' + 'AM'
        document.getElementById('t3').innerHTML = c1 + 3 + ' ' + 'AM'
        document.getElementById('t4').innerHTML = c1 + 4 + ' ' + 'AM'
        const img_am_pm = document.getElementById('am-pm')
        img_am_pm.setAttribute('src', './././img/sunnyIcon.svg')
    } else if (this.value == 'Jamaica') {
        const img1 = document.getElementById('icon-change')
        img1.setAttribute('src', './././img/jamaica.svg')
        var dAndT = parsedData.jamaica.dateAndTime
        var humid = parsedData.jamaica.humidity
        var precip = parsedData.jamaica.precipitation
        var temp = parsedData.jamaica.temperature
        var d = dAndT.slice(0, 8)
        var t = dAndT.slice(9, 21)
        var c1 = parseInt(t.slice(0, 3))
        var fahr = celToFahr(temp)
        var hr1 = parsedData.jamaica.nextFiveHrs[0]
        var hr2 = parsedData.jamaica.nextFiveHrs[1]
        var hr3 = parsedData.jamaica.nextFiveHrs[2]
        var hr4 = parsedData.jamaica.nextFiveHrs[3]
        const _img2 = document.getElementById('img2')
        iconChange(temp, _img2)
        const _img3 = document.getElementById('img3')
        iconChange(hr1, _img3)
        const _img4 = document.getElementById('img4')
        iconChange(hr2, _img4)
        const _img5 = document.getElementById('img5')
        iconChange(hr3, _img5)
        const _img6 = document.getElementById('img6')
        iconChange(hr4, _img6)
        document.getElementById('precip1').innerHTML = precip
        document.getElementById('temp1').innerHTML = temp
        document.getElementById('date').innerHTML = d
        document.getElementById('temp2').innerHTML = fahr
        document.getElementById('humid1').innerHTML = humid
        document.getElementById('time1').innerHTML = t
        document.getElementById('now').innerHTML = 'NOW'
        document.getElementById('cloud0').innerHTML = temp
        document.getElementById('cloud1').innerHTML = hr1
        document.getElementById('cloud2').innerHTML = hr2
        document.getElementById('cloud3').innerHTML = hr3
        document.getElementById('cloud4').innerHTML = hr4
        document.getElementById('t1').innerHTML = c1 - 11 + ' ' + 'PM'
        document.getElementById('t2').innerHTML = c1 - 10 + ' ' + 'PM'
        document.getElementById('t3').innerHTML = c1 - 9 + ' ' + 'PM'
        document.getElementById('t4').innerHTML = c1 - 8 + ' ' + 'PM'
        const img_am_pm = document.getElementById('am-pm')
        img_am_pm.setAttribute('src', './././img/sunnyIcon.svg')
    } else if (this.value == 'Juba') {
        const img1 = document.getElementById('icon-change')
        img1.setAttribute('src', './././img/juba.svg')
        var dAndT = parsedData.juba.dateAndTime
        var temp = parsedData.juba.temperature
        var humid = parsedData.juba.humidity
        var precip = parsedData.juba.precipitation
        var d = dAndT.slice(0, 8)
        var t = dAndT.slice(9, 20)
        var c1 = parseInt(t.slice(0, 3))
        var fahr = celToFahr(temp)
        var hr1 = parsedData.juba.nextFiveHrs[0]
        var hr2 = parsedData.juba.nextFiveHrs[1]
        var hr3 = parsedData.juba.nextFiveHrs[2]
        var hr4 = parsedData.juba.nextFiveHrs[3]
        const _img2 = document.getElementById('img2')
        iconChange(temp, _img2)
        const _img3 = document.getElementById('img3')
        iconChange(hr1, _img3)
        const _img4 = document.getElementById('img4')
        iconChange(hr2, _img4)
        const _img5 = document.getElementById('img5')
        iconChange(hr3, _img5)
        const _img6 = document.getElementById('img6')
        iconChange(hr4, _img6)
        document.getElementById('temp1').innerHTML = temp
        document.getElementById('precip1').innerHTML = precip
        document.getElementById('date').innerHTML = d
        document.getElementById('humid1').innerHTML = humid
        document.getElementById('time1').innerHTML = t
        document.getElementById('temp2').innerHTML = fahr
        document.getElementById('now').innerHTML = 'NOW'
        document.getElementById('cloud0').innerHTML = temp
        document.getElementById('cloud1').innerHTML = hr1
        document.getElementById('cloud2').innerHTML = hr2
        document.getElementById('cloud3').innerHTML = hr3
        document.getElementById('cloud4').innerHTML = hr4
        document.getElementById('t1').innerHTML = c1 + 1 + ' ' + 'AM'
        document.getElementById('t2').innerHTML = c1 + 2 + ' ' + 'AM'
        document.getElementById('t3').innerHTML = c1 + 3 + ' ' + 'AM'
        document.getElementById('t4').innerHTML = c1 + 4 + ' ' + 'AM'
        const img_am_pm = document.getElementById('am-pm')
        img_am_pm.setAttribute('src', './././img/sunnyIcon.svg')
    } else if (this.value == 'Karachi') {
        const img1 = document.getElementById('icon-change')
        img1.setAttribute('src', './././img/karachi.svg')
        var dAndT = parsedData.karachi.dateAndTime
        var humid = parsedData.karachi.humidity
        var temp = parsedData.karachi.temperature
        var precip = parsedData.karachi.precipitation
        var d = dAndT.slice(0, 8)
        var t = dAndT.slice(9, 21)
        var c1 = parseInt(t.slice(0, 3))
        var fahr = celToFahr(temp)
        var hr1 = parsedData.karachi.nextFiveHrs[0]
        var hr2 = parsedData.karachi.nextFiveHrs[1]
        var hr3 = parsedData.karachi.nextFiveHrs[2]
        var hr4 = parsedData.karachi.nextFiveHrs[3]
        const _img2 = document.getElementById('img2')
        iconChange(temp, _img2)
        const _img3 = document.getElementById('img3')
        iconChange(hr1, _img3)
        const _img4 = document.getElementById('img4')
        iconChange(hr2, _img4)
        const _img5 = document.getElementById('img5')
        iconChange(hr3, _img5)
        const _img6 = document.getElementById('img6')
        iconChange(hr4, _img6)
        document.getElementById('temp1').innerHTML = temp
        document.getElementById('humid1').innerHTML = humid
        document.getElementById('precip1').innerHTML = precip
        document.getElementById('date').innerHTML = d
        document.getElementById('time1').innerHTML = t
        document.getElementById('temp2').innerHTML = fahr
        document.getElementById('now').innerHTML = 'NOW'
        document.getElementById('cloud0').innerHTML = temp
        document.getElementById('cloud1').innerHTML = hr1
        document.getElementById('cloud2').innerHTML = hr2
        document.getElementById('cloud3').innerHTML = hr3
        document.getElementById('cloud4').innerHTML = hr4
        document.getElementById('t1').innerHTML = c1 + 1 + ' ' + 'AM'
        document.getElementById('t2').innerHTML = c1 + 2 + ' ' + 'PM'
        document.getElementById('t3').innerHTML = c1 - 9 + ' ' + 'PM'
        document.getElementById('t4').innerHTML = c1 - 8 + ' ' + 'PM'
        const img_am_pm = document.getElementById('am-pm')
        img_am_pm.setAttribute('src', './././img/sunnyIcon.svg')
    } else if (this.value == 'Kolkata') {
        const img1 = document.getElementById('icon-change')
        img1.setAttribute('src', './././img/kolkata.svg')
        var dAndT = parsedData.kolkata.dateAndTime
        var temp = parsedData.kolkata.temperature
        var humid = parsedData.kolkata.humidity
        var precip = parsedData.kolkata.precipitation
        var d = dAndT.slice(0, 8)
        var t = dAndT.slice(9, 21)
        var c1 = parseInt(t.slice(0, 3))
        var fahr = celToFahr(temp)
        var hr1 = parsedData.kolkata.nextFiveHrs[0]
        var hr2 = parsedData.kolkata.nextFiveHrs[1]
        var hr3 = parsedData.kolkata.nextFiveHrs[2]
        var hr4 = parsedData.kolkata.nextFiveHrs[3]
        const _img2 = document.getElementById('img2')
        iconChange(temp, _img2)
        const _img3 = document.getElementById('img3')
        iconChange(hr1, _img3)
        const _img4 = document.getElementById('img4')
        iconChange(hr2, _img4)
        const _img5 = document.getElementById('img5')
        iconChange(hr3, _img5)
        const _img6 = document.getElementById('img6')
        iconChange(hr4, _img6)
        document.getElementById('humid1').innerHTML = humid
        document.getElementById('temp1').innerHTML = temp
        document.getElementById('temp2').innerHTML = fahr
        document.getElementById('date').innerHTML = d
        document.getElementById('precip1').innerHTML = precip
        document.getElementById('time1').innerHTML = t
        document.getElementById('now').innerHTML = 'NOW'
        document.getElementById('cloud0').innerHTML = temp
        document.getElementById('cloud1').innerHTML = hr1
        document.getElementById('cloud2').innerHTML = hr2
        document.getElementById('cloud3').innerHTML = hr3
        document.getElementById('cloud4').innerHTML = hr4
        document.getElementById('t1').innerHTML = c1 + 1 + ' ' + 'AM'
        document.getElementById('t2').innerHTML = c1 + 2 + ' ' + 'PM'
        document.getElementById('t3').innerHTML = c1 - 9 + ' ' + 'PM'
        document.getElementById('t4').innerHTML = c1 - 8 + ' ' + 'PM'
        const img_am_pm = document.getElementById('am-pm')
        img_am_pm.setAttribute('src', './././img/sunnyIcon.svg')
    } else if (this.value == 'London') {
        const img1 = document.getElementById('icon-change')
        img1.setAttribute('src', './././img/london.svg')
        var dAndT = parsedData.london.dateAndTime
        var humid = parsedData.london.humidity
        var temp = parsedData.london.temperature
        var precip = parsedData.london.precipitation
        var d = dAndT.slice(0, 8)
        var t = dAndT.slice(9, 20)
        var c1 = parseInt(t.slice(0, 3))
        var fahr = celToFahr(temp)
        var hr1 = parsedData.london.nextFiveHrs[0]
        var hr2 = parsedData.london.nextFiveHrs[1]
        var hr3 = parsedData.london.nextFiveHrs[2]
        var hr4 = parsedData.london.nextFiveHrs[3]
        const _img2 = document.getElementById('img2')
        iconChange(temp, _img2)
        const _img3 = document.getElementById('img3')
        iconChange(hr1, _img3)
        const _img4 = document.getElementById('img4')
        iconChange(hr2, _img4)
        const _img5 = document.getElementById('img5')
        iconChange(hr3, _img5)
        const _img6 = document.getElementById('img6')
        iconChange(hr4, _img6)
        document.getElementById('humid1').innerHTML = humid
        document.getElementById('temp1').innerHTML = temp
        document.getElementById('date').innerHTML = d
        document.getElementById('time1').innerHTML = t
        document.getElementById('precip1').innerHTML = precip
        document.getElementById('temp2').innerHTML = fahr
        document.getElementById('now').innerHTML = 'NOW'
        document.getElementById('cloud0').innerHTML = temp
        document.getElementById('cloud1').innerHTML = hr1
        document.getElementById('cloud2').innerHTML = hr2
        document.getElementById('cloud3').innerHTML = hr3
        document.getElementById('cloud4').innerHTML = hr4
        document.getElementById('t1').innerHTML = c1 + 1 + ' ' + 'AM'
        document.getElementById('t2').innerHTML = c1 + 2 + ' ' + 'AM'
        document.getElementById('t3').innerHTML = c1 + 3 + ' ' + 'AM'
        document.getElementById('t4').innerHTML = c1 + 4 + ' ' + 'AM'
        const img_am_pm = document.getElementById('am-pm')
        img_am_pm.setAttribute('src', './././img/sunnyIcon.svg')
    } else if (this.value == 'Los Angeles') {
        const img1 = document.getElementById('icon-change')
        img1.setAttribute('src', './././img/losangeles.svg')
        var dAndT = parsedData.losangeles.dateAndTime
        var temp = parsedData.losangeles.temperature
        var humid = parsedData.losangeles.humidity
        var precip = parsedData.losangeles.precipitation
        var d = dAndT.slice(0, 9)
        var t = dAndT.slice(11, 22)
        var c1 = parseInt(t.slice(0, 3))
        var fahr = celToFahr(temp)
        var hr1 = parsedData.losangeles.nextFiveHrs[0]
        var hr2 = parsedData.losangeles.nextFiveHrs[1]
        var hr3 = parsedData.losangeles.nextFiveHrs[2]
        var hr4 = parsedData.losangeles.nextFiveHrs[3]
        const _img2 = document.getElementById('img2')
        iconChange(temp, _img2)
        const _img3 = document.getElementById('img3')
        iconChange(hr1, _img3)
        const _img4 = document.getElementById('img4')
        iconChange(hr2, _img4)
        const _img5 = document.getElementById('img5')
        iconChange(hr3, _img5)
        const _img6 = document.getElementById('img6')
        iconChange(hr4, _img6)
        document.getElementById('temp1').innerHTML = temp
        document.getElementById('humid1').innerHTML = humid
        document.getElementById('date').innerHTML = d
        document.getElementById('time1').innerHTML = t
        document.getElementById('temp2').innerHTML = fahr
        document.getElementById('precip1').innerHTML = precip
        document.getElementById('now').innerHTML = 'NOW'
        document.getElementById('cloud0').innerHTML = temp
        document.getElementById('cloud1').innerHTML = hr1
        document.getElementById('cloud2').innerHTML = hr2
        document.getElementById('cloud3').innerHTML = hr3
        document.getElementById('cloud4').innerHTML = hr4
        document.getElementById('t1').innerHTML = c1 + 1 + ' ' + 'AM'
        document.getElementById('t2').innerHTML = c1 + 2 + ' ' + 'AM'
        document.getElementById('t3').innerHTML = c1 + 3 + ' ' + 'AM'
        document.getElementById('t4').innerHTML = c1 + 4 + ' ' + 'AM'
        const img_am_pm = document.getElementById('am-pm')
        img_am_pm.setAttribute('src', './././img/sunnyIcon.svg')
    } else if (this.value == 'Maseru') {
        const img1 = document.getElementById('icon-change')
        img1.setAttribute('src', './././img/maseru.svg')

        var dAndT = parsedData.maseru.dateAndTime
        var temp = parsedData.maseru.temperature
        var precip = parsedData.maseru.precipitation
        var humid = parsedData.maseru.humidity
        var d = dAndT.slice(0, 8)
        var t = dAndT.slice(9, 20)
        var c1 = parseInt(t.slice(0, 2))
        var fahr = celToFahr(temp)

        var hr1 = parsedData.maseru.nextFiveHrs[0]
        var hr2 = parsedData.maseru.nextFiveHrs[1]
        var hr3 = parsedData.maseru.nextFiveHrs[2]
        var hr4 = parsedData.maseru.nextFiveHrs[3]

        const _img2 = document.getElementById('img2')
        iconChange(temp, _img2)
        const _img3 = document.getElementById('img3')
        iconChange(hr1, _img3)
        const _img4 = document.getElementById('img4')
        iconChange(hr2, _img4)
        const _img5 = document.getElementById('img5')
        iconChange(hr3, _img5)
        const _img6 = document.getElementById('img6')
        iconChange(hr4, _img6)

        document.getElementById('precip1').innerHTML = precip
        document.getElementById('temp1').innerHTML = temp
        document.getElementById('date').innerHTML = d
        document.getElementById('temp2').innerHTML = fahr
        document.getElementById('humid1').innerHTML = humid
        document.getElementById('time1').innerHTML = t

        document.getElementById('now').innerHTML = 'NOW'
        document.getElementById('cloud0').innerHTML = temp
        document.getElementById('cloud1').innerHTML = hr1
        document.getElementById('cloud2').innerHTML = hr2
        document.getElementById('cloud3').innerHTML = hr3
        document.getElementById('cloud4').innerHTML = hr4

        document.getElementById('t1').innerHTML = c1 + 1 + ' ' + 'AM'
        document.getElementById('t2').innerHTML = c1 + 2 + ' ' + 'AM'
        document.getElementById('t3').innerHTML = c1 + 3 + ' ' + 'AM'
        document.getElementById('t4').innerHTML = c1 + 4 + ' ' + 'AM'

        const img_am_pm = document.getElementById('am-pm')
        img_am_pm.setAttribute('src', './././img/sunnyIcon.svg')
    } else if (this.value == 'Moscow') {
        const img1 = document.getElementById('icon-change')
        img1.setAttribute('src', './././img/moscow.svg')

        var dAndT = parsedData.moscow.dateAndTime
        var humid = parsedData.moscow.humidity
        var precip = parsedData.moscow.precipitation
        var temp = parsedData.moscow.temperature
        var d = dAndT.slice(0, 8)
        var t = dAndT.slice(9, 20)
        var c1 = parseInt(t.slice(0, 3))
        var fahr = celToFahr(temp)

        var hr1 = parsedData.moscow.nextFiveHrs[0]
        var hr2 = parsedData.moscow.nextFiveHrs[1]
        var hr3 = parsedData.moscow.nextFiveHrs[2]
        var hr4 = parsedData.moscow.nextFiveHrs[3]

        const _img2 = document.getElementById('img2')
        iconChange(temp, _img2)
        const _img3 = document.getElementById('img3')
        iconChange(hr1, _img3)
        const _img4 = document.getElementById('img4')
        iconChange(hr2, _img4)
        const _img5 = document.getElementById('img5')
        iconChange(hr3, _img5)
        const _img6 = document.getElementById('img6')
        iconChange(hr4, _img6)

        document.getElementById('temp1').innerHTML = temp
        document.getElementById('precip1').innerHTML = precip
        document.getElementById('date').innerHTML = d
        document.getElementById('time1').innerHTML = t
        document.getElementById('humid1').innerHTML = humid
        document.getElementById('temp2').innerHTML = fahr

        document.getElementById('now').innerHTML = 'NOW'
        document.getElementById('cloud0').innerHTML = temp
        document.getElementById('cloud1').innerHTML = hr1
        document.getElementById('cloud2').innerHTML = hr2
        document.getElementById('cloud3').innerHTML = hr3
        document.getElementById('cloud4').innerHTML = hr4

        document.getElementById('t1').innerHTML = c1 + 1 + ' ' + 'AM'
        document.getElementById('t2').innerHTML = c1 + 2 + ' ' + 'AM'
        document.getElementById('t3').innerHTML = c1 + 3 + ' ' + 'AM'
        document.getElementById('t4').innerHTML = c1 + 4 + ' ' + 'PM'

        const img_am_pm = document.getElementById('am-pm')
        img_am_pm.setAttribute('src', './././img/sunnyIcon.svg')
    } else if (this.value == 'New York') {
        const img1 = document.getElementById('icon-change')
        img1.setAttribute('src', './././img/newyork.svg')

        var dAndT = parsedData.newyork.dateAndTime
        var temp = parsedData.newyork.temperature
        var precip = parsedData.newyork.precipitation
        var humid = parsedData.newyork.humidity
        var d = dAndT.slice(0, 8)
        var t = dAndT.slice(9, 20)
        var c1 = parseInt(t.slice(0, 3))
        var fahr = celToFahr(temp)

        var hr1 = parsedData.newyork.nextFiveHrs[0]
        var hr2 = parsedData.newyork.nextFiveHrs[1]
        var hr3 = parsedData.newyork.nextFiveHrs[2]
        var hr4 = parsedData.newyork.nextFiveHrs[3]

        const _img2 = document.getElementById('img2')
        iconChange(temp, _img2)
        const _img3 = document.getElementById('img3')
        iconChange(hr1, _img3)
        const _img4 = document.getElementById('img4')
        iconChange(hr2, _img4)
        const _img5 = document.getElementById('img5')
        iconChange(hr3, _img5)
        const _img6 = document.getElementById('img6')
        iconChange(hr4, _img6)

        document.getElementById('humid1').innerHTML = humid
        document.getElementById('temp1').innerHTML = temp
        document.getElementById('precip1').innerHTML = precip
        document.getElementById('date').innerHTML = d
        document.getElementById('time1').innerHTML = t
        document.getElementById('temp2').innerHTML = fahr

        document.getElementById('now').innerHTML = 'NOW'
        document.getElementById('cloud0').innerHTML = temp
        document.getElementById('cloud1').innerHTML = hr1
        document.getElementById('cloud2').innerHTML = hr2
        document.getElementById('cloud3').innerHTML = hr3
        document.getElementById('cloud4').innerHTML = hr4

        document.getElementById('t1').innerHTML = c1 + 1 + ' ' + 'AM'
        document.getElementById('t2').innerHTML = c1 + 2 + ' ' + 'AM'
        document.getElementById('t3').innerHTML = c1 + 3 + ' ' + 'AM'
        document.getElementById('t4').innerHTML = c1 + 4 + ' ' + 'AM'

        const img_am_pm = document.getElementById('am-pm')
        img_am_pm.setAttribute('src', './././img/sunnyIcon.svg')
    } else if (this.value == 'Nome') {
        const img1 = document.getElementById('icon-change')
        img1.setAttribute('src', './././img/nome.svg')

        var dAndT = parsedData.nome.dateAndTime
        var humid = parsedData.nome.humidity
        var precip = parsedData.nome.precipitation
        var temp = parsedData.nome.temperature
        var d = dAndT.slice(0, 9)
        var t = dAndT.slice(10, 22)
        var c1 = parseInt(t.slice(0, 3))
        var fahr = celToFahr(temp)

        var hr1 = parsedData.nome.nextFiveHrs[0]
        var hr2 = parsedData.nome.nextFiveHrs[1]
        var hr3 = parsedData.nome.nextFiveHrs[2]
        var hr4 = parsedData.nome.nextFiveHrs[3]

        const _img2 = document.getElementById('img2')
        iconChange(temp, _img2)
        const _img3 = document.getElementById('img3')
        iconChange(hr1, _img3)
        const _img4 = document.getElementById('img4')
        iconChange(hr2, _img4)
        const _img5 = document.getElementById('img5')
        iconChange(hr3, _img5)
        const _img6 = document.getElementById('img6')
        iconChange(hr4, _img6)

        document.getElementById('temp1').innerHTML = temp
        document.getElementById('date').innerHTML = d
        document.getElementById('humid1').innerHTML = humid
        document.getElementById('temp2').innerHTML = fahr
        document.getElementById('precip1').innerHTML = precip
        document.getElementById('time1').innerHTML = t

        document.getElementById('now').innerHTML = 'NOW'
        document.getElementById('cloud0').innerHTML = temp
        document.getElementById('cloud1').innerHTML = hr1
        document.getElementById('cloud2').innerHTML = hr2
        document.getElementById('cloud3').innerHTML = hr3
        document.getElementById('cloud4').innerHTML = hr4

        document.getElementById('t1').innerHTML = c1 + 1 + ' ' + 'AM'
        document.getElementById('t2').innerHTML = c1 + 2 + ' ' + 'AM'
        document.getElementById('t3').innerHTML = c1 + 3 + ' ' + 'AM'
        document.getElementById('t4').innerHTML = c1 + 4 + ' ' + 'AM'

        const img_am_pm = document.getElementById('am-pm')
        img_am_pm.setAttribute('src', './././img/sunnyIcon.svg')
    } else if (this.value == 'Perth') {
        const img1 = document.getElementById('icon-change')
        img1.setAttribute('src', './././img/perth.svg')

        var dAndT = parsedData.perth.dateAndTime
        var humid = parsedData.perth.humidity
        var precip = parsedData.perth.precipitation
        var temp = parsedData.perth.temperature
        var d = dAndT.slice(0, 8)
        var t = dAndT.slice(9, 20)
        var c1 = parseInt(t.slice(0, 3))
        var fahr = celToFahr(temp)

        var hr1 = parsedData.perth.nextFiveHrs[0]
        var hr2 = parsedData.perth.nextFiveHrs[1]
        var hr3 = parsedData.perth.nextFiveHrs[2]
        var hr4 = parsedData.perth.nextFiveHrs[3]

        const _img2 = document.getElementById('img2')
        iconChange(temp, _img2)
        const _img3 = document.getElementById('img3')
        iconChange(hr1, _img3)
        const _img4 = document.getElementById('img4')
        iconChange(hr2, _img4)
        const _img5 = document.getElementById('img5')
        iconChange(hr3, _img5)
        const _img6 = document.getElementById('img6')
        iconChange(hr4, _img6)

        document.getElementById('temp1').innerHTML = temp
        document.getElementById('humid1').innerHTML = humid
        document.getElementById('date').innerHTML = d
        document.getElementById('time1').innerHTML = t
        document.getElementById('temp2').innerHTML = fahr
        document.getElementById('precip1').innerHTML = precip

        document.getElementById('now').innerHTML = 'NOW'
        document.getElementById('cloud0').innerHTML = temp
        document.getElementById('cloud1').innerHTML = hr1
        document.getElementById('cloud2').innerHTML = hr2
        document.getElementById('cloud3').innerHTML = hr3
        document.getElementById('cloud4').innerHTML = hr4

        document.getElementById('t1').innerHTML = c1 + 1 + ' ' + 'PM'
        document.getElementById('t2').innerHTML = c1 + 2 + ' ' + 'PM'
        document.getElementById('t3').innerHTML = c1 + 3 + ' ' + 'PM'
        document.getElementById('t4').innerHTML = c1 + 4 + ' ' + 'PM'

        const img_am_pm = document.getElementById('am-pm')
        img_am_pm.setAttribute('src', './././img/sunnyIcon.svg')
    } else if (this.value == 'Seoul') {
        const img1 = document.getElementById('icon-change')
        img1.setAttribute('src', './././img/seoul.svg')

        var dAndT = parsedData.seoul.dateAndTime
        var humid = parsedData.seoul.humidity
        var temp = parsedData.seoul.temperature
        var precip = parsedData.seoul.precipitation
        var d = dAndT.slice(0, 8)
        var t = dAndT.slice(9, 20)
        var c1 = parseInt(t.slice(0, 3))
        var fahr = celToFahr(temp)

        var hr1 = parsedData.seoul.nextFiveHrs[0]
        var hr2 = parsedData.seoul.nextFiveHrs[1]
        var hr3 = parsedData.seoul.nextFiveHrs[2]
        var hr4 = parsedData.seoul.nextFiveHrs[3]

        const _img2 = document.getElementById('img2')
        iconChange(temp, _img2)
        const _img3 = document.getElementById('img3')
        iconChange(hr1, _img3)
        const _img4 = document.getElementById('img4')
        iconChange(hr2, _img4)
        const _img5 = document.getElementById('img5')
        iconChange(hr3, _img5)
        const _img6 = document.getElementById('img6')
        iconChange(hr4, _img6)

        document.getElementById('precip1').innerHTML = precip
        document.getElementById('temp1').innerHTML = temp
        document.getElementById('date').innerHTML = d
        document.getElementById('time1').innerHTML = t
        document.getElementById('temp2').innerHTML = fahr
        document.getElementById('humid1').innerHTML = humid

        document.getElementById('now').innerHTML = 'NOW'
        document.getElementById('cloud0').innerHTML = temp
        document.getElementById('cloud1').innerHTML = hr1
        document.getElementById('cloud2').innerHTML = hr2
        document.getElementById('cloud3').innerHTML = hr3
        document.getElementById('cloud4').innerHTML = hr4

        document.getElementById('t1').innerHTML = c1 + 1 + ' ' + 'PM'
        document.getElementById('t2').innerHTML = c1 + 2 + ' ' + 'PM'
        document.getElementById('t3').innerHTML = c1 + 3 + ' ' + 'PM'
        document.getElementById('t4').innerHTML = c1 + 4 + ' ' + 'PM'

        const img_am_pm = document.getElementById('am-pm')
        img_am_pm.setAttribute('src', './././img/sunnyIcon.svg')
    } else if (this.value == 'Troll') {
        const img1 = document.getElementById('icon-change')
        img1.setAttribute('src', './././img/troll.svg')

        var dAndT = parsedData.troll.dateAndTime
        var precip = parsedData.troll.precipitation
        var humid = parsedData.troll.humidity
        var temp = parsedData.troll.temperature
        var d = dAndT.slice(0, 8)
        var t = dAndT.slice(9, 20)
        var c1 = parseInt(t.slice(0, 3))
        var fahr = celToFahr(temp)

        var hr1 = parsedData.troll.nextFiveHrs[0]
        var hr2 = parsedData.troll.nextFiveHrs[1]
        var hr3 = parsedData.troll.nextFiveHrs[2]
        var hr4 = parsedData.troll.nextFiveHrs[3]

        const _img2 = document.getElementById('img2')
        iconChange(temp, _img2)
        const _img3 = document.getElementById('img3')
        iconChange(hr1, _img3)
        const _img4 = document.getElementById('img4')
        iconChange(hr2, _img4)
        const _img5 = document.getElementById('img5')
        iconChange(hr3, _img5)
        const _img6 = document.getElementById('img6')
        iconChange(hr4, _img6)

        document.getElementById('humid1').innerHTML = humid
        document.getElementById('precip1').innerHTML = precip
        document.getElementById('temp1').innerHTML = temp
        document.getElementById('date').innerHTML = d
        document.getElementById('temp2').innerHTML = fahr.toFixed(2)
        document.getElementById('time1').innerHTML = t

        document.getElementById('now').innerHTML = 'NOW'
        document.getElementById('cloud0').innerHTML = temp
        document.getElementById('cloud1').innerHTML = hr1
        document.getElementById('cloud2').innerHTML = hr2
        document.getElementById('cloud3').innerHTML = hr3
        document.getElementById('cloud4').innerHTML = hr4

        document.getElementById('t1').innerHTML = c1 + 1 + ' ' + 'PM'
        document.getElementById('t2').innerHTML = c1 + 2 + ' ' + 'PM'
        document.getElementById('t3').innerHTML = c1 + 3 + ' ' + 'PM'
        document.getElementById('t4').innerHTML = c1 + 4 + ' ' + 'PM'

        const img_am_pm = document.getElementById('am-pm')
        img_am_pm.setAttribute('src', './././img/sunnyIcon.svg')
    } else if (this.value == 'Vienna') {
        const img1 = document.getElementById('icon-change')
        img1.setAttribute('src', './././img/Vienna.svg')

        var dAndT = parsedData.vienna.dateAndTime
        var humid = parsedData.vienna.humidity
        var precip = parsedData.vienna.precipitation
        var temp = parsedData.vienna.temperature
        var d = dAndT.slice(0, 8)
        var t = dAndT.slice(9, 20)
        var c1 = parseInt(t.slice(0, 3))
        var fahr = celToFahr(temp)

        var hr1 = parsedData.vienna.nextFiveHrs[0]
        var hr2 = parsedData.vienna.nextFiveHrs[1]
        var hr3 = parsedData.vienna.nextFiveHrs[2]
        var hr4 = parsedData.vienna.nextFiveHrs[3]

        const _img2 = document.getElementById('img2')
        iconChange(temp, _img2)
        const _img3 = document.getElementById('img3')
        iconChange(hr1, _img3)
        const _img4 = document.getElementById('img4')
        iconChange(hr2, _img4)
        const _img5 = document.getElementById('img5')
        iconChange(hr3, _img5)
        const _img6 = document.getElementById('img6')
        iconChange(hr4, _img6)

        document.getElementById('temp1').innerHTML = temp
        document.getElementById('humid1').innerHTML = humid
        document.getElementById('temp2').innerHTML = fahr
        document.getElementById('precip1').innerHTML = precip
        document.getElementById('date').innerHTML = d
        document.getElementById('time1').innerHTML = t

        document.getElementById('now').innerHTML = 'NOW'
        document.getElementById('cloud0').innerHTML = temp
        document.getElementById('cloud1').innerHTML = hr1
        document.getElementById('cloud2').innerHTML = hr2
        document.getElementById('cloud3').innerHTML = hr3
        document.getElementById('cloud4').innerHTML = hr4

        document.getElementById('t1').innerHTML = c1 + 1 + ' ' + 'AM'
        document.getElementById('t2').innerHTML = c1 + 2 + ' ' + 'AM'
        document.getElementById('t3').innerHTML = c1 + 3 + ' ' + 'AM'
        document.getElementById('t4').innerHTML = c1 + 4 + ' ' + 'AM'

        const img_am_pm = document.getElementById('am-pm')
        img_am_pm.setAttribute('src', './././img/sunnyIcon.svg')
    } else if (this.value == 'Vostok') {
        const img1 = document.getElementById('icon-change')
        img1.setAttribute('src', './././img/vostok.svg')

        var dAndT = parsedData.vostok.dateAndTime
        var humid = parsedData.vostok.humidity
        var temp = parsedData.vostok.temperature
        var precip = parsedData.vostok.precipitation
        var d = dAndT.slice(0, 8)
        var t = dAndT.slice(9, 21)
        var c1 = parseInt(t.slice(0, 3))
        var fahr = celToFahr(temp)

        var hr1 = parsedData.vostok.nextFiveHrs[0]
        var hr2 = parsedData.vostok.nextFiveHrs[1]
        var hr3 = parsedData.vostok.nextFiveHrs[2]
        var hr4 = parsedData.vostok.nextFiveHrs[3]

        const _img2 = document.getElementById('img2')
        iconChange(temp, _img2)
        const _img3 = document.getElementById('img3')
        iconChange(hr1, _img3)
        const _img4 = document.getElementById('img4')
        iconChange(hr2, _img4)
        const _img5 = document.getElementById('img5')
        iconChange(hr3, _img5)
        const _img6 = document.getElementById('img6')
        iconChange(hr4, _img6)

        document.getElementById('temp1').innerHTML = temp
        document.getElementById('date').innerHTML = d
        document.getElementById('humid1').innerHTML = humid
        document.getElementById('precip1').innerHTML = precip
        document.getElementById('temp2').innerHTML = fahr
        document.getElementById('time1').innerHTML = t

        document.getElementById('now').innerHTML = 'NOW'
        document.getElementById('cloud0').innerHTML = temp
        document.getElementById('cloud1').innerHTML = hr1
        document.getElementById('cloud2').innerHTML = hr2
        document.getElementById('cloud3').innerHTML = hr3
        document.getElementById('cloud4').innerHTML = hr4

        document.getElementById('t1').innerHTML = c1 + 1 + ' ' + 'PM'
        document.getElementById('t2').innerHTML = c1 - 10 + ' ' + 'PM'
        document.getElementById('t3').innerHTML = c1 - 9 + ' ' + 'PM'
        document.getElementById('t4').innerHTML = c1 - 8 + ' ' + 'PM'

        const img_am_pm = document.getElementById('am-pm')
        img_am_pm.setAttribute('src', './././img/sunnyIcon.svg')
    } else if (this.value == 'Winnipeg') {
        const img1 = document.getElementById('icon-change')
        img1.setAttribute('src', './././img/winnipeg.svg')

        var dAndT = parsedData.winnipeg.dateAndTime
        var humid = parsedData.winnipeg.humidity
        var precip = parsedData.winnipeg.precipitation
        var temp = parsedData.winnipeg.temperature
        var d = dAndT.slice(0, 8)
        var t = dAndT.slice(9, 21)
        var c1 = parseInt(t.slice(0, 3))
        var fahr = celToFahr(temp)

        var hr1 = parsedData.winnipeg.nextFiveHrs[0]
        var hr2 = parsedData.winnipeg.nextFiveHrs[1]
        var hr3 = parsedData.winnipeg.nextFiveHrs[2]
        var hr4 = parsedData.winnipeg.nextFiveHrs[3]

        const _img2 = document.getElementById('img2')
        iconChange(temp, _img2)
        const _img3 = document.getElementById('img3')
        iconChange(hr1, _img3)
        const _img4 = document.getElementById('img4')
        iconChange(hr2, _img4)
        const _img5 = document.getElementById('img5')
        iconChange(hr3, _img5)
        const _img6 = document.getElementById('img6')
        iconChange(hr4, _img6)

        document.getElementById('temp1').innerHTML = temp
        document.getElementById('date').innerHTML = d
        document.getElementById('time1').innerHTML = t
        document.getElementById('humid1').innerHTML = humid
        document.getElementById('temp2').innerHTML = fahr
        document.getElementById('precip1').innerHTML = precip

        document.getElementById('now').innerHTML = 'NOW'
        document.getElementById('cloud0').innerHTML = temp
        document.getElementById('cloud1').innerHTML = hr1
        document.getElementById('cloud2').innerHTML = hr2
        document.getElementById('cloud3').innerHTML = hr3
        document.getElementById('cloud4').innerHTML = hr4

        document.getElementById('t1').innerHTML = c1 - 11 + ' ' + 'AM'
        document.getElementById('t2').innerHTML = c1 - 10 + ' ' + 'AM'
        document.getElementById('t3').innerHTML = c1 - 9 + ' ' + 'AM'
        document.getElementById('t4').innerHTML = c1 - 8 + ' ' + 'AM'

        const img_am_pm = document.getElementById('am-pm')
        img_am_pm.setAttribute('src', './././img/sunnyIcon.svg')
    } else if (this.value == 'Yangon') {
        const img1 = document.getElementById('icon-change')
        img1.setAttribute('src', './././img/yangon.svg')

        var dAndT = parsedData.yangon.dateAndTime
        var humid = parsedData.yangon.humidity
        var precip = parsedData.yangon.precipitation
        var temp = parsedData.yangon.temperature
        var d = dAndT.slice(0, 8)
        var t = dAndT.slice(9, 21)
        var c1 = parseInt(t.slice(0, 3))
        var fahr = celToFahr(temp)

        var hr1 = parsedData.yangon.nextFiveHrs[0]
        var hr2 = parsedData.yangon.nextFiveHrs[1]
        var hr3 = parsedData.yangon.nextFiveHrs[2]
        var hr4 = parsedData.yangon.nextFiveHrs[3]

        const _img2 = document.getElementById('img2')
        iconChange(temp, _img2)
        const _img3 = document.getElementById('img3')
        iconChange(hr1, _img3)
        const _img4 = document.getElementById('img4')
        iconChange(hr2, _img4)
        const _img5 = document.getElementById('img5')
        iconChange(hr3, _img5)
        const _img6 = document.getElementById('img6')
        iconChange(hr4, _img6)

        document.getElementById('precip1').innerHTML = precip
        document.getElementById('humid1').innerHTML = humid
        document.getElementById('temp1').innerHTML = temp
        document.getElementById('temp2').innerHTML = fahr
        document.getElementById('date').innerHTML = d
        document.getElementById('time1').innerHTML = t

        document.getElementById('now').innerHTML = 'NOW'
        document.getElementById('cloud0').innerHTML = temp
        document.getElementById('cloud1').innerHTML = hr1
        document.getElementById('cloud2').innerHTML = hr2
        document.getElementById('cloud3').innerHTML = hr3
        document.getElementById('cloud4').innerHTML = hr4

        document.getElementById('t1').innerHTML = c1 + 1 + ' ' + 'PM'
        document.getElementById('t2').innerHTML = c1 - 10 + ' ' + 'PM'
        document.getElementById('t3').innerHTML = c1 - 9 + ' ' + 'PM'
        document.getElementById('t4').innerHTML = c1 - 8 + ' ' + 'PM'
    } else {
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

//current date of Anadyr
// var d1 = new Date();
// var n1 = d1.toLocaleString('en-GB', {day: '2-digit', month:'short',  year:'numeric' , timeZone: 'Asia/Anadyr'});
// var p1 = d1.toLocaleString('en-GB', {hour: '2-digit', minute: '2-digit', second: '2-digit',  hourCycle: 'h11',timeZone: 'Asia/Anadyr'});
// document.getElementById("date").innerHTML = n1;
// document.getElementById("time1").innerHTML = p1;
//  //startTime(p1);
// //change the cities from the drop down the icon, time, date, temperature in celcius and fahrenheit, humidity and precipitation will be changed
// document.getElementById("cities").onchange = function()
// {
//     if(this.value == "Anadyr")
//     {
//         const img1 = document.getElementById('icon-change');
//         img1.setAttribute('src','./././img/anadyr.svg');
//         var d = new Date();
//         var n = d.toLocaleTimeString('en-GB', {day: '2-digit', month:'short',  year:'numeric' , timeZone: 'Asia/Anadyr'});
//         var p = d.toLocaleTimeString('en-GB', {hour: '2-digit', minute: '2-digit', second: '2-digit',  hourCycle: 'h11',timeZone: 'Asia/Anadyr'});

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
//     else if(this.value === "Bangkok")
//     {
//         const img1 = document.getElementById('icon-change');
//         img1.setAttribute('src','./././img/bangkok.svg');
//         var d = new Date();
//         var n = d.toLocaleString('en-GB', {day: '2-digit', month:'short',  year:'numeric' , timeZone: 'Asia/Bangkok'});
//         var p = d.toLocaleString('en-GB', {hour: '2-digit', minute: '2-digit', second: '2-digit',  hourCycle: 'h11',timeZone: 'Asia/Bangkok'});
//         document.getElementById("date").innerHTML = n;
//         document.getElementById("time1").innerHTML = p;
//     }
//     else if(this.value == "Broken Hill")
//     {
//         const img1 = document.getElementById('icon-change');
//         img1.setAttribute('src','./././img/brokenhill.svg');
//         var d = new Date();
//         var n = d.toLocaleString('en-GB', {day: '2-digit', month:'short',  year:'numeric' , timeZone: 'Australia/Broken_Hill'});
//         var p = d.toLocaleString('en-GB', {hour: '2-digit', minute: '2-digit', second: '2-digit',  hourCycle: 'h11',timeZone: 'Australia/Broken_Hill'});
//         document.getElementById("date").innerHTML = n;
//         document.getElementById("time1").innerHTML = p;
//     }
//     else if(this.value == "Dublin")
//     {
//         const img1 = document.getElementById('icon-change');
//         img1.setAttribute('src','./././img/dublin.svg');
//         var d = new Date();
//         var n = d.toLocaleString('en-GB', {day: '2-digit', month:'short',  year:'numeric' , timeZone: 'Etc/GMT+1'});
//         var p = d.toLocaleString('en-GB', {hour: '2-digit', minute: '2-digit', second: '2-digit',  hourCycle: 'h11',timeZone: 'Etc/GMT+1'});
//         document.getElementById("date").innerHTML = n;
//         document.getElementById("time1").innerHTML = p;
//     }
//     else if(this.value == "Jamaica")
//     {
//         const img1 = document.getElementById('icon-change');
//         img1.setAttribute('src','./././img/jamaica.svg');
//         var d = new Date();
//         var n = d.toLocaleString('en-GB', {day: '2-digit', month:'short',  year:'numeric' , timeZone: 'Etc/GMT-5'});
//         var p = d.toLocaleString('en-GB', {hour: '2-digit', minute: '2-digit', second: '2-digit',  hourCycle: 'h11',timeZone: 'Etc/GMT-5'});
//         document.getElementById("date").innerHTML = n;
//         document.getElementById("time1").innerHTML = p;
//     }
//     else if(this.value == "Juba")
//     {
//         const img1 = document.getElementById('icon-change');
//         img1.setAttribute('src','./././img/juba.svg');
//         var d = new Date();
//         var n = d.toLocaleString('en-GB', {day: '2-digit', month:'short',  year:'numeric' , timeZone: 'Africa/Juba'});
//         var p = d.toLocaleString('en-GB', {hour: '2-digit', minute: '2-digit', second: '2-digit',  hourCycle: 'h11',timeZone: 'Africa/Juba'});
//         document.getElementById("date").innerHTML = n;
//         document.getElementById("time1").innerHTML = p;
//     }
//     else if(this.value == "Karachi")
//     {
//         const img1 = document.getElementById('icon-change');
//         img1.setAttribute('src','./././img/karachi.svg');
//         var d = new Date();
//         var n = d.toLocaleString('en-GB', {day: '2-digit', month:'short',  year:'numeric' , timeZone: 'Asia/Karachi'});
//         var p = d.toLocaleString('en-GB', {hour: '2-digit', minute: '2-digit', second: '2-digit',  hourCycle: 'h11',timeZone: 'Asia/Karachi'});
//         document.getElementById("date").innerHTML = n;
//         document.getElementById("time1").innerHTML = p;
//     }
//     else if(this.value == "Kolkata")
//     {
//         const img1 = document.getElementById('icon-change');
//         img1.setAttribute('src','./././img/kolkata.svg');
//         var d = new Date();
//         var n = d.toLocaleString('en-GB', {day: '2-digit', month:'short',  year:'numeric' , timeZone: 'Asia/Kolkata'});
//         var p = d.toLocaleString('en-GB', {hour: '2-digit', minute: '2-digit', second: '2-digit',  hourCycle: 'h11',timeZone: 'Asia/Kolkata'});
//         document.getElementById("date").innerHTML = n;
//         document.getElementById("time1").innerHTML = p;
//     }
//     else if(this.value == "London")
//     {
//         const img1 = document.getElementById('icon-change');
//         img1.setAttribute('src','./././img/london.svg');
//         var d = new Date();
//         var n = d.toLocaleString('en-GB', {day: '2-digit', month:'short',  year:'numeric' , timeZone: 'Europe/London'});
//         var p = d.toLocaleString('en-GB', {hour: '2-digit', minute: '2-digit', second: '2-digit',  hourCycle: 'h11',timeZone: 'Europe/London'});
//         document.getElementById("date").innerHTML = n;
//         document.getElementById("time1").innerHTML = p;
//     }
//     else if(this.value == "Los Angeles")
//     {
//         const img1 = document.getElementById('icon-change');
//         img1.setAttribute('src','./././img/losangeles.svg');
//         var d = new Date();
//         var n = d.toLocaleString('en-GB', {day: '2-digit', month:'short',  year:'numeric' , timeZone: 'America/Los_Angeles'});
//         var p = d.toLocaleString('en-GB', {hour: '2-digit', minute: '2-digit', second: '2-digit',  hourCycle: 'h11',timeZone: 'America/Los_Angeles'});
//         document.getElementById("date").innerHTML = n;
//         document.getElementById("time1").innerHTML = p;
//     }
//     else if(this.value == "Maseru")
//     {
//         const img1 = document.getElementById('icon-change');
//         img1.setAttribute('src','./././img/maseru.svg');
//         var d = new Date();
//         var n = d.toLocaleString('en-GB', {day: '2-digit', month:'short',  year:'numeric' , timeZone: 'Africa/Maseru'});
//         var p = d.toLocaleString('en-GB', {hour: '2-digit', minute: '2-digit', second: '2-digit',  hourCycle: 'h11',timeZone: 'Africa/Maseru'});
//         document.getElementById("date").innerHTML = n;
//         document.getElementById("time1").innerHTML = p;
//     }
//     else if(this.value == "Moscow")
//     {
//         const img1 = document.getElementById('icon-change');
//         img1.setAttribute('src','./././img/moscow.svg');
//         var d = new Date();
//         var n = d.toLocaleString('en-GB', {day: '2-digit', month:'short',  year:'numeric' , timeZone: 'Europe/Moscow'});
//         var p = d.toLocaleString('en-GB', {hour: '2-digit', minute: '2-digit', second: '2-digit',  hourCycle: 'h11',timeZone: 'Europe/Moscow'});
//         document.getElementById("date").innerHTML = n;
//         document.getElementById("time1").innerHTML = p;
//     }
//     else if(this.value == "New York")
//     {
//         const img1 = document.getElementById('icon-change');
//         img1.setAttribute('src','./././img/newyork.svg');
//         var d = new Date();
//         var n = d.toLocaleString('en-GB', {day: '2-digit', month:'short',  year:'numeric' , timeZone: 'America/New_York'});
//         var p = d.toLocaleString('en-GB', {hour: '2-digit', minute: '2-digit', second: '2-digit',  hourCycle: 'h11',timeZone: 'America/New_York'});
//         document.getElementById("date").innerHTML = n;
//         document.getElementById("time1").innerHTML = p;
//     }
//     else if(this.value == "Nome")
//     {
//         const img1 = document.getElementById('icon-change');
//         img1.setAttribute('src','./././img/nome.svg');
//         var d = new Date();
//         var n = d.toLocaleString('en-GB', {day: '2-digit', month:'short',  year:'numeric' , timeZone: 'America/Nome'});
//         var p = d.toLocaleString('en-GB', {hour: '2-digit', minute: '2-digit', second: '2-digit',  hourCycle: 'h11',timeZone: 'America/Nome'});
//         document.getElementById("date").innerHTML = n;
//         document.getElementById("time1").innerHTML = p;
//     }
//     else if(this.value == "Perth")
//     {
//         const img1 = document.getElementById('icon-change');
//         img1.setAttribute('src','./././img/perth.svg');
//         var d = new Date();
//         var n = d.toLocaleString('en-GB', {day: '2-digit', month:'short',  year:'numeric' , timeZone: 'Australia/Perth'});
//         var p = d.toLocaleString('en-GB', {hour: '2-digit', minute: '2-digit', second: '2-digit',  hourCycle: 'h11',timeZone: 'Australia/Perth'});
//         document.getElementById("date").innerHTML = n;
//         document.getElementById("time1").innerHTML = p;
//      }
//     else if(this.value == "Seoul")
//     {
//         const img1 = document.getElementById('icon-change');
//         img1.setAttribute('src','./././img/seoul.svg');
//         var d = new Date();
//         var n = d.toLocaleString('en-GB', {day: '2-digit', month:'short',  year:'numeric' , timeZone: 'Asia/Seoul'});
//         var p = d.toLocaleString('en-GB', {hour: '2-digit', minute: '2-digit', second: '2-digit',  hourCycle: 'h11',timeZone: 'Asia/Seoul'});
//         document.getElementById("date").innerHTML = n;
//         document.getElementById("time1").innerHTML = p;
//     }
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
