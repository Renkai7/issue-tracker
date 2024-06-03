import { mockIssues } from "./mockData";

let demoIssues = [];

// Function to initialize demoIssues from localStorage or fallback to mockIssues
const initializeDemoIssues = () => {
  demoIssues = [...mockIssues];
};

initializeDemoIssues();

export const getDemoIssues = () => {
  console.log("Log from getDemoIssues");
  return demoIssues;
};

export const getDemoIssueByNumber = (issueNumber) => {
  console.log("Log from getDemoIssueByNumber");
  return demoIssues.find((issue) => issue.issueNumber === issueNumber);
};

export const addDemoIssue = (issue) => {
  try {
    console.log("Log from addDemoIssue");
    const lastIssue =
      demoIssues.length > 0 ? demoIssues[demoIssues.length - 1] : null;
    const newIssueNumber = lastIssue ? lastIssue.issueNumber + 1 : 1;
    const newIssue = {
      _id: demoIssues.length + 1,
      issueNumber: newIssueNumber,
      status: "OPEN",
      ...issue,
    };

    demoIssues.push(newIssue);

    return newIssue;
  } catch (error) {
    console.error("Error in addDemoIssue:", error);
  }
};

export const deleteDemoIssue = (id) => {
  try {
    console.log("Log from deleteDemoIssue");
    demoIssues = demoIssues.filter((issue) => issue.id !== id);
    return demoIssues;
  } catch (error) {
    console.error("Error in deleteDemoIssue:", error);
  }
};

export const updateDemoIssue = (id, updatedData) => {
  try {
    console.log("Log from updateDemoIssue");
    demoIssues = demoIssues.map((issue) =>
      issue.id === id ? { ...issue, ...updatedData } : issue
    );
    return demoIssues;
  } catch (error) {
    console.error("Error in updateDemoIssue:", error);
  }
};
