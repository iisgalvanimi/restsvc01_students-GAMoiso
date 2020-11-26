
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const express = require('express');
const app = new express();
const helmet = require('helmet');
const cors = require('cors');
const corsWhitelist = ['http://localhost']
const corsOptions = { origin: corsWhitelist };
const defaultRoutes = require('../routes/default');
const logRoutes = require('../routes/logging');
const apiRagazze = require('../routes/apiRagazze');
const errorContoller = require('../controller/error');

app.use(helmet());
app.use(new cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logRoutes);
app.use(defaultRoutes);
app.use(apiRagazze);
app.use(errorContoller.get404Page);
apiRagazze

app.listen(PORT, function () {
  console.log(`Server app listening on port ${PORT}!`);
});
