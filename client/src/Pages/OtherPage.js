import React from 'react';
import { Link } from 'react-router-dom';

const OtherPage = ()=> {
    return(
        <div>
            <h2>The other page</h2>
            <Link to="/">Go back home</Link>
        </div>
    )
};

export default OtherPage;


