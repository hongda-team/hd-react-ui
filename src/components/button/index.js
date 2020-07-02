import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

const Button = ({ text }) => <button className='button'>Button组件{text}</button>

Button.propTypes = {
  text: PropTypes.any
}

export default Button
