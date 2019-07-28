import React from 'react'

import {
  Container,
  Row,
  Col,
} from '..'

import './footer.scss'

const date = new Date();
const year = date.getFullYear();

const footerNavItems = [{
  title: 'About',
  link: '#',
}, {
  title: 'Terms of Use',
  link: '#',
}, {
  title: 'Privacy Policy',
  link: '#',
}, {
  title: 'Mobile App',
  link: '#',
}]

const Footer = () => (
  <footer className="main-footer">
    <Container>
      <Row>
        <Col md={6}>
          <div className="footer-copyright">
            DayliFit &copy; {year}. All rights reserved
          </div>
        </Col>
        {
          footerNavItems && footerNavItems.length ? (
            <Col md={6}>
              <nav className="footer-nav">
                <ul className="footer-nav-list">
                  {
                    footerNavItems.map(item => (
                      <li
                        className="footer-nav-item"
                        key={item.title}
                      >
                        <a
                          href={item.link}
                          className="footer-nav-link"
                        >
                          {item.title}
                        </a>
                      </li>
                    ))
                  }
                </ul>
              </nav>
            </Col>
          ) : ''
        }
      </Row>
    </Container>
  </footer>
)

export default Footer
