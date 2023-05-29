import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export async function GET(request, { params }) {
  if (params) {
    console.log(params);
  }
  const result = await prisma.request.findMany({
    include: { priority: true, approver: true, requester: true },
  });
  return new Response(JSON.stringify(result));
}
