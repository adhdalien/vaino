import { Link } from 'gatsby'
import React from 'react'
import { container, heading, navLinks, navLinkItem, navLinkText } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    return (
        <div className={container}>
            <header>
                <h1>Vaino</h1>
            </header>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link className={navLinkText} to="/">Home</Link></li>
                    <li className={navLinkItem}><Link className={navLinkText} to="/about">About</Link></li>
                    <li className={navLinkItem}><Link className={navLinkText} to="/say-hello">Greetings</Link></li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout