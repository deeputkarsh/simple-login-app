const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const cors = require('cors');
const mongoose = require('mongoose');
const slaRoute = require('./routes/sla.route');

const app = express();
app.use(cors({
    origin: config.frontEndUrl,
    optionsSuccessStatus: 200
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoDB = process.env.MONGODB_URI || config.mongoUrl;
mongoose.connect(mongoDB,{
    useCreateIndex: true,
    useNewUrlParser: true
});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => res.redirect(config.frontEndUrl));
app.use('/sla', slaRoute);

app.listen(config.port, () => console.log(`Simple Login App running on port ${config.port}!`));