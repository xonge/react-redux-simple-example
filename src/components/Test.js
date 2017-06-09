import React, { Component, PropTypes } from 'react'

export default class Test extends Component {
  render() {
    console.log(this.props)
    const {images} = this.props
    console.log('haahahahahaha')
    console.log(images)
    const img = images.length>1 ? images[1].img : ''
    return (
      <div>
        <input type='text' ref='input' />
        <img src={img} alt=""/>
        <input type='text' ref='input_2' />
        <button onClick={(e) => this.handleClick(e)}>
          Add
        </button>
      </div>
    )
  }

  handleClick(e) {
    const node = this.refs.input
    const node_2 = this.refs.input_2
    let text = node.value.trim()
    const text_2 = node_2.value.trim()
    text = text + text_2
    this.props.onAddClick(text)
    node.value = ''
  }
}

Test.propTypes = {
  onAddClick: PropTypes.func.isRequired
}