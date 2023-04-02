import "./Skills.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCss3Alt,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faJava,
    faPython,
    faReact,
    faNode,
    faFigma,
    faBootstrap
} from '@fortawesome/free-brands-svg-icons'

const Skills = () => {
    return (
        <div className="skills-page">
            <div className="skills-content">
                <div><FontAwesomeIcon icon={faPython} color="#000" size="5x"/></div>
                <div><FontAwesomeIcon icon={faJava} color="#0052cc" size="5x"/></div>
                <div><FontAwesomeIcon icon={faJsSquare} color="#000" size="5x"/></div>
                <div><FontAwesomeIcon icon={faCss3Alt} color="#0052cc" size="5x"/></div>
                <div><FontAwesomeIcon icon={faHtml5} color="#000" size="5x"/></div>
            </div>
            <div className="skills-content">
            <div><FontAwesomeIcon icon={faReact} color="#0052cc" size="5x"/></div>
                <div><FontAwesomeIcon icon={faNode} color="#000" size="5x"/></div>
                <div><FontAwesomeIcon icon={faFigma} color="#0052cc" size="5x"/></div>
                <div><FontAwesomeIcon icon={faBootstrap} color="#000" size="5x"/></div>
                <div><FontAwesomeIcon icon={faGitAlt} color="#0052cc" size="5x"/></div>
            </div>
        </div>
    )
}

export default Skills