import "./Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1>My Projects</h1>

      <div className="card">
        <h3>Assignment 2</h3>
        <p>Course assignment project showcasing core concepts.</p>
        <a href="https://github.com/Pragna0023/Assignment-2" target="_blank">
          GitHub Link
        </a>
      </div>

      <div className="card">
        <h3>Jira Test Project</h3>
        <p>Project related to issue tracking and workflow management.</p>
        <a href="https://github.com/Pragna0023/jira-test" target="_blank">
          GitHub Link
        </a>
      </div>

      <div className="card">
        <h3>SD Project</h3>
        <p>Software development project demonstrating system design.</p>
        <a href="https://github.com/Pragna0023/sd" target="_blank">
          GitHub Link
        </a>
      </div>

      <div className="card">
        <h3>Resume Generator</h3>
        <p>Automatically generates resumes from job descriptions.</p>
        <a
          href="https://github.com/Pragna0023/resume_render_from_job_description"
          target="_blank"
        >
          GitHub Link
        </a>
      </div>
    </div>
  );
}

export default Projects;