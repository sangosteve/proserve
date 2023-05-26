import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function POST(request) {
  const body = await request.json();
  console.log(body);
  const result = await prisma.status.create({
    data: body,
  });
  return new Response(
    JSON.stringify({ message: "Status Created Successfully" })
  );
}
