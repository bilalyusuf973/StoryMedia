import { User } from "@/models/model";
import { NextRequest, NextResponse } from "next/server";
import connectToMongo from "@/libs/db";

export async function POST(req: NextRequest){
    try {
        await connectToMongo();
        const request = await req.json();
        const { email } = JSON.parse(request.body);

        if(!email){
            throw new Error("Not Signed In!");
        }

        const currentUser = await User.findOne({ email });
        if(!currentUser){
            throw new Error("User does not exist!");
        }

        return NextResponse.json({ status: 200, currentUser }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ status: 400, error }, { status: 400 });
    }
}