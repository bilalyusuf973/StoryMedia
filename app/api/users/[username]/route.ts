import { User } from "@/models/model";
import connectToMongo from "@/libs/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
    try {
        await connectToMongo();

        const username = req.url.split("users/")[1];

        if(!username || typeof username !== 'string')
            throw new Error("Invalid Username!");
        
        const userInfo = await User.findOne({ username }).select(['name', 'username', 'followingIds', 'posts']);;

        if(!userInfo)
            throw new Error("Invalid Username!");

        const followersCount = await User.find({ followingIds: { username } }).countDocuments();
  
        return NextResponse.json({ status: 200, user: {userInfo, followersCount} }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ status: 400, error }, { status: 400 });
    }
}