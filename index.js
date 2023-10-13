const express = require('express');
const dbConnect = require('./config');
const projectRouter = require('./routes/projectRoutes.js');
const retailBillingRouter = require('./routes/retailBillingRoutes.js');
const app = express();
const PORT = 8200;

dbConnect('mongodb://127.0.0.1:27017/project');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', projectRouter);
app.use('/api', retailBillingRouter);

app.listen(PORT, () => console.log(`Server run on port number ${PORT}`));
