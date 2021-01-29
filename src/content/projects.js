import image1 from '../content/sortingVisualizer.png'
import image2 from '../content/teslaEats.png'
import image3 from '../content/gamayun.png'

const projects = [
    {
        name: 'Sorting Visualizer',
        desc: 'Simple visualization of basic sorting algorithms using React. This app is a way for me to learn new algorithms and the way they work.',
        tags: ["React", "HTML/CSS"],
        img: image1,
        linkGithub: 'https://github.com/Ivan0822/react-sorting-visualizer',
        linkDemo: 'https://react-sorting-visualizer.netlify.app/'
    },
    {
        name: 'Tesla Eats',
        desc: 'A web app for making restaurant polls and food orders. It was a group project with colleagues from IT Bootcamp.',
        tags: ["React", "HTML/CSS", "Firebase"],
        img: image2,
        linkGithub: 'https://github.com/nebojsa91markovic/hungryHerceg',
        linkDemo: 'https://teslaeats.netlify.app/'
    },
    {
        name: 'Gamayun',
        desc: 'A virtual trivia board game made for the Mintbean JS Hacks hackathon in which we implemented socket.io to create a multiplayer game.',
        tags: ["React", "ChakraUI", "socket.io", "Firebase"],
        img: image3,
        linkGithub: 'https://github.com/nebojsa91markovic/gamayun-trivia-boardgame',
        linkDemo: 'https://gamayun-trivia-boardgame.herokuapp.com/'
    },
]

export default projects

