
import { Alert, AlertTitle } from '@mui/material';
import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const Scanner = () => {
    const [data, setData] = useState('No result');
    const [display, setDisplay] = useState(false);
    const [displayCamera, setDisplayCamera] = useState(true);
    const user = localStorage.getItem("name");
    const id = localStorage.getItem("id");


    async function register(url) {
        try {
            const result = await fetch(url, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({
                    "name": user,
                    "id": id
                })
            });
            const res = await result.json();
            setData(res.message);
            setDisplay(true)
            setDisplayCamera(false)
            console.log(res.message);
        } catch (err) {
            return console.log(err);
        }
    }

    const style = (display) ? { display: "initial" } : { display: "none" };
    const styleCamera = (displayCamera) ? { display: "initial" } : { display: "none" };

    return (
        <div className='content has-text-centered' >
            <Alert severity='success' style={style}>
                <AlertTitle>Success</AlertTitle>
                <strong>Successfully registered</strong>
            </Alert>
            <div style={styleCamera}>
                <QrReader className="is-rounded"
                    constraints={{
                        facingMode: "environment"
                    }}
                    onResult={(result, error) => {
                        if (!!result) {
                            setData(result?.text);
                            register(result?.text);
                        }
                        if (!!error) {
                            console.info(error);
                        }
                    }}

                    style={{ width: '100%', height: "100%", borderRadius: "50%" }}
                />
                <p>{data}</p>
            </div>
        </div>
    );
};

export default Scanner;
