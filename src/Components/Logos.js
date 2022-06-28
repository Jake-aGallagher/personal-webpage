import classes from "./Logos.module.css";

const Logos = () => {
  return (
    <ul className={classes.logos}>
      <li>
        <img
          src="https://img.icons8.com/color/48/000000/html-5--v1.png"
          alt="a Html 5 icon"
        />
        <p>Html</p>
      </li>
      <li>
        <img
          src="https://img.icons8.com/color/48/000000/css3.png"
          alt="a CSS 3 icon"
        />
        <p>CSS</p>
      </li>
      <li>
        <img
          src="https://img.icons8.com/color/48/000000/javascript--v1.png"
          alt="a JavaScript icon"
        />
        <p>JavaScript</p>
      </li>
      <li>
        <img
          src="https://img.icons8.com/plasticine/100/000000/react.png"
          alt="a React.js icon"
        />
        <p>React</p>
      </li>
      <li>
        <img
          src="https://img.icons8.com/color/48/000000/nextjs.png"
          alt="a Next.js icon"
        />
        <p>Next.js</p>
      </li>
      <li>
        <img
          src="https://img.icons8.com/color/48/000000/redux.png"
          alt="a Redux icon"
        />
        <p>Redux</p>
      </li>
      <li>
        <img
          src="https://img.icons8.com/color/48/000000/firebase.png"
          alt="a Firebase icon"
        />
        <p>Firebase</p>
      </li>
    </ul>
  );
};

export default Logos;
