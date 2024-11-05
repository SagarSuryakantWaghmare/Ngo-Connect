import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const mongo_url = process.env.MONGO_CONN;

const connectDB = async () => {
    try {
        // if there is no mongo url check properly the .env file
        if (!mongo_url) {
            throw new Error('MongoDB connection string is not defined. Please set MONGO_CONN in your .env file.');
        }

        await mongoose.connect(mongo_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true, 
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection error:', err.message); // Log the error message
        process.exit(1); 
        // For teh failure purpose
    }
};
// here i call the function connect db
connectDB();

// i give you opinion to use the export default because it is the best practice
export default connectDB; 
