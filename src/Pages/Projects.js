import TitleName from "../Components/TitleName";
import classes from "../Styles/Projects.module.css";

const projectItems = [
  {
    title: "Twitter Clone",
    live: "https://twitter-clone-nu-woad.vercel.app/",
    sourceCode: "https://github.com/Jake-aGallagher/Twitter-Clone",
    img: "img link",
    desc: "This is a Twitter style website built with 'Next.js' and uses a 'Firebase realtime Database', the app also uses 'Redux' for state management and 'Axios' for http requests. The purpose of this app was to create something that really pushed my abillity to think ahead and plan, having an app this large and complex caused a lot of issues at the start, as deciding to keep the data in a certain way could later on conflict with another operation. this app therfore was all about planning and keeping the code clear a readable, comments were also necessary to keep track of what was happening.",
  },
  {
    title: "Italia",
    live: "https://jake-agallagher.github.io/Local-Business-Webpage/",
    sourceCode: "https://github.com/Jake-aGallagher/Local-Business-Webpage",
    img: "img link",
    desc: "This is a Website built to imitate the style and layout used by a local business, it's made with 'React' and 'Firebase', the app also uses 'react-google-maps/api' and 'react/spring/parallax'. The purpose of this app was to create a large 'multi-page' single page application, closely coppying the style of a small local business, the webpage needed to be appealing to the eye and consistent in layout and styling so as not to distract the user.",
  },
  {
    title: "Calculator",
    live: "https://jake-agallagher.github.io/React-Calculator/",
    sourceCode: "https://github.com/Jake-aGallagher/React-Calculator",
    img: "img link",
    desc: "This is a JavaScript Calculator built with 'React'. The purpose of this app was to make a number and calculation focused app whilst also getting a chance to better my abillities with CSS Grid.",
  },
  {
    title: "Quote Machine",
    live: "https://jake-agallagher.github.io/Kanye-West-Quote-Machine/",
    sourceCode: "https://github.com/Jake-aGallagher/Kanye-West-Quote-Machine",
    img: "img link",
    desc: "This is a Quote Machine built with 'React' and uses 'Axios' for http requests. The purpose of this app was to get comfortable with http requests, this app allowed me to do that and figure out how to deal with the data that I recieved. at first I wrote this app to fetch quotes using the standard fetch API however once completed I went back and converted the requests to Axios, this was a great way to see and try out both solutions.",
  },
  {
    title: "Slot Machine",
    live: "https://jake-agallagher.github.io/React-Slot-Machine/",
    sourceCode: "https://github.com/Jake-aGallagher/React-Slot-Machine",
    img: "img link",
    desc: "This is a Slot Machine built with 'React'. The purpose of this app was to create an app with a large amount of state items, which can all be updated independently of each other. for this app I focused on using the useReducer hook. the app also gave me good experience in creating a responsive design and also tested my abiliities at making a suitable colour scheme because I'm more used to making calm simple color scheme where as this was meant to be loud and bold as it's meant to feel like being in a gambling setting.",
  },
];

const tiles = projectItems.map((item) => (
  <div className={classes.tile} key={item.title}>
    <h2 className={classes.tileTitle}>{item.title}</h2>
    <div className={classes.tileImgFormat}>
      <img src="#" alt={item.title} className={classes.tileImg} />
      <div className={classes.tileLinks}>
        <a href={item.live} target="_blank" rel="noreferrer">
          Live Website
        </a>
        <a href={item.sourceCode} target="_blank" rel="noreferrer">
          Source Code
        </a>
        <div className={classes.tileDesc}>
          {item.desc}
          <br></br> (see Source Code ReadMe for more info)
        </div>
      </div>
    </div>
  </div>
));

const Projects = () => {
  return (
    <div className={classes.container}>
      <TitleName />
      <div className={classes.content}>{tiles}</div>
    </div>
  );
};

export default Projects;
