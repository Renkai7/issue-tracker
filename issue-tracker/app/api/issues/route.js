import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { getDemoIssues, addDemoIssue } from "@/lib/demoStorage";

const prisma = new PrismaClient();
const isDemoMode = process.env.NEXT_PUBLIC_IS_DEMO === "true";

// Get ALL issues
export async function GET() {
  if (isDemoMode) {
    return NextResponse.json({ issues: getDemoIssues() }, { status: 200 });
  }
  try {
    const issues = await prisma.issue.findMany();
    return NextResponse.json({ issues }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

// Post Issue
export async function POST(req) {
  if (isDemoMode) {
    try {
      const body = await req.json();

      const newIssue = addDemoIssue(body.formData);
      return NextResponse.json(newIssue, { status: 201 });
    } catch (error) {
      return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
  }
  try {
    const body = await req.json();

    // Handle issueNumber increment logic
    const lastIssue = await prisma.issue.findFirst({
      orderBy: { issueNumber: "desc" },
    });
    const newIssueNumber = lastIssue ? lastIssue.issueNumber + 1 : 1;

    const newIssue = await prisma.issue.create({
      data: {
        ...body.formData,
        issueNumber: newIssueNumber,
      },
    });

    return NextResponse.json(newIssue, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
