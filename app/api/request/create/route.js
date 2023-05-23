import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function POST(request) {
  const body = await request.json();
  const result = await prisma.request.create({
    data: body,
  });
  return new Response(
    JSON.stringify({ message: "Status Created Successfully", data: result })
  );
}
