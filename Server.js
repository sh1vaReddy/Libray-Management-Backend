const express = require('express');
const connectDatabase = require('./config/Db');
const Booksroute = require('./Routes/Booksroute');
const BookIssueroute=require('./Routes/BooksIssueroute')
const BooksCardRoute=require('./Routes/BooksCardroute')
const DueDataRoute=require('./Routes/DueDataroute')
const BookreturnRoute=require('./Routes/BoookReturnroute')
const app = express();
const bodyParse=require("body-parser");


const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(bodyParse.json());
app.use('/api/v1', Booksroute);
app.use('/api/v1',BookIssueroute)
app.use('/api/v1',BooksCardRoute)
app.use('/api/v1',DueDataRoute)
app.use('/api/v1',BookreturnRoute)



connectDatabase();
app.listen(PORT, () => {
    console.log(`Server is running in PORT ${PORT}`);
});
