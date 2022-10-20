import { BrowserRouter,Route,Routes } from "react-router-dom";

import Home from "./Home";
import About from "./pages/About";
import Contect from "./pages/Contect";
import Error from "./pages/Error";
import Service from "./pages/Service";

function App() {


  return <>
  
  
   {/* <Routes>
   <Route  path="/" element={<Home/>}/>
   <Route  path="/about" element={<About/>}/>
   </Routes> */}
  
   <BrowserRouter>
   <Routes>
     <Route exact path="/" element={<Home/>} />
     <Route path="/about" element={<About/>} />
     <Route path="/contect" element={<Contect/>} />
     <Route path="/service" element={<Service/>} />
     <Route path="/error" element={<Error/>} />




   </Routes>
   </BrowserRouter>
  
  </>
}

export default App;
