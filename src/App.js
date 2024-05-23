import React from 'react';
import './style.css';
import { NavigationProvider, useNavigation } from './contexts/NavigationContext'; 


import Header from './components/Header.js';
import Accueil from './pages/Acceuil.js'
import Equipe from './pages/Equipe.js'
import Realisations from './pages/Realisations.js';
import Pistolet from './pages/Pistolet.js';


function App() {

    return (
        <div className="App">
            <NavigationProvider>
                <Header/>
                <PageContent />
            </NavigationProvider>
        </div>
    );
}


function PageContent() {
    const {currentPage}=useNavigation();
    return (
        <div>
            {currentPage==='accueil'&&<Accueil/>}
            {currentPage==='equipe'&&<Equipe/>}
            {currentPage === 'realisations' && <Realisations />}
            {currentPage === 'pistolet'&& <Pistolet/>}
        </div>
    );
   } 

export default App;