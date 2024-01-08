import connectMongoDB from "@/libs/mongodb";
import Customer from "@/models/customer";
import {NextResponse} from 'next/server'

export async function POST(request){
    const {
        name,
        email,
        phone,
        education,
        ielts_exam,
        course,
        country,
        start,
        fund,
    } = await request.json();
    await connectMongoDB();
    await Customer.create({
        name,
        email,
        phone,
        education,
        ielts_exam,
        course,
        country,
        start,
        fund,
    });
    return NextResponse.json({message: "Customer Created"}, {status : 201});
}

export async function GET(){
    await connectMongoDB();
    const customers = await Customer.find();
    return NextResponse.json({customers})
}