import React, { useState } from "react";
import { useProjectsContext } from "../hooks/useProjectsContext";

const ProjectForm = () => {
  const [title, setTitle] = useState("");
  const [tech, setTech] = useState("");
  const [budget, setBudget] = useState("");
  const [duration, setDuration] = useState("");
  const [manager, setManager] = useState("");
  const [dev, setDev] = useState("");
  const [error, setError] = useState(null);

  const { dispatch } = useProjectsContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    //data
    const projectObj = { title, tech, budget, duration, manager, dev };

    //post request

    const res = await fetch("http://localhost:5000/api/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectObj),
    });

    const json = await res.json();

    //!res.ok, setError
    if (!res.ok) {
      setError(json.error);
      console.log(json.error);
    }
    //res.ok, reset
    if (res.ok) {
      setTitle("");
      setTech("");
      setBudget("");
      setDuration("");
      setManager("");
      setDev("");
      setError(null);
      dispatch({ type: "CREATE_PROJECT", payload: json });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="project-form flex flex-col gap-2">
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
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
          value={tech}
          onChange={(e) => setTech(e.target.value)}
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
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
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
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
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
          value={manager}
          onChange={(e) => setManager(e.target.value)}
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
          value={dev}
          onChange={(e) => setDev(e.target.value)}
          type="number"
          placeholder="e.g. 5"
          id="dev"
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-lg outline-none focus:border-violet-400"
        />
      </div>

      <button
        type="submit"
        className="bg-violet-400 text-slate-900 py-3 rounded-lg hover:bg-violet-50 duration-300"
      >
        Add Project
      </button>
      {error && (
        <p className="bg-rose-500/20 p-5 text-rose-500 border border-rose-500 rounded-lg">
          {error}
        </p>
      )}
    </form>
  );
};

export default ProjectForm;
