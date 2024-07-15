import "./App.css";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Summary from "./components/Summary";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Summary />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
