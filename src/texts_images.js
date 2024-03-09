import i0 from "./assets/improvisedchef.png";
import i1 from "./assets/techerbot.jpeg";
import i2 from "./assets/timetracker.jpg";
import i3 from "./assets/vueling-airlines-despues.jpg";
import i4 from "./assets/ecommerce.jpg";
import i5 from "./assets/opticasantpedor.png";

import js from "./assets/js.png";
import nodejs from "./assets/nodejs.png";
import sql from "./assets/sql.png";
import java from "./assets/java.png";
import html from "./assets/html.png";
import css from "./assets/css.png";
import react from "./assets/react.png";
import git from "./assets/git.png";

const texts = [
  {
    title: "Optica Santpedor",
    description:
      "Simple frontend website for a local buisness. Made with ReactJS.",
    url: "https://opticasantpedor.com",
    github: "",
    img: i5,
  },
  {
    title: "Improvised Chef",
    description:
      "Improvised Chef is a web project made with other 7 UAB students. It consists of a page that provides you with recipes according to the ingredients you have. It is made with ReactJS, NodeJS and stored on a server at the university. The database is from Firebase.",
    url: "This project is not online",
    github: "https://github.com/joelprat/Improvised_chef",
    img: i0,
  },
  {
    title: "TeacherBot",
    description:
      "TeacherBot is a project made with 3 other UAB students. It consists of a robot capable of reading text in Catalan, written by hand, and then crossing out misspellings. For its operation it has been necessary to develop the logic of the inverse kinematics and a server that processes the requests in Python, an Android application in Java for the connection between the robot and the server and finally the Arduino code to be able to execute instructions.",
    url: "https://www.youtube.com/watch?v=jaYQ3ElwnmU&ab_channel=CarlesCostas",
    github: "https://github.com/joelprat/TeacherBot",
    img: i1,
  },
  {
    title: "TimeTracker",
    description:
      "TimeTracker is a project made with 3 other UAB students. It consists of an Android application developed in Java that allows you to create activities and tasks and track their time. The backend of the application has been developed using the Composite, Singleton, Visitor, and Observer design patterns. The frontend, on the other hand, has been developed using Flutter.",
    url: "This project is not online",
    github: "https://github.com/joelprat/TimeTracker",
    img: i2,
  },
  {
    title: "HackUPC Vueling",
    description:
      "This is a project made with 3 other students at UPC Hackathoon. It is a game oriented towards the company Vueling, with the objective of allowing airplane passengers to play a game without the need for internet. The game consists of guessing what a person draws, a fun way to pass the time during flights. The frontend has been developed with ReactJS and the backend in Python. We did not have enough time to finish some details, but we could develop the core, beeing able to connect to create rooms, connect to them, and beeing able to share the drawing paint on live. PD: the React code is not at main branch.",
    url: "This project is not online",
    github: "https://github.com/joelprat/HackUPC",
    img: i3,
  },
  {
    title: "False Ecommerce",
    description:
      "This university assignment involves creating a full-stack web simulation of an e-commerce site. Users can browse products in different categories, add items to their cart, and place orders, similar to a functional e-commerce platform. The project also includes a user registration and login system, order registration, and order history functionality. The chosen product images are from TwoJeys' website. The frontend is built with JavaScript and JQuery, while the backend utilizes PHP and SQL. It's important to note that no real payments are processed as this is a simulated e-commerce website.",
    url: "This project is not online",
    github: "https://github.com/joelprat/Ecommerce",
    img: i4,
  },
];

const habilities_picts = [js, nodejs, react, html, css, java, sql, git];

export { texts, habilities_picts };
