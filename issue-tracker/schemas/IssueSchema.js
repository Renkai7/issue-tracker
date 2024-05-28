import { Schema } from "mongoose";

const Status = Object.freeze({
  OPEN: "OPEN",
  IN_PROGRESS: "IN PROGRESS",
  CLOSED: "CLOSED",
});

export const issueSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: {
    type: String,
    enum: Object.values(Status),
    default: Status.OPEN,
  },
  issueNumber: { type: Number, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

//* Check if item added is new, then returns and sorts issues in desc. order for issue numbers
issueSchema.pre("validate", async function (next) {
  if (this.$isNew) {
    const lastIssue = await this.constructor
      .findOne({})
      .sort({ issueNumber: -1 });
    this.issueNumber = lastIssue ? lastIssue.issueNumber + 1 : 1;
  }
  next();
});
