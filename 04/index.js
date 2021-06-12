/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    return tweet.split(" ")
        .filter(w => w.startsWith("#"))
        .map(w => w.slice(1));
};
