import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import classNames from 'classnames'

import './button.scss'

const Button = ({
  color,
  block,
  active,
  outline,
  disabled,
  innerRef,
  type,
  size,
  uppercase,
  transparent,
  href,
  className,
  link,
  prefetch,
  onClick,
  children,
  close,
  ...props
}) => {
  const Tag = (href || link) ? 'a' : 'button';

  const tag = (
    <Tag
      {...props}
      className={
        classNames(
          className,
          'btn',
          `btn${outline ? '-outline' : ''}-${color || 'primary'}`,
          size && `btn-${size}`,
          block && 'btn-block',
          disabled && 'disabled',
          active && 'active',
          uppercase && 'upper',
          transparent && 'btn-transparent',
        )
      }
      type={type}
      href={href}
      ref={innerRef}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Tag>
  );

  return link ? (
    <Link rel="preconnect" prefetch to={link}>{tag}</Link>
  ) : tag;
};

Button.propTypes = {
  color: PropTypes.string,
  block: PropTypes.bool,
  active: PropTypes.bool,
  outline: PropTypes.bool,
  disabled: PropTypes.bool,
  transparent: PropTypes.bool,
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.string,
  ]),
  size: PropTypes.string,
  href: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  link: PropTypes.string,
  prefetch: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
  close: PropTypes.bool,
  uppercase: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  color: 'primary',
  block: false,
  active: false,
  outline: false,
  disabled: false,
  innerRef: null,
  size: '',
  transparent: false,
  href: null,
  type: 'button',
  className: '',
  link: '',
  prefetch: false,
  close: false,
  uppercase: true,
  onClick: null,
};

export default Button;
