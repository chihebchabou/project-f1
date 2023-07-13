const express = require('express');
require('dotenv').config();
require('colors');
const connectDB = require('./config/db');
const { errorMiddleware } = require('./middleware/errorMiddleware');

// Init app
const app = express();
const port = process.env.PORT || 5000;

// Connect to data base
connectDB();

// Middleware
app.use(express.json()); // {"name": "John", "age": 24}
app.use(express.urlencoded({ extended: false })); // name=John&age=24

app.use('/api/contacts', require('./routes/contactRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

app.use(errorMiddleware);

app.listen(port, () => console.log(`Server is running on port ${port}`));
