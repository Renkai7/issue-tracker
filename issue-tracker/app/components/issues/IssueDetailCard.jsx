"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useIssues } from "@/components/context/IssueContext";
import DeleteButton from "@components/common/DeleteButton";

const IssueDetailCard = () => {
  const { issueSlug } = useParams();
  const [issue, setIssue] = useState(null);
  const { issues, updateExistingIssue } = useIssues();

  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [title, setTitle] = useState("");

  const handleTitleClick = () => {
    setIsEditingTitle(true);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTitleBlur = async () => {
    setIsEditingTitle(false);

    try {
      await updateExistingIssue(issue._id, { title });
    } catch (error) {
      console.error("Failed to update issue", error);
    }
  };

  useEffect(() => {
    const fetchIssue = async () => {
      if (issueSlug) {
        const issueNumber = issueSlug.split("-")[1];

        if (issues) {
          const selectedIssue = issues.find(
            (issue) => issue.issueNumber.toString() === issueNumber
          );

          // * Only set issue if there is an issue selected
          if (selectedIssue) {
            setIssue(selectedIssue);
            setTitle(selectedIssue.title);
          }
        }
      }
    };

    fetchIssue();
  }, [issueSlug, issues]);

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
          {isEditingTitle ? (
            <input
              type="text"
              value={title}
              onChange={handleTitleChange}
              onBlur={handleTitleBlur}
              className="text-4xl font-bold w-full"
              autoFocus
            />
          ) : (
            <h2
              className="card-title text-4xl font-bold hover:bg-gray-200 cursor-pointer"
              onClick={handleTitleClick}
            >
              {title}
            </h2>
          )}
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
