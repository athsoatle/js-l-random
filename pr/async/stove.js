function fromStove () {
    return "Take back";
}

function toStove () {
    return "Put on";
}

function toStir () {
    return "Stirring";
}

toStove();
setTimeout(fromStove, 3000);
let id = setInterval(toStir, 1000);
clearInterval(id);