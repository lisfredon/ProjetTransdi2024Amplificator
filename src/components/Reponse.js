import React, { useState } from 'react';
import '../style.css';

function Reponse({ title, children, imageSrc }) {
        const [isOpen, setIsOpen] = useState(false);
      
        const toggleAccordion = () => {
          setIsOpen(!isOpen);
        };
      
        return (
          <div>
            <div onClick={toggleAccordion} id="boutonDeroule">
              <h2 id="nomCat">{title}</h2>
              <div id="commentDerouler">
              <img src={imageSrc} id="imageDeroule" alt="Image pour dérouler le texte" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}/>
              </div>
            </div>
            {isOpen && <div>{children}</div>}
          </div>
        );
      }
export default Reponse;