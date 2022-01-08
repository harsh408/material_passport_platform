import React from "react";
import styled from "styled-components";

class PricePerSqFeet extends React.Component {
  render() {
    return (
      <div className="pricing">
          <br></br>
        <div className="pricing-slider center-content">
          <label className="form-slider">
            <span>Choose a range below (Rs/Sq Ft)</span>
            <Range>
                <span>0</span>
                <span>xxxxxx</span>
            </Range>            
            <input type="range" min="1" max="100"  class="slider" />
            <br></br>
            <button>Apply</button>
          </label>
        </div>
      </div>
    );
  }
}

export default PricePerSqFeet;

const Range = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    flex-wrap:wrap;
`
