import React from "react";

const ProjectCart = ({ project }) => {
  return (
    <div className="project bg-slate-800 rounded-xl shadow-xl border border-slate-700 flex flex-col gap-5 p-5">
      <div className="top">
        <span className="text-violet-400">ID:{project._id}</span>
        <h3 className="text-3xl font-medium">{project.title}</h3>
        <span className="uppercase text-xs tracking-widest font-medium text-slate-500">
          {project.tech}
        </span>
      </div>

      <div className="mid">
        <div className="left flex flex-col">
          <span>Budget: {project.budget}</span>
          <span>Added on: {project.createdAt}</span>
          <span>Last Update: {project.updatedAt}</span>
        </div>
        <div className="right"></div>
      </div>

      <div className="bottom"></div>
    </div>
  );
};

export default ProjectCart;
