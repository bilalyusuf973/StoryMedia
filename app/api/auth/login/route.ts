import bcrypt from 'bcrypt';
import { User } from '@/app/models/model'
import { NextRequest, NextResponse } from 'next/server';
import vine, { errors } from '@vinejs/vine';
import { loginSchema } from '@/validator/authSchema';
import ErrorReporter from '@/validator/errorReporter';
import connectToMongo from '@/libs/db';

export async function POST(req: NextRequest){
    try {
        await connectToMongo();
        const request = await req.json();
        const body = JSON.parse(request.body);
        const validator = vine.compile(loginSchema)
        const output = await validator.validate(body, {
            errorReporter: () => new ErrorReporter()
        });

        const user = await User.findOne({email: output.email});
        if(!user){
            return NextResponse.json({ status: 400, errors: { error: 'Account not found!' } }, { status: 200 })
        }
        else{
            const compare = await bcrypt.compare(output.password, user.hashedPassword);
            if(!compare){
                return NextResponse.json({ status: 400, errors: { error: 'Invalid Credentials!' } }, { status: 200 })
            }
    
            return NextResponse.json({ status: 200, message: 'Logged in successfully!' }, { status: 200 });
        }        
    } catch (error) {
        if (error instanceof errors.E_VALIDATION_ERROR) {
            return NextResponse.json({ status: 400, errors: error.messages }, { status: 400 })
        }
    }
};