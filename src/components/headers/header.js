import "./header.css";
import swiggyLogo from "../../assets/logo/swiggy.svg";

const Header = () => {
  return (
    <header className="headertag">
      <div className="global_nav">
        <div className="covering_anchortag">
          <a href="/" className="anchortag" title="swiggy">
            <img src={swiggyLogo} alt="swiggy" />
          </a>
          <div className>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;