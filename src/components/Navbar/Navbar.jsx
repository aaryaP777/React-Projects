import React from "react";

export const Navbar = () => {
    return (
    <nav>
        <a href="/">Portfolio</a>
        <div>
            <ul>
                <li><a href="#about">About Me</a></li>
                <li><a href="#skills">My Skills</a></li>
                <li><a href="#proglangs">Programming Languages</a></li>
                <li><a href="#projects">Projects</a></li>
            </ul>
        </div>
    </nav>
    );
};