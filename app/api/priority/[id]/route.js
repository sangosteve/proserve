import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function GET(request, { params }) {
  const { id } = params;
  const result = await prisma.priority.findUnique({
    where: { id },
  });
  return new Response(JSON.stringify(result));
}
