import mongoose from 'mongoose';

const connectDB = (url) => {
    mongoose.set('stringQuery', true);

    mongoose.connect(url)
    .then(() => console.log('MongoDB connect'))
    .catch((error) => console.log(error));
}

export default connectDB;