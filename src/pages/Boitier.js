import React, {useState} from 'react';
import '../style.css';

function Boitier(){
    return(
        <section id="realisations">
            <div className="body">
                <h1>Le boitier</h1>
                <section id="aDroite">
                    <img src="../img/Boitier.png" alt='boitier' id='imageBoitier'/>
                </section>
                <section id="aGauche">
                    <p>L’aide auditive est composée d’un boitier dans lequel se trouve la pile, la manette, la prise jack et le bouton d’allumage. <br/>
                    Pour suivre les avancées : <a href="https://projets.cohabit.fr/redmine/projects/amplificator/wiki" id ="lienWiki">Lien vers le wiki</a>
                    </p>
                </section>
                <section id="enBas">
                    <h2>Conception :</h2>
                    <p>Pour réaliser le boitier il vous suffit de : <br/>
                    1. Installer FreeCAD<br/>
                    2. Télécharger les fichiers ci dessous :
                    <li><a href="./haut.svg" download>Haut du boitier</a> : à découper en découpe Laser sur du MDF 5mm</li> 
                    <li><a href="./fond.svg" download>Bas du boitier</a> : à découper en découpe Laser sur du MDF 5mm</li>
                    <li><a href="./cote-droit.svg" download>Côté droit du boitier</a> : à découper en découpe Laser sur du MDF 5mm</li>
                    <li><a href="./cote-gauche.svg" download>Côté gauche du boitier</a> : à découper en découpe Laser sur du MDF 5mm</li>
                    <li><a href="./façade-avant.svg" download>Façade avant basse du boitier</a> : à découper en découpe Laser sur du MDF 5mm</li>
                    <li><a href="./oblique.svg" download>Façade avant haute du boitier</a> : à découper en découpe Laser sur du MDF 5mm</li>
                    <li><a href="./boite-3-bas006.stl" download>Composant interne du boitier situé en bas</a> : à imprimer avec du PLA ou PETG </li>
                    <li><a href="./boite-3-renfort-haut002.stl" download>Renfort haut</a> : à imprimer avec du PLA ou PETG </li>
                    <li><a href="./boite-3-pile005.stl" download>Cadre pile</a>: à imprimer avec du PLA ou PETG </li>
                    <li><a href="./boite-3-renfort-glissiere.stl" download>Renfort glissière</a> : à imprimer avec du PLA ou PETG </li>
                    <li><a href="./levier-glissière.3mf" download>Levier</a> : à imprimer avec du PLA ou PETG </li>
                    <li><a href="./fermeture-pile.stl" download>Fermeture boitier pile</a> : à imprimer avec du PLA ou PETG </li>
                    3. Réaliser les découpes lasers et les impressions 3D des éléments en veillant à respecter la méthode et le matériel utilisé.<br/>
                    4. Assembler les pièces</p>
                </section>
                
            </div>
        </section>
    )
}
export default Boitier