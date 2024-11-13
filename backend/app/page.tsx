import { PrismaClient } from "@prisma/client";
import prisma from "./db";

// const prisma = new PrismaClient();

async function detalils(){
  const res = await prisma.user.findFirst();
  return {
    name : "Navin Venakt",
    email : res?.email
  }
}



export default async function Home() {
  const details = await detalils()
  return (
    <div>
      {details.name}
      {details.email}
    </div>
  );
}
