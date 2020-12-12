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
    'My repertoire includes programming languages and tools such as ReactJS, Javascript, PHP, HTML, CSS, NodeJs, Wordpress, MySQL, NPM, Nginx and Apache server configuration, SASS, Twitter Bootstrap, jQuery, and more.',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
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
