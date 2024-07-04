import "./index.css";
import ProjectsSidebar from "./components/ProjectsSidebar";
import Header from "./components/Header";
// import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import NewProject from "./components/NewProject";
import { useState } from "react";

export default function App() {
  const [hasProject, setHasProject] = useState(false);

  function handleProjectSelection() {
    setHasProject(true);
  }
  return (
    <>
      <header className="text-blue-800 text-center text-3xl">
        <Header />
      </header>
      <main className="h-screen my-8 flex gap-8">
        <ProjectsSidebar handleProjectSelect={handleProjectSelection} />
        {hasProject ? <NewProject /> : <NoProjectSelected />}
        {/* <NewProject /> */}
      </main>
    </>
  );
}
