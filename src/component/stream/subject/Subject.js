import React, {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom';
import SubjectsHeader from '../subject/SubjectsHeader';
import {bcom1Subjects, bcom1__1STAT, bcom1__2FINAC, bcom1__3BUSLAW, bcom1__4BUSORG, bcom1__5ENGCOM, bcom1__6ENGAECC, bcom1__7HINDI, bcom1__8ESTUD} from '../../../contentApi/bcom/1year';
import {bcom2Subjects, bcom2__1INTAX, bcom2__2CORAC, bcom2__3COSTAC, bcom2__4COMLAW, bcom2__5ENGCOM, bcom2__6HINDI, bcom2__7COMAPP, bcom2__8ECOM} from '../../../contentApi/bcom/2year';
import {bcom3Subjects, bcom3__1GST, bcom3__2MAC, bcom3__3FMA, bcom3__4ENTRE, bcom3__5INTER, bcom3__6PER, bcom3__7INDI, bcom3__8EOH, bcom3__9MARK, bcom3__10MICRO} from '../../../contentApi/bcom/3year';
import '../../css/stream/Subject.css';
import Topic from '../Topics';
import ChooseSubject from '../ChooseSubject';
import Disclaimer from '../../home/Disclamer';

const fetchSubjectTopic = (sbj) => {
    switch (sbj) {

        // 1 year 
        case "bcom1__1STAT":
            return bcom1__1STAT;
        case "bcom1__2FINAC":
            return bcom1__2FINAC;
        case "bcom1__3BUSLAW":
            return bcom1__3BUSLAW;
        case "bcom1__4BUSORG":
            return bcom1__4BUSORG;
        case "bcom1__5ENGCOM":
            return bcom1__5ENGCOM;
        case "bcom1__1STAT":
            return bcom1__1STAT;
        case "bcom1__6ENGAECC":
            return bcom1__6ENGAECC;
        case "bcom1__7HINDI":
            return bcom1__7HINDI;
        case "bcom1__8ESTUD":
            return bcom1__8ESTUD;



        // 2 year
        case "bcom2__1INTAX":
            return bcom2__1INTAX;
        case "bcom2__2CORAC":
            return bcom2__2CORAC;
        case "bcom2__3COSTAC":
            return bcom2__3COSTAC;
        case "bcom2__4COMLAW":
            return bcom2__4COMLAW;
        case "bcom2__5ENGCOM":
            return bcom2__5ENGCOM;
        case "bcom2__6HINDI":
            return bcom2__6HINDI;
        case "bcom2__7COMAPP":
            return bcom2__7COMAPP;
        case "bcom2__8ECOM":
            return bcom2__8ECOM;



        // 3 year 
        case "bcom3__1GST":
            return bcom3__1GST;
        case "bcom3__2MAC":
            return bcom3__2MAC;
        case "bcom3__1GST":
            return bcom3__1GST;
        case "bcom3__3FMA":
            return bcom3__3FMA;
        case "bcom3__4ENTRE":
            return bcom3__4ENTRE;
        case "bcom3__5INTER":
            return bcom3__5INTER;
        case "bcom3__6PER":
            return bcom3__6PER;
        case "bcom3__7INDI":
            return bcom3__7INDI;
        case "bcom3__8EOH":
            return bcom3__8EOH; 
        case "bcom3__8EOH":
            return bcom3__9MARK; 
        case "bcom3__8EOH":
            return bcom3__10MICRO; 
            

        default:
            break;
    }
}


function Subject() {
    
    const initialData = null;

    const [data, setData] = useState(initialData);
    const [subjects, setSubjects] = useState([]);
    const [subjectName, setSubjectName] = useState("");
    const location = useLocation();

    // console.log(location);
    // console.log(location.search);


    useEffect(() => {

        if(location.search == "?1year"){
            setSubjects(bcom1Subjects);
        }
        else if(location.search == "?2year"){
            setSubjects(bcom2Subjects);
        }
        else if(location.search == "?3year"){
            setSubjects(bcom3Subjects);
        }

    }, [])

    const renderSubjectTopic = (sbjId, sbjName) =>{
        console.log(sbjId);

        const getSub = fetchSubjectTopic(sbjId);
        
        setSubjectName(sbjName);
        setData(getSub);
    }

    return (
        <div>
            <div className="subjectHeader">
                {
                    subjects.map((item) => (
                        <SubjectsHeader func={renderSubjectTopic} subject={item}/>
                    ))
                }
            </div>
            {   
                (!data) ? <><ChooseSubject/> <Disclaimer/> </>
                :
                <>
                    <h1 style={{textAlign : 'center', color : 'purple'}}>{subjectName}</h1>
                    {
                        data.map((item) => (
                                <Topic chapterNo={item.chapterNo} chapterName={item.chapterName} chapterTopics={item.chapterTopics}/>
                           
                        ))
                    }
                </>
            }

        </div>
    )
}

export default Subject
