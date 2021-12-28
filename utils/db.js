const mysql = require('mysql');

const db = mysql.createConnection({
    host    : 'localhost',
    user    : 'karthi_2002',
    password: 'mano@2002',
    database: 'HospitalManagementSystem',
    port: 3306
});

db.connect((err) => {
    if(err) throw err;
    console.log("MySQL connected");
});

module.exports = db;
