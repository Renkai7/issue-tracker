"use client";
import { useParams, usePathname } from "next/navigation";
import IssuePage from "./[issueId]/page";
import Dashboard from "./page";

const IssuesLayout = ({ children }) => {
  const { issueId } = useParams();
  const pathname = usePathname();

  return (
    <div className="flex">
      {/* Remove Dashboard when creating new Issue */}
      {pathname !== "/issues/new" && <Dashboard />}

      {issueId && <IssuePage />}
    </div>
  );
};

export default IssuesLayout;
