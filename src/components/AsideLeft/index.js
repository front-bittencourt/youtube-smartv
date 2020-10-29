import React, { useState, useEffect } from 'react'

import './styles.scss'
import logo from '../../assets/logo.png';

function AsideLeft() {

    return (
        <>
        <div className="AsideLeft">
            <div className="AsideLeft__logo">
                <img src={logo} />
            </div>
            <ul className="AsideLeft__menu">
                <li className="AsideLeft__menu-item">
                    <input type="text" placeholder="Pesquisar"/>
                </li>
                <li className="AsideLeft__menu-item">
                    <a href="www.google.com.br">Home</a>
                </li>
                <li className="AsideLeft__menu-item">
                    <span>Favoritos</span>
                </li>
            </ul>
        </div>
        </>
    );
  }
  
  export default AsideLeft;
  