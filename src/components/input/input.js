import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './input.scss'

const Input = ({
 type,
 className,
 size,
 autoWidth,
 valid,
 invalid,
 innerRef,
 ...props
}) => (
  <input
    {...props}
    type={type || 'text'}
    ref={innerRef}
    className={
      classNames(
        'ui-input',
        size,
        autoWidth && 'auto-width',
        valid && 'valid',
        invalid && 'invalid',
        className,
      )
    }
  />
)

Input.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
  autoWidth: PropTypes.bool,
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.string,
  ]),
};

Input.defaultProps = {
  type: 'text',
  className: '',
  size: 'default',
  autoWidth: false,
  valid: false,
  invalid: false,
  innerRef: null,
}

export default Input
