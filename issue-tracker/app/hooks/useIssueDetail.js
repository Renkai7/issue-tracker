import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useIssues } from "@/components/context/IssueContext";

const useIssueDetail = () => {
  const { issueSlug } = useParams();
  const { issues, updateExistingIssue } = useIssues();
  const [issue, setIssue] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingDescription, setIsEditingDescription] = useState(false);
  const [isEditingStatus, setIsEditingStatus] = useState(false);

  useEffect(() => {
    const fetchIssue = async () => {
      if (issueSlug) {
        const issueNumber = issueSlug.split("-")[1];

        let selectedIssue = issues?.find(
          (issue) => issue.issueNumber.toString() === issueNumber
        );

        // * Only set issue if there is an issue selected
        if (selectedIssue) {
          setIssue(selectedIssue);
          setTitle(selectedIssue.title);
          setDescription(selectedIssue.description);
          setStatus(selectedIssue.status);
        }
      }
    };

    fetchIssue();
  }, [issueSlug, issues]);

  // Title
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

  // Description
  const handleDescriptionClick = () => {
    setIsEditingDescription(true);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleDescriptionBlur = async () => {
    setIsEditingDescription(false);
    try {
      await updateExistingIssue(issue._id, { description });
    } catch (error) {
      console.error("Failed to update issue", error);
    }
  };

  // Status
  const handleStatusClick = () => {
    setIsEditingStatus(true);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleStatusBlur = async () => {
    setIsEditingStatus(false);
    try {
      await updateExistingIssue(issue._id, { status });
    } catch (error) {
      console.error("Failed to update issue", error);
    }
  };

  return {
    issue,
    title,
    description,
    status,
    isEditingTitle,
    isEditingDescription,
    isEditingStatus,
    handleTitleClick,
    handleTitleChange,
    handleTitleBlur,
    handleDescriptionClick,
    handleDescriptionChange,
    handleDescriptionBlur,
    handleStatusClick,
    handleStatusChange,
    handleStatusBlur,
  };
};

export default useIssueDetail;
