import React from 'react'
import '../css/stream/Topics.css'
function Topics({chapterNo, chapterName, chapterTopics}) {
    // console.log(chapterTopics);
    return (
        <div className="topicContainer">
            <div className="topic">
                <h1>Chapter {chapterNo} . {chapterName}</h1>
                <ul>
                    {
                        chapterTopics.map((item) => (
                            <li><p>{item}</p></li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Topics
