let db = require('./db');
db.dbconn();

exports.getConn = function() {
    let connection = db.getConnection()
    return connection;
}
 