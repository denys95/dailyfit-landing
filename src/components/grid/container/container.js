import React from 'react'
import PropTypes from 'prop-types'

import './container.scss'

const Container = ({
  fluid,
  className,
  children,
  ...props
}) => (
  <div
    {...props}
    className={`${fluid ? 'container-fluid' : 'container'} ${className}`}
  >
    {children}
  </div>
)

Container.propTypes = {
  fluid: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
}

Container.defaultProps = {
  fluid: false,
  className: '',
}

export default Container
