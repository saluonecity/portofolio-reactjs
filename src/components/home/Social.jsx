import { FiTwitter, FiYoutube, FiInstagram} from "react-icons/fi";

const Social = () => {
    return (
        <div className="home__social">
            <a href="#" className="home__social-icon" target="_blank">
                <FiTwitter />
            </a>
            <a href="#" className="home__social-icon" target="_blank">
                <FiYoutube />
            </a>
            <a href="#" className="home__social-icon" target="_blank">
                <FiInstagram />
            </a>
        </div> 
    ); 
}

export default Social;