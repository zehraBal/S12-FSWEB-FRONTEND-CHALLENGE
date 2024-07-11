import "./App.css";
import Footer from "./components/Footer";
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
      <Footer />
    </>
  );
}

export default App;
