import React from 'react'
import '../../css/stream/YearCard.css';
import {Link} from 'react-router-dom';


function YearCard(props) {
    // console.log(props);
    return (
        <div className="yearCard">
            <Link to={{pathname : "subject", search : props.yearLink}}>
                <h1>{props.year} Year</h1>
            </Link>
        </div>
    )
}

export default YearCard
