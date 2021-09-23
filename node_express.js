var express = require('express')
var app = express()
var path = require('path')
const timezones = require('./src/timeZone')

app.use(express.static('public'))
app.use('/css', express.static(path.join(__dirname, '/css')))
app.use('/src', express.static(path.join(__dirname, '/src')))
app.use('/assets', express.static(path.join(__dirname, '/assets')))

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
        res.json(timezones.nextNHoursWeather(cityDTN, hours, weatherResult))
    } else {
        res.status(404).json({
            Error: 'Not a valid end point.please check API doc',
        })
    }
})

app.get('/all-timezone-cities', (req, res) => {
    let currentTime = new Date()
    if (currentTime - startTime > dayCheck) {
        startTime = new Date()
        weatherResult = timezones.allTimeZones()
        res.json(weatherResult)
    } else {
        if (weatherResult.length === 0) {
            weatherResult = timezones.allTimeZones()
        }
        res.json(weatherResult)
    }
})

app.listen(5500, function () {
    console.log('listening to port 5500')
})