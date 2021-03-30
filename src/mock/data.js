import { nanoid } from 'nanoid';
// HEAD DATA
export const headData = {
  title: 'Amarpreet Singh | Full Stack Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi, I'm",
  name: 'Amarpreet Singh',
  subtitle: 'Full Stack Developer.',
  cta: 'Check projects',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I merge a passion for usability and user experience with technical knowledge to create cool digital experiences.',
  paragraphTwo:
    'My repertoire includes programming languages and tools such as ReactJS, Javascript, PHP, HTML, CSS, NodeJs, Wordpress, MySQL, NPM, Nginx and Apache server configuration, SCSS, Twitter Bootstrap, jQuery, and more.',
  paragraphThree: '',
  resume: 'https://1drv.ms/w/s!Ats6TZT-OMwagYInlfST4xrL_sqK4A?e=8OEBbz', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'chat-app.jpg',
    title: 'React Firebase Chat App',
    info: 'Single Page Chat App created using React, Firebase, Google Auth.',
    info2: '',
    url: 'https://chat-app-b6f5e.web.app/',
    repo: 'https://github.com/Ampit/chat-app-react-firebase', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'author-quiz.jpg',
    title: 'AuthorQuiz',
    info: 'Simple quiz app built using React.',
    info2: 'User has to guess the book written by the author whose picture is shown.',
    url: 'https://cryptic-sea-12186.herokuapp.com/',
    repo: 'https://github.com/Ampit/AuthorQuiz', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'covid.png',
    title: 'COVID-19 Tracker',
    info:
      'A fully responsive application made to track the total No. of cases of coronavirus in the world. It visualize data in table and card forms',
    info2: '',
    url: 'https://covid-19-trac.netlify.app/',
    repo: 'https://github.com/Ampit/covid19-tracker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'expense-tracker.png',
    title: 'Expense Tracker',
    info: 'A full stack application for tracking and managing expenses built using MERN stack.',
    info2: '',
    url: 'https://frozen-headland-41322.herokuapp.com/',
    repo: 'https://github.com/Ampit/Expense-Tracker-Fullstack', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'singh.amarpreet.ca@gmail.com',
  email: 'singh.amarpreet.ca@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/Ampit_xd',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/ampit',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/amarpreet--singh/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Ampit',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
