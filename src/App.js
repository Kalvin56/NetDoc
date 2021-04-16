import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Navigation from './Components/Navigation';
import Erreur from './Pages/404';
import Accueil from './Pages/Accueil';
import Infos from './Pages/Infos';
import Medecin from './Pages/Medecin';
import Profil from './Pages/Profil';
import Recherche from './Pages/Recherche';


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Accueil}/>
          <Route path="/recherche" exact component={Recherche}/>
          <Route path="/recherche/:text" exact component={Recherche}/>
          <Route path="/infos" exact component={Infos}/>
          <Route path="/profil" exact component={Profil}/>
          <Route path="/medecin/:slug/:ville" exact component={Medecin}/>
          <Route path="/" component={Erreur}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
