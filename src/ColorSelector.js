import React, { Component } from 'react';

export default class ColorSelector extends Component {
  


  makeColorSwatches = () => (
    
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => { // console.log(this.props)
      return <div key={idx} className="color-swatch" onClick={() => this.props.selector(str)} style={{backgroundColor: str}}/>
    })
  )
  
  render() {

    // console.log(this.props.selector)

    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }
  
}
