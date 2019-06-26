import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedColor: '#fff'
    }
  }


  changeColor = (string) => {
    console.log('clicked?', this.state.selectedColor)

    return this.setState({
      selectedColor: string
    }, () => console.log(this.state.selectedColor) )
  
  }

  handleClick = () => {
    return this.state.selectedColor
  }





  


  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} handleColor={this.handleClick} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    console.log(this.state.selectedColor)
    return (
      <div id="app">
        <ColorSelector selector={this.changeColor} />
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
