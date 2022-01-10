let dbConn = require('../config/dbConn');

exports.c= function(){
        setInterval(()=>{
        
        let sql = `select * from table3 limit 0,1`;
        const connection = dbConn.getConn();
        connection.query(sql,[],(err,list)=>{
        
        console.log('c query')
        console.log(list)  
            
        })

    },7000)
}