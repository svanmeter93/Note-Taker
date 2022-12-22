const express = require('express');
const path = require('path');
const fs = require('fs')
const routes = require ("./routes")


// Set up express
var app = express ();
// PORT always has to be capitalized
// PORT should be between 1024 - 65535 for non-priviliged port
const PORT = process.env.PORT || 3001
// var PORT = process.env.port
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use(routes);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
