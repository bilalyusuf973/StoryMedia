import { User } from "@/models/model";
import connectToMongo from "@/libs/db";
import { NextRequest, NextResponse } from "next/server";

export default async function GET(req: NextRequest) {
    try {
        await connectToMongo();
        const users = await User.find().sort({ createdAt: -1 });
        return NextResponse.json({ status: 200, users }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ status: 400, error }, { status: 400 });
    }
};