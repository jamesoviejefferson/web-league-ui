import { Route, Switch } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
// import style from "./App.module.css";

import Leaderboard from './pages/Leaderboard'
import Schedule from './pages/Schedule'
import PageNotFound from './pages/PageNotFound'

function App() {
  return (
    <>
      
      <Header />
      <Switch>
        <Route path="/" exact > <Schedule/> </Route>
        <Route path="/schedule"> <Schedule/> </Route> 
        <Route path="/leaderboard"> <Leaderboard/> </Route> 
        <Route path="*"> <PageNotFound /> </Route> 
      </Switch>
      <Footer/>
    </>
    
  );
}

export default App;
