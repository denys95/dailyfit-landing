import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './row.scss'

const Row = ({
  className,
  gutters,
  form,
  children,
  ...props
}) => (
  <div
    {...props}
    className={classNames(
      form ? 'form-row' : 'row',
      gutters ? false : 'no-gutters',
      className,
    )}
  >
    {children}
  </div>
)

Row.propTypes = {
  className: PropTypes.string,
  gutters: PropTypes.bool,
  form: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.array,
  ]),
}

export default Row
