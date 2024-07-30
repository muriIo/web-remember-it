import React from 'react';
import { Link } from 'react-router-dom'


export default function NotFound() {
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <button>
                <Link to={'/home'}>Go to Home</Link>
            </button>
        </div>
    );
}
