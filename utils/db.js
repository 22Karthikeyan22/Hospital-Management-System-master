const mysql = require('mysql');

const db = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: '',
    database: 'HospitalManagementSystem',
    port: 3306
});

db.connect((err) => {
    if(err) throw err;
    console.log("MySQL connected");
});

module.exports = db;