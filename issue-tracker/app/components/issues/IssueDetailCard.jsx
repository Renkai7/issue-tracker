"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useIssues } from "@/components/context/IssueContext";
import DeleteButton from "@components/common/DeleteButton";

const IssueDetailCard = () => {
  const { issueSlug } = useParams();
  const [issue, setIssue] = useState(null);
  const { issues } = useIssues();

  useEffect(() => {
    const fetchIssue = async () => {
      if (issueSlug) {
        const issueNumber = issueSlug.split("-")[1];
        // const issues = await getIssues();

        if (issues) {
          const selectedIssue = issues.find(
            (issue) => issue.issueNumber.toString() === issueNumber
          );
          setIssue(selectedIssue);
        }
      }
    };

    fetchIssue();
  }, [issueSlug]);

  if (!issue)
    return (
      <p>
        Loading... <span className="loading loading-spinner text-info"></span>
      </p>
    );
  return (
    <div className="items-center p-6 bg-base-200 min-h-screen flex-1">
      <div className="card w-full max-w-3xl bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-4xl font-bold">{issue.title}</h2>
          <div className="badge badge-secondary badge-outline">
            {issue.status}
          </div>
          <p className="mt-4 text-lg">{issue.description}</p>
          <div className="card-actions justify-end mt-6">
            <button className="btn btn-primary">Edit</button>
            <DeleteButton issueId={issue._id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueDetailCard;
