import { NextResponse } from "next/server";
import { verifyUser } from "@/middlewares/verifyUser";

export async function GET(){
    try {
        const { currentUser } = await verifyUser();

        return NextResponse.json({ status: 200, currentUser }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ status: 400, error }, { status: 400 });
    }
}