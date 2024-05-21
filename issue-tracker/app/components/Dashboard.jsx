"use client";
import { useEffect, useState } from "react";
import IssueCard from "./IssueCard";
import { getIssues } from "../lib/api";

const Dashboard = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    // GET issues
    const fetchIssues = async () => {
      const data = await getIssues();
      if (data) setIssues(data);
    };

    fetchIssues();
  }, []);

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

export default Dashboard;
