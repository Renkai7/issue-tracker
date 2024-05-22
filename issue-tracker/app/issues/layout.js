"use client";
import { usePathname } from "next/navigation";

import Dashboard from "../components/Dashboard";

const IssuesLayout = ({ children }) => {
  const pathname = usePathname();

  return (
    <div className="flex">
      {/* Remove Dashboard when creating new Issue */}
      {pathname !== "/issues/new" && <Dashboard />}

      {children}
    </div>
  );
};

export default IssuesLayout;
