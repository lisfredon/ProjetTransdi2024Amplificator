import React from 'react';
import '../style.css';
import { useNavigation } from '../contexts/NavigationContext'; 

function Realisations() {
    const { navigateTo } = useNavigation();

    return (
        <section id="realisations">
            <div className="body">
                <h1>La conception</h1>
                <div className="realisation-card">
                    <a href="#" onClick={(event)=>navigateTo("pistolet")}>Pistolet</a>
                    <div class="content">
                        <img src="../img/Parabole.png" alt='pistolet' id='imagePistolet'/>
                        <p>L’Amplificator est composé d’une parabole tenu grâce à une poignée. Cette parabole permet de cibler la voix d’un individu. 
                        Pour ce faire, il suffit de pointer la parabole sur la personne et d’appuyer de manière continue sur la gâchette.</p>
                    </div>
                </div>
                <div className="realisation-card">
                    <a href="#" onClick={(event)=>navigateTo("boitier")}>Boitier</a>
                    <div class="content">
                        <img src="../img/Boitier.png" alt='boitier' id='imageBoitier'/>
                        <p>L’Amplificator est composé d’un boitier permettant à la fois d'allumer l'Amplificateur et de régler le volume sonore.<br/>
                        Celui- ci contient également la pile qui est voué à changer pour une batterie dans le futur.</p>
                    </div>
                </div>
                <div className="realisation-card">
                    <a href="#" onClick={(event)=>navigateTo("electronique")}>Electronique</a>
                    <div class="content">
                        <img src="../img/rectoElec.jpg" alt='boitier' id='imageElectronique'/>
                        <p>L’Amplificator est composé d'un système éléctronique.</p>
                    </div>
                </div>
                <div className="realisation-card">
                    <a href="#" onClick={(event)=>navigateTo("test")}>Les tests</a>
                    <div class="content">
                        <img src="../img/test.png" alt='test' id='imageTest'/>
                        <p>Lors de ce projet nous avons eu la chance de réaliser plusieurs test.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Realisations;