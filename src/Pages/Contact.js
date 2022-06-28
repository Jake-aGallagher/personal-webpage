import TitleName from "../Components/TitleName"
import classes from "../Styles/Contact.module.css";

const Contact = () => {
  return (
    <div className={classes.container}>
      <TitleName /> 
      <address className={classes.content}>
        <div className={classes.item}>
          <p>Email:</p>
          <a href="mailto:jake.a.gallagher98@gmail.com" className={classes.link}>
            jake.a.gallagher98@gmail.com
          </a>
        </div>
        <div className={classes.item}>
          <p>Contact Number:</p>
          <p>+44 7970 628662</p>
        </div>
        <div className={classes.item}>
          <p>Github:</p>
          <a href="https://github.com/Jake-aGallagher" target="_blank" rel="noreferrer" className={classes.link}>
            Jake-aGallagher
          </a>
        </div>
      </address>
    </div>
  );
};

export default Contact;
