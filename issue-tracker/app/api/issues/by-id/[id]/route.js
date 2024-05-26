import Issue from "models/Issue.Model";
import { NextResponse } from "next/server";

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
  try {
    const { id } = params;
    await Issue.findByIdAndDelete(id);

    return NextResponse.json({ message: "Issue Deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

// TODO - Add PUT endpoint for isssue/[id]
export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const body = await req.json();
    const issueData = body.formData;

    // const updatedIssueData = await Issue.findByIdAndUpdate(id, {
    //   ...issueData,
    // });

    console.log(issueData);

    return NextResponse.json({ message: "Update successful" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
