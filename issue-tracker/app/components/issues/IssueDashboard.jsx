"use client";

import IssueCard from "@/components/issues/IssueCard";
import { useIssues } from "@/components/context/IssueContext";

const IssueDashboard = () => {
  const { issues } = useIssues();

  return (
    <div className="mr-5">
      <h1>Dashboard</h1>

      <div className="flex">
        <div>
          {issues &&
            issues.map((issue) => <IssueCard key={issue._id} issue={issue} />)}
        </div>
      </div>
    </div>
  );
};

export default IssueDashboard;
