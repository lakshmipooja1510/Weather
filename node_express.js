var express = require('express')
var path = require('path')
var app = express()
const axios = require('axios')
let Data, citydata, hour
async function fetchData() {
    try {
        return await axios.get('https://soliton.glitch.me/all-timezone-cities')
    } catch (error) {
        console.error(error)
    }
}
async function citydetail(city) {
    try {
        return await axios.get(`https://soliton.glitch.me?city=${city}`)
    } catch (error) {
        console.error(error)
    }
}
async function nextFourHours(cityDataTime, hour) {
    try {
        return await axios.post(`https://soliton.glitch.me/hourly-forecast`, {
            city_Date_Time_Name: cityDataTime,
            hours: hour,
        })
    } catch (error) {
        console.error(error)
    }
}
app.use(express.static('public'))
app.use('/css', express.static(path.join(__dirname, '/css')))
app.use('/src', express.static(path.join(__dirname, '/src')))
app.use('/assets', express.static(path.join(__dirname, '/assets')))
app.get('/data', function (req, res) {
    ;(async () => {
        Data = await fetchData()
        res.send(Data.data)
    })()
})
app.get('/hours/:city', function (req, res) {
    ;(async () => {
        citydata = await citydetail(req.params.city)
        res.send(citydata.data)
    })()
})
app.post('/nextfourhours', function (req, res) {
    ;(async () => {
        hour = await nextFourHours(req.body.city_Date_Time_Name, req.body.hours)
        res.send(hour.data)
    })()
})
app.listen(5500, function () {
    console.log('listening to port 5500')
})
