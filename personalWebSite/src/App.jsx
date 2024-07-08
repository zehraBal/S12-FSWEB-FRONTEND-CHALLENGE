import "./App.css";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Summary from "./components/Summary";

function App() {
  return (
    <>
      <Summary />
      <Skills />
      <Profile />
      <Projects />
    </>
  );
}

export default App;
