import TitleName from "../Components/TitleName";
import classes from "../Styles/Resume.module.css";

const Resume = () => {
  return (
    <div className={classes.container}>
      <TitleName />
      <h2 className={classes.description}>
        <p>&#60;Web Developer</p>
        <p>className="front-end" &#160;/&#62;</p>
      </h2>
      <ul className={classes.logos}>
        <li>
          <img src="https://img.icons8.com/color/48/000000/html-5--v1.png" />
          <p>Html</p>
        </li>
        <li>
          <img src="https://img.icons8.com/color/48/000000/css3.png" />
          <p>CSS</p>
        </li>
        <li>
          <img src="https://img.icons8.com/color/48/000000/javascript--v1.png" />
          <p>JavaScript</p>
        </li>
        <li>
          <img src="https://img.icons8.com/plasticine/100/000000/react.png" />
          <p>React</p>
        </li>
        <li>
          <img src="https://img.icons8.com/color/48/000000/nextjs.png" />
          <p>Next.js</p>
        </li>
        <li>
          <img src="https://img.icons8.com/color/48/000000/redux.png" />
          <p>Redux</p>
        </li>
        <li>
          <img src="https://img.icons8.com/color/48/000000/firebase.png" />
          <p>Firebase</p>
        </li>
      </ul>
      <div className={classes.content}>
        <div className={classes.statement}>
          An ambitious self-taught Front End Web Developer specialising in
          JavaScript with my preferred Framework/Library being React, I have
          strong CSS capabilities frequently using CSS Modules to create my own
          styles and theming from scratch.
        </div>
        <div className={classes.skills}>
          <p className={classes.skillsDesc}>
            With my 7 years of experience as a multi-skilled Maintenance
            Engineer my most transferable skills are:{" "}
          </p>
          <ul className={classes.skillsList}>
            <li>- Logical thinking & complex problem solving.</li>
            <li>
              - Creative ability to use all tools and resources possible to
              achieve the objective.
            </li>
            <li>
              - Excellent interpersonal skills and ability to explain technical
              problems to anyone no matter their technical knowledge.
            </li>
          </ul>
        </div>
        <div className={classes.experience}>
          <h3>Professional Experience</h3>
          <ul className={classes.expList}>
            <li>
              <p>August 2021 – Present</p>
              <p className={classes.expContent}>
                Maintenance Engineer, DS Smiths Packaging, Bedford
              </p>
            </li>
            <li>
              <p>September 2020 – August 2021</p>
              <p className={classes.expContent}>
                Mechanical Shift technician, Brookfield Properties, 99
                Bishopsgate, London
              </p>
            </li>
            <li>
              <p>September 2015 – September 2020</p>
              <p className={classes.expContent}>
                Marine Engineer Submariner, Royal Navy
              </p>
            </li>
          </ul>
        </div>
        <div className={classes.curGoal}>
          <h4>Current goal</h4>
          <p>Secure a Junior Front-end Developer Job.</p>
        </div>
        <div className={classes.futGoals}>
          <h4>Future goals</h4>
          <ul>
            <li>
              Learn Node.js, Express and MongoDB to become a Full-Stack
              Developer.
            </li>
            <li>
              Complete the Amazon Web Services Certified Developer
              Certification.
            </li>
            <li>
              Complete an intro course to ethical hacking to increase my
              knowledge of web security.
            </li>
          </ul>
        </div>
      </div>
      <a target="_blank" href="https://icons8.com" className={classes.thanks}>
        icons by Icons8
      </a>
    </div>
  );
};

export default Resume;
