const express = require('express');
const connection = require('../database');
const app = express();

app.use('/', express.static('./public'));

const PORT = 8000;

// app.get()
// app.post()
// app.put()
// app.delete()

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})