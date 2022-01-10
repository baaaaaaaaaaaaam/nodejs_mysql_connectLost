let dbConn = require('../config/dbConn');

exports.a= function(){
        setInterval(()=>{
        
        let sql = `select * from table1 limit 0,1`;
        let conn = dbConn.getConn();
        conn.query(sql,[],(err,list)=>{
        
        console.log('a query')
        console.log(list)  
            
        })

    },7000)
}

