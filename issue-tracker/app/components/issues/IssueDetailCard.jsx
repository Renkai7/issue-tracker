"use client";
import useIssueDetail from "@/hooks/useIssueDetail";
import EditableTitle from "@components/issues/EditableTitle";
import EditableDescription from "@components/issues/EditableDescription";
import EditableStatus from "@components/issues/EditableStatus";
import DeleteButton from "@components/common/DeleteButton";

const IssueDetailCard = () => {
  const {
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
  } = useIssueDetail();

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
          <EditableTitle
            title={title}
            isEditing={isEditingTitle}
            onClick={handleTitleClick}
            onChange={handleTitleChange}
            onBlur={handleTitleBlur}
          />
          <EditableStatus
            status={status}
            isEditing={isEditingStatus}
            onClick={handleStatusClick}
            onChange={handleStatusChange}
            onBlur={handleStatusBlur}
          />
          <EditableDescription
            description={description}
            isEditing={isEditingDescription}
            onClick={handleDescriptionClick}
            onChange={handleDescriptionChange}
            onBlur={handleDescriptionBlur}
          />
          <div className="card-actions justify-end mt-6">
            <DeleteButton issueId={issue._id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueDetailCard;
