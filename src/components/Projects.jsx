import "./Projects.css"
import projImg from "../assets/project-img.jpg"
import futureImg from "../assets/future-careers.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBootstrap,
    faCss3Alt,
    faHtml5,
    faJsSquare,
    faNode,
    faPython,
    faReact
} from '@fortawesome/free-brands-svg-icons'

const Projects = () => {
    return (
        <div className="projects-page">
            <div className="projects-content">
                <div className="projects-card">
                    <img className="project-img" src={projImg} alt="" />
                    <div className="technology-stack">
                        <div><FontAwesomeIcon icon={faPython} color="#0052cc" size="2x"/></div>
                        <div><FontAwesomeIcon icon={faCss3Alt} color="#0052cc" size="2x"/></div>
                        <div><FontAwesomeIcon icon={faHtml5} color="#0052cc" size="2x"/></div>
                    </div>
                    <h3>DeDetect Lite</h3>
                    <p>A lite version of my thesis for breast cancer detection in mammograms</p>
                    <div className="project-location">
                        <a 
                            target="_blank"
                            rel="noreferrer"
                            href="https://future-careers.onrender.com/">
                            <button>Live Demo</button>
                        </a>
                        <a 
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/galvez-mcj/careers-website">
                            <button>Source Code</button>
                        </a>
                    </div>
                </div>
                <div className="projects-card">
                    <img className="project-img" src={projImg} alt="" />
                    <div className="technology-stack">
                        <div><FontAwesomeIcon icon={faReact} color="#0052cc" size="2x"/></div>
                        <div><FontAwesomeIcon icon={faNode} color="#0052cc" size="2x"/></div>
                        <div><FontAwesomeIcon icon={faCss3Alt} color="#0052cc" size="2x"/></div>
                        <div><FontAwesomeIcon icon={faHtml5} color="#0052cc" size="2x"/></div>
                    </div>
                    <h3>Blog Site</h3>
                    <p>A blog site with user authentication made with MERN stack</p>
                    <div className="project-location">
                        <a 
                            target="_blank"
                            rel="noreferrer"
                            href="https://future-careers.onrender.com/">
                            <button>Live Demo</button>
                        </a>
                        <a 
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/galvez-mcj/careers-website">
                            <button>Source Code</button>
                        </a>
                    </div>
                </div>
                <div className="projects-card">
                    <img className="project-img" src={futureImg} alt="" />
                    <div className="technology-stack">
                        <div><FontAwesomeIcon icon={faPython} color="#0052cc" size="2x"/></div>
                        <div><FontAwesomeIcon icon={faBootstrap} color="#0052cc" size="2x"/></div>
                        <div><FontAwesomeIcon icon={faCss3Alt} color="#0052cc" size="2x"/></div>
                        <div><FontAwesomeIcon icon={faHtml5} color="#0052cc" size="2x"/></div>
                    </div>
                    <h3>Future Careers Website</h3>
                    <p>A job hunt site with functioning backend database</p>
                    <div className="project-location">
                        <a 
                            target="_blank"
                            rel="noreferrer"
                            href="https://future-careers.onrender.com/">
                            <button>Live Demo</button>
                        </a>
                        <a 
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/galvez-mcj/careers-website">
                            <button>Source Code</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects