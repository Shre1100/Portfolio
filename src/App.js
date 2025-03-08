import './App.css';
import './output.css';
import HomePage from "./components/HomePage/Home";
import About from "./components/About";
import Skills from './components/Skills/Skills';
import Connect from './components/Connect/Connect';
import Project from './components/Projects/Project';

function App() {
  return (
    <div className="App ">
      <HomePage/>
      <About/>
      <Skills/>
      <Project/>
      <Connect/>
    </div>
  );
}

export default App;
