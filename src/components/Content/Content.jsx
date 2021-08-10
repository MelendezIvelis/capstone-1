import React, { useState, useEffect } from 'react';
import Login from '../Login/Login.jsx';

import './Content.css';

function Content() {

    return (
        <section className="content">
            <Login />
            <a href="/" className="header-logo"><img src="/banker.jpg" height="150px" width="75%" float="right"  /></a>
        </section>
    )
}

export default Content;