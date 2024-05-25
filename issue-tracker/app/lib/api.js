//* Get all issues
export const getIssues = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/issues", {
      cache: "no-store",
    });

    if (!res.ok) {
      // Log the status and response body if the response is not OK
      const errorText = await res.text();
      console.log(`Error: ${res.status} - ${errorText}`);
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();

    return data.issues;
  } catch (error) {
    console.log("failed to get issues", error);
  }
};

// * Get issue by issue number
export const getIssue = async (issueNumber) => {
  try {
    const res = await fetch(
      `http://localhost:3000/api/issues/by-number/${issueNumber}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      // Log the status and response body if the response is not OK
      const errorText = await res.text();
      console.log(`Error: ${res.status} - ${errorText}`);
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();

    return data.foundIssue;
  } catch (error) {
    console.log("failed to get issue", error);
  }
};

// * Add issue
export const addIssue = async (formData) => {
  try {
    const res = await fetch("http://localhost:3000/api/issues", {
      method: "post",
      body: JSON.stringify({ formData }),
      "content-type": "application/json",
    });

    return res;
  } catch (error) {
    console.log("failed to delete issue", error);
  }
};

// * Delete issue by ID
export const deleteIssue = async (issueId) => {
  try {
    const res = await fetch(
      `http://localhost:3000/api/issues/by-id/${issueId}`,
      {
        method: "DELETE",
      }
    );

    return res;
  } catch (error) {
    console.log("failed to delete issue", error);
  }
};
