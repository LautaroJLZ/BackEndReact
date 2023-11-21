import React from 'react';
import './Error404'
import { Link } from 'react-router-dom';
const Error404 = () => {
    return(
        <div className='min-h-screen flex justify-center items-center'>
            <Link to="/" className='text-5xl bg-anotherGray p-4 rounded-lg hover:text-6xl hover:bg-anotherBlack transition-all'>ERROR 404</Link>
        </div>
    )
}

export { Error404 }