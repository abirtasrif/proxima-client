import React from "react";

const ProjectForm = () => {
  return (
    <form className="project-form flex flex-col gap-2">
      <h2 className="text-3xl font-medium text-purple-400">
        Add a new project
      </h2>

      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="project-title"
          className="cursor-pointer hover:text-violet-400 duration-300"
        >
          Project Title
        </label>
        <input
          type="text"
          placeholder="e.g. e-commerce website"
          id="title"
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-lg outline-none focus:border-violet-400"
        />
      </div>

      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="tech"
          className="cursor-pointer hover:text-violet-400 duration-300"
        >
          Technology
        </label>
        <input
          type="text"
          placeholder="e.g. nodeJS, React, Redux etc."
          id="tech"
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-lg outline-none focus:border-violet-400"
        />
      </div>

      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="budget"
          className="cursor-pointer hover:text-violet-400 duration-300"
        >
          Budget (In USD)
        </label>
        <input
          type="number"
          placeholder="e.g. 500"
          id="budget"
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-lg outline-none focus:border-violet-400"
        />
      </div>

      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="duration"
          className="cursor-pointer hover:text-violet-400 duration-300"
        >
          Duration (In weeks)
        </label>
        <input
          type="number"
          placeholder="e.g. 4"
          id="duration"
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-lg outline-none focus:border-violet-400"
        />
      </div>

      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="manager"
          className="cursor-pointer hover:text-violet-400 duration-300"
        >
          Manager
        </label>
        <input
          type="text"
          placeholder="e.g. John Doe"
          id="manager"
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-lg outline-none focus:border-violet-400"
        />
      </div>

      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="devs"
          className="cursor-pointer hover:text-violet-400 duration-300"
        >
          No. of Developers
        </label>
        <input
          type="number"
          placeholder="e.g. 5"
          id="devs"
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-lg outline-none focus:border-violet-400"
        />
      </div>

      <button
        type="submit"
        className="bg-violet-400 text-slate-900 py-3 rounded-lg hover:bg-violet-50 duration-300"
      >
        Add Project
      </button>
    </form>
  );
};

export default ProjectForm;
