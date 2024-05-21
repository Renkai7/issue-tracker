"use client";
import { useParams, usePathname } from "next/navigation";
import IssuePage from "./[issueSlug]/page";
import Dashboard from "./page";

const IssuesLayout = ({ children }) => {
  const { issueSlug } = useParams();
  const pathname = usePathname();

  return (
    <div className="flex">
      {/* Remove Dashboard when creating new Issue */}
      {pathname !== "/issues/new" && <Dashboard />}

      {issueSlug && <IssuePage />}
    </div>
  );
};

export default IssuesLayout;
