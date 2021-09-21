import express from 'express';
import mongoose from 'mongoose';
import cards from './dbCards.js';
import Cors from 'cors';

// App Config
const app = express();
const port = process.env.PORT || 8001
const connection_url = 'your own mongodb cluster url here 😊'

// Middlewares
app.use(express.json());
app.use(Cors());

// DB Config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

// API Endpoints
app.get('/', (req, res) => res.status(200).send('Hello User'))

app.post('/tinder/cards', (req, res) => {
    const dbCards = req.body;
    cards.create(dbCards, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
});

app.get('/tinder/cards', (req, res) => {
    cards.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
});

app.delete('/tinder/cards', (req, res) => {
    const dbCards = req.body;
    cards.deleteOne(dbCards, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
});

// Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`))
