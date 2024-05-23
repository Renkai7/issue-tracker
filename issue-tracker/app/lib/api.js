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
