"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useIssues } from "@/components/context/IssueContext";

const AddIssueForm = () => {
  const router = useRouter();
  const { addNewIssue } = useIssues();
  const [formData, setFormData] = useState();

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addNewIssue(formData);
      router.push("/issues");
    } catch (error) {
      console.error("Failed to create issue", error);
    }
  };

  return (
    <form method="post" className="w-96" onSubmit={handleSubmit}>
      <label className="input input-bordered flex items-center gap-2">
        Title
        <input
          id="title"
          name="title"
          onChange={handleChange}
          type="text"
          className="grow"
          placeholder="Enter issue name"
        />
      </label>
      <textarea
        id="description"
        name="description"
        rows={"5"}
        onChange={handleChange}
        className="textarea textarea-bordered w-full"
        placeholder="Description for issue"
      ></textarea>

      <button type="submit" className="btn btn-primary">
        Submit New Issue
      </button>
    </form>
  );
};

export default AddIssueForm;
