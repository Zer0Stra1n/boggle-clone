import React from "react";
import './header.scss'

export const Header: React.FC<{}> = React.memo(() => {
    return (
        <header>
            <nav className="navbar navbar-dark bg-primary">
                <div className="container">
                    <span className="navbar-brand mb-0 h1">Boggle</span>
                </div>
            </nav>
        </header>
    )
});