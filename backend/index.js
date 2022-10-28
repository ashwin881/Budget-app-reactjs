const path = require('path');
const express = require('express');
const dotenv = require('dotenv');

const morgan = require('morgan');
const connectDB = require('./db');
const cors = require('cors')
dotenv.config({ path: './config.env' });



connectDB();

const transactions = require('./routes/transactions');

const app = express();

app.use(express.json());
app.use(cors({origin:'http://localhost:3000'}))
if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/postmessages', transactions);

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

