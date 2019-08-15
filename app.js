const express = require('express');
const figlet = require('figlet');
const mongoose = require('mongoose');

require('dotenv/config');

const port = 3000;
const app = express();

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true
})

app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const posts = require('./src/routes/posts');
app.use('/posts', posts)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

console.log(
    figlet.textSync('Server Started', {
      horizontalLayout: 'fitted',
    })
);
