import "./About.css"
import myImg from "../assets/about-img.png"

const About = () => {
    return (
        <div className="about-page">
            <div className="flex">
                <div className="flex-left">
                    <img className="about-img" src={myImg} alt="My image" />
                </div>
                <div className="flex-right">
                    <h2 className="display-font primary bold">About Me!</h2>
                    <h3 className="display-font bold">I recently graduated from the University of the Philippines Manila with a degree of Bachelor of Science in Computer Science. I am a women’s rights advocate and very passionate about learning new technologies to help the underserved.</h3>
                    <p>My special problem is about Breast Cancer Detection in Two-View Film Mammography using Deep Convolutional Neural Networks. It aims to help identify tumor as benign or malignant on screening mammograms.</p>
                </div>
            </div>

        </div>
    )
}

export default About