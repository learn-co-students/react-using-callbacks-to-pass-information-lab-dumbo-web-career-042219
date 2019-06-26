import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super();
        this.state = {
          selectedColor: "#F00",
                };
}

  changeMyColor = (color) => {
      this.setState({
          selectedColor: color
          })
    }

  thisIsMyColor = () => (this.state.selectedColor)
  

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} thisIsMyColor={this.thisIsMyColor()}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector changeMyColor={this.changeMyColor} />
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
