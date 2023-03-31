import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://riyaz123:riyaz123@cluster0.dejgk67.mongodb.net/?retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;