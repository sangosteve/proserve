import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function GET(request, { params }) {
  const { userId } = params;

  const result = await prisma.organization.findMany({
    where: { creatorId: userId },
  });
  return new Response(JSON.stringify(result));
}
