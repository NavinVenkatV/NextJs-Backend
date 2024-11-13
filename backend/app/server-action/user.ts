"use server"

import prisma from "../db";

export async function signup(email:string , password : string){
    try{
         await prisma.user.create({
           data:{
             email,
             password
           }
         })
         return true
    }
    catch(err){
         return false;
    }
   
   }