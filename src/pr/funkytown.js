
const friends = [
    {
        name: 'Сэм',
        gender: 'Мужской',
        email: 'luisazamora@example.com',
        favoriteFruit: 'Картофель'
    },
    {
        name: 'Эмили',
        gender: 'Женский',
        email: 'example@example.com',
        favoriteFruit: 'Яблоко'
    },
    {
        name: 'Мэт',
        gender: 'Мужской',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Яблоко'
    },
    {
        name: 'Брэд',
        gender: 'Мужской',
        email: 'newtonwilliams@example.com',
        favoriteFruit: 'Банан'
    },
    {
        name: 'Шерри',
        gender: 'Женский',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Картофель'
    },
    {
        name: 'Керри',
        gender: 'Женский',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Апельсин'
    },
    {
        name: 'Стелла',
        gender: 'Женский',
        email: 'waltersguzman@example.com',
        favoriteFruit: 'Картофель'
    }
];


function query(collection) {
    let args = [].slice.call(arguments);
    let col = args[0];
    let ops = args.slice(1);
    for(let op of ops){
        col = op.action(col);
    }
    return col;
}

function select() {
    let fnl = [].slice.call(arguments);
    return {
        name: 'select',
        action: function (col) {
            let resArr = [];
            col.forEach(function (colItem) {
                let resObj = {};
                fnl.forEach(function (fn) {
                    resObj[fn] = colItem[fn];
                });
                resArr.push(resObj);
            });
            return resArr;
        }
    }
}

function filterIn(property, values) {
    return {
        name: 'filetIn',
        action: function(col) {
            let resCol = [];
            col.forEach(
                function (colItem) {
                    if(values.includes(colItem[property])) {
                        resCol.push(colItem);
                    }
                }
            );
            return resCol;
        }
    }
}

function filterIn_(property, values) {
    let args = [].slice.call(arguments);
    return {
        name: 'filterIn',
        action: function (col) {
            let resCol = [];
            col.forEach(function (objItem) {
                for (let i = 0; i < args.length; i = i + 2) {
                    if(values.some(
                        function (value) { return value === objItem; }
                    )){
                        resCol.push(objItem);
                    } else break;
                }
            });
            return resCol;
        }
    }
}



console.log(query(friends, select('name', 'gender')));
console.log(query(friends, filterIn('gender', ['Мужской'])));
console.log(query(friends, select('name', 'gender', 'favoriteFruit'), filterIn('favoriteFruit', ['Картофель'])));
console.log(query(friends, select('name', 'gender', 'email'), filterIn_('favoriteFruit', ['Картофель'])));