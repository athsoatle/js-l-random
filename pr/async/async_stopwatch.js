//broken stopwatch: two stopwatch(actually timers) started and doing their job wrong way, but asynchronous
//in this example one is counting two times faster, than other one

class Sw {
    ttl;
    base;

    constructor(name, ttl, base) {
        this.name = name;
        this.ttl = ttl;
        this.base = base;
    }

    get ttl() {
        return parseInt(this.ttl);
    }

    wait(ms) {
        return new Promise(resolve => {
            setTimeout(() => resolve(), ms);
        });
    }

    logS(s) {
        console.log('Timer ' + this.name + ' :', s, ' s');
    }

    count() {
        console.log(this.name, ' started');
        for(let i in [...Array(this.ttl).keys()]) {
            this.wait((i + 1) * 1000 * this.base)
                .then(() => this.logS(i + 1))
                .finally(() => console.log('complete ', this.name));
        }
    }

}

let swA = new Sw('A', 5, 1);
let swB = new Sw('B', 6, 2);
swA.count();
swB.count();