import profile from "../assets/profile.jpg";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      
      {/* Profile Image */}
      <img src={profile} alt="Profile" className="profile" />

      {/* Name */}
      <h1>pragnainuganti</h1>

      {/* About Me */}
      <h2>About Me</h2>
      <p>
        I am a Computer Science student interested in Artificial Intelligence,
        Machine Learning, and Web Development. I enjoy building real-world
        applications and continuously learning new technologies.
      </p>

      {/* Research Interests */}
      <h2>Research Interests</h2>
      <p>
        Machine Learning, Natural Language Processing (NLP), Web Development,
        Data Science
      </p>

      {/* Personal Details */}
      <h2>Personal Details</h2>
      <ul>
        <li>Phone: 7382475888</li>
        <li>Personal Email: pragnainuganti@gmail.com</li>
        <li>College Email: se23umcs016@mahindrauniversity.edu.in</li>
        <li>Skills: React, JavaScript, Python, Machine Learning</li>
      </ul>

    </div>
  );
}

export default Home;