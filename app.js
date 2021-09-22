const express = require('express');
const app = express();

const port = process.env.port || 2000;

app.get('/', (req,res) =>res.send('welcome to myapp'));

app.listen(port, () => {
  console.log('Server running at ' + port);
});