const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '4Gestapo5',
    database:'sys'
});

 function connect(){
    return new Promise((resolve, reject) => {
        con.connect(function(err) {
             if(err){
                reject(err);
                return;
            }
            console.log('Conectado!');
            resolve(con.state);
        });
    });
}

function  getConnect() {
    return con;
}

function executeQuery(sql) {
    return new Promise((resolve, reject) =>  {
        if(con.state === 'connected' || con.state === 'authenticated'){
            con.query(sql, function(err, result) {
                if(err){
                    reject(err);
                }
                resolve(result);
            });
        }
    });
}

function end(){
    con.end();
}
module.exports = {
    connect,
    executeQuery,
    getConnect,
    end
};
