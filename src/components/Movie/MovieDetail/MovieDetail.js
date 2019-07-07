import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileImage } from '@fortawesome/free-regular-svg-icons'

const MovieDetail = props => {
    const {
        data: {
            Title,
            Actors,
            Language,
            Plot,
            Poster
        },
    } = props;

    console.log('detail', props);

    return (
        <>
            {Poster !== 'N/A' 
                ? <img src={Poster} alt={Title} /> 
                : <div>
                    <FontAwesomeIcon icon={faFileImage} style={{fontSize: '100px'}} />
                    <span>Image unnavailable :(</span> 
                </div>
            }
            <h2>{Title} </h2>
            <p>{Actors}</p>
            <p>{Language}</p>
            <p>{Plot}</p>
        </>
    );
}

export default MovieDetail;