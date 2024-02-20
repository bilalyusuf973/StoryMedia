import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import { User } from '@/models/model';
import connectToMongo from '@/libs/db';
import { AuthOptions } from 'next-auth';

const authOptions: AuthOptions = {
  pages: {
    signIn: "/home",
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

          const user = await User.findOne({email: credentials?.email});

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

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, authOptions };