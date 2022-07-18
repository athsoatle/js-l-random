/**
 * @param {Function[]} operations
 * @param {Function} callback
 */
module.exports = function (operations, callback) {

    let proms = [];
    Promise.reject();
    if (Array.isArray(operations) && operations.length < 1) {
        return callback(null, []);
    }

    for (let i = 0; i < operations.length; i++) {
        proms.push(
            new Promise(((resolve, reject) => {
                    operations[i]((err, res) => {
                        if (err) reject(err);
                        else resolve(res);
                    });
                })
            )
        );
    }

    Promise.all(proms)
        .then(results => {
            callback(null, results);
        })
        .catch(
            err => {
                callback(err);
            }
        );
};