import React, { useEffect, useState } from "react";
import ProjectCart from "../components/ProjectCart";

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProjects = async () => {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:5000/api/projects");
        if (!res.ok) throw new Error("Something went wrong");
        const data = await res.json();
        setProjects(data);
        setLoading(false);
        console.log(data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    getProjects();
  }, []);
  return (
    <div className="home container mx-auto py-20 grid grid-cols-3 gap-10">
      <div className="left col-span-2">
        <h2 className="text-3xl font-medium text-purple-400">All Projects</h2>
        <div className="projects-wrapper flex gap-10 flex-wrap">
          {projects &&
            projects.map((project) => (
              <ProjectCart key={project._id} project={project} />
            ))}
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Home;
