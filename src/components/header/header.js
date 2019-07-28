import React from 'react'

import {
  Container,
  Row,
  Col,
  Section,
  Navbar,
  Input,
  Button,
} from '..'

import './header.scss'

import GooglePlay from '../../assets/images/google-play.svg'
import AppStore from '../../assets/images/app-store.svg'

import Hand from '../../assets/images/hand.png'

const headerText = 'Make sport as your lifestyle'
const headerDescription = `Download DailyFit mobile app and prepare 
to have an awesome time collaboting with your team`

const isEarlyAccess = false;

const Header = () => (
  <header className="header">
    <Navbar />
    <Section className="hero">
      <Container>
        <Row>
          <Col md={7}>
            <div className="hero-text">
              <h1 className="heading hero-title">
                {headerText}
              </h1>
              <h3 className="heading hero-description">
                {headerDescription}
              </h3>
            </div>
            {
              isEarlyAccess ? (
                <div className="hero-input">
                  <div className="input-group">
                    <Input
                      type="text"
                      placeholder="Enter your Email Address"
                    />
                    <Button>Sign up for beta</Button>
                  </div>
                </div>
              ) : (
                <div className="hero-buttons">
                  <a
                    href="https://play.google.com/store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="download-button"
                  >
                    <img
                      src={GooglePlay}
                      alt="Google Play"
                    />
                  </a>
                  <a
                    href="https://www.apple.com/ios/app-store/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="download-button"
                  >
                    <img
                      src={AppStore}
                      alt="App Store"
                    />
                  </a>
                </div>
              )
            }
          </Col>
          <Col md={5}>
            <div className="hero-hand">
              <img
                src={Hand}
                alt="App"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  </header>
)

export default Header
