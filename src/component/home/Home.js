import React from 'react';
import '../css/home/Home.css'
import StreamCard from '../stream/card/StreamCard';
import Disclamer from './Disclamer';



function Home() {
    return (
        <div className="container">
            <div className="homeBanner">
                <div className="img"></div>
                <h1>GET MOST IMPORTANT TOPIC FOR EXAMS</h1>
                <h2>Let's Learn Something</h2>
            </div>

            <div className="homeInfo">
                <StreamCard link="/stream/bcom" stream="BCOM"/>
                {/* <StreamCard link="/stream/bse" stream="BSE"/>
                <StreamCard link="/stream/ba" stream="BA"/> */}
            </div>

            <Disclamer/>
        </div>
    )
}

export default Home
