import React, { useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectForm from "../components/ProjectForm";
import { useProjectsContext } from "../hooks/useProjectsContext";

const Home = () => {
  const { projects, dispatch } = useProjectsContext();

  useEffect(() => {
    const getAllProjects = async () => {
      const res = await fetch("http://localhost:5000/api/projects");
      const json = await res.json();

      if (res.ok) {
        dispatch({ type: "SET_PROJECTS", payload: json });
      }
    };

    getAllProjects();
  }, [dispatch]);

  return (
    <div className="home container mx-auto py-10 grid grid-cols-3 gap-10">
      <div className="left col-span-2">
        <h2 className="text-3xl font-medium text-purple-400">All Projects</h2>
        <div className="projects-wrapper flex gap-10 flex-wrap">
          {projects &&
            projects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
        </div>
      </div>
      <ProjectForm />
    </div>
  );
};

export default Home;
