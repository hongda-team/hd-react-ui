import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Motion, spring, presets } from 'react-motion'
// import util from '../../lib/util'
import './modal.scss'

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
    this.onRest = this.onRest.bind(this)
    // util.bindMethods(['onOkClick', 'onCancelClick', 'close'], this)
  }
  onRest() {
    const { isOpen } = this.state
    if (!isOpen) {
      this.props.onClose()
    }
    this.props.onRest()
  }
  close() {
    this.setState(
      {
        isOpen: false,
      },
      () => this.onRest()
    )
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
  componentWillReceiveProps(nextProps) {
    if ('isOpen' in nextProps) {
      this.setState({
        isOpen: nextProps.isOpen,
      })
    }
  }
  render() {
    const {
      isOpen,
      title,
      children,
      className,
      okText,
      cancelText,
      maskClosable,
      type,
    } = this.props
    return (
      <Motion
        defaultStyle={{
          opacity: 0.8,
          scale: 0.8,
        }}
        style={{
          opacity: spring(isOpen ? 1 : 0, presets.stiff),
          scale: spring(isOpen ? 1 : 0.8, presets.stiff),
        }}
        onRest={this.onRest}
      >
        {({ opacity, scale }) => (
          <div
            className={`hd-modal ${className}`}
            onClick={maskClosable ? this.close : () => {}}
          >
            <div
              className="hd-modal-body"
              style={{
                opacity,
                transform: `translate3d(-50%, -50%, 0) scale(${scale})`,
              }}
            >
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
        )}
      </Motion>
    )
  }
}

Modal.propTypes = {
  maskClosable: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(['alert', 'confirm', 'error', 'success']),
  onCancel: PropTypes.func,
  onOk: PropTypes.func,
  onRest: PropTypes.func,
  cancleText: PropTypes.string,
  okText: PropTypes.string,
}

Modal.defaultProps = {
  isOpen: true, //是否打开弹框
  maskClosable: false, //点击弹框是否关闭
  className: '',
  type: '', //弹框类型
  onCancel: () => {},
  onOk: () => {},
  onRest: () => {},
  cancelText: 'Ok',
  okText: 'Cancel',
}

export default Modal
