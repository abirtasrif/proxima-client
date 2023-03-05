import React, { useState } from "react";
import { useProjectsContext } from "../hooks/useProjectsContext";
import { useAuthContext } from "../hooks/useAuthContext";

const ProjectForm = ({ project, setIsModalOpen, setIsOverlayOpen }) => {
  const [title, setTitle] = useState(project ? project.title : "");
  const [tech, setTech] = useState(project ? project.tech : "");
  const [budget, setBudget] = useState(project ? project.budget : "");
  const [duration, setDuration] = useState(project ? project.duration : "");
  const [manager, setManager] = useState(project ? project.manager : "");
  const [dev, setDev] = useState(project ? project.dev : "");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const { dispatch } = useProjectsContext();
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    //data
    const projectObj = { title, tech, budget, duration, manager, dev };

    // if no project, post request
    if (!project) {
      const res = await fetch("http://localhost:5000/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(projectObj),
      });

      const json = await res.json();

      //!res.ok, setError
      if (!res.ok) {
        setError(json.error);
        setEmptyFields(json.emptyFields);
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
        setEmptyFields([]);
        dispatch({ type: "CREATE_PROJECT", payload: json });
      }

      return;
    }

    //if there is a project, patch
    if (project) {
      //send patch req
      const res = await fetch(
        `http://localhost:5000/api/projects/${project._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify(projectObj),
        }
      );

      const json = await res.json();

      //!res.ok
      if (!res.ok) {
        setError(json.error);
        setEmptyFields(json.emptyFields);
      }

      //res.ok
      if (res.ok) {
        setError(null);
        setEmptyFields([]);
        //dispatch
        dispatch({ type: "UPDATE_PROJECT", payload: json });
        //close overlay & modal
        setIsModalOpen(false);
        setIsOverlayOpen(false);
      }

      return;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="project-form flex flex-col gap-2">
      <h2
        className={`text-3xl font-medium text-purple-400 ${
          project ? "hidden" : ""
        }`}
      >
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
          className={`bg-transparent border  py-3 px-5 rounded-lg outline-none focus:border-violet-400 duration-300 ${
            emptyFields?.includes(`title`)
              ? "border-rose-500"
              : "border-slate-500"
          }`}
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
          className={`bg-transparent border  py-3 px-5 rounded-lg outline-none focus:border-violet-400 duration-300 ${
            emptyFields?.includes(`tech`)
              ? "border-rose-500"
              : "border-slate-500"
          }`}
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
          className={`bg-transparent border  py-3 px-5 rounded-lg outline-none focus:border-violet-400 duration-300 ${
            emptyFields?.includes(`budget`)
              ? "border-rose-500"
              : "border-slate-500"
          }`}
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
          className={`bg-transparent border  py-3 px-5 rounded-lg outline-none focus:border-violet-400 duration-300 ${
            emptyFields?.includes(`duration`)
              ? "border-rose-500"
              : "border-slate-500"
          }`}
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
          className={`bg-transparent border  py-3 px-5 rounded-lg outline-none focus:border-violet-400 duration-300 ${
            emptyFields?.includes(`manager`)
              ? "border-rose-500"
              : "border-slate-500"
          }`}
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
          className={`bg-transparent border  py-3 px-5 rounded-lg outline-none focus:border-violet-400 duration-300 ${
            emptyFields?.includes(`dev`)
              ? "border-rose-500"
              : "border-slate-500"
          }`}
        />
      </div>

      <button
        type="submit"
        className="bg-violet-400 text-slate-900 py-3 rounded-lg hover:bg-violet-50 duration-300"
      >
        {project ? "Confirm Update" : "Add Project"}
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
