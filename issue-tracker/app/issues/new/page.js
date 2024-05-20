import React from "react";

const NewIssuePage = () => {
  return (
    <div>
      <form action="" className="w-96">
        <label className="input input-bordered flex items-center gap-2">
          Name
          <input type="text" className="grow" placeholder="Daisy" />
        </label>
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Description"
        ></textarea>

        <button className="btn btn-primary">Submit New Issue</button>
      </form>
    </div>
  );
};

export default NewIssuePage;
