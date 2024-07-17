import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if(mode === "dark")
    {
      setMode('light');
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#001736";
      showAlert('Success', 'Light mode enabeled');
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = "#001736";
      document.body.style.color = "white";
      showAlert('Success', 'Dark mode enabeled');
    } 
  }

  const showAlert = (atype, message) => {
    setAlert({
      type: atype,
      msg: message,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>    
    {/* <Router> */}
      <Navbar logoTitle="TextUtils" toggleMode={toggleMode} mode={mode} aboutText="About Us" />
      <Alert alert={alert} />
      <div className="container mt-5">
      <TextForm  mode={mode} showAlert={showAlert} />
        {/* <Routes>
            <Route path="/" element={<TextForm  mode={mode} showAlert={showAlert} />} />
            <Route path="/about" element={<About />} />
        </Routes> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
