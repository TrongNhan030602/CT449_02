const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());


const contactsRouter = require("./app/routes/contact.route");

app.use("/api/contacts", contactsRouter);

module.exports = app;
app.get('/', (req, res) => {
    res.json({ message: "Welcome to contact book application!" });
});

module.exports = app;