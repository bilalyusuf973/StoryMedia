import { User } from "@/models/model";
import { NextResponse } from "next/server";
import connectToMongo from "@/libs/db";
import { verifyUser } from "@/middlewares/verifyUser";

export async function GET(){
    try {
        const { data: user } = await verifyUser();
        
        await connectToMongo();

        const currentUser = await User.findOne({ email: user.email }).select(['name', 'username', 'email', 'bio', 'image', 'coverImage', 'profileImage', 'emailVerified', 'hasNotification', 'followingIds', 'posts', 'messages', 'notifications']);
        if(!currentUser){
            throw new Error("User does not exist!");
        }

        return NextResponse.json({ status: 200, currentUser }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ status: 400, error }, { status: 400 });
    }
}