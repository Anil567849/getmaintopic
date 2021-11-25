import React from 'react'

function ChooseSubject() {

    const css = {
            display: 'flex',
            flex: '0.3',
            height: '10rem',
            padding: '20px',
            transition: "0.3s",
            justifyContent: 'center',
            alignItems: 'center',
            marginTop : "2rem",
            border : '1px solid gray',
            borderRadius: '40px',
            boxShadow:'0 10px 8px 10px rgba(0, 0, 0, 0.2)',
            flex : '.90'
    }

    return (
        <div style={{width : '100vw', display : 'flex', justifyContent:"center"}}>
            <div className="chooseSubject" style={css}>
                <h2 style={{textAlign : 'center'}}>Select Subject Above</h2>
            </div>
        </div>
    )
}

export default ChooseSubject
