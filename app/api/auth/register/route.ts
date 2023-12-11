import bcrypt from 'bcrypt';
import { User } from '@/app/models/model'
import { NextRequest, NextResponse } from 'next/server';
import vine, { errors } from '@vinejs/vine';
import { registerSchema } from '@/validator/authSchema';
import ErrorReporter from '@/validator/errorReporter';
import connectToMongo from '@/libs/db';

export async function POST(req: NextRequest){
    try {
        await connectToMongo();
        const request = await req.json();
        const body = JSON.parse(request.body);
        const validator = vine.compile(registerSchema)
        const output = await validator.validate(body, {
            errorReporter: () => new ErrorReporter()
        });

        const user = await User.findOne({email: output.email});
        if(user){
            return NextResponse.json({ status: 400, errors: { error: 'Email has already taken! Please use another email.' } }, { status: 200 })
        }
        else{
            const salt = bcrypt.genSaltSync(10)
            const hashedPassword = await bcrypt.hash(output.password, salt)
    
            await User.create({
                name: output.name,
                username: output.username,
                email: output.email,
                hashedPassword: hashedPassword
            });
    
            return NextResponse.json({ status: 200, message: 'Account Created Successfully!' }, { status: 200 });
        }        
    } catch (error) {
        if (error instanceof errors.E_VALIDATION_ERROR) {
            return NextResponse.json({ status: 400, errors: error.messages }, { status: 400 })
        }
    }
};