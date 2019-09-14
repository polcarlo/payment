const express = require('express');

const app = express();

app.use('/config/cash-in', require('./routes/api/cashIn'));
app.use('/config/cash-out', require('./routes/api/cashOut'));
app.use('/rates', require('./routes/api/rates'));

const getJson = require('./helper/getJsonFile');


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));