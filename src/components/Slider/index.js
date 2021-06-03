import React, { Component } from 'react';
import Slider from 'react-rangeslider';
import './style.scss';

class Float extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: 250000
    }
  }

  handleChange = (value) => {
    this.setState({
      value: value
    })
  }

  handleformat = () => (
      <>
          <div className="slider_tooltip_price">
                ${this.state.value}
          </div>
          <div className="slider_tooltip_text">
            Estimate Grand Total
          </div>
      </>
  )

  render () {
    const { value } = this.state
    return (
      <div className='slider css-8806o7-WaterFall'>
        <Slider
          min={0}
          max={1000000}
          step={0.5}
          value={value}
          onChange={this.handleChange}
          format={this.handleformat}
        />
        <ul class="css-wrrl2p-WaterFall">
            <li>$0</li>
            <li>$250,000</li>
            <li>$500,000</li>
            <li>$750,000</li>
            <li>$1M+</li>
        </ul>
        <p className="section_title_description">Drag the slider around based on what you think it will cost to repair the property. <br />Move forward based on the estimated fee structure below.</p>
      </div>
    )
  }
}

export default Float;