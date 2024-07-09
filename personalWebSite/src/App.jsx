import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Summary from "./components/Summary";
import axios from "axios";

function App() {
  const [profileData, setProfileData] = useState([]);
  useEffect(() => {
    axios
      .get("/data/profileData.json")
      .then((response) => {
        setProfileData(response.data);
        console.log("res:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching mock data:", error);
      });
  }, []);
  if (!profileData) {
    return <div>Loading...</div>;
  }
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
