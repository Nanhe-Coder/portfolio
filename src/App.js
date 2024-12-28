import './App.css';
import  { Toaster } from 'react-hot-toast';
import React from 'react';
import Nav from "./Component/Nav"
import Home from "./Component/Home";
import  About from "./Component/About"
import Portfoli from "./Component/Portfolio"
import Experience from "./Component/Experience"
import Contactx from "./Component/Contactx";
import Footer from   "./Component/Footer";

const App = () => {


return(
  <>

<div>
<Nav/>
  <Home/>
  <About/>
  <Portfoli/>
  <Experience/>
  <Contactx/>
   <Footer/> 
</div>
   <Toaster/>
    </>
)
}



export default App;
