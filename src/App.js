import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header/Header";
import Home from "./components/Home/Home";
// import HomeTest from "./components/Home/HomeTest";
import RegisterSketchyCrypto from "./components/RegisterSketchyCrypto/RegisterSketchyCrypto";
import Search from "./components/Search/Search";
import Map from "./components/Map/Map";

const App = () => {
  return (
    <div>
      <Header />
      <div>
        <Router>
          <Switch>
            {/* <Route path="/about" component={About} />
            
            <Route path="/references" component={References} /> */}
            <Route path="/search" component={Search} />
            <Route path="/register" component={RegisterSketchyCrypto} />
            <Route path="/map" component={Map} />
            {/* <Route path="/Stats" component={Stats}/>  */}
            <Route exact path="/" component={Map} />
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
};

export default App;
