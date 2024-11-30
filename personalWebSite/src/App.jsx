import { useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Summary from "./components/Summary";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchInitialData } from "./store/actions/actions";
import { dataSelector } from "./store/selectors/selectors";
import Header from "./components/Header";
import NewProfile from "./components/NewProfile";
import NewProjects from "./components/NewProjects";

function App() {
  const dispatch = useDispatch();
  const data = useSelector(dataSelector);

  useEffect(() => {
    dispatch(fetchInitialData());
  }, [dispatch]);

  // Optional: Add loading state if needed
  if (!data || Object.keys(data).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <ToastContainer />
      <Summary />
      <Skills />
      <NewProfile />
      <NewProjects />
      <Footer />
    </>
  );
}

export default App;
