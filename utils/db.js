const mysql = require('mysql');

const db = mysql.createConnection({
    host    : '10.1.23.221',
    user    : 'karthi_2002',
    password: 'mano@2002',
    database: 'ziva_2022',
    port: 3306
});

db.connect((err) => {
    if(err) throw err;
    console.log("MySQL connected");
});

module.exports = db;
