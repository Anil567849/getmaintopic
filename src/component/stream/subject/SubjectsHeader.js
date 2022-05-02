import React from 'react'
import '../../css/stream/SubjectsHeader.css';

function SubjectsHeader({func, subject}) {

    // console.log(subject);
    // console.log(func);

   
    return (
        <div className="subjectBox">
            <h3 onClick={()=>func(subject.subjectId, subject.subjectName)}  className="subjectName">{subject.subjectName}</h3>
        </div>
    )
}

export default SubjectsHeader
