import mongoose from 'mongoose';

export default function dbConnect() {
    if (mongoose.connection.readyState >= 1) {
        return
    }

    mongoose.connect(
      "mongodb+srv://nextauth:nextauth@cluster0.kwehlhs.mongodb.net"
    );
}
