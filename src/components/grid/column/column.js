import React from 'react'
import PropTypes from 'prop-types'
import { is } from 'ramda'
import classNames from 'classnames'

import './column.scss'

const getColSize = (xs, width, size) => {
  if (size === true || size === '') {
    return xs ? 'col' : `col-${width}`
  }

  if (size === 'auto') {
    return xs ? 'col-auto' : `col-${width}-auto`
  }

  return xs ? `col-${size}` : `col-${width}-${size}`
}

const getColClass = (props, widths, nopad) => {
  let classList = []
  const attributes = props

  widths.forEach((width, i) => {
    const col = attributes[width]
    const xs = !i

    delete attributes[width]

    if (!col && col !== '') {
      return
    }

    if (is(Object, col)) {
      const colSize = xs ? '' : width
      const colClass = getColSize(xs, width, col.size)

      classList = [...classList, classNames({
        [colClass]: col.size || col.size === '',
        [`order-${colSize}-${col.order}`]: col.order || col.order === 0,
        [`offset-${colSize}-${col.offset}`]: col.offset || col.offset === 0,
      })]
    } else {
      const colClass = getColSize(xs, width, col)
      classList = [...classList, colClass]
    }
  })

  if (!classList.length) {
    classList = [...classList, 'col']
  }

  return classNames(
    classList,
    nopad && 'col-nopad',
    props.className || '',
  )
}

const Col = ({
  nopad,
  widths,
  children,
  ...props
}) => (
  <div
    {...props}
    className={getColClass(props, widths, nopad)}
  >
    {children}
  </div>
)

const propStringOrNumber = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
])

const colPropType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.shape({
    size: propStringOrNumber,
    order: propStringOrNumber,
    offset: propStringOrNumber,
  }),
])

Col.propTypes = {
  nopad: PropTypes.bool,
  xs: colPropType,
  sm: colPropType,
  md: colPropType,
  lg: colPropType,
  xl: colPropType,
  widths: PropTypes.arrayOf(
    PropTypes.string,
  ),
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.array,
  ]),
}

Col.defaultProps = {
  nopad: false,
  xs: null,
  sm: null,
  md: null,
  lg: null,
  xl: null,
  widths: [
    'xs', // small devices
    'sm', // mobile devices
    'md', // tablet devices
    'lg', // desktop
    'xl', // large desktop
  ],
}

export default Col
