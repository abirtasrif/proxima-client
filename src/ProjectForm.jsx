import React from "react";
import { useState } from "react";

const ProjectForm = () => {
  const [title, setTitle] = useState("");
  const [tech, setTech] = useState("");
  const [budget, setBudget] = useState("");
  const [duration, setDuration] = useState("");
  const [manager, setManager] = useState("");
  const [dev, setdev] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    //data
    const project = { title, tech, budget, duration, manager, dev };

    //post req
    const res = await fetch("http://localhos:5000/api/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    });
    const json = await res.json();
  };

  //!res.ok set error
  if (res.ok) {
    setError(json.error);
  }
  //res.ok, reset
  if (res.ok) {
    setTitle("");
    setTech("");
    setBudget("");
    setDuration("");
    setManager("");
    setdev("");
    setError(null);
  }

  return (
    <form className="project-form">
      <h2 className="text-4xl font-medium text-sky-400 mb-10">
        Add a New Project
      </h2>

      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="title"
          className="cursor-pointer hover:text-sky-400 duration-300"
        >
          Project Title
        </label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="e.g. e-commerce website"
          id="title"
          className="bg-transparent border border-slate-500 py-3 px-5 rounded outline-none focus:border-sky-400 duration-300"
        />
      </div>

      <div className="form-control">
        <label htmlFor="title">Project Title</label>
        <input type="text" placeholder="e.g. e-commerce website" id="title" />
      </div>

      <div className="form-control">
        <label htmlFor="title">Project Title</label>
        <input type="text" placeholder="e.g. e-commerce website" id="title" />
      </div>

      <div className="form-control">
        <label htmlFor="title">Project Title</label>
        <input type="text" placeholder="e.g. e-commerce website" id="title" />
      </div>

      <div className="form-control">
        <label htmlFor="title">Project Title</label>
        <input type="text" placeholder="e.g. e-commerce website" id="title" />
      </div>

      <div className="form-control">
        <label htmlFor="title">Project Title</label>
        <input type="text" placeholder="e.g. e-commerce website" id="title" />
      </div>

      <button
        type="submit"
        className="bg-sky-400 w-full rounded-lg py-3 border text-slate-900 hover:bg-white duration-300 hover:border-sky-400"
      >
        Add Project
      </button>
    </form>
  );
};

export default ProjectForm;
