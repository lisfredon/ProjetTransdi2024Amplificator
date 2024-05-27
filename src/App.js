import React from 'react';
import './style.css';
import { NavigationProvider, useNavigation } from './contexts/NavigationContext'; 


import Header from './components/Header.js';
import Footer from './components/Footer.js'
import Accueil from './pages/Acceuil.js'
import Equipe from './pages/Equipe.js'
import Realisations from './pages/Realisations.js';
import Pistolet from './pages/Pistolet.js';
import Boitier from './pages/Boitier.js';
import ModeEmploi from './pages/ModeEmploi';
import Electronique from './pages/Electronique';
import Futur from './pages/Futur';
import Test from './pages/Test';

function App() {

    return (
        <div className="App">
            <NavigationProvider>
                <Header/>
                <PageContent />
                <Footer/>
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
            {currentPage === 'boitier'&& <Boitier/>}
            {currentPage === 'modeEmploi'&& <ModeEmploi/>}
            {currentPage === 'electronique'&& <Electronique/>}
            {currentPage === 'futur'&& <Futur/>}
            {currentPage === 'test'&& <Test/>}
        </div>
    );
   } 

export default App;