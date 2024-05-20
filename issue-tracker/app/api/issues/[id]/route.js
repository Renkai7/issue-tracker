import Issue from "@/models/Issue.Model";
import { NextResponse } from "next/server";

// Get issues/[id]
export async function GET(req, { params }) {
  try {
    const { id } = params;

    const foundTicket = await Issue.findOne({ _id: id });

    return NextResponse.json({ foundTicket }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
