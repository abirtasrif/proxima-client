import React from "react";
import { currencyFormatter } from "../utils/currencyFormatter";

const ProjectCart = ({ project }) => {
  return (
    <div className="project bg-slate-800 rounded-xl shadow-xl border border-slate-700 flex flex-col gap-5 p-5 w-[19rem]">
      <div className="top">
        <span className="text-violet-400">ID:{project._id}</span>
        <h3 className="text-3xl font-medium">{project.title}</h3>
        <span className="uppercase text-xs tracking-widest font-medium text-slate-500">
          {project.tech}
        </span>
      </div>

      <div className="mid mid-slate-300 flex gap-10">
        <div className="left flex flex-col">
          <span>Budget: {currencyFormatter(project.budget)}</span>
          <span>
            Added on: {new Date(project.createdAt).toLocaleDateString()}
          </span>
          <span>
            Last Update: {new Date(project.updatedAt).toLocaleDateString()}
          </span>
        </div>
        <div className="right flex flex-col">
          <span>{project.manager}</span>
          <span>{project.dev}</span>
          <span>{`${project.duration} week${
            project.duration === 1 ? "" : "s"
          }`}</span>
        </div>
      </div>

      <div className="bottom flex gap-5">
        <button className="bg-violet-400 text-slate-900 py-2 px-5 rounded-xl hover:bg-violet-50 duration-300">
          Update
        </button>
        <button className="text-rose-500 hover:underline">Delete</button>
      </div>
    </div>
  );
};

export default ProjectCart;
