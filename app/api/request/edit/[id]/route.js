import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function POST(request, { params }) {
  const body = await request.json();
  const { id } = params;
  const result = await prisma.request.update({
    where: { id },
    data: body,
  });
  return new Response(
    JSON.stringify({ message: "Status Created Successfully", data: result })
  );
}
