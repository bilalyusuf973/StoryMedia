import { authOptions } from "@/libs/authOptions";
import { getServerSession } from "next-auth";

export async function verifyUser () {
    try {
        const session = await getServerSession(authOptions);
        if(!session || !session.user)
            throw new Error('Please authenticate with a valid token!');
    
        return { data: session.user }
    } catch (error) {   
        throw new Error('Please authenticate with a valid token!');
    }
}