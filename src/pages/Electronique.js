import React, {useState} from 'react';
import '../style.css';

function Electronique(){
    return(
        <section id="realisations">
            <div className="body">
                <h1>L'électronique</h1>
                <section id="aDroite">
                    <img src="../img/rectoElec.jpg" alt='electronique' id='imageElectronique2'/>
                </section>
                <section id="aGauche">
                    <p>Le système elctronique de l'Amplificateur est alimentée par une pile 9V que l'on retrouve dans le commerce.<br/>
                    Pour suivre les avancées : <a href="https://projets.cohabit.fr/redmine/projects/accueil/wiki/Neil_ameur" id ="lienWiki">Lien vers le wiki</a></p>
                </section>
                <section id="enBas">
                    <h2>Conception :</h2>
                    <p>Pour réaliser l'électronique il vous suffit de reproduire le système électronique suivant : <br/>
                        <li><a href="./ampV3.kicad_pcb" download>ficher format kicad_pcb</a></li> 
                        <li><a href="./ampV3.kicad_sch" download>ficher format kicad_sch</a></li>
                        Pour plus de question veuiller vous rapprocher de Neil.
                    </p>
                </section>

            </div>
        </section>
    )
}
export default Electronique