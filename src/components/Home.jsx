import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faViber, faGoogle } from '@fortawesome/free-brands-svg-icons'
import sideImg from '../assets/side-img.png'
import "./Home.css"

const Home = () => {
    return (
        <>
        <div className="home-page">
            <div className="home-text">
                <p>Hi there! I'm</p>
                <div className="home-heading">
                    <h1 className="display-font primary bold">Ma. Christina J. Galvez</h1>
                    <h2 className="display-font secondary bold">aspiring Software Engineer</h2>
                </div>
                <p>Women's Rights Advocate | Graphic Designer</p>
            </div>
            <ul className="social-container">
                <li>
                    <a 
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/galvez-mcj">
                    <FontAwesomeIcon icon={faGithub} color="#000" size="xl"/>
                    </a>
                </li>
                <li>
                    <a 
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/galvez-mcj/">
                    <FontAwesomeIcon icon={faLinkedin} color="#0052cc" size="xl"/>
                    </a>
                </li>
                <li>
                    <a 
                    target="_blank"
                    rel="noreferrer"
                    href="viber://chat?number=639164729179">
                    <FontAwesomeIcon icon={faViber} color="#000" size="xl"/>
                    </a>
                </li>
                <li>
                    <a 
                    target="_blank"
                    rel="noreferrer"
                    href="mailto://galvez.mcj@gmail.com/">
                    <FontAwesomeIcon icon={faGoogle} color="#0052cc" size="xl"/>
                    </a>
                </li>
            </ul>
        </div>
        <img className="home-img" src={sideImg} alt="" />
        </>

    )
}

export default Home