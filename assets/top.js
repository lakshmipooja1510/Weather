// ............................................... JSON Object.................................................
import { parsedData } from './webapi.js'
export function top() {
    /**
     * @desc changes celcius to fahrenheit
     * @param {string} tempCel
     */
    function celToFahr(tempCel) {
        return ((parseInt(tempCel) * 9) / 5 + 32).toFixed(1)
    }
    var next_five_hrs_array = []
    /**
     * @desc changes the icon based on the temp value
     * @param {string} t
     * @param {object} _img_src
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
    var city_name = []
    var i = 0
    for (var key in parsedData) {
        for (var key1 in parsedData[key]) {
            var t = parsedData[key]['cityName']
            city_name[i] = t
            i++
            break
        }
    }
    var dAndT_array = []
    var j = 0
    for (var key in parsedData) {
        for (var key1 in parsedData[key]) {
            var t = parsedData[key]['dateAndTime']
            dAndT_array[j] = t
            j++
            break
        }
    }
    var temperature_array = []
    var k = 0
    for (var key in parsedData) {
        for (var key1 in parsedData[key]) {
            var t = parsedData[key]['temperature']
            temperature_array[k] = t
            k++
            break
        }
    }
    var humid_array = []
    var l = 0
    for (var key in parsedData) {
        for (var key1 in parsedData[key]) {
            var t = parsedData[key]['humidity']
            humid_array[l] = t
            l++
            break
        }
    }
    var precip_array = []
    var m = 0
    for (var key in parsedData) {
        for (var key1 in parsedData[key]) {
            var t = parsedData[key]['precipitation']
            precip_array[m] = t
            m++
            break
        }
    }
    for (var j in city_name) {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
    }
        fetch(`https://soliton.glitch.me?city=${city_name[j]}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                var myHeaders = new Headers()
                myHeaders.append('Content-Type', 'application/json')
                var raw = JSON.stringify({
                    city_Date_Time_Name: `${result.city_Date_Time_Name}`,
                    hours: 4,
                })
                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow',
                }
                fetch('https://soliton.glitch.me/hourly-forecast',requestOptions)
                    .then((response) => response.json())
                    .then((result) => {
                        parsedData['nextFiveHrs'] = result.temperature
                        next_five_hrs_array.push(result.temperature)
                    })
                    .catch((_error) => console.log('error'))
            })
            .catch((error) => console.log('error', error))
    }
    ;(function () {
        var index
        for (var i = 0; i < city_name.length; i++) {
            if (city_name[i] == 'Anadyr') {
                index = i
            }
        }
        document.getElementById('temp1').innerHTML = temperature_array[index]
        var fahr = celToFahr(temperature_array[index])
        document.getElementById('temp2').innerHTML = fahr
        document.getElementById('humid1').innerHTML = humid_array[index]
        document.getElementById('precip1').innerHTML = precip_array[index]
        var dAndT = dAndT_array[index]
        document.getElementById('date').innerHTML = dAndT.substr(0,dAndT.indexOf(',')
        )
        document.getElementById('time1').innerHTML = dAndT.substr(
            dAndT.indexOf(',') + 1,
            dAndT.length
        )
        var c1 = parseInt(dAndT.substr(dAndT.indexOf(',') + 1, dAndT.length))
        var hr1 = '-1°C'
        var hr2 = '3°C'
        var hr3 = '-1°C'
        var hr4 = '-3°C'
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
    function find_index(city_val) {
        var index
        for (i = 0; i < city_name.length; i++) {
            if (city_name[i] == city_val) {
                index = i
            }
        }
        return index
    }
    class parent_index {
        constructor(_city_) {
            this._city_ = _city_
        }
        print_city() {
            ind = find_index(this._city_)
            document.getElementById('temp1').innerHTML = temperature_array[ind]
            var fahr = celToFahr(temperature_array[ind])
            document.getElementById('temp2').innerHTML = fahr + ' F'
            document.getElementById('humid1').innerHTML = humid_array[ind]
            document.getElementById('precip1').innerHTML = precip_array[ind]
            console.log(humid_array)
            var dAndT = dAndT_array[ind]
            document.getElementById('date').innerHTML = dAndT.substr(
                0,
                dAndT.indexOf(',')
            )
            document.getElementById('time1').innerHTML = dAndT.substr(
                dAndT.indexOf(',') + 1,
                dAndT.length
            )
            var hr1 = next_five_hrs_array[ind][0]
            var hr2 = next_five_hrs_array[ind][1]
            var hr3 = next_five_hrs_array[ind][0]
            var hr4 = next_five_hrs_array[ind][0]
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
            var c1 = parseInt(
                dAndT.substr(dAndT.indexOf(',') + 1, dAndT.length)
            )
            var c2
            var c3
            var c4
            var c5
            var am_or_pm = dAndT.substr(dAndT.length - 2, dAndT.length)
            if (c1 < 9) {
                c2 = c1 + 1
                c3 = c1 + 2
                c4 = c1 + 3
                c5 = c1 + 4
            } else if (c1 == 9) {
                c2 = 10
                c3 = 11
                c4 = 12
                c5 = 1
            } else if (c1 == 10) {
                c2 = 11
                c3 = 12
                c4 = 1
                c5 = 2
            } else if (c1 == 11) {
                c2 = 12
                c3 = 1
                c4 = 2
                c5 = 3
            } else if (c1 == 12) {
                c2 = 1
                c3 = 2
                c4 = 3
                c5 = 4
            }
            const img1 = document.getElementById('icon-change')
            img1.setAttribute(
                'src',
                './././img/' + this._city_.toLowerCase() + '.svg'
            )
            if (c2 == 1 && am_or_pm == 'AM') {
                document.getElementById('t1').innerHTML = c2 + ' ' + 'PM'
                document.getElementById('t2').innerHTML = c3 + ' ' + 'PM'
                document.getElementById('t3').innerHTML = c4 + ' ' + 'PM'
                document.getElementById('t4').innerHTML = c5 + ' ' + 'PM'
            } else if (c2 == 1 && am_or_pm == 'PM') {
                document.getElementById('t1').innerHTML = c2 + ' ' + 'AM'
                document.getElementById('t2').innerHTML = c3 + ' ' + 'AM'
                document.getElementById('t3').innerHTML = c4 + ' ' + 'AM'
                document.getElementById('t4').innerHTML = c5 + ' ' + 'AM'
            } else if (c3 == 1 && am_or_pm == 'PM') {
                document.getElementById('t1').innerHTML = c2 + ' ' + 'PM'
                document.getElementById('t2').innerHTML = c3 + ' ' + 'AM'
                document.getElementById('t3').innerHTML = c4 + ' ' + 'AM'
                document.getElementById('t4').innerHTML = c5 + ' ' + 'AM'
            } else if (c3 == 1 && am_or_pm == 'AM') {
                document.getElementById('t1').innerHTML = c2 + ' ' + 'AM'
                document.getElementById('t2').innerHTML = c3 + ' ' + 'PM'
                document.getElementById('t3').innerHTML = c4 + ' ' + 'PM'
                document.getElementById('t4').innerHTML = c5 + ' ' + 'PM'
            } else if (c4 == 1 && am_or_pm == 'AM') {
                document.getElementById('t1').innerHTML = c2 + ' ' + 'AM'
                document.getElementById('t2').innerHTML = c3 + ' ' + 'AM'
                document.getElementById('t3').innerHTML = c4 + ' ' + 'PM'
                document.getElementById('t4').innerHTML = c5 + ' ' + 'PM'
            } else if (c4 == 1 && am_or_pm == 'PM') {
                document.getElementById('t1').innerHTML = c2 + ' ' + 'PM'
                document.getElementById('t2').innerHTML = c3 + ' ' + 'PM'
                document.getElementById('t3').innerHTML = c4 + ' ' + 'AM'
                document.getElementById('t4').innerHTML = c5 + ' ' + 'AM'
            } else if (c5 == 1 && am_or_pm == 'AM') {
                document.getElementById('t1').innerHTML = c2 + ' ' + 'AM'
                document.getElementById('t2').innerHTML = c3 + ' ' + 'AM'
                document.getElementById('t3').innerHTML = c4 + ' ' + 'AM'
                document.getElementById('t4').innerHTML = c5 + ' ' + 'PM'
            } else if (c5 == 1 && am_or_pm == 'PM') {
                document.getElementById('t1').innerHTML = c2 + ' ' + 'PM'
                document.getElementById('t2').innerHTML = c3 + ' ' + 'PM'
                document.getElementById('t3').innerHTML = c4 + ' ' + 'PM'
                document.getElementById('t4').innerHTML = c5 + ' ' + 'AM'
            } else {
                document.getElementById('t1').innerHTML = c2 + ' ' + am_or_pm
                document.getElementById('t2').innerHTML = c3 + ' ' + am_or_pm
                document.getElementById('t3').innerHTML = c4 + ' ' + am_or_pm
                document.getElementById('t4').innerHTML = c5 + ' ' + am_or_pm
            }
        }
    }
    class child_index extends parent_index {
        constructor(_city_) {
            super()
        }
    }
    var ind
    var inherit_city
    //child_index.prototype = Object.create(parent_index.prototype);
    /**
     * @desc when the city is selected from the drop down
     */
    document.getElementById('cities').onchange = function () {
        if (this.value == 'Anadyr') {
            inherit_city = new parent_index(this.value)
            inherit_city.print_city()
        } else if (this.value == 'Auckland') {
            inherit_city = new parent_index(this.value)
            inherit_city.print_city()
        } else if (this.value == 'BangKok') {
            inherit_city = new parent_index(this.value)
            inherit_city.print_city()
        } else if (this.value == 'BrokenHill') {
            inherit_city = new parent_index(this.value)
            inherit_city.print_city()
        } else if (this.value == 'Dublin') {
            inherit_city = new parent_index(this.value)
            inherit_city.print_city()
        } else if (this.value == 'Jamaica') {
            inherit_city = new parent_index(this.value)
            inherit_city.print_city()
        } else if (this.value == 'Juba') {
            inherit_city = new parent_index(this.value)
            inherit_city.print_city()
        } else if (this.value == 'Karachi') {
            inherit_city = new parent_index(this.value)
            inherit_city.print_city()
        } else if (this.value == 'Kolkata') {
            inherit_city = new parent_index(this.value)
            inherit_city.print_city()
        } else if (this.value == 'London') {
            inherit_city = new parent_index(this.value)
            inherit_city.print_city()
        } else if (this.value == 'LosAngeles') {
            inherit_city = new parent_index(this.value)
            inherit_city.print_city()
        } else if (this.value == 'Maseru') {
            inherit_city = new parent_index(this.value)
            inherit_city.print_city()
        } else if (this.value == 'Moscow') {
            inherit_city = new parent_index(this.value)
            inherit_city.print_city()
        } else if (this.value == 'NewYork') {
            inherit_city = new parent_index(this.value)
            inherit_city.print_city()
        } else if (this.value == 'Nome') {
            inherit_city = new parent_index(this.value)
            inherit_city.print_city()
        } else if (this.value == 'Perth') {
            inherit_city = new parent_index(this.value)
            inherit_city.print_city()
        } else if (this.value == 'Seoul') {
            inherit_city = new parent_index(this.value)
            inherit_city.print_city()
        } else if (this.value == 'Troll') {
            inherit_city = new parent_index(this.value)
            inherit_city.print_city()
        } else if (this.value == 'Vienna') {
            inherit_city = new parent_index(this.value)
            inherit_city.print_city()
        } else if (this.value == 'Vostok') {
            inherit_city = new parent_index(this.value)
            inherit_city.print_city()
        } else if (this.value == 'Winnipeg') {
            inherit_city = new parent_index(this.value)
            inherit_city.print_city()
        } else if (this.value == 'Yangon') {
            inherit_city = new parent_index(this.value)
            inherit_city.print_city()
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
}
