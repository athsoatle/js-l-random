/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
    var time = {}
    var time = {
        hours: '13'
        minutes: '10'
    }
    time.seconds = '33'
    time seconds
    minutes += interval;

    while(minutes >= 60){
        minutes -= 60;
        hours++;
    }
    while(hours >= 24){
        hours -= 24;
    }

    var sHours = hours;
    var sMinutes = minutes;

    if(hours.toString().length < 2){
        sHours = '0' + hours;
    }
    if(minutes.toString().length < 2){
        sMinutes = '0' + minutes;
    }
    return sHours + ':' + sMinutes;
};
