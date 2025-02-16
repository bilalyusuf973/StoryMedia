import { User } from "@/models/model";
import { NextRequest, NextResponse } from "next/server";
import { verifyUser } from "@/middlewares/verifyUser";

export async function GET() {
    try {
        await verifyUser();

        const users = await User.find().select(['-_id', '-email', '-hashedPassword', '-hasNotification', '-messages', '-notifications', '-updatedAt', '-__v']).sort({ createdAt: -1 });
        
        return NextResponse.json({ status: 200, users }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ status: 400, error }, { status: 400 });
    }
};

export async function POST(req: NextRequest) {
    try {
        await verifyUser();

        const { searchQuery: query } = await req.json();

        const users = await User.find({
            $or: [
                { "name": { $regex: query, $options: "i" } }, // Search by name (case-insensitive)
                { "username": { $regex: query, $options: "i" } } // Search by username (case-insensitive)
            ]
        }).select(['-_id', '-email', '-hashedPassword', '-hasNotification', '-messages', '-notifications', '-updatedAt', '-__v']);

        if(users.length === 0)
            throw new Error('User Not found!');

        return NextResponse.json({ status: 200, users }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ status: 400, error }, { status: 400 });
    }
}