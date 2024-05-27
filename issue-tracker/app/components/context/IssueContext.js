import { createContext, useState, useContext, useEffect, useMemo } from "react";
import { getIssues, deleteIssue, addIssue, updateIssue } from "@/lib/api";

const IssueContext = createContext();

export const IssueProvider = ({ children }) => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const fetchIssues = async () => {
      const data = await getIssues();
      if (data) setIssues(data);
    };

    fetchIssues();
  }, []);

  const deleteIssueById = async (id) => {
    const res = await deleteIssue(id);
    if (res.ok) {
      setIssues((prevIssues) => prevIssues.filter((issue) => issue._id !== id));
    } else {
      console.error("Failed to delete issue");
    }
  };

  const addNewIssue = async (formData) => {
    const res = await addIssue(formData);
    if (res.ok) {
      const newIssue = await res.json();
      setIssues((prevIssues) => [...prevIssues, newIssue]);
      return newIssue;
    } else {
      console.error("Failed to add issue");
    }
  };

  const updateExistingIssue = async (id, updatedData) => {
    const res = await updateIssue(id, updatedData);
    if (res) {
      setIssues((prevIssues) =>
        prevIssues.map((issue) =>
          issue._id === id ? { ...issue, ...updatedData } : issue
        )
      );
      return res;
    } else {
      console.error("Failed to update issue");
      throw new Error("Failed to update issue");
    }
  };

  const contextValue = useMemo(
    () => ({ issues, deleteIssueById, addNewIssue, updateExistingIssue }),
    [issues]
  );

  return (
    <IssueContext.Provider value={contextValue}>
      {children}
    </IssueContext.Provider>
  );
};

export const useIssues = () => useContext(IssueContext);
