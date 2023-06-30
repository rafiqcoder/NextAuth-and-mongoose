import mongoose from "mongoose";

import bcrypt from 'bcryptjs';


const userScema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

userScema.pre('save',async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    // const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,10);
}
);
export default mongoose.models.User || mongoose.model('User',userScema);