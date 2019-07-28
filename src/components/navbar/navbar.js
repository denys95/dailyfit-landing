import React from 'react'

import { Container } from '..'

import './navbar.scss'

const navItems = [{
  title: 'Home',
  link: '#'
}, {
  title: 'Features',
  link: '#'
}, {
  title: 'About',
  link: '#'
}, {
  title: 'Blog',
  link: '#'
}, {
  title: 'Contact',
  link: '#'
}]

const Navbar = () => (
  <div className="navbar-wrapper">
    <Container>
      <div className="logo">
        Daily
        <span
          style={{
            color: '#2bd195',
          }}
        >
          Fit
        </span>
      </div>
      <nav className="navbar">
        <button
          type="button"
          className="navbar-toggle"
        >
          <div className="nav-icon-bar" />
          <div className="nav-icon-bar" />
          <div className="nav-icon-bar" />
        </button>
        <ul className="navbar-nav">
          {navItems.map(({ title, link }) => (
            <li className="navbar-item" key={title}>
              <a className="navbar-link" href={link}>
                {title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  </div>
)

export default Navbar
