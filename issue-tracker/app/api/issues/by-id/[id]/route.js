import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { deleteDemoIssue, updateDemoIssue } from "@/lib/demoStorage";

const prisma = new PrismaClient();
const isDemoMode = process.env.NEXT_PUBLIC_IS_DEMO === "true";

//* Get issues/[id]
export async function GET(req, { params }) {
  try {
    const { id } = params;

    const foundIssue = await prisma.issue.findFirst({
      where: {
        id: id,
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

//* Delete issues/[id]
export async function DELETE(req, { params }) {
  // * Demo route
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

  // * Production route
  try {
    const { id } = params;
    await prisma.issue.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json({ message: "Issue Deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  // * Demo route
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

  // * Production route
  try {
    const { id } = params;
    const body = await req.json();

    const updatedIssueData = await prisma.issue.update({
      where: { id: id },
      data: body,
    });

    return NextResponse.json(updatedIssueData, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
