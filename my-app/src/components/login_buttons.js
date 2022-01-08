import React, {Component} from 'react'
import styled from 'styled-components';

class Buttons extends Component{
    render(){
        return(
            <React.Fragment className="padding">
                <button className='login-button'>Login</button>
            </React.Fragment>
        )
    }
}
export const StyledButton = styled.button`
  border:none;
  height:20px;
  border-radius:3px;
  margin-top:10px;

`
export default Buttons;