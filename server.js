const express = require('express');
const bodyParser = require('body-parser');
const {MongoClient} = require('mongodb');

const uri = "mongodb+srv://db:Dima1995@cluster0.hvkh2.mongodb.net/db?retryWrites=true&w=majority"
const client = new MongoClient(uri);


const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));