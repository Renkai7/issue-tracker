"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const NewIssureForm = () => {
  const router = useRouter();

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

    const res = await fetch("http://localhost:3000/api/issues", {
      method: "post",
      body: JSON.stringify({ formData }),
      "content-type": "application/json",
    });

    if (!res.ok) {
      throw new Error("Failed to create Issue.");
    }

    router.push("/issues");
    router.refresh();
  };

  const [formData, setFormData] = useState();

  return (
    <div>
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
    </div>
  );
};

export default NewIssureForm;
