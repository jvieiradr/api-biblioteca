import mysql from 'mysql2';

const banco = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'biblioteca'
});

export default banco;