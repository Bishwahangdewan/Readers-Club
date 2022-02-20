import React from 'react';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import Profile from '../../assets/profiles/profile.jpg';

import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div className="flex justify-between">
            <div>
                <Logo />
            </div>

            <nav className="flex">
                <Link className="active block mr-3 px-4 py-2 rounded" to="/">Home</Link>
                <Link className="block px-4 py-2 rounded" to="/books">Books</Link>
            </nav>

            <div className="h-10 w-10">
                <img src={Profile} alt="profile" className="w-full h-full rounded-full" />
            </div>
        </div>
    )
}

export default Header;