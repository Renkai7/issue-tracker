import { NextResponse } from "next/server";
import Issue from "models/Issue.Model";
import { getDemoIssues, addDemoIssue } from "@/lib/demoStorage";

const isDemoMode = process.env.NEXT_PUBLIC_IS_DEMO === "true";

// Get ALL issues
export async function GET() {
  if (isDemoMode) {
    return NextResponse.json({ issues: getDemoIssues() }, { status: 200 });
  }
  try {
    const issues = await Issue.find();
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
    const issueData = body.formData;
    const newIssue = await Issue.create(issueData);

    return NextResponse.json(newIssue, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
