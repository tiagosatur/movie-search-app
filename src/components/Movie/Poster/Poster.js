import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileImage } from '@fortawesome/free-regular-svg-icons'

const Poster = props => {
    const {Title, Poster} = props;
    return (
        <>
            {
                Poster !== 'N/A' 
                ? <img src={Poster} alt={Title} /> 
                : <div>
                    <FontAwesomeIcon icon={faFileImage} style={{fontSize: '100px'}} />
                    <span>Image unnavailable :(</span> 
                </div>
            }
        </>
    );
}

export default Poster;