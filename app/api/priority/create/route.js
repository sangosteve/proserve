import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function POST(request) {
  const body = await request.json();
  const result = await prisma.priority.create({
    data: body,
  });
  return new Response(
    JSON.stringify({ message: "Priority Created Successfully" })
  );
}
