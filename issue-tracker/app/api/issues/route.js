import { NextResponse } from "next/server";
import Issue from "@/models/Issue.Model";

// Get ALL issues
export async function GET() {
  try {
    const issues = await Issue.find();
    return NextResponse.json({ issues }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
