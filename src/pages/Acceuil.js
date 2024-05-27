import React, { useState } from 'react';
import '../style.css';

function Accueil() {

  return (
    <section>
    <div className="body">
      <h1 id ="h1Acceuil">L’Amplificator est une invention de loupes d’oreilles aux capacités surprenantes.
        <br/>Entre prothèse poétique et véritable objet technique, un pistolet pour mieux s’entendre.
      </h1>
    <img src="../img/affiche-amplificator.png" alt="AfficheProjet" id="afficheProjet"  />
    <div id="Fablab">
    <p>Le projet est documenté sur le Fablab Coh@bit : </p>
    <a href="https://projets.cohabit.fr/redmine/projects/amplificator/wiki" id ="lienWiki">Lien vers le wiki</a>
    <p id="planVert">Ce projet d'aide auditive poétique pour les personnes âgées représente une fusion remarquable entre innovation 
      technologique et engagement social, s'inscrivant ainsi pleinement dans la vision du Plan Vert défini par la loi 
      Grenelle. En favorisant l'inclusion sociale, le jeu et les interactions intergénérationnelles, cette initiative 
      contribue à promouvoir l'égalité des chances et à prévenir les risques liés à l'isolement social. En combinant 
      ces aspects, ce projet façonne un avenir où l'innovation technologique sert non seulement à améliorer la vie 
      quotidienne, mais aussi à renforcer le tissu social et à promouvoir un monde plus durable et inclusif.</p>
    </div>
    </div>
    </section>
    );
}

export default Accueil;