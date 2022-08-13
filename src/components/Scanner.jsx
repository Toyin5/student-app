import React, { useState } from 'react'
import { FaStepBackward } from 'react-icons/fa';
import Reader from 'react-qr-scanner';
import { Link } from 'react-router-dom';
// import { Link, unstable_HistoryRouter } from "react-router-dom"

function Scanner() {
    const [load, setLoad] = useState("");
    const [scan, setScan] = useState("");
    const [error, setError] = useState("");


    function handleLoad() {
        setLoad("Loaded")
        // history.back()
    }

    function handleScan(e) {
        setScan("Scanned" + e)
    }

    function handleError() {
        setError("Error")
    }


    const cameraStyle = {
        "height": "250px",
        "width": "250px",
    }
    return (
        <>
            <span className="icon is-white">
                <Link to='/'><FaStepBackward /></Link>
            </span>
            <div className='content has-text-centered'>
                <Reader resolution={1080} style={cameraStyle} onLoad={handleLoad} onScan={handleScan} onError={handleError} />
                <h2>{load}</h2>
                <h2>{scan}</h2>
                <h2>{error}</h2>
            </div>
        </>
    )
}

export default Scanner