
import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const Test = () => {
    const [data, setData] = useState('No result');
    const user = localStorage.getItem("name");
    const id = localStorage.getItem("id")

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
            setData(res.message)
            console.log(res.message);
        } catch (err) {
            return console.log(err);
        }
    }

    return (
        <div className='content has-text-centered'>
            <figure class="image is-256x256">

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
            </figure>
            <p>{data}</p>
        </div>
    );
};

export default Test;
