import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

//* Get issues/[issueNumber]
export async function GET(req, { params }) {
  try {
    const { issueNumber } = params;

    const foundIssue = await prisma.issue.findFirst({
      where: {
        issueNumber: Number(issueNumber),
      },
    });

    if (!foundIssue) {
      throw new Error("Issue not found");
    }

    return NextResponse.json({ foundIssue }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
