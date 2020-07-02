import React, { Component } from 'react'
import { Button } from './components'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Button type='primary' size='large' handleClick={() => console.log(111)}>Primary Button</Button>
        <Button size='small' disabled handleClick={() => console.log(222)}>Small Button</Button>
        <Button type='dashed' size='middle'>Dashed Button</Button>
        <Button type='text' size='large'>Text Button</Button>
        <Button type='link' size='small'>Link Button</Button>
        <Button>默认按钮</Button>
      </div>
    )
  }
}

export default App

