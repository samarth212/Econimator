import './header.css'
import React from 'react';


export default function Header(){

    return(
        <nav className="header">
            <a href="/about">About</a>
            <a href="/">Home</a>
            <a href="/create">Create</a>
        </nav>
    )
   

}