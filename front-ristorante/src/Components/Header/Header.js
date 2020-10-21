import React from 'react';

export default function Header(){
    return (
    <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
        <h1 className="logo mr-auto">Ristorante NCJ</h1>   
        <nav className="nav-menu d-none d-lg-block">
            <ul>
            <li>Reserva</li>
            <li>Menu</li>
            <li>Inicio de Sesión</li>
            </ul>
        </nav>

        </div>
    </header>

    );


}