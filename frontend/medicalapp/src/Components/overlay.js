import React, { Component } from 'react'

export default class overlay extends Component {
  render() {
    return (
        <div className="overlay" style={{display:this.props.display}}></div>
    )
  }
}
