import React, { Component } from 'react'
import { Button, Modal } from './components'

class App extends Component {
  constructor(props) {
    super(props)
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
      </div>
    )
  }
}

export default App
