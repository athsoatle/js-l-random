export let addTime = function(hours: number, minutes: number, interval: number) : string {
    minutes += interval;
    hours = (hours + Math.floor(minutes / 60)) % 24;
    minutes = minutes % 60;
    return formatTime(hours, minutes);
}

function formatTime(hrs: number, mins: number) : string {
    const res = [hrs, mins].map((it) => (it + '').length == 1 ? '0' + it : it + '');
    return res.join(':');
}