const config = require('./src/config/config');
const express = require('express');
// const router = require('./router');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const port = process.env.PORT || config.port;
const app = express();

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// app.use(cors());
// app.use(bodyParser.urlencoded({ extended:false }));
// app.use(bodyParser.json());
// app.use(router)

// mongoose.connect(config.mongo_url, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
// 	console.log("Connected to MongoDB .. :)")
// }).catch(err => console.log(err));

app.listen(port, () => {
    console.log(`Application has been started at PORT :- ${config.port}`);
});
