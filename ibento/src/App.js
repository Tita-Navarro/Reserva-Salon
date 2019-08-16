import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
//import "app.css";
import AboutUsPage from "../src/pages/AboutUsPage";
import ContactPage from "../src/pages/ContactPage";
import DetailsPage from "../src/pages/DetailsPage";
import Homepage from "../src/pages/Homepage";
import Login from "../src/pages/Login";
import Register from "../src/pages/Register";
import ResultsPage from "../src/pages/ResultsPage";

function App() {
  return (
  <HashRouter>
    <Switch>
  <Route exact path="/nosotros" render={()=> <AboutUsPage/>}/>
  <Route exact path="/contacto" render={()=> <ContactPage/>}/>
  <Route exact path="/detalles" render={()=> <DetailsPage/>}/>
  <Route exact path="/inicio" render={()=> <Homepage/>}/>
  <Route exact path="/inicio_de_sesion" render={()=> <Login/>}/>
  <Route exact path="/registro" render={()=> <Register/>}/>
  <Route exact path="/resultados" render={()=> <ResultsPage/>}/>
    </Switch>
  </HashRouter>
    )
}

export default App;
