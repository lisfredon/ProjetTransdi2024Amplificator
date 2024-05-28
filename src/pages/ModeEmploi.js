import React from 'react';
import '../style.css';
import { useNavigation } from '../contexts/NavigationContext'; 

function ModeEmploi() {
    const { navigateTo } = useNavigation();

    return (
        <section id="realisations">
            <div className="body">
                <h1>Le mode d'emploi</h1>
                <p>Afin de guider au mieux l'utilisateur dans l'utilisation de l'Amplificator nous avons conçu un mode d'emploi.</p><br/>
                <p> Ce mode d'emploi a été transféré a un designer de l'Ehpad pour le rendre plus jolie.</p>
                <p>Veiller à le garder précieusement</p>
                <div class="pdf-container">
                    <iframe src="./V1ModeEmploi.pdf" width="80%" height="1000px"></iframe>
                    <p><a href="./V1ModeEmploi.pdf" download>Télécharger le PDF</a></p>
                </div>
            </div>
        </section>
    );
}

export default ModeEmploi;