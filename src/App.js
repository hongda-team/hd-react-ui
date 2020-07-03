import React, { Component } from 'react'
import { Button, Modal } from './components'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
    this.openModal = this.openModal.bind(this)
  }
  openModal() {
    Modal.alert({
      title: 'Demo',
      content: 'HelloWorld',
      okText: '确认',
      cancelText: '取消',
    })
  }
  render() {
    return (
      <div className="app">
        <Button type="primary" size="large" handleClick={this.openModal}>
          打开弹窗
        </Button>
        {/* <Modal
          title="标题"
          okText="确认"
          cancelText="取消"
          type="alert"
          isOpen={false}
          maskClosable={false}
          onOk={() => {
            console.log('ok')
          }}
          onCancel={() => {
            console.log('cancel')
          }}
        >
          <p>这是内容</p>
        </Modal> */}
      </div>
    )
  }
}

export default App
