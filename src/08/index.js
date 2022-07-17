/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
    let newCollection = collection
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i][0] === 'filterIn') {
            newCollection = filter_collection(newCollection, arguments[i][1])
        }
    }
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i][0] === 'select') {
            newCollection = select_collection(newCollection, arguments[i][1])
        }
    }

    return newCollection
}

/**
 * @params {String[]}
 */
function select() {
    return ['select', arguments]
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    return ['filterIn', arguments]
}

function select_collection(collection, params) {
    let selectedCollection = JSON.parse(JSON.stringify(collection))
    let parametrsForSelect = [].slice.call(params)
    for (let i = 0; i < selectedCollection.length; i++) {
        let keys = Object.keys(selectedCollection[i])
        for (let key = 0; key < keys.length; key++) {
            if (parametrsForSelect.indexOf(keys[key]) === -1) {
                delete selectedCollection[i][keys[key]];
            }
        }
    }
    return selectedCollection
}

function filter_collection(collection, params) {
    let parametrForFilter = params[0]
    let settingsForFilter = [].slice.call(params[1])
    let filteredCollection = []
    for (let i = 0; i < collection.length; i++) {
        if (settingsForFilter.indexOf(collection[i][parametrForFilter]) !== -1) {
            filteredCollection.push(collection[i])
        }
    }
    return filteredCollection
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
