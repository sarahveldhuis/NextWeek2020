import React from 'react';

//FC: function Compoent

interface HeaderProps {
    // title?: string;  //não obrigatória
    title: string;
}

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    );
}

export default Header;