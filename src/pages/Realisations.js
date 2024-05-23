import React from 'react';
import '../style.css';

function Realisations() {
    return (
        <section id="realisations">
            <div className="body">
                <h1>Les Réalisations</h1>
                <div className="realisation-card">
                    <h2>Projet 1</h2>
                    <img src="../img/projet1.jpg" alt="Projet 1" />
                    <p>Description du projet 1...</p>
                </div>
                <div className="realisation-card">
                    <h2>Projet 2</h2>
                    <img src="../img/projet2.jpg" alt="Projet 2" />
                    <p>Description du projet 2...</p>
                </div>
                {/* Ajoutez plus de réalisations ici */}
            </div>
        </section>
    );
}

export default Realisations;