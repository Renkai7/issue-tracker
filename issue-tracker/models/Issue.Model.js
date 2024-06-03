import mongoose from "mongoose";
import { issueSchema } from "schemas/IssueSchema";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const Issue = mongoose.models.Issue || mongoose.model("Issue", issueSchema);

export default Issue;
