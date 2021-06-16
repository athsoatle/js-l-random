/**
 * @param {Function[]} operations
 * @param {Function} callback
 */
module.exports = function (operations, callback) {

    if(Array.isArray(operations) && operations.length < 1) {
        return callback(null, []);
    }

    Promise.all(operations)
        .then(function(results){
            callback(null, results);
        })
        .catch(
            function(err){
                return callback(err);
            }
        );
};