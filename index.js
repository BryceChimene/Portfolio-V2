import express from "express";

const app = express();
const port = 3000;

// To use static files
app.use(express.static('public'));

// Server loads the index.ejs file
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});