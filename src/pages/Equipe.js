import React, {useState} from 'react';
import '../style.css';
import Reponse from '../components/Reponse.js';

function Equipe(){
    return(
        <section id="realisations">
            <div className="body">
                <h1>Présentation de l'équipe</h1><br/>
            <div id ="lesCategories">
                <Reponse title="Coordinateur de la vie sociale" imageSrc="../img/V.png" alt="Image pour dérouler le texte">
                    <strong>Christophe Boery</strong><br/>
                    Initiateur du projet celui ci fait le lien entre tout les acteurs du projet.<br/><br/>
                    <u>Contact:</u><br/>
                    c.boery@terre-negre.fr<br/><br/>
                </Reponse>
                <Reponse title="Orthophoniste" imageSrc="../img/V.png" alt="Image pour dérouler le texte" style={{ color: 'white' }}>
                        <strong>- Pascale Celerier</strong><br/>
                        <strong>- Mondane Miginiac</strong><br/>
                        Orthophoniste remplacente cette dernière a assisté à toutes les réunions qui ont eu lieu à l'Ephad. Celle-ci connait bien ces patients ainsi que leurs capacités. C'est donc elle qui nous a guidé sur les attentes tout au long du projet <br/><br/>
                        <u>Contact:</u><br/>
                        p.celerier@terre-negre.fr<br/><br/>
                </Reponse>
                <Reponse title="Fablab Cohabit" imageSrc="../img/V.png" alt="Image pour dérouler le texte" style={{ color: 'white' }}>
                <strong>- Pierre Grangé-Praderas - Responsable du fablab Cohabit</strong><br/>
                <u>Contact:</u><br/>
                pierre.grange-praderas@u-bordeaux.fr<br/><br/>
                <strong>- Jean-Baptiste Bonnemaison - Responsable du fablab Cohabit</strong><br/>
                <u>Contact:</u><br/>
                jean-baptiste.bonnemaison@u-bordeaux.fr<br/><br/>
                <strong>Neil Ameur - Service civique au fablab Cohabit</strong><br/>
                Partie electronique<br/><br/>
                <strong>Paul Compan - Service civique au fablab Cohabit </strong><br/>
                Boitier<br/><br/>
                <strong>Lucas Boisseau - Service civique au fablab Cohabit </strong><br/>
                Poignée<br/><br/>
                <strong>Joël Schlüter - Stage </strong><br/>
                Partie electronique<br/><br/>
                <strong>Auguste Noel-Petiprez - Projet ecole </strong><br/>
                <strong>Samuel Salette - Projet ecole </strong><br/>
                <strong>Ousman Tanou Diallo - Projet ecole </strong><br/><br/>
                </Reponse>
                <Reponse title="Etudiants de l'ENSC" imageSrc="../img/V.png" alt="Image pour dérouler le texte" style={{ color: 'white' }}>
                <strong>Lisa Fredon</strong><br/>
                Creation du mode d'emploi, knowledge managment : clarifié le travail technique effectué<br/>
                <u>Contact:</u><br/>
                lisfredon@ensc.fr<br/><br/>
                <br/>
                <strong>Olivier Rouault</strong><br/>
                Creation du mode d'emploi, knowledge managment : clarifié le travail technique effectué<br/>
                <u>Contact:</u><br/>
                orouault@ensc.fr<br/><br/>
                </Reponse>
                
            </div>
        </div>
        </section>
    )
}
export default Equipe