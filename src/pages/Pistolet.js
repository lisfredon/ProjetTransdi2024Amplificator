import React, {useState} from 'react';
import '../style.css';

function Pistolet(){
    return(
        <section id="realisations">
            <div className="body">
                <h1>Le pistolet</h1>
                <section id="aDroite">
                    <img src="../img/Parabole.png" alt='pistolet' id='imagePistolet'/>
                </section>
                <section id="aGauche">
                    <p>L’aide auditive est composée d’une parabole tenu grâce à une poignée. Cette parabole permet de cibler la voix d’un individu. 
                        Pour ce faire, il suffit de pointer la parabole sur la personne et d’appuyer de manière continue sur la gâchette.<br/>
                        Pour suivre les avancées : <a href="https://projets.cohabit.fr/redmine/projects/amplificator/wiki" id ="lienWiki">Lien vers le wiki</a></p>
                </section>
                <section id="enBas">
                    <h2>Conception :</h2>
                    <p>Pour réaliser le pistolet il vous suffit de : <br/>
                    1. Installer FreeCAD<br/>
                    2. Télécharger les fichiers ci dessous :
                    <li><a href="./gunv3test2.FCStd" download>La poignée</a></li> 
                    <li><a href="./coneParabole.FCStd" download>La parabole</a></li>
                    3. Imprimer toutes les pièces séparement grace à une imprimante 3D (A noter qu'il est préférable d'utiliser comme matériaux le  PLA pour la parabole afin d'avoir un son de meilleur qualité)<br/>
                    4. Assembler les pièces</p>
                </section>

            </div>
        </section>
    )
}
export default Pistolet