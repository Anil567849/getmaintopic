import React from 'react'
import YearCard from './card/YearCard';
import '../css/stream/Stream.css';
import Disclamer from '../home/Disclamer';

function Stream(props) {
    const path = props.streamName.toLowerCase();
    // console.log(path);   
    return (
        <div className="stream">
            <h1 className="streamName">Welcome to {props.streamName}</h1>
            <div className="yearCardBox">
                {
                    (props.streamName == "BVOC") ? 
                    <>
                        <YearCard year="1"/>
                        <YearCard year="2"/>
                        <YearCard year="3"/>
                        <YearCard year="4"/>
                    </>

                        :
                
                    <>
                        {/* <YearCard year="1" yearLink={"1year"}/> */}
                        <YearCard year="2" yearLink={"2year"}/>
                        <YearCard year="3" yearLink={"3year"}/>
                    </>
                }
            </div>
            <Disclamer/>
        </div>
    )
}

export default Stream
