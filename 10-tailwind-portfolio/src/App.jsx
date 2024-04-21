import About from './components/About';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Skills from './components/Skills';

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <Skills />
      <About />
      <Projects />
    </main>
  );
};

export default App;
