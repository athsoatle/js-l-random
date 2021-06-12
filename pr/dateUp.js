
let myDate = {
    value: new Date(),

    set date(date) {
        this.value = new Date();
        let rxDate = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2})/;


        let found = date.match(rxDate).map(x => parseInt(x));

        this.value.setFullYear(found[1], found[2] - 1, found[3]);
        this.value.setUTCHours(found[4], found[5]);
        this.value.setUTCSeconds(0);
        this.value.setUTCMilliseconds(0);
    },
    get date(){
        return this.value.getFullYear() + " " + this.value.getHours() + ":" + this.value.getMinutes();
    },

    change: function(i, t){
        //years (годы), months (месяцы), days (дни), hours (часы), minutes (минуты)
        switch(t){
            case("years"):
                this.value.setFullYear(this.value.getFullYear() + i);
                return this;
            case("months"):
                this.value.setMonth(this.value.getMonth() + i);
                return this;
            case("days"):
                this.value.setUTCDate(this.value.getUTCDate() + i);
                return this;
            case("hours"):
                this.value.setHours(this.value.getHours() + i);
                return this;
            case("minutes"):
                this.value.setTime(this.value.getTime() + i * 60000);
                return this;
            default:
                throw new TypeError;
        }
    },

    add: function(i, t){
        if(i < 0) throw new TypeError();
        return this.change(i, t);
    },
    subtract: function(i, t){
        if(i < 0) throw new TypeError();
        return this.change(-i, t);
    }
}

var d = myDate;
d.date ='2017-04-20 14:00';
console.log(d.date);
console.log(d.add(1, "hours").date);//w
console.log(d.add(1, "days").date);//wrong
console.log(d.add(1, "years").date);//g
console.log(d.add(1, "months").date);//g
console.log(d.add(1, "minutes").date);//w

d.date = '2017-05-16 13:45'
var time = d
    .add(24, 'hours')
    .subtract(1, 'months')
    .add(3, 'days')
    .add(15, 'minutes');
console.log(time.value)