import React from "react";

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      <h1 className="text-6xl font-bold tracking-tight text-gray-800">
        Projects.
      </h1>

      <div>
        <h2>Coming soon.</h2>
      </div>
    </div>
  );
};

export default Projects;
