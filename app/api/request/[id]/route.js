import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function GET(request, { params }) {
  const { id } = params;
  const result = await prisma.request.findUnique({
    where: { id },
    include: { approver: true, priority: true, assignee: true },
  });
  return new Response(JSON.stringify(result));
}
