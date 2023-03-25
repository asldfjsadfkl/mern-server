import mongoose from "mongoose";

const DB = 'mongodb+srv://root:root@cluster0.xl4g213.mongodb.net/game?retryWrites=true&w=majority';
const DBConnec = () => {
    try {
        mongoose.connect(DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            family: 4,
        });
        console.log('connected seccessfuly');

    } catch (error) {
        console.log('not connected' + error);
    }
}
 export default DBConnec;
