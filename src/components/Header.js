import React, { useEffect, useState } from 'react';
import '../style.css';
import { useNavigation } from '../contexts/NavigationContext'; 
import Logo from './Logo';

function Header(){
    
    const { isMenuOpen } = useNavigation();
    const { currentPage,navigateTo } = useNavigation();

      
    return(
    <div className = "bandeauFixe">
        <div className="auCentre">
            <section className='Amplificator'>
                <img src="../img/Amplificator.png" alt="Titre Amplificator" id="titre"></img>
            </section>
            <section className="menuPrincipal">
            <ul id="menuPrincipal">
                <li>
                    <a onClick={(event)=>navigateTo("")}>Le projet Amplificator</a>
                </li>
                <li>
                    <a onClick={(event)=>navigateTo("equipe")}>L'équipe</a>
                </li>
                <li>
                    <a onClick={(event)=>navigateTo("")}>Les réalisations</a>
                </li>
            </ul >
            </section>
        </div>
        <div className="logoParcContainer">
        <section className="logoParc" onClick={(event)=>navigateTo("accueil")}>
            <p>Un projet en collaboration avec :</p>
            <Logo src="../img/logo-cohabit.png" href='' alt="Logo Cohabit" id ="logoCohabit"/>
            <Logo src="../img/logo_Village-Terre-Negre.png" href='' alt="Logo Cohabit" id ="logoParc"/>
        </section>
        </div>
    </div>
    )
}
export default Header;