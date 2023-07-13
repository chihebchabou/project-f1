const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, { family: 4 });
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (err) {
    console.log(`Could not connect to MongoDB: ${err.message}`.red);
  }
};

module.exports = connectDB;
