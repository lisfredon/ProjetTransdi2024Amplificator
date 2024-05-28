import React, {useState} from 'react';
import '../style.css';
import Reponse from '../components/Reponse.js';

function Futur(){
    return(
        <section id="realisations">
            <div className="body">
                <h1>Et le futur ?</h1>
                <Reponse title="Partie technique : Points à revoir et à améliorer" imageSrc="../img/V.png" alt="Image pour dérouler le texte">
                <div className='text-projet'>
                - Rendre le boîtier manipulable à une main, idée évoquée:<br/>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ajouter du poids<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Changer la forme du boîtier<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mettre un tapis antidérapant pour empêcher le basculement<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Changer le type de potentiomètre à glissière<br/><br/>

                - Exploiter toute l'amplitude du potentiomètre rotatif pour modifier le volume du son:<br/>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concevoir un engrenage pour améliorer la transmission entre le levier et le potentiomètre rotatif.<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Utiliser un arbre avec un méplat pour éviter le glissement.<br/><br/>

                - Fixer le levier à la glissière du potentiomètre pour éviter qu'il ne s'enlève.<br/><br/>
                - Marquer les embouts de branchements du casque et du pistolet pour les différencier. On peut utiliser des détrompeurs pour empêcher les erreurs de câblage.<br/><br/>
                - Ajouter une LED ou un autre voyant lumineux pour indiquer que l'Amplificator est allumé.<br/><br/>
                - Ajouter un indicateur du niveau de batterie pour faciliter la résolution des problèmes liés au déchargement de la batterie.<br/><br/>
                - Réévaluer l'autonomie de la batterie, qui doit être d'au minimum 2h.<br/><br/>
                - Augmenter le volume de l'aide auditive en implémentant un booster pour augmenter la tension.<br/><br/>
                - Implémenter un filtre pour enlever les grésillements.<br/><br/>
                - Rendre le dispositif plus robuste. L'idée de le donner à des enfants pour faire un crash-test de sa résistance peut être envisagée.<br/><br/>
                - Améliorer la distance de perception du micro. Actuellement, pour une distance de plus de 5m, le son n'est plus capté par l'Amplificator.<br/><br/>
                </div>
                </Reponse>
                <Reponse title="Pistes de développement de nouveaux prototypes" imageSrc="../img/V.png" alt="Image pour dérouler le texte">
                <div className='text-projet'>
                - Concevoir un harnais/une banane/une sangle/une ceinture pour accrocher le dispositif et le rendre plus transportable.<br/><br/>
                - Créer un modèle pour une utilisation sur les genoux, adapté à la forme des cuisses/genoux.<br/><br/>
                - Miniaturiser le système électrique pour l'intégrer entièrement dans le pistolet afin de le rendre plus portatif.<br/><br/>
                - Diminuer le poids grâce à l'impression en fibre de carbone.<br/><br/>
                </div>
                </Reponse>
                <Reponse title="Évaluation des performances de l'Amplificator" imageSrc="../img/V.png" alt="Image pour dérouler le texte">
                <div className='text-projet'>
                Création d'un protocole d'évaluation :<br/><br/>
                L'objectif principal est de rendre les utilisateurs heureux ! Pour instaurer un protocole, la définition du contexte est importante.<br/><br/>
                Le contexte peut être créé autour de jeux, d'activités plaisantes qui reste à être imaginer !<br/><br/>
                Exemples d'activités :<br/>
                - ateliers de lecture.<br/>
                - discussions autour d'une table.<br/>
                - moments en famille.<br/>
                - excursions pour écouter la nature.<br/>
                - écoute partagée(un groupe de personne qui écoute la même chose).<br/>
                - autres activités imaginé par des étudiants pour de futur projets d’interaction sociale intergénérationnel.<br/><br/>

                Piste de critères de mesure :<br/>

                - Qualité sonore : corréler les avis subjectifs sur le volume sonore à des mesures de décibels (dB) pour établir une plage de volume optimal.<br/>
                - Netteté du son : trouver un critère pour évaluer la clarté du son.<br/>
                - Interactions sociales : nombre de personnes avec qui l'utilisateur a interagi, nature des interactions (conversation ou écoute).<br/>
                - Impact de l'Amplificator : création de liens sociaux.<br/>
                - Mode d'utilisation préféré : amplification ciblée ou générale.<br/>
                - Satisfaction des utilisateurs : plaisir ressenti, confort de l'objet(ex:très confortable ---- pas confortable), encombrement, intention de réutilisation, utilité perçue, plus-value.<br/>
                - On peut s'inspirer des questionnaires du chariot de Snoezelen pour établir le questionnaire.<br/>
                - Réfléchir au type de réponses à recueillir, à qui doit remplir le questionnaire et le plus important comment encourager les interactions sociales et que tout le monde prennent du plaisir.<br/><br/>
                </div>
                </Reponse>
                <Reponse title="Pistes d'amélioration pour le document de reproduction." imageSrc="../img/V.png" alt="Image pour dérouler le texte">
                <div className='text-projet'>
                Durant l'année 2023-2024, nous n'avons pas eu le temps de faire un document de reproduction dédié à la conception de l'Amplificator. 
                Il reste donc la partie "tutoriel de conception" à faire et à tester en prenant des individus qui n'y connaissent pas grand chose et voir si il arrive avec seulement la documentation à faire l'aide auditive. 
                Sur le wiki du fablab, la partie où le travail sur l'électronique est à documenter. (La page personnel de Joël Schlüter pourra peut-être aider pour les explications) <br/><br/>
                </div>
                </Reponse>
                <Reponse title="Ouverture du projet aux contributeurs" imageSrc="../img/V.png" alt="Image pour dérouler le texte">
                <div className='text-projet'>
                Le projet ayant une base matérielle solide, il peut maintenant être ouvert aux contributeurs et autres fablabs. Questions à se poser sur les communication des contributions (où?, comment?, à qui?). 
                Ce qui peut être fait est de s'assurer que les contributions soit compréhensible et implémentable en faisant des tests de reproductions.<br/>
                Comment faire découvrir la poésie du projet aux autres ?<br/>
                </div>
                </Reponse>
                <Reponse title="Pistes d'amélioration pour le déroulement des réunions." imageSrc="../img/V.png" alt="Image pour dérouler le texte">
                <div className='text-projet'>
                Organiser les réunions comme des événements ouverts à tous, en particulier aux personnes âgées, les principales concernées par ce projet et cela permettrait d'obtenir directement leur avis et faire des tests en leur présence.<br/><br/>
                </div>
                </Reponse>
                <div id="Reu">
                Prochaine réunion pour septembre/octobre 2024 (à redéfinir)<br/>
                </div>
                

            </div>
        </section>
    )
}
export default Futur