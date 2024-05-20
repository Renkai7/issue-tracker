"use client";
import Link from "next/link";
import { useState } from "react";

const IssueCard = ({ issue }) => {
  return (
    <Link href={`/issues/${issue._id}`}>
      <div className="card w-full glass mb-5 hover:bg-primary">
        <div className="card-body">
          <h2 className="card-title">
            {issue.title}
            <div className="badge badge-secondary">{issue.status}</div>
          </h2>
          <p>{issue.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default IssueCard;
