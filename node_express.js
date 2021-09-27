var express = require('express')
var app = express()
var path = require('path')
var bodyParser = require('body-parser')

const timezones = require('./public/src/timeZone.js')
const cors = require('cors')
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    var city = req.query.city
    if (city) {
        res.json(timezones.timeForOneCity(city))
    } else {
        res.status(404).json({
            Error: 'Not a valid end point.please check API doc',
        })
    }
})

app.post('/hourly-forcast', (req, res) => {
    let cityDTN = req.body.city_Date_Time_Name
    let hours = req.body.hours
    if (cityDTN && hours) {
        res.json(timezones.nextNhoursWeather(cityDTN, hours, weatherResult))
    } else {
        res.status(404).json({
            Error: 'Not a valid end point.please check API doc',
        })
    }
})

app.get('/all-timezone-cities', (req, res) => {
    weatherResult = timezones.allTimeZones()
    res.json(weatherResult)
})

app.listen(8000, function () {
    console.log('listening to port 8000')
})
