const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Create a MySQL connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "your-mysql-password",
    database: "sql_react_app"
});

// Route to get all students
app.get("/", (req, res) => {
    const sql = "SELECT * FROM student";
    db.query(sql, (err, data) => {
        if (err) {
            res.json(err);
        } else {
            res.send(data);
        }
    })
})

// Route to create a new student
app.post("/create", (req, res) => {
    const sql = "INSERT INTO student(name,email,marks,grade,city) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.marks,
        req.body.grade,
        req.body.city
    ]
    db.query(sql, [values], (err, data) => {
        if (err) {
            res.json(err);
        } else {
            res.json(data);
        }
    })
})

// Route to update an existing student
app.put("/update/:id", (req, res) => {
    const sql = "UPDATE student SET `name` = ?, `email` = ?, `marks` = ?, `grade` = ?, `city` = ? WHERE id = ?";
    const values = [
        req.body.name,
        req.body.email,
        req.body.marks,
        req.body.grade,
        req.body.city
    ]
    const id = req.params.id
    db.query(sql, [...values, id], (err, data) => {
        if (err) {
            res.json(err);
        } else {
            res.json(data);
        }
    })
})

// Route to delete a student
app.delete("/student/:id", (req, res) => {
    const sql = "DELETE FROM student WHERE id = ?";
    const id = req.params.id
    db.query(sql, [id], (err, data) => {
        if (err) {
            res.json(err);
        } else {
            res.json(data);
        }
    })
})

// Start the server
app.listen(5000, () => {
    console.log("Server started on port 5000");
})

