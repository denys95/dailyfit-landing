import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './section.scss'

const Section = ({
  className,
  children,
  ...props
}) => (
  <section
    {...props}
    className={classNames(
      'section',
      className,
    )}
  >
    {children}
  </section>
)

Section.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

Section.defaultProps = {
  className: '',
  children: null,
}

export default Section
