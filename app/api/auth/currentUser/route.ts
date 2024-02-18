import { User } from "@/models/model";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../[...nextauth]/route";
import connectToMongo from "@/libs/db";

export async function GET(){
    try {
        await connectToMongo();
        const session = await getServerSession(authOptions);
        if(!session || !session?.user?.email){
            throw new Error("Not Signed In!");
        }

        console.log(session.user.email)

        const currentUser = await User.findOne({email: session.user.email});
        if(!currentUser){
            throw new Error("User does not exist!");
        }

        console.log(currentUser)

        return NextResponse.json({ status: 200, currentUser }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ status: 400, error }, { status: 400 });
    }
}