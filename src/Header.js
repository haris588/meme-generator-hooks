import React from 'react';
import trollface from './trollface.png';

function Header() {
    return (
        <header>
        <img src={trollface} alt="trollface" />
        <h1>Meme Generator</h1>
        </header>
    )
}

export default Header;