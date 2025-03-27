const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const { handleErrors } = require('./src/middlewares/errors');

const { sequelize } = require('./models/index');
const { dbAuthenticate } = require('./src/helpers/connections');

const { PORT } = process.env;

const app = express();
app.use(cors());
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ urlencoded: true }));
app.use(express.text({ type: 'application/json' }));

// CREATE SWAGGER
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use('/api', require('./src/api'))

app.get('/health', (req, res) => {
    res.status(200).send({ msg: `Server is currently working`, status: 'OK', port: PORT });
});

app.use(handleErrors);

(async () => {
    await dbAuthenticate(sequelize);
    app.listen(PORT, () => console.info(`Server start on port ${PORT}`));
})();