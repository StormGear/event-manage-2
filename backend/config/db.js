const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        // console.error(`Error: ${error.message}`.red.underline.bold);
        console.log(`Error: ${error}`);
        process.exit(1);
    }
};

module.exports = connectDB; 