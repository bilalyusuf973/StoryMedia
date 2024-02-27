import CredentialsProvider from 'next-auth/providers/credentials';
import { User } from '@/models/model';
import connectToMongo from '@/libs/db';
import { AuthOptions } from 'next-auth';

export const authOptions: AuthOptions = {
  pages: {
    signIn: "/login"
  },
  providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          email: { label: "email", type: "email"},
          password: { label: "password", type: "password" }
        },
        async authorize(credentials): Promise<any> {

          await connectToMongo();

          const user = await User.findOne({email: credentials?.email}).select(['name', 'username', 'email']);

          if(user) return user;
          else return 'null';
        }
      })
    ],
    session: {
      strategy: 'jwt'
    },
    jwt: {
      secret: process.env.JWT_SECRET
    },
    secret: process.env.NEXTAUTH_SECRET
};