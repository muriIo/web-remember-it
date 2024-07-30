import React from 'react';
import { Outlet, Link, useNavigate  } from 'react-router-dom'

export default function HomeDemo() {
    const navigate = useNavigate();
    const goToDemoTwo = () => {
        navigate('two');
      };

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={goToDemoTwo}> Go to Two </button>
            <button>
                <Link to={'one'}>Go to One</Link>
            </button>
            <Outlet />
        </div>
    );
}
