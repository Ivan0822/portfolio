import { Flex } from '@chakra-ui/react';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import projects from '../src/content/projects'


const App = (props) => {


  return (

    <Flex
      direction="column"
      align="center"
      m="0 auto"
      bgImage="url('/src/content/pexels-vlad-chețan-2892619.jpg)"
      bgPosition="center"
      bgRepeat="no-repeat"
      {...props}
      id="home"
    >
      <Header />
      <Home name="home" />
      <Projects projects={projects} />
      <Contact name="contact" />
      <Footer />
    </Flex>


  );
}

export default App;
