import { User } from "@/models/model";
import { NextRequest, NextResponse } from "next/server";
import { verifyUser } from "@/middlewares/verifyUser";

export async function POST(req: NextRequest) {

    const { currentUser } = await verifyUser();
    const { username } = await req.json(); // User to follow

    
    if(!currentUser) return NextResponse.json({ message: "You need to be logged in to follow a user." }, { status: 401 });
    if(!username) return NextResponse.json({ message: "Please provide a username." }, { status: 400 });
    
    try {
      const userToFollow = await User.findOne({username});
      
      if (!currentUser || !userToFollow) return NextResponse.json({ message: "User not found." }, { status: 404 });
      if (currentUser._id === userToFollow._id) return NextResponse.json({ message: "You cannot follow yourself." }, { status: 400 });
      
      if (currentUser.followingIds.includes(userToFollow._id)) {
        return NextResponse.json({ message: "Already following this user." }, { status: 400 });
      }
      
      currentUser.followingIds.push(userToFollow._id);
      userToFollow.followersIds.push(currentUser._id);
      
      await currentUser.save();
      await userToFollow.save();
      
    return NextResponse.json({ status: 200, message: "Followed successfully." }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ status: 500, message: "Something went wrong.", error: error.message }, { status: 500 });
  }
};
