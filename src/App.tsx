import Message from "./Message";
import ListGroup from "./Components/ListGroup";
import "./Components/NavigationBar.css";
import Form from "./Components/Form";
import NavigationBar from "./Components/NavigationBar";
import "./App.css";
import About from "./Components/index";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Components/Home";
import Products from "./Components/Products";
import Ceo from "./Components/Ceo";
import Footer from "./Components/footer";
import Signup from "./assets/signup";
import { AnimationEventHandler } from "react";
import Alert from "./Components/Alert";
import SignIn from "./assets/signin";
import Clientpage from "./Components/Clientpage";



function App() {
  return (
    <>
    
   
      <NavigationBar />
      
      
     
      
      
      <Router>
        <nav>
        <Link to="Home" className="container1">
        Home</Link>
        <Link to="Alert" ></Link>
        <Link to="/Products" className="container1">
            Products
          </Link>
          <Link to="Ceo" className="container1">Ceo</Link>
          <Link to="/About" className="container1">
            About
          </Link>
          <Link to="Signup" className="container1">Register</Link>
<Link to="/SignIn><\Link>
          <Link to="Clientpage" className="container1"></Link>
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"></link>
          
          
          
        </nav>

        <Routes>
          <Route path="/About" element={<About/>} />
          <Route path="/Ceo" element={<Ceo/>}/>
                    <Route path="/Products" element={<Products/>} />
          <Route path="/" element={<Home />}/>
          <Route path="Home" element={<Home />}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/Alert" element={<Alert/>}/>
          <Route path="/SignIn" element={<SignIn/>}/>
          <Route path="/ClientArea" element={<Clientpage/>}/>
          
          
          
          
        </Routes>
      </Router>
    
      
      
      <Footer />
    </>
  );
}

export default App;
