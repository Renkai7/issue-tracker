import Issue from "@/models/Issue.Model";
import { NextResponse } from "next/server";

//* Get issues/[issueNumber]
export async function GET(req, { params }) {
  try {
    const { issueNumber } = params;

    const foundIssue = await Issue.findOne({
      issueNumber: Number(issueNumber),
    });

    return NextResponse.json({ foundIssue }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
