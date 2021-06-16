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
).then(
    cData => {
        console.log('Rdy: ', cData);
    }
)