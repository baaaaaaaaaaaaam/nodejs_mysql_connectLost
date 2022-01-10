let dbConn = require('../config/dbConn');
exports.b= function(){
        setInterval(()=>{
        
        let sql = `select * from table2 limit 0,1`;
        const connection = dbConn.getConn();
        connection.query(sql,[],(err,list)=>{
        
        console.log('b query')
        console.log(list)  
            
        })

    },7000)
}