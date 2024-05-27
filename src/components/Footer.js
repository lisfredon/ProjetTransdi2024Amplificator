import React, { useEffect, useState } from 'react';
import '../style.css';
import { useNavigation } from '../contexts/NavigationContext'; 

function Footer(){
    
    
    return(
        <div className = "footer">
            <div className="Adroite">
            <h2>Projet Transdisciplinaire 2023-2024<br/></h2>
            <p>Amplificator</p>
            </div>
            <div className="AuCentre">
                <img src="../img/logoENSC.png" alt="logo ENSC" id="logoENSC"></img>
            </div>
            <div className="AGauche">
                <h2>Nous Contacter</h2>
                <p>Lisa Fredon : lisfredon@ensc</p>
                <p>Olivier Rouault : oRouault@ensc</p>
            </div>
        </div>
    )
}
export default Footer;