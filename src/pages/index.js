import React from 'react'

import {
  Layout,
  SEO,
  Section,
  Container,
  Row,
  Col,
} from '../components'

import '../assets/styles/main.scss'

import exercisesImg from '../assets/images/screenshots/exercises.png'
import setsImg from '../assets/images/screenshots/sets.png'
import templateImg from '../assets/images/screenshots/template.png'
import calendarImg from '../assets/images/screenshots/calendar.png'

const appSreenshotsList = [{
  label: 'Exercises',
  source: exercisesImg,
}, {
  label: 'Sets',
  source: setsImg,
}, {
  label: 'Template',
  source: templateImg,
}, {
  label: 'Calendar',
  source: calendarImg,
}]

const IndexPage = () => (
  <Layout>
    <SEO title="DailyFit" />
    <Section className="screenshots">
      <Container>
        <Row>
          <Col>
            <h2
              className="heading section-title"
            >
              Screenshots
            </h2>
            <p className="section-description">
              List your app features and all the details
            </p>
          </Col>
        </Row>
        {
          appSreenshotsList && appSreenshotsList.length ? (
            <Row>
              {
                appSreenshotsList.map(item => (
                  <Col
                    md={3}
                    key={item.label}
                  >
                    <div className="app-screen">
                      <img
                        src={item.source}
                        alt={item.label}
                      />
                    </div>
                  </Col>
                ))
              }
            </Row>
          ) : ''
        }
      </Container>
    </Section>
  </Layout>
)

export default IndexPage
