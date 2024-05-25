"use client";
import Link from "next/link";
import classnames from "classnames";
import { useParams } from "next/navigation";

const IssueCard = ({ issue }) => {
  const { issueSlug } = useParams();
  const issueNumber = issueSlug ? issueSlug.split("-")[1] : null;

  return (
    <Link href={`/issues/TODO-${issue.issueNumber}`}>
      <div
        className={classnames({
          "card w-full glass mb-5 hover:bg-primary": true,
          "bg-primary": issue.issueNumber.toString() === issueNumber,
        })}
      >
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
