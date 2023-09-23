import "../styles/Projects.css";
import HULU from "../images/hulu.png";

const projects = {
  name: "Hulu-Clone",
  technology:
    "React, React-Router, Async Fetching, Vercel, TMDB API, CSS3, HTML5, JavaScript",
  description: `
    I recreated the movie card design from Hulu's original website, preserving its distinctive style. 
    I used the TMDB API to dynamically fetch and showcase movies on my website, 
    adding an extra layer of user engagement by including movie titles and integrating the YouTube 
    API to provide intriguing trailers. In addition, I implemented a user-friendly search engine for 
    precise movie searches. The website, meticulously crafted with React, is seamlessly hosted on 
    Vercel, and I ensured an appealing and adaptable user experience through CSS3, making the site 
    responsive across various devices.
  `,
};

function Projects() {
  console.log(projects);

  return (
    <section className="projects__container">
      <div className="projects__left-bar">
        <p>projects</p>
      </div>
    </section>
  );
}

export default Projects;
