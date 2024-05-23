import React from 'react';

function Logo(props){
    return(
        <a href={props.href}>
            <img src={props.src} alt={props.alt} id={props.id}/>
        </a>
    )
}
export default Logo;