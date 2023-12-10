const express = require("express");
const cors = require("cors");
const { createPool } = require("mysql");

const app = express();

app.use(cors());

const pool = createPool({
    host: "127.0.0.1",
    port: 3307,
    user: "root",
    password: "",
    database: "reactdb",
    connectionLimit: 10,
});

app.get("/api/getData", (req, res) => {
    pool.query("SELECT * FROM reactdbtable", (err, result) => {
        if (err) {
            console.error("Error executing SQL query:", err);
            return res.status(500).json({ error: "Internal server error" });
        }
        res.json(result);
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));