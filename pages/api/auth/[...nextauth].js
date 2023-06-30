import React from 'react'
import NextAuth from 'next-auth';
import dbConnect from '../../../config/dbConnect'
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import User from '../../../models/user';

export default NextAuth ( {
    session: {
        strategy: 'jwt',
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials,req) {

                dbConnect();

                const { email,password } = credentials;
                const user = await User.findOne({ email })
                if (!user) {
                    throw new Error('Invalid Email');
                }
                

                const isPasswordMatched = await bcrypt.compare(password,user.password);
                
                if (!isPasswordMatched) {
                    throw new Error('Invalid Password');
                }
                return user;
            },
        }),
    ],
    pages: {
        signIn: '/login'
    },
    secret: process.env.NEXTAUTH_SECRET,
})


