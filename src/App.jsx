import "./App.css";

function App() {
  return (
    <div className="portfolio">
      <header className="header">
        <h1 className="name">Anand Goyal</h1>
        <p className="role">Full Stack Developer</p>
      </header>

      <section className="about section">
        <h2>About Me</h2>
        <p>
          I am a passionate full stack developer skilled in modern web
          technologies. I enjoy building scalable applications and solving real
          world problems with clean code and great UI/UX.
        </p>
      </section>

      <section className="skills section">
        <h2>Skills</h2>
        <ul>
          <li>React.js</li>
          <li>Node.js & Express</li>
          <li>MongoDB</li>
          <li>Java</li>
          <li>C++</li>
        </ul>
      </section>

      <section className="projects section">
        <h2>Projects</h2>

        <div className="project-card">
          <h3>School Management System</h3>
          <p>
            Built using Node.js, MongoDB, Passport.js and EJS views with features
            like fee tracking, homework submission, authentication, gallery and
            class management.
          </p>
          <a href="#" target="_blank">View Project</a>
        </div>

        <div className="project-card">
          <h3>Drug Analytics & Prediction</h3>
          <p>
            Used ML models (Random Forest, Logistic Regression) and Power BI
            dashboards to analyze and forecast drug consumption trends.
          </p>
          <a href="#" target="_blank">View Project</a>
        </div>
      </section>

      <section className="contact section">
        <h2>Contact</h2>
        <p>Email: yourname@example.com</p>
        <p>LinkedIn: linkedin.com/your-link</p>
        <p>GitHub: github.com/your-username</p>
      </section>
    </div>
  );
}

export default App;
