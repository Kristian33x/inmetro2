'use strict'

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}


const cors = require('cors');
const authRoutes = require('./auth/auth.routes');
const express = require('express');
const properties = require('./config/properties');
const DB = require('./config/db')
const morgan = require('morgan');
const path = require('path');
// const { mongoose } = require('./database');

DB();

const app = express();
const router = express.Router();


const bodyParser = require('body-parser');
const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

app.use(cors());

app.use('/api', router);

authRoutes(router);
router.get('/', (req, res) => {
    res.send('Hello from home');
});

// index.js

// Settings
// app.set('port', process.env.PORT || 3000);

// // Middlewares
// app.use(morgan('dev'));
// app.use(express.json());
// app.use(cors({ origin: 'http://localhost:4200' }))

// Routes
app.use('/api/buses', require('./routes/bus.routes'));
app.use('/api/conductores', require('./routes/conductor.routes'));
app.use('/api/paradas', require('./routes/parada.routes'));

// fin index.js

// Static files
app.use('/', express.static(path.join(__dirname, 'dist')));
// app.use('**', express.static(path.join(__dirname, 'dist')));
// app.use('*', express.static(path.join(__dirname, 'dist')));
app.use('/home', express.static(path.join(__dirname, 'dist')));
app.use('/buses', express.static(path.join(__dirname, 'dist')));
app.use('/login', express.static(path.join(__dirname, 'dist')));
app.use('/about', express.static(path.join(__dirname, 'dist')));
app.use('/registrar', express.static(path.join(__dirname, 'dist')));
app.use('/paradas', express.static(path.join(__dirname, 'dist')));


app.use(router);
app.listen(properties.PORT, () => console.log(`Server runing on port ${properties.PORT}`));