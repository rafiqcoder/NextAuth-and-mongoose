
import dbConnect from '../../config/dbConnect';
import user from '../../models/user';




export default async function handler(req,res) {
    if (req.method === 'POST') {
        dbConnect();
        const { name,email,password } = req.body;
        const user2 = await user.create({ name,email,password });
        console.log(user2);
        res.status(201).json({ user2 })

    }

}