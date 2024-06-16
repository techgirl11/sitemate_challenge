const express = require('express');
const app = express();
app.use(express.json());
const fixtures = require('./test/fixtures/response.json');

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/msg", (req, res, next) => {
    res.json({"message": "Hello, World!"});
});

app.post("/create", (req, res, next) => {
    const response = req.body;
    res.json({"issue created successfully": response});
});

app.get("/:id", (req, res, next) => {
    const id = parseInt(req.params.id) - 1; // because array index starts with 0
    const response = fixtures.issue[id];
    res.json({"response": response});
});

app.patch("/:id", (req, res, next) => {
    const issue = req.body;
    res.json({"issue updated successfuly": issue});
});

app.delete("/:id", (req, res, next) => {
    const id = parseInt(req.params.id) - 1; // because array index starts with 0
    const response = fixtures.issue[id];
    res.json({"issue to be deleted": response});
});