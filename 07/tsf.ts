function parseDate(date : string) {
    let rxDate = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2})/;
    let found = date.match(rxDate);
    let foundInt = found.forEach(x => parseInt(x));
    try {
        Date.prototype.setFullYear(found[0], found[1], found[2]);
        Date.prototype.setHours(found[3]);
        Date.prototype.setMinutes(found[4]);

    } catch (e) {
        console.log(e.message);
    }
}