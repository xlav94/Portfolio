import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/javascript.png';
import react from '../assets/reactjs.png';
import git from '../assets/git.png';
import python from '../assets/python.png';
import java from '../assets/java.png';
import bash from '../assets/bash.png';
import projectBg from '../assets/projectBg.png';
import tictactoe from '../assets/tictactoe.png';
import robotix from '../assets/robotix.png';

const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
        name: "CSS 3",
      icon: css,
    },
    {
        name: "JavaScript",
      icon: js,
    },
    {
        name: "ReactJS",
      icon: react,
    },
    {
        name: "Git",
      icon: git,
    },
    {
        name: "Python",
      icon: python,
    },
    {
        name: "Java",
      icon: java,
    },
    {
        name: "Bash",
      icon: bash,
    },
  
];

const projectName= [
  {
    image: robotix,
    name: 'Robotix',
    description: 'App with java',
    language: 'java'
  },

  {
    image: tictactoe,
    name: 'Tic Tac Toe',
    description: 'Tic Tac Toe made with React.js',
    language: 'JavaScript'
  },
  {
    image: projectBg,
    name: 'website',
    description: 'App with react.js',
    language: 'react.js'
  },
  {
    image: projectBg,
    name: 'website',
    description: 'App with react.js',
    language: 'react.js'
  }

]

export {technologies, projectName};