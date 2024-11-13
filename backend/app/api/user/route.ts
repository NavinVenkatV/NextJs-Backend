import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export function GET(req:NextRequest){
  return NextResponse.json({
    name : "Navin Venakt",
    email : "vnavinvenakt#gmail,.com"
  })
}

export async function POST(req:NextRequest){
 try{
      const body = await req.json();
      // console.log(req.headers.get("authorization"))
      // console.log(req.nextUrl.seareechParams.get("name"))
      await prisma.user.create({
        data:{
          email: body.username,
          password: body.password
        }
      })
      console.log("HI")
      const res = await prisma.user.findFirst();
      console.log(res)
      return NextResponse.json({
        body
      })
 }
 catch(err){
      console.log(err)
      return NextResponse.json({
        msg : "Something went wrong"
      })
 }

}