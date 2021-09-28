import { Mongoose } from "mongoose";
const userSchema = mongoose.Schema({
    name: String,
    usename:String,
    email: String,
    phone: Number
});

export default mongoose.model('user',userSchema);