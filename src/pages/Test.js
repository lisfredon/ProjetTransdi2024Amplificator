import React, {useState} from 'react';
import '../style.css';

function Test(){
    return(
        <section id="realisations">
            <div className="body">
                <h1>Les tests</h1>
                <div class="contentTest">
                        <img src="../img/test.png" alt='test' id='imageTest'/>
                        <p>Lors de ce projet nous avons eu la chance de réaliser des tests auprès de certaines personnes agées résidant à l'Ephad Terre Negre à Bordeaux.</p>
                        <p>Ces tests ont eu lieu le 21 décembre 2023 ainsi que le 18 janvier 2024.</p>
                        <div class="problemes">
                        <p id="gauche">Ils ont permis de nous rendre compte de certains problèmes comme : <br/>
                            - la solidité du protoype. En effet une résidente à réussi à casser le dispositif au niveau du potentiomètre. <br/>
                            - le volume sonore. Le volume sonore amplifié par l'Amplificateur a été jugée insuffisante par l'orthophoniste et certaines personnes agées et cela même au maximum proposé.<br/>
                            - problème de grésillement<br/>
                            - trop de bruit parasite. Le type de micro utilisé etait un micro multidirectionnel ainsi les personnes agées ont jugée dificile d'entendre le bruit d'une seule personne qui parle</p><br/><br/>
                        <p id="droit">Malgrès ces problèmes, cette visite a été source de motivation pour nous puisque nous avons réussi à rendre les personnes agées curieuse et heureuse durant ce moment d'échange.<br/></p>
                        </div>
                    </div>
            </div>
        </section>
    )
}
export default Test