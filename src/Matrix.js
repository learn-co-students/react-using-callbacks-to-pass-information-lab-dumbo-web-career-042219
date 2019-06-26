import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: null
    }
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} handleColor={this.handleClick} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  handleSelectorColor = (newColor) => {
    return this.setState({
      color: newColor
    }, () => console.log(this.state.color))
  }

  handleClick = () => {
    return this.state.color
  }

  render() {
    return (
      <div id="app">
        <ColorSelector handleSelectorClick={this.handleSelectorColor} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
