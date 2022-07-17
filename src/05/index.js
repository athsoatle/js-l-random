/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
     return hashtags.map(h => h.toLowerCase())
                    .filter(
                        (item, index, ar) => ar.indexOf(item) === index
                    )
                    .join(", ");
};
