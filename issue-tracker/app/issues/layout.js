"use client";
import { usePathname } from "next/navigation";

import IssueDashboard from "@/components/issues/IssueDashboard";

const IssuesLayout = ({ children }) => {
  const pathname = usePathname();

  return (
    <div className="flex">
      {/* Remove Dashboard when creating new Issue */}
      {pathname !== "/issues/new" && <IssueDashboard />}

      {children}
    </div>
  );
};

export default IssuesLayout;
