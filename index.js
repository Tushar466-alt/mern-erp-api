const express = require('express');
const dbConnect = require('./config');
const router = require('./routes/routes');
const app = express();
const PORT = 8200;

dbConnect('mongodb://127.0.0.1:27017/project');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', router);

app.listen(PORT, () => console.log(`Server run on port number ${PORT}`));
