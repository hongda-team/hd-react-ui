import React, { Component } from 'react'
import classnames from 'classnames'
import './index.css'

class Button extends Component {
  render() {
    const {
      children,
      type,
      size,
      disabled,
      handleClick
    } = this.props
    const className = classnames({
      'hd-btn': true,
      'hd-btn-large': size === 'large',
      'hd-btn-small': size === 'small',
      'hd-btn-primary': type === 'primary',
      'hd-btn-dashed': type === 'dashed',
      'hd-btn-text': type === 'text',
      'hd-btn-link': type === 'link'
    })

    return (
      <button className={className} onClick={handleClick} disabled={disabled}>
        {children}
      </button>
    )
  }
}

Button.defauleProps = {
  children: 'Button',
  type: 'primary',
  size: 'middle',
  disabled: false,
  handleClick: () => { return null }
}

export default Button
