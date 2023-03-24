import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/me.jpg";
import { FaInstagram, FaGithub } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <img src={avatarImage} alt="" className="profile-image" />
      <h1 className="profile-text">Hi, I am Dorkin Kirill</h1>
      <h2 className="profile-text">The creator of this awesome pokedex</h2>
      <h4 className="profile-text">This project is created for Geeks</h4>
      <div className="profile-links">
        <a href="https://github.com/Kirilldorkin">
          <FaGithub />
        </a>
        <a href="https://instagram.com/kirillllllii?igshid=YmMyMTA2M2Y=">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);
