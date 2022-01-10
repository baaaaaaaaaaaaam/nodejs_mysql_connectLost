
const mysql = require('mysql');

var db_config = {
    host:'server ip'
    ,user:'user id'
     ,password:'pwd'
     ,database:'database name'
     ,multipleStatements: true
    };
   
let connection;
    exports.dbconn =function handleDisconnect(){
        connection = mysql.createConnection(db_config);
        console.log('연결 시작')
        connection.connect(function(err) {
            if(err){
                console.log(`error ${err}`);
            }
            console.log('연결 성공')
            connection.on('error', function(err) {
                console.log('db error', err);
                if(err.code === 'PROTOCOL_CONNECTION_LOST') {
                    connection.destroy();
                    handleDisconnect();    
                } else {    
                    throw err;  
                }
            });
        })
    }
    exports.getConnection = function() {
        return connection;
    }
