
import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const Test = (props) => {
    const [data, setData] = useState('No result');

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