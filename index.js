const config = require('./src/config/config');
const express = require('express');
const indexRoutes = require('./src/routes');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
swaggerDocument = require('./swagger.json');

const port = process.env.PORT || config.port;
const app = express();

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'General Authentication Demo Project',
            description: 'Genereal Auth Project Application API',
            contact: {
                name: 'Husen Lokhandwala',
            },
            servers: ['http://localhost:5000'],
        },
    },
    apis: ['./src/api/**/**.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', indexRoutes);

mongoose
    .connect(config.mongo_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to MongoDB .. :)');
    })
    .catch((err) => console.log(err));

app.listen(port, () => {
    console.log(`Application has been started at PORT :- ${config.port}`);
});
