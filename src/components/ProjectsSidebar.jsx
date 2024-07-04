import Button from "./Button";
import PropTypes from "prop-types";

export default function ProjectsSidebar({ handleProjectSelect }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-sky-400 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={handleProjectSelect}>+ Add Project</Button>
      </div>
      <ul></ul>
    </aside>
  );
}

ProjectsSidebar.propTypes = {
  handleProjectSelect: PropTypes.func.isRequired,
};
