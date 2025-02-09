import { User } from "@/models/model";
import { NextRequest, NextResponse } from "next/server";
import { verifyUser } from "@/middlewares/verifyUser";

export async function GET(req: NextRequest){
    try {
        await verifyUser();

        const username = req.url.split("users/")[1];

        if(!username || typeof username !== 'string')
            throw new Error("Invalid Username!");
        
        const user = await User.findOne({ username }).select(['-_id', '-email', '-hashedPassword', '-hasNotification', '-messages', '-notifications', '-updatedAt', '-__v']);;

        if(!user)
            throw new Error("Invalid Username!");
  
        return NextResponse.json({ status: 200, user }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ status: 400, error }, { status: 400 });
    }
}