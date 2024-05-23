import React, {useState} from 'react';
import '../style.css';
import Reponse from '../components/Reponse.js';

function FAQ(){
    return(
        <section>
        <body className="body">
            <img src="../img/enfantQuestion.jpg" alt='enfantQuestion' id='enfantQuestion'/>
            <h1>Présentation de l'équipe</h1><br/>
            <div id ="lesCategories">
                <Reponse title="Coordinateur de la vie sociale" imageSrc="../img/V.png" alt="Image pour dérouler le texte">
                    <strong>Christophe Boery</strong><br/>
                    Celui-ci s'occupe de ...<br/><br/>
                </Reponse>
                <Reponse title="Orthophoniste" imageSrc="../img/V.png" alt="Image pour dérouler le texte" style={{ color: 'white' }}>
                    <strong>Mondane Miginiac</strong><br/>
                    <strong>Pascale Celerier</strong><br/>
                </Reponse>
                <Reponse title="Fablab Cohabit" imageSrc="../img/V.png" alt="Image pour dérouler le texte" style={{ color: 'white' }}>
                <strong>Pierre Grangé-Praderas - Responsable du fablab Cohabit</strong><br/>
                <strong>Jean-Baptiste Bonnemaison - Responsable du fablab Cohabit</strong><br/>
                <strong>Service civique au fablab Cohabit - Neil </strong><br/>
                <strong>Service civique au fablab Cohabit - Paul</strong><br/>
                <strong>Service civique au fablab Cohabit - Lucas</strong><br/>
                </Reponse>
                <Reponse title="Etudiants de l'ENSC" imageSrc="../img/V.png" alt="Image pour dérouler le texte" style={{ color: 'white' }}>
                <strong>Lisa Fredon</strong><br/>
                <br/><br/>
                <strong>Olivier Rouault</strong><br/>
                
                </Reponse>
                
            </div>
        </body>
        </section>
    )
}
export default FAQ