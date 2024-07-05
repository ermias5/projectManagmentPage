import Button from "./Button";
import PropTypes from "prop-types";

export default function ProjectsSidebar({ onStartAddProject, projects }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-sky-400 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-4">
        {projects.map((project) => (
          <li key={project.id}>
            <button className="w-full text-left px-2 py-1 rounded-md my-1 text-stone-950 hover:text-stone-200 hover:bg-stone-800 rounded-r-xl ">{project.title}</button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

ProjectsSidebar.propTypes = {
  onStartAddProject: PropTypes.func.isRequired,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
