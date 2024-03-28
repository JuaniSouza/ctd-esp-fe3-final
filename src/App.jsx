
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Dentist from "./Routes/Dentist";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact"
import { useContext } from "react";
import { DentistStates } from "./Context/DentistContext";

function App() {

  const {state ,dispatch} = useContext(DentistStates)

  return (
      <div className={`App ${state.theme ? 
        "dark" : ""}`}>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/favs" element={<Favs/>} />
            <Route path="/dentist/:id" element={<Dentist/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
