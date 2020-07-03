import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
    // util.bindMethods(['onOkClick', 'onCancelClick', 'close'], this)
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
  isOpen: true, //是否允许打开弹框
  maskClosable: false,  //点击弹框是否关闭
  className: '',
  type: '', //弹框类型
  onCancel: () => {}, 
  onOk: () => {},
  cancelText: 'Ok',
  okText: 'Cancel',
}

export default Modal
