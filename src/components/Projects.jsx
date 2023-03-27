import "./Projects.css"
import projImg from "../assets/project-img.jpg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCss3Alt,
    faHtml5,
    faJsSquare,
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
                        <div><FontAwesomeIcon icon={faJsSquare} color="#0052cc" size="2x"/></div>
                        <div><FontAwesomeIcon icon={faCss3Alt} color="#0052cc" size="2x"/></div>
                        <div><FontAwesomeIcon icon={faHtml5} color="#0052cc" size="2x"/></div>
                    </div>
                    <h3>Project 1</h3>
                    <p>A CNN application</p>
                    <div className="project-location">
                        <button>Live Demo</button>
                        <button>Source Code</button>
                    </div>
                </div>
                <div className="projects-card">
                    <img className="project-img" src={projImg} alt="" />
                    <div className="technology-stack">
                        <div><FontAwesomeIcon icon={faJsSquare} color="#0052cc" size="2x"/></div>
                        <div><FontAwesomeIcon icon={faCss3Alt} color="#0052cc" size="2x"/></div>
                        <div><FontAwesomeIcon icon={faHtml5} color="#0052cc" size="2x"/></div>
                    </div>
                    <h3>Project 2</h3>
                    <p>A CRUD application</p>
                    <div className="project-location">
                        <button>Live Demo</button>
                        <button>Source Code</button>
                    </div>
                </div>
                <div className="projects-card">
                    <img className="project-img" src={projImg} alt="" />
                    <div className="technology-stack">
                        <div><FontAwesomeIcon icon={faJsSquare} color="#0052cc" size="2x"/></div>
                        <div><FontAwesomeIcon icon={faCss3Alt} color="#0052cc" size="2x"/></div>
                        <div><FontAwesomeIcon icon={faHtml5} color="#0052cc" size="2x"/></div>
                    </div>
                    <h3>Project 3</h3>
                    <p>A mockup for a store</p>
                    <div className="project-location">
                        <button>Live Demo</button>
                        <button>Source Code</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects