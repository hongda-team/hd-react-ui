import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const modalOpenClass = 'hd-modal-open'

const toggleBodyClass = (isOpen) => {
  const body = document.body
  if (isOpen) {
    body.classList.add(modalOpenClass)
  } else {
    body.classList.remove(modalOpenClass)
  }
}

class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: props.isOpen || false,
    }
    toggleBodyClass(props.isOpen)
    this.onOkClick = this.onOkClick.bind(this)
    this.onCancelClick = this.onCancelClick.bind(this)
    this.close = this.close.bind(this)
  }
  close() {
    this.setState({
      isOpen: false,
    })
    toggleBodyClass(false)
  }
  onOkClick() {
    this.props.onOk()
    this.close()
  }
  onCancelClick() {
    this.props.onCancel()
    this.close()
  }
  // componentWillReceiveProps(nextprops) {
  //   if ('isOpen' in nextprops) {
  //     this.setState({
  //       isOpen: nextprops.isOpen,
  //     })
  //   }
  // }
  render() {
    const {
      title,
      children,
      className,
      okText,
      cancelText,
      maskClosable,
      type,
    } = this.props
    return (
      <div
        className={`hd-modal ${className}`}
        onClick={maskClosable ? this.close : () => {}}
      >
        <div className="hd-modal-body">
          <div className={`hd-modal-title ${type}`}>{title}</div>
          <div className="hd-modal-content">{children}</div>
          <div className="hd-modal-footer">
            <button className="hd-ok-btn" onClick={this.onOkClick}>
              {okText}
            </button>
            <button className="hd-cancel-btn" onClick={this.onCancelClick}>
              {cancelText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  maskClosable: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(['alert', 'confirm', 'error', 'success']),
  onCancel: PropTypes.func,
  onOk: PropTypes.func,
  cancleText: PropTypes.string,
  okText: PropTypes.string,
}

Modal.defaultProps = {
  className: '',
  type: '',
  maskClosable: true,
  onCancel: () => {},
  onOk: () => {},
  cancelText: 'Ok',
  okText: 'Cancel',
}

export default Modal
