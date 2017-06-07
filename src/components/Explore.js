import React, { Component } from 'react'
import PropTypes from 'prop-types'

const GITHUB_REPO = 'https://github.com/reactjs/redux'

export default class Explore extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onLoadTokenClick: PropTypes.func.isRequired,
    onDeleteTokenClick: PropTypes.func.isRequired,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setInputValue(nextProps.value)
    }
  }

  getInputValue = () => {
    return this.refs.input.value
  }

  setInputValue = (val) => {
    // Generally mutating DOM is a bad idea in React components,
    // but doing this for a single uncontrolled field is less fuss
    // than making it controlled and maintaining a state for it.
    this.refs.input.value = val
  }

  handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      this.handleGoClick()
    }
  }

  handleGoClick = () => {
    this.props.onChange(this.getInputValue())
  }

  handleLoginClick = () => {
    this.props.onChange(this.getInputValue())
  }

  render() {
    const { onLoadTokenClick, onDeleteTokenClick } = this.props
    return (
      <div>
        <p>Type a username or repo full name and hit 'Go':</p>
        <input size="45"
               ref="input"
               defaultValue={this.props.value}
               onKeyUp={this.handleKeyUp} />
        <button onClick={this.handleGoClick}>
          Go!
        </button>
        <button onClick={onLoadTokenClick}>
          Login!
        </button>
        <button onClick={onDeleteTokenClick}>
          Exit!
        </button>
        <p>
          Code on <a href={GITHUB_REPO} target="_blank" rel="noopener noreferrer">Github</a>.
        </p>
        <p>
          Move the DevTools with Ctrl+W or hide them with Ctrl+H.
        </p>
      </div>
    )
  }
}