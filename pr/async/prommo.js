let foo = {};
Object.defineProperty(foo, 'toString', {
    value: function () {
        return 'bar';
    },
    enumerable: false,
    configurable: true
});

let cb = setTimeout(function () {
    console.log('Preparing data');

    const data = {
        name: 'A',
        port: '4040',
        status: 'running'
    };

    setTimeout(() => {
        console.log('Ready: ', data);
    }, 1000);
}, 2000);

let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Preparing data');

        const bData = {
            name: 'A',
            port: '4040',
            status: 'running'
        };

        resolve(bData);
    }, 1000);
});

p.then((data) => {
    console.log('Ready: ', data);
});

p.then(data => {
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true;
            resolve(data);
        }, 1000
        );
    });

    p2.then(cData => {
        console.log('Rdy: ', cData);
    });
});

p.then(data => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true;
            resolve(data);
        }, 1000
        );
    });
}
)
    .then(
        cData => {
            console.log('Rdy: ', cData);
        }
    )
    .catch(err => console.error(err))
    .finally(() => {
        console.log('final')
    });

const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms);
    });
};

sleep(2000).then(() => console.log('2s'));
sleep(3000).then(() => console.log('3s'));

Promise.all([sleep(2000), sleep(3000)]).then(() =>
    console.log('all promises')
);

Promise.race([sleep(2000), sleep(3000)]).then(() =>
    console.log('race promises')
);//race after 2, all after 3