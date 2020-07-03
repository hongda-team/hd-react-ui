import React, { Component } from 'react'
import { Button, Modal } from './components'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Button
          type="primary"
          size="large"
          handleClick={() => console.log('111')}
        >
          Primary Button
        </Button>
        <Modal
          title="标题"
          okText="确认"
          cancelText="取消"
          type="alert"
          isOpen={true}
          maskClosable={false}
          onOk={() => {console.log('ok')}}
          onCancel={() => {console.log('cancel')}}
        >
          <p>这是内容</p>
        </Modal>
      </div>
    )
  }
}

export default App
