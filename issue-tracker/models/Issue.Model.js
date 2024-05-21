import mongoose from "mongoose";
import { issueSchema } from "@/schemas/IssueSchema";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const Issue = mongoose.models.Issue || mongoose.model("Issue", issueSchema);

//? Delete later? - This updates issues that didn't previously have an issue number
// const migrateIssues = async () => {
//   const issues = await Issue.find({ issueNumber: { $exists: false } });

//   let issueNumber = 1;
//   for (const issue of issues) {
//     issue.issueNumber = issueNumber++;
//     await issue.save();
//   }

//   console.log("Migration complete.");
//   mongoose.disconnect();
// };

// migrateIssues().catch((err) => {
//   console.error("Migration failed:", err);
//   mongoose.disconnect();
// });

export default Issue;
