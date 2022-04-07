const mongoose = require('mongoose');

const URI = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

const connectDB = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('database is connected 📡📡');
  } catch (error) {
    console.log('database is not connected 💥💥', error);
  }
};
module.exports = connectDB;
