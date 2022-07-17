module.exports = Collection;

/**
 * Конструктор коллекции
 * @constructor
 */
function Collection() {
    this.arr = [];
}


// Методы коллекции
Collection.prototype.values = function () {
    return this.arr;
};

Collection.prototype.at = function (i) {
    if (i === 0 || i - 1 >= this.arr.length) return null;
    return this.arr[i - 1];
}

Collection.prototype.append = function (items) {
    if (items instanceof Collection) {
        this.arr = this.arr.concat(items.values());
    } else this.arr.push(items);
}

Collection.prototype.count = function () {
    return this.arr.length;
}

Collection.prototype.removeAt = function (i) {
    if (i - 1 > -1 && i - 1 < this.arr.length) {
        this.arr.splice(i - 1, 1);
        return true;
    }
    return false;
}
// другие методы


/**
 * Создание коллекции из массива значений
 */
Collection.from = function (arr) {
    return Object.create(Collection.prototype, {
        arr: {value: arr}
    });
};

// let numbers = new Collection();//+
// let new_nums = Collection.from([10, 15, 20]);//+
// console.info(numbers instanceof Collection);//+
// console.info(new_nums instanceof Collection);//false
// numbers.append(10);//+
// new_nums.append(23);//+
// numbers.append(new_nums);//+
// console.info(numbers.values());
// console.info(new_nums.values());
// console.log("new nums length:" + new_nums.count());
// console.info(new_nums.removeAt(1));
// console.log("new nums length:" + new_nums.count());
// console.info(new_nums.removeAt(0));
// console.log("new nums length:" + new_nums.count());
// console.info(new_nums.removeAt(4));
// console.log("new nums length:" + new_nums.count());
// console.info(new_nums.removeAt(3));
// console.info(new_nums.values());
