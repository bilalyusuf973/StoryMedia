import { User } from "@/models/model";
import { NextResponse } from "next/server";
import connectToMongo from "@/libs/db";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(){
    try {
        await connectToMongo();

        const session = await getServerSession(authOptions);
        if(!session || !session.user) 
            throw new Error('Not Signed in!');

        const currentUser = await User.findOne({ email: session.user.email }).select(['name', 'username', 'email', 'followingIds', 'posts', 'messages', 'notifications']);
        if(!currentUser){
            throw new Error("User does not exist!");
        }

        return NextResponse.json({ status: 200, currentUser }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ status: 400, error }, { status: 400 });
    }
}