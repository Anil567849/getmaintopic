import React from 'react'

function Disclamer() {

    const css = {
        display: "flex",
        flex: "0.3",
        padding: "1rem",
        borderRadius: "40px",
        paddingTop : "0",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        transition: "0.3s",
        justifyContent: "center",
        alignItems: "center",
        flexDirection : 'column'
    }

    return (
        <div style={css}>
            <h4>Disclaimer</h4>
            <small>All the topic which are listed here of any stream is based on research of past question paper.</small>
            <small>This Website is build to give to a quick guide to how to start and how to pick topic which is most important for exams.</small>
            <small>All Students are directed to learn other topic outside of this website as well to get deeper understanding of sujects.</small>
            <small>This is not sure that all question are listed here are 100% appear on current exams.</small>
        </div>
    )
}

export default Disclamer;







