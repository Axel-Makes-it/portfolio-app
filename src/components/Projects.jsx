import "../styles/Projects.css";
import HULU from "../images/hulu.png";
import LINK from "../images/link.svg";
import CHAT from "../images/chat.png";
import DISCORD from "../images/discord.png";
import STORE from "../images/hydrant1.png";

const projects = [
  {
    name: "Hulu Clone",
    stack:
      "React, React-Router, Async Fetching, Vercel, TMDB API, CSS3, HTML5, JavaScript",
    description: `
      I recreated Hulu's movie card design, integrated TMDB and YouTube APIs for movies 
      and trailers, and added a user-friendly search engine. The React-based site is hosted 
      on Vercel and designed to be responsive.
    `,
    imageUrl: HULU,
    getUrl: () => "https://hulu-replica-rho.vercel.app/",
  },
  {
    name: "Discord Clone - Page & dashboard",
    stack: "React, Cloud FireStore, Fetching, CSS3, HTML5, JavaScript",
    description: `
     I've created a Discord clone using HTML, CSS, and React, Firebase, and Firestore. 
     hosted on Vercel. Messages are stored and retrieved in real-time. I'm demostrating that I can work with API's.
    `,
    imageUrl: DISCORD,
    getUrl: () => "https://dis-chat-seven.vercel.app/",
  },
  {
    name: "Live Chat - Concept",
    stack: "React, Cloud FireStore, Fetching, CSS3, HTML5, JavaScript",
    description: `
      I have developed a live chat application using React and Cloud Firestore. 
      The website is hosted on Vercel. Chat messages are stored in the Firebase 
      database, and they are retrieved and shown on the website.
    `,
    imageUrl: CHAT,
    getUrl: () => "https://messenger-app-eight.vercel.app/",
  },
  {
    name: "Ecommerce Store - Being Built",
    stack: "React, Firebase, Fetching, CSS3, HTML5, JavaScript",
    description: `
      In this e-commerce store, you can add items to your cart, remove them, 
      and check out using Stripe. The product listings are automatically fetched 
      from Stripe, keeping the store's inventory up to date.
    `,
    imageUrl: STORE,
    getUrl: () => "https://store-app-one-iota.vercel.app/",
  },
];

function Projects() {
  return (
    <section className="projects__container">
      {projects.map((project, index) => (
        <div className="projects__card" key={index}>
          <img
            className="projects__img"
            src={project.imageUrl}
            alt={project.name}
          />

          <div className="projects__info">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p id="stack">
              <span>Tech:</span>
              {project.stack}
            </p>
            <a
              href={project.getUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LINK} alt="Live View" />
              Live View
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
