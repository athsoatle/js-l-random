function bmi(params){
    return params.weight / (params.height * params.height)
}

console.log(bmi({weight: 70, height: 1.87}))

console.log(sum(1.2, 32, 123, 11))

function sum() {
    var args = [].slice.call(arguments);
    return args.reduce(function (sum, item) {
        return sum + item;
    });
}