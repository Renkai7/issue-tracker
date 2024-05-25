"use client";
import { useRouter } from "next/navigation";
import { useIssues } from "@components/context/IssueContext";

const DeleteButton = ({ issueId }) => {
  const { deleteIssueById } = useIssues();
  const router = useRouter();

  const handleDeleteClick = async () => {
    await deleteIssueById(issueId);
    router.push("/issues");
  };

  return (
    <button className="btn btn-secondary" onClick={handleDeleteClick}>
      Delete
    </button>
  );
};

export default DeleteButton;
