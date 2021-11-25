import React from 'react'
import '../css/stream/Topics.css'
function Topics({chapterNo, chapterName, chapterTopics}) {
    // console.log(chapterTopics);
    return (
        <div className="topicContainer">
            <div className="topic">
                <h1>Chapter {chapterNo} . {chapterName}</h1>
                <ol type="i">
                    {
                        chapterTopics.map((item) => (
                            <li><h4>{item}</h4></li>
                        ))
                    }
                </ol>
            </div>
        </div>
    )
}

export default Topics
