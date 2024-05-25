"use client";
import { usePathname } from "next/navigation";
import { IssueProvider } from "@/components/context/IssueContext";
import IssueDashboard from "@/components/issues/IssueDashboard";

const IssuesLayout = ({ children }) => {
  const pathname = usePathname();

  return (
    <IssueProvider>
      <div className="flex">
        {/* Remove Dashboard when creating new Issue */}
        {pathname !== "/issues/new" && <IssueDashboard />}

        {children}
      </div>
    </IssueProvider>
  );
};

export default IssuesLayout;
