import { authOptions } from "@/libs/authOptions";
import connectToMongo from "@/libs/db";
import { User } from "@/models/model";
import { getServerSession } from "next-auth";

export async function verifyUser () {
    try {
        const session = await getServerSession(authOptions);
        if(!session?.user?.email)
            throw new Error('Please authenticate with a valid token!');

        await connectToMongo();

        const currentUser = await User.findOne({ email: session.user.email }).select(['-hashedPassword', '-__v', '-updatedAt']);
        if(!currentUser)
            throw new Error('Not signed in!');
    
        return { currentUser };
    } catch (error) {   
        throw new Error('Please authenticate with a valid token!');
    }
}