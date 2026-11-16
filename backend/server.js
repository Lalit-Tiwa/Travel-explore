const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {

    if (err) {
        console.log("MySQL connection failed:", err);
        return;
    }

    console.log("MySQL connected successfully");

});






app.post("/bookings", (req, res) => {

    const {
        full_name,
        email,
        phone,
        persons,
        travel_date,
        package_name
    } = req.body;

    const sql = `
        INSERT INTO bookings
        (full_name, email, phone, persons, travel_date, package_name)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    const values = [
        full_name,
        email,
        phone,
        persons,
        travel_date,
        package_name
    ];

    db.query(sql, values, (err, result) => {

        if (err) {
            console.log(err);

            return res.status(500).json({
                message: "Booking failed"
            });
        }

        res.status(201).json({
            message: "Ticket booked successfully",
            booking_id: result.insertId
        });

    });

});



app.listen(process.env.PORT, () => {

    console.log(`Server running on port ${process.env.PORT}`);

});