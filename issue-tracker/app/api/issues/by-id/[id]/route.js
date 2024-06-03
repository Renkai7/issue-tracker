import Issue from "models/Issue.Model";
import { NextResponse } from "next/server";
import { deleteDemoIssue, updateDemoIssue } from "@/lib/demoStorage";

const isDemoMode = process.env.NEXT_PUBLIC_IS_DEMO === "true";

//* Get issues/[id]
export async function GET(req, { params }) {
  try {
    const { id } = params;

    const foundIssue = await Issue.findOne({ _id: id });

    return NextResponse.json({ foundIssue }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

//* Delete issues/[id]
export async function DELETE(req, { params }) {
  if (isDemoMode) {
    try {
      const { id } = params;

      const deletedIssue = deleteDemoIssue(id);
      if (!deletedIssue) {
        return NextResponse.json(
          { message: "Issue not found" },
          { status: 404 }
        );
      }

      return NextResponse.json(deletedIssue, { status: 200 });
    } catch (error) {
      return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
  }
  try {
    const { id } = params;
    await Issue.findByIdAndDelete(id);

    return NextResponse.json({ message: "Issue Deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  if (isDemoMode) {
    try {
      const { id } = params;
      const body = await req.json();

      const updatedIssue = updateDemoIssue(id, body);
      if (!updatedIssue) {
        return NextResponse.json(
          { message: "Issue not found" },
          { status: 404 }
        );
      }

      return NextResponse.json(updatedIssue, { status: 200 });
    } catch (error) {
      return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
  }
  try {
    const { id } = params;
    const body = await req.json();

    const updatedIssueData = await Issue.findByIdAndUpdate(id, body, {
      new: true,
    });

    return NextResponse.json(updatedIssueData, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
