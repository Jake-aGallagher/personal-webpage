import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css"

const Navbar = () => {

  const navActiveStyler = ({ isActive }) => {
    return {
      "backgroundColor": isActive ? "rgb(67, 120, 246)" : "",
    };
  };

  return (
    <div className={classes.container}>
    <div className={classes.navbar}>
      <NavLink to="/" className={classes.link} style={navActiveStyler}>Résumé</NavLink>
      <NavLink to="/projects" className={classes.link} style={navActiveStyler}>Projects</NavLink>
      <NavLink to="contact" className={classes.link} style={navActiveStyler}>Contact</NavLink>
    </div>
    </div>
  );
};

export default Navbar;
