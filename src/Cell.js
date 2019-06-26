import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

    iveBeenClicked = () => {
      const newColor = this.props.thisIsMyColor
        this.setState({
          color: this.props.thisIsMyColor
    })
  }
  
  render() {
    return (
      <div className="cell" style={ {backgroundColor: this.state.color} } onClick={this.iveBeenClicked} >
      </div>
    )
  }
  
}
