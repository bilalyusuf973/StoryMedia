import { User } from "@/models/model";
import { NextRequest, NextResponse } from "next/server";
import { verifyUser } from "@/middlewares/verifyUser";
import { ObjectId } from "mongoose";

export async function POST(req: NextRequest) {

    const { currentUser } = await verifyUser();
    const { username } = await req.json(); // User to unfollow

    
    if(!currentUser) return NextResponse.json({ message: "You need to be logged in to unfollow a user." }, { status: 401 });
    if(!username) return NextResponse.json({ message: "Please provide a username." }, { status: 400 });
    
    try {
      const userToUnfollow = await User.findOne({username});
      
      if (!currentUser || !userToUnfollow) return NextResponse.json({ message: "User not found." }, { status: 404 });
      if (currentUser._id === userToUnfollow._id) return NextResponse.json({ message: "You cannot unfollow yourself." }, { status: 400 });
      
      if (!currentUser.followingIds.includes(userToUnfollow._id)) {
        return NextResponse.json({ message: "Already unfollowing this user." }, { status: 400 });
      }
      
      currentUser.followingIds = currentUser.followingIds.filter((id: ObjectId) => id.toString() !== userToUnfollow._id.toString());
      userToUnfollow.followersIds = userToUnfollow.followersIds.filter((id: ObjectId) => id.toString() !== currentUser._id.toString());
      
      await currentUser.save();
      await userToUnfollow.save();
      
    return NextResponse.json({ status: 200, message: "Unfollowed successfully." }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ status: 500, message: "Something went wrong.", error: error.message }, { status: 500 });
  }
};
