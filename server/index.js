const express = require('express');
require('dotenv').config();
const {graphqlHTTP} = require('express-graphql');``
const port = process.env.PORT || 5000;
const schema = require('./schema/schema');
const colors = require('colors');
const cors = require('cors');
const connectDB = require('./config/db')

const app = express();

app.use(cors());

connectDB();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV=='development'
}))
app.listen(port, console.log(`server running on port ${port}`));