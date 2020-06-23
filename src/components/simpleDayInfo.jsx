import React, { Component } from 'react'


class SimpleDayInfo extends Component {
    render () {
        const {
            date,
            tempDay,
            tempNight,
            feelsDay,
            feelsNight,
            clouds,
            windSpeed,
        } = this.props
        return (
            <div>
                <div>{date.toLocaleDateString()}</div>
                <div>Temp: {tempDay}/{tempNight}</div>
                <div>Feels like: {feelsDay}/{feelsNight}</div>
                <div>Clouds: {clouds} %</div>
                <div>Wind: {windSpeed} m/s</div>
                <br></br>
            </div>
        )
    }
}


export default SimpleDayInfo