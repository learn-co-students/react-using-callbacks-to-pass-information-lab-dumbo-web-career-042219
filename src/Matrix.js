import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()

    this.state = {
      color: null
    }
  }

  getColor = (event) => {
    this.setState({
      color: event.target.style.backgroundColor
    }) 
  }

  useColor = () => {
    return this.state.color
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} useColor={this.useColor} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector getColor={this.getColor}/>
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
