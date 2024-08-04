import React, { useEffect, useState } from "react";
import { getProjects } from "../../apiServices/projectsApiService";
import { PacmanLoader } from "react-spinners";

interface Project {
  id?: number;
  src: string;
  link: string;
  repo?: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="bg-[#22242f] w-full min-h-dvh pt-14 pb-14">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#c497fe]">
            Portfolio
          </p>
          <p className="max-w-[700px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed py-6">
            Check out some of my work right here
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-full">
            <PacmanLoader color="#c497fe" size={50} />
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {projects.map(({ id, src, link, repo }) => (
              <div key={id} className="shadow-md shadow-[#c497fe] rounded-lg">
                <img
                  src={src}
                  alt="projects"
                  className="rounded-md duration-200 object-cover hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <button
                    className="inline-flex h-8 items-center justify-center rounded-md bg-[#c497fe] text-sm font-medium text-black shadow transition-colors hover:bg-[#c4f582] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                    onClick={() => window.open(link, "_blank")}
                  >
                    Project
                  </button>
                  {repo && (
                    <button
                      className="inline-flex h-8 items-center justify-center rounded-md bg-[#c497fe] text-sm font-medium text-black shadow transition-colors hover:bg-[#c4f582] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                      onClick={() => window.open(repo, "_blank")}
                    >
                      GitHub
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
