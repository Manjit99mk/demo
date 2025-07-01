import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <div className="header1">
    <header className="site-header">
      <div className="brand">
       <Link to="/" className="VivClg" style={{color: "#fff", fontSize: "1.7rem",fontWeight: "bold",letterSpacing: "1px", fontFamily: "'Segoe UI', Arial, sans-serif"}}> Vivekanand College</Link>
        </div>
      <nav className="nav-links">
        <Link to="/home" className="Links" style={{color:"white"}}>Home</Link>
        <Link to="/about" className="Links" style={{color:"white"}}> About</Link>
        <Link to="/cours" className="Links" style={{color:"white"}}> Courses</Link>
        <Link to="/contact" className="Links" style={{color:"white"}}> Contact</Link>
        <Link to="/addmission" className="apply-btn" > Apply Now!</Link>
      </nav>
    </header>
    </div>
  );
};

export default Header;