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
import word from '../assets/word.png';
import haskell from '../assets/Haskell.png';
import C_icon from '../assets/C.png';
import lisp from '../assets/lisp.png';

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
    {
      name: "Haskell",
      icon: haskell,
    },
    {
      name: "C",
      icon: C_icon,
    },
    {
      name: "Lisp",
      icon: lisp,
    },
  
];

const projectName= [
  {
    image: robotix,
    name: 'Robotix',
    description: 'App with java',
    language: 'java',
    link: 'https://github.com/rimaboujenane/Devoir-2255'
  },
  {
    image: projectBg,
    name: 'DeauthMaster',
    description: 'A specialized tool, written in Python, to automate deauthentication attacks on WPA2 networks, particularly in environments where Wi-Fi networks use roaming. Additionally, this tool allows the creation of a fake Wi-Fi access point with a captive portal.',
    language: 'Python, HTML, CSS',
    link: 'https://github.com/xlav94/DeauthMaster'
  },
  {
    image: projectBg,
    name: 'Interpreter',
    description: 'Development of SSlip, a Lisp-inspired language designed to be minimalist and simplified.',
    language: 'Haskell',
    link: 'https://github.com/xlav94/TP2-2035'
  },

  {
    image: tictactoe,
    name: 'Tic Tac Toe',
    description: 'Tic Tac Toe made with React.js',
    language: 'JavaScript',
    link: 'https://github.com/xlav94/tictactoe'
  },
  {
    image: word,
    name: 'Word Find',
    description: 'App with react.js',
    language: 'JavaScript',
    link: 'https://github.com/xlav94/word-find'
  }
]

export {technologies, projectName};