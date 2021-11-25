import React from 'react'
import '../../css/stream/StreamCard.css';
import {Link} from 'react-router-dom';

function StreamCard({stream, link}) {
    return (
        <div className="streamCard">
           <Link to={{pathname : link}}><h1>{stream}</h1></Link>
        </div>
    )
}

export default StreamCard
