const express = require("express");
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 3001;

const app = express();

require('dotenv').config();

const mysql = require('mysql2');
const connection = mysql.createConnection(process.env.DATABASE_URL);

connection.connect();

app.use(express.json());
app.use(cors());

app.get("/users", (req, res) => {
    connection.query('SELECT * FROM users', function (err, rows, fields) {
        if(err) throw err;
        res.send(rows);
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

console.log('Connected to PlanetScale!');
